# Deck Contract

The slides skill produces one self-contained HTML deck. Before writing that HTML,
create a compact plan and lock the execution details so the final file can be
validated instead of judged only by eye.

## Required Artifacts

### `deck_plan.md`

Human-readable planning document. Keep it short enough to scan before generation.

Required sections:

- `Brief`: audience, duration, presenter context, core message
- `Theme`: chosen theme and why it fits the presentation context
- `Narrative Arc`: the main sequence of ideas
- `Slide Roster`: one row per slide with purpose, slide type, rhythm, title, and transition
- `Notes Plan`: expected speaking role for each slide
- `Quality Targets`: any special constraints such as "technical audience", "no stock imagery", or "demo-heavy"

### `deck_lock.json`

Machine-readable contract. Use it to keep theme, layout, notes, and pacing aligned
while writing the HTML.

```json
{
  "version": "1.0",
  "title": "Deck title",
  "theme": "Obsidian",
  "canvas": { "width": 1280, "height": 720 },
  "font_family": "'Outfit', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif",
  "slides": [
    {
      "id": "01",
      "type": "cover",
      "rhythm": "anchor",
      "purpose": "Set context and title the talk",
      "title": "Presentation Title",
      "notes": "Opening note content."
    }
  ],
  "rules": {
    "max_callouts": 2,
    "max_label_ratio": 0.4,
    "require_breath_or_hero": true,
    "no_adjacent_same_type": true
  }
}
```

## HTML Embedding

Embed the lock in the final HTML so the validator can compare plan against output:

```html
<script type="application/json" id="deck-lock">
{
  "version": "1.0",
  "title": "Deck title",
  "theme": "Obsidian",
  "canvas": { "width": 1280, "height": 720 },
  "slides": []
}
</script>
```

Every slide element should also declare its type and rhythm:

```html
<div class="slide cover active" data-slide-type="cover" data-rhythm="anchor">
```

Allowed rhythm values:

- `anchor`: cover, section intro, end, or other structural slide
- `dense`: data, diagram, comparison, table, code, or multi-point slide
- `breath`: sparse reset slide, quote, single statement, hero image, or one-key-message slide

Allowed slide type values:

- `cover`
- `section-intro`
- `statement`
- `two-column`
- `three-column`
- `big-number`
- `comparison`
- `quote`
- `flow`
- `code`
- `layer-stack`
- `diagram`
- `stats-row`
- `four-grid`
- `timeline`
- `end`
- `interactive-question`
- `breath`
- `hero-image`

## Validation Rule

Run the validator after writing the HTML:

```bash
python3 scripts/validate_deck.py <deck.html>
```

Fix every error before delivering the deck. Warnings are design risks; resolve them
when the change does not weaken the presentation.
