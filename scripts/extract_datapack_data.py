#!/usr/bin/env python3
"""Extract the datapack part (data/**) of Minecraft mod JARs, merging same-path JSON.

Supports nested JARs (NeoForge/Forge JarJar, Fabric JamJar). When two mods ship a
JSON file at the same path, the result is merged instead of one mod winning:

    * objects are merged key by key,
    * arrays are unioned (tags' "values", loot modifiers' "entries", ...),
    * JSON is parsed like Minecraft's Gson, so // and /* */ comments are fine,
    * conflicting scalar values keep the first scanned value (reported in
      _conflicts.txt); use --overwrite to make the last scanned version win.

Non-JSON files (structures, functions, ...) are never merged: the first scanned
version is kept and reported as a conflict.

Examples:
    python extract_datapack_data.py
    python extract_datapack_data.py mods extracted_data
    python extract_datapack_data.py --clean
    python extract_datapack_data.py --overwrite
    python extract_datapack_data.py --list
    python extract_datapack_data.py --pack-format 48

The output keeps each file's datapack path, for example:
    extracted_data/data/examplemod/tags/item/example_tag.json
    extracted_data/data/minecraft/recipe/example_recipe.json
"""

from __future__ import annotations

import argparse
import io
import json
import shutil
import sys
import zipfile
from pathlib import Path, PurePosixPath
from typing import Any, BinaryIO


MAX_NESTED_DEPTH = 8


def datapack_path(name: str) -> PurePosixPath | None:
    """Return a safe datapack path when *name* lives under data/."""
    path = PurePosixPath(name.replace("\\", "/"))
    parts = path.parts
    if (
        len(parts) < 3
        or parts[0] != "data"
        or path.is_absolute()
        or ".." in parts
    ):
        return None
    return path


def strip_json_comments(text: str) -> str:
    """Remove // and /* */ comments outside strings, like Minecraft's lenient Gson."""
    result: list[str] = []
    index = 0
    length = len(text)
    in_string = False
    escaped = False
    while index < length:
        char = text[index]
        if in_string:
            result.append(char)
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            index += 1
            continue
        if char == '"':
            in_string = True
            result.append(char)
            index += 1
            continue
        if char == "/" and index + 1 < length and text[index + 1] == "/":
            index += 2
            while index < length and text[index] not in "\r\n":
                index += 1
            continue
        if char == "/" and index + 1 < length and text[index + 1] == "*":
            index += 2
            while index + 1 < length and not (text[index] == "*" and text[index + 1] == "/"):
                index += 1
            index = min(index + 2, length)
            continue
        result.append(char)
        index += 1
    return "".join(result)


def loads_json(text: str) -> Any:
    """Parse JSON as Minecraft does: strict first, then with comments removed."""
    try:
        return json.loads(text)
    except json.JSONDecodeError as strict_error:
        try:
            return json.loads(strip_json_comments(text))
        except json.JSONDecodeError:
            raise strict_error from None


def canonical(value: Any) -> str:
    """Stable text form used to deduplicate merged array items."""
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def short_repr(value: Any, limit: int = 120) -> str:
    text = json.dumps(value, ensure_ascii=False)
    return text if len(text) <= limit else text[:limit] + "..."


def numbers_equal(first: Any, second: Any) -> bool:
    if isinstance(first, bool) or isinstance(second, bool):
        return False
    return isinstance(first, (int, float)) and isinstance(second, (int, float)) and first == second


def merge_json(old: Any, new: Any, pointer: str = "") -> tuple[Any, list[str]]:
    """Merge *new* into *old* and return (merged value, human readable conflicts)."""
    if isinstance(old, dict) and isinstance(new, dict):
        merged = dict(old)
        conflicts: list[str] = []
        for key, value in new.items():
            child_pointer = f"{pointer}/{key}"
            if key in merged:
                merged[key], child_conflicts = merge_json(merged[key], value, child_pointer)
                conflicts.extend(child_conflicts)
            else:
                merged[key] = value
        return merged, conflicts

    if isinstance(old, list) and isinstance(new, list):
        merged = list(old)
        seen = {canonical(item) for item in merged}
        for item in new:
            key = canonical(item)
            if key not in seen:
                seen.add(key)
                merged.append(item)
        return merged, []

    if type(old) is type(new) and old == new:
        return old, []
    if numbers_equal(old, new):
        return old, []

    location = pointer or "/"
    conflict = f"{location}: {short_repr(old)} != {short_repr(new)}（保留先扫描到的值）"
    return old, [conflict]


