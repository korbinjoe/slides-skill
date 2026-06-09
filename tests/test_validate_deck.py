"""Tests for scripts/validate_deck.py and scripts/theme_registry.py."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from theme_registry import EXPECTED_THEME_COUNT, load_theme_slugs, slugify
from validate_deck import parse_notes, validate


MINIMAL_ENGINE = """
function updateNotes() {}
function go(i) { updateNotes(); }
window.addEventListener('hashchange', () => {});
window.addEventListener('keydown', () => {});
function scaleDeck() {}
"""


def make_deck(
    slides_html: str,
    notes: list[str],
    deck_lock: dict | None = None,
) -> str:
    notes_js = ", ".join(json.dumps(n) for n in notes)
    lock_block = ""
    if deck_lock is not None:
        lock_block = (
            f'<script type="application/json" id="deck-lock">\n'
            f"{json.dumps(deck_lock, indent=2)}\n"
            f"</script>"
        )
    return f"""<!DOCTYPE html>
<html><head><link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></head>
<body>
<div id="deck">
{slides_html}
</div>
<script>
const NOTES = [{notes_js}];
{MINIMAL_ENGINE}
</script>
{lock_block}
</body></html>"""


def test_slugify_matches_js_behavior():
    assert slugify("Swiss Grid") == "swiss-grid"
    assert slugify("CMB Transaction Banking") == "cmb-transaction-banking"


def test_theme_registry_count_and_uniqueness():
    slugs = load_theme_slugs()
    assert len(slugs) == EXPECTED_THEME_COUNT
    assert len(slugs) == len(set(slugs))


def test_example_deck_passes_strict():
    path = ROOT / "examples" / "multi-agent-orchestration.html"
    errors, warnings, _ = validate(path)
    assert errors == []
    assert warnings == []


def test_parse_notes_handles_escaped_quotes():
    html = 'const NOTES = ["Say \\"hello\\"", "plain"];'
    assert parse_notes(html) == ['Say "hello"', "plain"]


def test_missing_slides_is_error(tmp_path: Path):
    html = make_deck("", ["note"])
    path = tmp_path / "empty.html"
    path.write_text(html, encoding="utf-8")
    errors, _, _ = validate(path)
    assert any("No .slide elements" in e for e in errors)


def test_placeholder_is_error(tmp_path: Path):
    slide = '<div class="slide cover active" data-slide-type="cover" data-rhythm="anchor"><h1>{{TITLE}}</h1></div>'
    html = make_deck(slide, ["note"])
    path = tmp_path / "placeholder.html"
    path.write_text(html, encoding="utf-8")
    errors, _, _ = validate(path)
    assert any("placeholders" in e for e in errors)


def test_unknown_theme_slug_is_error(tmp_path: Path):
    slide = '<div class="slide cover active" data-slide-type="cover" data-rhythm="anchor"><h1>Hi</h1></div>'
    lock = {
        "version": "1.0",
        "title": "Test",
        "theme": "not-a-real-theme",
        "slides": [{"id": "01", "type": "cover", "rhythm": "anchor"}],
    }
    html = make_deck(slide, ["note"], lock)
    path = tmp_path / "bad-theme.html"
    path.write_text(html, encoding="utf-8")
    errors, _, _ = validate(path, allowed_theme_slugs={"obsidian"})
    assert any("not a valid sampler slug" in e for e in errors)


def test_lock_type_mismatch_is_error(tmp_path: Path):
    slide = '<div class="slide cover active" data-slide-type="cover" data-rhythm="anchor"><h1>Hi</h1></div>'
    lock = {
        "version": "1.0",
        "title": "Test",
        "theme": "obsidian",
        "slides": [{"id": "01", "type": "statement", "rhythm": "anchor"}],
    }
    html = make_deck(slide, ["note"], lock)
    path = tmp_path / "type-mismatch.html"
    path.write_text(html, encoding="utf-8")
    errors, _, _ = validate(path, allowed_theme_slugs={"obsidian"})
    assert any("deck-lock type" in e and "does not match" in e for e in errors)


def test_lock_rhythm_mismatch_is_error(tmp_path: Path):
    slide = '<div class="slide cover active" data-slide-type="cover" data-rhythm="anchor"><h1>Hi</h1></div>'
    lock = {
        "version": "1.0",
        "title": "Test",
        "theme": "obsidian",
        "slides": [{"id": "01", "type": "cover", "rhythm": "dense"}],
    }
    html = make_deck(slide, ["note"], lock)
    path = tmp_path / "rhythm-mismatch.html"
    path.write_text(html, encoding="utf-8")
    errors, _, _ = validate(path, allowed_theme_slugs={"obsidian"})
    assert any("deck-lock rhythm" in e and "does not match" in e for e in errors)


def test_adjacent_same_type_is_warning(tmp_path: Path):
    slides = """
<div class="slide cover active" data-slide-type="cover" data-rhythm="anchor"><h1>One</h1></div>
<div class="slide" data-slide-type="statement" data-rhythm="breath"><p>Two</p></div>
<div class="slide" data-slide-type="statement" data-rhythm="dense"><p>Three</p></div>
"""
    lock = {
        "version": "1.0",
        "title": "Test",
        "theme": "obsidian",
        "slides": [
            {"id": "01", "type": "cover", "rhythm": "anchor"},
            {"id": "02", "type": "statement", "rhythm": "breath"},
            {"id": "03", "type": "statement", "rhythm": "dense"},
        ],
    }
    html = make_deck(slides, ["a", "b", "c"], lock)
    path = tmp_path / "repeat.html"
    path.write_text(html, encoding="utf-8")
    errors, warnings, _ = validate(path, allowed_theme_slugs={"obsidian"})
    assert errors == []
    assert any("repeat type statement" in w for w in warnings)
