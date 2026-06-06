#!/usr/bin/env python3
"""Read projects from a pakku lock file and re-import them precisely."""

import json
import subprocess
import sys
from pathlib import Path


def collect_projects(lock_data):
    """Collect unique project identities while preserving order."""
    seen = set()
    ordered = []

    for project in lock_data.get("projects", []):
        project_type = project.get("type", "MOD")
        project_id = project.get("id")
        if not isinstance(project_id, dict):
            continue

        key = (
            project_type,
            project_id.get("curseforge"),
            project_id.get("modrinth"),
            project_id.get("github"),
        )
        if key in seen:
            continue

        has_source = any(isinstance(value, str) and value for value in project_id.values())
        if not has_source:
            continue

        seen.add(key)
        ordered.append(
            {
                "type": project_type,
                "id": project_id,
                "name": project.get("name", {}),
                "slug": project.get("slug", {}),
            }
        )

    return ordered


def run_add_commands(projects, pakku_jar, start_index=1):
    failures = []
    projects = projects[start_index - 1 :]

    for index, project in enumerate(projects, start=1):
        cmd = ["java", "-jar", str(pakku_jar), "--yes", "add", "prj"]
        project_id = project["id"]

        if isinstance(project_id.get("curseforge"), str) and project_id["curseforge"]:
            cmd.extend(["--cf", project_id["curseforge"]])
        if isinstance(project_id.get("modrinth"), str) and project_id["modrinth"]:
            cmd.extend(["--mr", project_id["modrinth"]])
        if isinstance(project_id.get("github"), str) and project_id["github"]:
            cmd.extend(["--gh", project_id["github"]])

        if project.get("type"):
            cmd.extend(["-t", project["type"]])

        label = (
            project.get("name", {}).get("modrinth")
            or project.get("name", {}).get("curseforge")
            or project.get("slug", {}).get("modrinth")
            or project.get("slug", {}).get("curseforge")
            or str(project_id)
        )
        print(f"[{index}/{len(projects)}] Running: {' '.join(cmd)}")

        result = subprocess.run(cmd, check=False)
        if result.returncode != 0:
            failures.append((label, result.returncode))

    return failures


def main():
    repo_root = Path(__file__).resolve().parent.parent
    lock_file = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else repo_root / "pakku-lock.json"
    pakku_jar = repo_root / "pakku.jar"
    start_index = int(sys.argv[2]) if len(sys.argv) > 2 else 1

    if not lock_file.exists():
        print(f"Error: {lock_file} not found", file=sys.stderr)
        return 1

    if not pakku_jar.exists():
        print(f"Error: {pakku_jar} not found", file=sys.stderr)
        return 1

    with lock_file.open("r", encoding="utf-8") as f:
        lock_data = json.load(f)

    projects = collect_projects(lock_data)
    if not projects:
        print("No projects found in pakku-lock.json")
        return 0

    print(f"Found {len(projects)} unique projects. Start importing...")
    failures = run_add_commands(projects, pakku_jar, start_index=start_index)

    if failures:
        print("\nFinished with failures:")
        for slug, code in failures:
            print(f"- {slug}: exit code {code}")
        return 2

    print("\nAll slug add commands completed successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
