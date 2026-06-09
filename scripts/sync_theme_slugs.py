#!/usr/bin/env python3
"""Regenerate references/theme-slugs.md from assets/theme-data.js."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from theme_registry import THEME_SLUGS_DOC, format_slugs_doc, load_theme_slugs


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync theme-slugs.md from theme-data.js.")
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit 1 if theme-slugs.md is out of date (for CI).",
    )
    args = parser.parse_args()

    slugs = sorted(load_theme_slugs())
    expected = format_slugs_doc(slugs)

    if args.check:
        current = THEME_SLUGS_DOC.read_text(encoding="utf-8")
        if current != expected:
            print(f"ERROR: {THEME_SLUGS_DOC} is out of sync with assets/theme-data.js")
            print("Run: python3 scripts/sync_theme_slugs.py")
            return 1
        print(f"OK: {THEME_SLUGS_DOC} matches theme-data.js ({len(slugs)} slugs)")
        return 0

    THEME_SLUGS_DOC.write_text(expected, encoding="utf-8")
    print(f"Wrote {len(slugs)} slugs to {THEME_SLUGS_DOC}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
