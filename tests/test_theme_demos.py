"""Tests for theme demo bundle scripts."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from build_theme_demos import load_demo_files
from theme_registry import EXPECTED_THEME_COUNT, load_theme_slugs


def test_theme_demo_json_files_complete():
    slugs = set(load_theme_slugs())
    demos = load_demo_files()
    assert len(demos) == EXPECTED_THEME_COUNT
    assert set(demos) == slugs
    for slug, data in demos.items():
        assert isinstance(data.get("slides"), list), slug
        assert data["slides"], slug


def test_build_theme_demos_check_passes():
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "build_theme_demos.py"), "--check"],
        capture_output=True,
        text=True,
        cwd=ROOT,
    )
    assert result.returncode == 0, result.stdout + result.stderr
