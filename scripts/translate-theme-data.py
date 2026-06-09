#!/usr/bin/env python3
"""Fix demoContent syntax and replace Chinese slide content with English."""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "assets/theme-data.js"


def find_matching_bracket(s: str, start: int, open_c: str, close_c: str) -> int:
    depth = 0
    in_string = escape = False
    for i in range(start, len(s)):
        c = s[i]
        if escape:
            escape = False
            continue
        if c == "\\" and in_string:
            escape = True
            continue
        if c == '"':
            in_string = not in_string
            continue
        if in_string:
            continue
        if c == open_c:
            depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0:
                return i
    return -1


def fix_broken_demo_content(content: str) -> str:
    marker = '\n      ,\n      "slides":'
    idx = fixed = 0
    while (idx := content.find(marker, idx)) != -1:
        demo_start = content.rfind("demoContent: {", 0, idx)
        slides_key_start = idx + len("\n      ,\n      ")
        array_start = content.index("[", slides_key_start)
        array_end = find_matching_bracket(content, array_start, "[", "]")
        frame_idx = content.index("\n    frame:", array_end)
        between = content[array_end + 1 : frame_idx]
        if not re.fullmatch(r"\s*\},?\s*", between):
            raise SystemExit(f"Unexpected content after slides array at {array_end}")
        slides_array = content[array_start : array_end + 1]
        replacement = f'demoContent: {{ "slides": {slides_array} }},'
        content = content[:demo_start] + replacement + content[frame_idx:]
        fixed += 1
        idx = demo_start + len(replacement)
    print(f"Fixed {fixed} broken demoContent blocks")
    return content


def replace_slides(content: str, name: str, data) -> str:
    name_idx = content.find(f'name: "{name}"')
    if name_idx == -1:
        raise SystemExit(f"Theme not found: {name}")
    demo_idx = content.find('demoContent: { "slides": ', name_idx)
    if demo_idx == -1:
        raise SystemExit(f"demoContent not found for: {name}")
    array_start = content.index("[", demo_idx)
    array_end = find_matching_bracket(content, array_start, "[", "]")
    if array_end == -1:
        raise SystemExit(f"Could not parse slides array for: {name}")
    slides_json = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    return content[:array_start] + slides_json + content[array_end + 1 :]


def fix_metrics(content: str) -> str:
    replacements = [
        ('["四",    "藏"],      ["14",    "页"]', '["4",     "HIDE"],    ["14",    "PAGES"]'),
        ('["五色",  "正色"],    ["12",    "章"]', '["5",     "COLORS"],  ["12",    "CHAPTERS"]'),
        ('["2026",  "趋势"],    ["12",    "议题"]', '["2026",  "TRENDS"],  ["12",    "TOPICS"]'),
        ('["20",    "LAYOUTS"], ["图文",   "VISUAL"]', '["20",    "LAYOUTS"], ["IMAGE",  "VISUAL"]'),
        ('["1929",  "起点"],    ["10",    "SLIDES"]', '["1929",  "START"],   ["10",    "SLIDES"]'),
    ]
    for old, new in replacements:
        content = content.replace(old, new)
    return content


def main() -> None:
    content = PATH.read_text()
    content = fix_broken_demo_content(content)

    slides_dir = Path(__file__).parent
    all_slides = {}
    for fname in ("deck-en-slides.json", "remaining-en-slides.json"):
        all_slides.update(json.loads((slides_dir / fname).read_text()))

    for name, data in all_slides.items():
        content = replace_slides(content, name, data)
        print("Translated:", name)

    content = fix_metrics(content)
    PATH.write_text(content)

    remaining = re.findall(r"[\u4e00-\u9fff]", content)
    # Noto Sans SC font name contains no CJK; any remaining should be zero
    print("Remaining Chinese chars:", len(remaining))
    if remaining:
        for i, line in enumerate(content.split("\n"), 1):
            if re.search(r"[\u4e00-\u9fff]", line):
                print(i, line[:120])
        raise SystemExit(1)

    subprocess.run(["node", "--check", str(PATH)], check=True)
    print("Done — syntax OK, no Chinese remaining.")


if __name__ == "__main__":
    main()
