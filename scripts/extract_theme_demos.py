#!/usr/bin/env python3
"""Extract demoContent from theme-data.js into assets/theme-demos/{slug}.json."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
THEME_DATA = ROOT / "assets" / "theme-data.js"
DEMOS_DIR = ROOT / "assets" / "theme-demos"

EXTRACT_JS = r"""
const fs = require("fs");
const path = require("path");
globalThis = global;
const code = fs.readFileSync(process.argv[1], "utf8");
eval(code);
const { previews } = globalThis.SLIDES_THEME_DATA;
const outDir = process.argv[2];
fs.mkdirSync(outDir, { recursive: true });
const written = [];
for (const item of previews) {
  if (!item.demoContent) continue;
  const file = path.join(outDir, item.slug + ".json");
  fs.writeFileSync(file, JSON.stringify(item.demoContent, null, 2) + "\n");
  written.push(item.slug);
}
console.log(JSON.stringify({ count: written.length, slugs: written }));
"""


def find_matching_bracket(text: str, start: int, open_c: str, close_c: str) -> int:
    depth = 0
    in_string = escape = False
    quote = ""
    for i in range(start, len(text)):
        ch = text[i]
        if escape:
            escape = False
            continue
        if in_string:
            if ch == "\\":
                escape = True
            elif ch == quote:
                in_string = False
            continue
        if ch in "\"'":
            in_string = True
            quote = ch
            continue
        if ch == open_c:
            depth += 1
        elif ch == close_c:
            depth -= 1
            if depth == 0:
                return i
    return -1


def strip_demo_content(content: str) -> tuple[str, int]:
    removed = 0
    while True:
        idx = content.find("demoContent:")
        if idx == -1:
            break
        brace_start = content.index("{", idx)
        brace_end = find_matching_bracket(content, brace_start, "{", "}")
        if brace_end == -1:
            raise SystemExit("Could not parse demoContent block while stripping theme-data.js")
        end = brace_end + 1
        while end < len(content) and content[end] in " \t":
            end += 1
        if end < len(content) and content[end] == ",":
            end += 1
        if end < len(content) and content[end] == "\n":
            end += 1
        content = content[:idx] + content[end:]
        removed += 1
    content = content.replace("    },\n      },", "    }\n  },")
    content = content.replace("          frame:", "    frame:")
    return content, removed


def main() -> int:
    if not THEME_DATA.exists():
        print(f"ERROR: missing {THEME_DATA}", file=sys.stderr)
        return 1

    result = subprocess.run(
        ["node", "-e", EXTRACT_JS, str(THEME_DATA), str(DEMOS_DIR)],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        print(result.stderr or result.stdout, file=sys.stderr)
        return 1

    info = json.loads(result.stdout.strip())
    print(f"Extracted {info['count']} demo files to {DEMOS_DIR}")

    content = THEME_DATA.read_text(encoding="utf-8")
    stripped, removed = strip_demo_content(content)
    if removed != info["count"]:
        print(
            f"WARNING: extracted {info['count']} demos but stripped {removed} demoContent blocks",
            file=sys.stderr,
        )
    THEME_DATA.write_text(stripped, encoding="utf-8")
    print(f"Removed {removed} demoContent blocks from {THEME_DATA.name}")

    subprocess.run(["node", "--check", str(THEME_DATA)], check=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