class Extractor:
    def __init__(self, output_dir: Path, overwrite: bool) -> None:
        self.output_dir = output_dir
        self.overwrite = overwrite
        self.written = 0
        self.overwritten = 0
        self.changed_paths: set[str] = set()
        self.skipped = 0
        self.scalar_conflicts = 0
        self.invalid_json = 0
        self.invalid_archives = 0
        self.too_deep = 0
        self.nested_jars = 0
        self.failed_writes = 0
        self.sources: dict[str, list[str]] = {}
        self.merged_paths: set[str] = set()
        self.seen: set[str] = set()
        self.created_dirs: set[Path] = set()
        self.conflict_report: list[str] = []

    def ensure_parent(self, parent: Path) -> None:
        if parent not in self.created_dirs:
            parent.mkdir(parents=True, exist_ok=True)
            self.created_dirs.add(parent)

    def save(self, path: PurePosixPath, data: bytes, source: str) -> None:
        path_text = path.as_posix()
        self.sources.setdefault(path_text, []).append(source)
        destination = self.output_dir.joinpath(*path.parts)

        try:
            self.ensure_parent(destination.parent)
            if path_text not in self.seen:
                # First occurrence in this run: always write, even if a stale
                # file from an earlier run is still there.
                self.seen.add(path_text)
                destination.write_bytes(data)
                self.written += 1
                return
            if self.overwrite:
                destination.write_bytes(data)
                self.overwritten += 1
                return
            if path.suffix.lower() == ".json":
                self.merge_json_file(destination, path_text, data, source)
                return
        except OSError as error:
            self.failed_writes += 1
            print(f"[跳过] 无法写入 {path_text}: {error}", file=sys.stderr)
            return

        self.skipped += 1
        self.conflict_report.append(
            f"{path_text}  <- {source}: 非 JSON 文件（{path.suffix or '无扩展名'}），保留先扫描到的版本"
        )

    def merge_json_file(self, destination: Path, path_text: str, data: bytes, source: str) -> None:
        try:
            old = loads_json(destination.read_text(encoding="utf-8-sig"))
            new = loads_json(data.decode("utf-8-sig"))
        except (OSError, UnicodeDecodeError, json.JSONDecodeError) as error:
            self.invalid_json += 1
            self.conflict_report.append(
                f"{path_text}  <- {source}: JSON 无法解析，保留先扫描到的版本（{error}）"
            )
            return

        merged, conflicts = merge_json(old, new)
        self.merged_paths.add(path_text)

        if conflicts:
            self.scalar_conflicts += len(conflicts)
            for conflict in conflicts:
                self.conflict_report.append(f"{path_text}  <- {source}: {conflict}")

        if merged != old:
            self.changed_paths.add(path_text)
            destination.write_text(
                json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
            )

    def scan_archive(self, stream: BinaryIO, source: str, depth: int = 0) -> None:
        try:
            with zipfile.ZipFile(stream) as archive:
                for info in archive.infolist():
                    if info.is_dir():
                        continue
                    name = info.filename.replace("\\", "/")
                    resource_path = datapack_path(name)
                    if resource_path is not None:
                        self.save(resource_path, archive.read(info), source)
                    elif name.lower().endswith(".jar"):
                        if depth >= MAX_NESTED_DEPTH:
                            self.too_deep += 1
                            print(f"[跳过] 嵌套层级过深: {source}!/{name}", file=sys.stderr)
                            continue
                        self.nested_jars += 1
                        nested_source = f"{source}!/{name}"
                        self.scan_archive(io.BytesIO(archive.read(info)), nested_source, depth + 1)
        except (zipfile.BadZipFile, EOFError, OSError, RuntimeError) as error:
            self.invalid_archives += 1
            print(f"[跳过] 无法读取 JAR: {source} ({error})", file=sys.stderr)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="提取 mods 中（含多层 jar-in-jar）的 data 目录，同路径 JSON 自动合并。"
    )
    parser.add_argument("mods_dir", nargs="?", type=Path, default=Path("mods"), help="mod JAR 所在目录")
    parser.add_argument(
        "output_dir", nargs="?", type=Path, default=Path("extracted_data"), help="导出目录（内部生成 data/）"
    )
    parser.add_argument("--overwrite", action="store_true", help="同路径文件以之后扫描到的版本覆盖，不做 JSON 合并")
    parser.add_argument("--clean", action="store_true", help="导出前删除整个输出目录")
    parser.add_argument("--list", action="store_true", help="列出每个数据包文件及其所有来源 JAR")
    parser.add_argument(
        "--pack-format",
        type=int,
        metavar="N",
        help="额外生成 pack.mcmeta 并指定 data pack 版本（1.21.1 为 48，1.21.4 为 57）",
    )
    parser.add_argument("--description", default=None, help="pack.mcmeta 的 description，需配合 --pack-format")
    args = parser.parse_args()

    if args.description is not None and args.pack_format is None:
        parser.error("--description 需要配合 --pack-format 使用")
    if not args.mods_dir.is_dir():
        print(f"mods 目录不存在: {args.mods_dir}", file=sys.stderr)
        return 2

    jars = sorted(
        path for path in args.mods_dir.rglob("*") if path.is_file() and path.suffix.lower() == ".jar"
    )
    if not jars:
        print(f"未在 {args.mods_dir} 中找到 JAR 文件。")
        return 0

    if args.output_dir.exists() and not args.output_dir.is_dir():
        print(f"输出路径不是目录: {args.output_dir}", file=sys.stderr)
        return 2

    if args.clean and args.output_dir.exists():
        resolved = args.output_dir.resolve()
        protected = (
            resolved.parent == resolved
            or Path.cwd().resolve().is_relative_to(resolved)
            or Path.home().resolve().is_relative_to(resolved)
            or args.mods_dir.resolve().is_relative_to(resolved)
            or args.output_dir.is_symlink()
            or (hasattr(args.output_dir, "is_junction") and args.output_dir.is_junction())
        )
        if protected:
            print(
                f"拒绝清理该输出目录（根目录/当前目录/家目录/包含 mods 的目录/链接）: {resolved}",
                file=sys.stderr,
            )
            return 2
        shutil.rmtree(args.output_dir)
        print(f"已清理输出目录: {args.output_dir}")

    if not args.clean and (args.output_dir / "data").is_dir():
        print(
            f"提示：{args.output_dir} 已有内容，本次会覆盖同名文件；"
            "不再出现的旧文件不会被删除，需要干净结果请加 --clean。"
        )

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for report_name in ("_merged.txt", "_conflicts.txt"):
        (args.output_dir / report_name).unlink(missing_ok=True)

    extractor = Extractor(args.output_dir, args.overwrite)
    for jar in jars:
        source = jar.relative_to(args.mods_dir).as_posix()
        print(f"扫描: {source}")
        try:
            with jar.open("rb") as stream:
                extractor.scan_archive(stream, source)
        except OSError as error:
            extractor.invalid_archives += 1
            print(f"[跳过] 无法读取 JAR: {source} ({error})", file=sys.stderr)

    merged_paths = sorted(extractor.merged_paths)
    if merged_paths:
        lines = [
            "# 同路径 JSON 已合并；格式：文件  <- 来源 JAR（按扫描顺序，标量冲突时保留先扫描到的值）",
            f"# 共 {len(merged_paths)} 个文件",
            "",
        ]
        for path_text in merged_paths:
            lines.append(f"{path_text}  <- {', '.join(extractor.sources[path_text])}")
        report_path = args.output_dir / "_merged.txt"
        report_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    if extractor.conflict_report:
        conflicts_path = args.output_dir / "_conflicts.txt"
        header = [
            "# 同路径文件未能合并或合并时出现字段冲突的记录",
            "# 非 JSON 文件保留先扫描到的版本；JSON 标量冲突保留先扫描到的值（--overwrite 可改为后者覆盖）",
            f"# 共 {len(extractor.conflict_report)} 条",
            "",
        ]
        conflicts_path.write_text(
            "\n".join(header + extractor.conflict_report) + "\n", encoding="utf-8"
        )

    if args.pack_format is not None:
        description = args.description or f"由 {len(jars)} 个模组的数据包内容合并生成"
        pack_mcmeta = {
            "pack": {
                "pack_format": args.pack_format,
                "description": description,
            }
        }
        (args.output_dir / "pack.mcmeta").write_text(
            json.dumps(pack_mcmeta, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )

    print(f"完成：写入 {extractor.written} 个数据包文件到 {args.output_dir}")
    print(f"已扫描 {len(jars)} 个外层 JAR，发现 {extractor.nested_jars} 个嵌套 JAR。")
    if extractor.overwrite:
        print(f"{extractor.overwritten} 个同路径文件被后扫描到的版本覆盖。")
    else:
        print(f"{len(merged_paths)} 个同路径 JSON 已合并（其中 {len(extractor.changed_paths)} 个内容有变化）。")
    if extractor.scalar_conflicts:
        print(f"合并中有 {extractor.scalar_conflicts} 处字段值冲突，保留先扫描到的值。", file=sys.stderr)
    if extractor.skipped:
        print(f"有 {extractor.skipped} 个同路径非 JSON 文件未覆盖。", file=sys.stderr)
    if extractor.invalid_json:
        print(f"有 {extractor.invalid_json} 个同路径 JSON 无法解析而未合并。", file=sys.stderr)
    if extractor.invalid_archives:
        print(f"有 {extractor.invalid_archives} 个损坏或非 ZIP 格式的 JAR 被跳过。", file=sys.stderr)
    if extractor.too_deep:
        print(f"有 {extractor.too_deep} 个嵌套 JAR 层级过深被跳过。", file=sys.stderr)
    if extractor.failed_writes:
        print(f"有 {extractor.failed_writes} 个文件写入失败。", file=sys.stderr)
    if merged_paths:
        print(f"合并记录: {args.output_dir / '_merged.txt'}")
    if extractor.conflict_report:
        print(f"冲突记录: {args.output_dir / '_conflicts.txt'}")
    if args.pack_format is not None:
        print(f"已生成 pack.mcmeta（data pack_format = {args.pack_format}）。")
    if args.list:
        print("\n数据包文件来源:")
        for path_text in sorted(extractor.sources):
            print(path_text)
            for source in extractor.sources[path_text]:
                print(f"  <- {source}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
