import os
import json

def reorder_neoforge_conditions_first(data):
    if isinstance(data, list):
        return [reorder_neoforge_conditions_first(item) for item in data]
    if not isinstance(data, dict):
        return data

    ordered = {}
    if "neoforge:conditions" in data:
        ordered["neoforge:conditions"] = reorder_neoforge_conditions_first(
            data["neoforge:conditions"]
        )
    if "type" in data:
        ordered["type"] = reorder_neoforge_conditions_first(data["type"])
    for key in sorted(
        k for k in data.keys() if k not in {"_comment", "neoforge:conditions", "type"}
    ):
        ordered[key] = reorder_neoforge_conditions_first(data[key])
    if "_comment" in data:
        ordered["_comment"] = reorder_neoforge_conditions_first(data["_comment"])
    return ordered

def format_json_files(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".json"):
                file_path = os.path.join(dirpath, filename)
                try:
                    with open(file_path, "r", encoding="utf-8-sig") as f:
                        data = json.load(f)

                    data = reorder_neoforge_conditions_first(data)

                    with open(file_path, "w", encoding="utf-8") as f:
                        json.dump(data, f, ensure_ascii=False, indent=2, sort_keys=False)

                    print(f"Formatted: {file_path}")
                except Exception as e:
                    print(f"Error formatting {file_path}: {e}")

format_json_files("../.pakku")
