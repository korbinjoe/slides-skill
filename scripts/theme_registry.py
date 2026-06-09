#!/usr/bin/env python3
"""Load theme names and slugs from assets/theme-data.js (mirrors JS slugify)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
THEME_DATA_PATH = ROOT / "assets" / "theme-data.js"
THEME_SLUGS_DOC = ROOT / "references" / "theme-slugs.md"
EXPECTED_THEME_COUNT = 50


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower())
    return slug.strip("-")


def load_theme_names(path: Path | None = None) -> list[str]:
    text = (path or THEME_DATA_PATH).read_text(encoding="utf-8")
    return re.findall(r'name:\s*"([^"]+)"', text)


def load_theme_slugs(path: Path | None = None) -> list[str]:
    return [slugify(name) for name in load_theme_names(path)]


def load_slug_to_name(path: Path | None = None) -> dict[str, str]:
    return {slugify(name): name for name in load_theme_names(path)}


def parse_slugs_from_doc(path: Path | None = None) -> list[str]:
    text = (path or THEME_SLUGS_DOC).read_text(encoding="utf-8")
    for line in text.splitlines():
        if line.startswith("`") and "," in line:
            return [part.strip("` ") for part in line.split(",")]
    return []


def format_slugs_doc(slugs: list[str]) -> str:
    slug_line = ", ".join(f"`{slug}`" for slug in slugs)
    return f"""# Theme Slugs

Canonical slugs for all **{len(slugs)} themes** — use in `theme-demo.html?style=<slug>`, `deck_lock.json` `"theme"`, and sampler links. Slugs are generated from display names via `slugify()` in `assets/theme-data.js`.

Filter themes in the sampler by **light/dark** mode or **tags** (Editorial, Enterprise, Brand, High Density, etc.).

## All slugs

{slug_line}

## Agent note: internal `kind` metadata

Each entry in `assets/theme-data.js` `previews[]` also has a `kind` field (`core`, `brand`, `layout`, `deck`, `example`). This is **not shown to users** but controls composition rules via `layoutDNA`. See `SKILL.md` → **Resolving Theme CSS**.
"""
