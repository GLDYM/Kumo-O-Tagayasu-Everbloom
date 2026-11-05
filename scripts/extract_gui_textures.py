#!/usr/bin/env python3
"""Extract Minecraft GUI textures from mod JARs, including nested JARs.

Examples:
    python extract_gui_textures.py
    python extract_gui_textures.py mods extracted_gui_textures
    python extract_gui_textures.py --overwrite
    python extract_gui_textures.py --list

The output keeps each texture's resource-pack path, for example:
    assets/examplemod/textures/gui/menu.png
"""

from __future__ import annotations

import argparse
import hashlib
import io
import sys
import zipfile
from pathlib import Path, PurePosixPath
from typing import BinaryIO


GUI_PREFIX = "assets/"


def gui_texture_path(name: str) -> PurePosixPath | None:
    """Return a safe resource-pack path when *name* is a GUI texture."""
    name = name.replace("\\", "/")
    path = PurePosixPath(name)
    parts = path.parts
    if (
        len(parts) < 5
        or parts[0] != "assets"
        or parts[2:4] != ("textures", "gui")
        or path.name == ""
        or path.is_absolute()
        or ".." in parts
    ):
        return None
    return path


class Extractor:
    def __init__(self, output_dir: Path, overwrite: bool) -> None:
        self.output_dir = output_dir
        self.overwrite = overwrite
        self.extracted = 0
        self.nested_jars = 0
        self.invalid_archives = 0
        self.collisions: list[str] = []
        self.sources: dict[str, list[str]] = {}

    def save_texture(self, path: PurePosixPath, data: bytes, source: str) -> None:
        path_text = path.as_posix()
        self.sources.setdefault(path_text, []).append(source)
        destination = self.output_dir.joinpath(*path.parts)
        destination.parent.mkdir(parents=True, exist_ok=True)

        if destination.exists() and not self.overwrite:
            old_digest = hashlib.sha256(destination.read_bytes()).digest()
            new_digest = hashlib.sha256(data).digest()
            if old_digest != new_digest:
                self.collisions.append(f"{path}  <- skipped from {source}")
            return

        destination.write_bytes(data)
        self.extracted += 1

    def scan_archive(self, stream: BinaryIO, source: str, depth: int = 0) -> None:
        try:
            with zipfile.ZipFile(stream) as archive:
                for info in archive.infolist():
                    if info.is_dir():
                        continue
                    resource_path = gui_texture_path(info.filename)
                    if resource_path is not None:
                        self.save_texture(resource_path, archive.read(info), source)
                    elif info.filename.lower().endswith(".jar"):
                        self.nested_jars += 1
                        nested_source = f"{source}!/{info.filename}"
                        self.scan_archive(io.BytesIO(archive.read(info)), nested_source, depth + 1)
        except (zipfile.BadZipFile, EOFError, OSError, RuntimeError) as error:
            self.invalid_archives += 1
            print(f"[跳过] 无法读取 JAR: {source} ({error})", file=sys.stderr)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="提取 mods 中（含多层 jar-in-jar）的 assets/*/textures/gui 文件。"
    )
    parser.add_argument("mods_dir", nargs="?", type=Path, default=Path("mods"), help="mod JAR 所在目录")
    parser.add_argument(
        "output_dir", nargs="?", type=Path, default=Path("extracted_gui_textures"), help="导出目录"
    )
    parser.add_argument("--overwrite", action="store_true", help="同路径文件以之后扫描到的版本覆盖")
    parser.add_argument(
        "--list",
        action="store_true",
        help="list each GUI texture path and every JAR source",
    )
    args = parser.parse_args()

    if not args.mods_dir.is_dir():
        print(f"mods 目录不存在: {args.mods_dir}", file=sys.stderr)
        return 2

    jars = sorted(path for path in args.mods_dir.rglob("*") if path.is_file() and path.suffix.lower() == ".jar")
    if not jars:
        print(f"未在 {args.mods_dir} 中找到 JAR 文件。")
        return 0

    args.output_dir.mkdir(parents=True, exist_ok=True)
    extractor = Extractor(args.output_dir, args.overwrite)
    for jar in jars:
        print(f"扫描: {jar}")
        with jar.open("rb") as stream:
            extractor.scan_archive(stream, str(jar))

    print(f"完成：写入 {extractor.extracted} 个 GUI 贴图到 {args.output_dir}")
    print(f"已扫描 {len(jars)} 个外层 JAR，发现 {extractor.nested_jars} 个嵌套 JAR。")
    if extractor.invalid_archives:
        print(f"有 {extractor.invalid_archives} 个损坏或非 ZIP 格式的嵌套 JAR 被跳过。", file=sys.stderr)
    if extractor.collisions:
        report = args.output_dir / "_conflicts.txt"
        report.write_text("\n".join(extractor.collisions) + "\n", encoding="utf-8")
        print(f"有 {len(extractor.collisions)} 个不同内容的同路径文件未覆盖，详见 {report}", file=sys.stderr)
    if args.list:
        print("\nGUI texture sources:")
        for texture_path in sorted(extractor.sources):
            print(texture_path)
            for source in extractor.sources[texture_path]:
                print(f"  <- {source}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
