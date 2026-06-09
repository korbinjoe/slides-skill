#!/usr/bin/env python3
"""Verify theme registry integrity (count, uniqueness, doc sync)."""

from __future__ import annotations

import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from theme_registry import (
    EXPECTED_THEME_COUNT,
    THEME_SLUGS_DOC,
    load_theme_names,
    load_theme_slugs,
    parse_slugs_from_doc,
)


def main() -> int:
    errors: list[str] = []

    names = load_theme_names()
    slugs = load_theme_slugs()

    if len(names) != EXPECTED_THEME_COUNT:
        errors.append(f"Expected {EXPECTED_THEME_COUNT} themes, found {len(names)}.")

    duplicates = [slug for slug, count in Counter(slugs).items() if count > 1]
    if duplicates:
        errors.append(f"Duplicate slugs: {', '.join(sorted(duplicates))}.")

    doc_slugs = parse_slugs_from_doc()
    if sorted(doc_slugs) != sorted(slugs):
        missing = set(slugs) - set(doc_slugs)
        extra = set(doc_slugs) - set(slugs)
        if missing:
            errors.append(f"theme-slugs.md missing: {', '.join(sorted(missing))}.")
        if extra:
            errors.append(f"theme-slugs.md has unknown slugs: {', '.join(sorted(extra))}.")
        errors.append("Run: python3 scripts/sync_theme_slugs.py")

    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1

    print(
        f"OK: {len(slugs)} themes, {len(set(slugs))} unique slugs, "
        f"{THEME_SLUGS_DOC.name} in sync"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
