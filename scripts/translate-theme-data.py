#!/usr/bin/env python3
"""Update theme demo slide content in assets/theme-demos/{slug}.json."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from theme_registry import load_slug_to_name, slugify

DEMOS_DIR = ROOT / "assets" / "theme-demos"


def replace_slides(name: str, slides: list) -> None:
    slug = slugify(name)
    path = DEMOS_DIR / f"{slug}.json"
    if not path.exists():
        raise SystemExit(f"Demo file not found: {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    data["slides"] = slides
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated: {slug}.json ({name})")


def main() -> None:
    slides_dir = Path(__file__).parent
    all_slides: dict = {}
    for fname in ("deck-en-slides.json", "remaining-en-slides.json"):
        path = slides_dir / fname
        if path.exists():
            all_slides.update(json.loads(path.read_text(encoding="utf-8")))

    if not all_slides:
        print("No slide translation sources found; nothing to do.")
        return

    slug_to_name = load_slug_to_name()
    for name, data in all_slides.items():
        if slugify(name) not in slug_to_name:
            raise SystemExit(f"Unknown theme name: {name}")
        replace_slides(name, data)

    print("Done — run python3 scripts/build_theme_demos.py to refresh theme-demos.js")


if __name__ == "__main__":
    main()
