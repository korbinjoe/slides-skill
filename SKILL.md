---
name: slides
description: >
  Create professional presentation slides as a single self-contained HTML file.
  Use when users want to make slides, presentations, decks, pitch decks, keynotes,
  or any kind of slideshow. Also applies to "make me a presentation about...",
  "create slides for my talk", "I need to present X", "help me prepare a deck".
  Proactively use when the user mentions presentation slides, talks, keynotes,
  or conference speaking — even if they don't say "slides" explicitly.
  Do not use for live code demos, app prototypes, or editable PPTX/Google Slides exports.
---

# Slides

Create stunning presentation decks as single self-contained HTML files. No dependencies, no build step — open in any browser, present anywhere.

Reference example: `examples/multi-agent-orchestration.html`

## When NOT to Use

- User needs `.pptx`, Google Slides, or Keynote — this skill outputs browser HTML only
- User wants a live code demo or runnable app, not a slide deck
- User needs complex animations, embedded video, or collaborative editing
- Primary deliverable is print/PDF layout rather than 1280×720 screen presentation

## Design Philosophy

This is not PowerPoint-as-HTML. These are **developer-grade presentations** with:

- Dark premium aesthetic (think Linear/Stripe keynotes, not corporate templates)
- Precise typography with display fonts (Outfit by default)
- Intentional whitespace and visual hierarchy
- Inline SVG diagrams instead of imported images
- Speaker notes, timer, and keyboard navigation built in

## Workflow

### 1. Choose a Theme (MUST be first)

**This step is mandatory and comes before anything else.** The user must confirm one of **50 themes** from the sampler — do not auto-select.

**Primary path (works in all agent environments):**

1. Share the live sampler: https://korbinjoe.github.io/slides-skill/
2. Ask the user to pick a theme by name or slug (e.g. "Obsidian", `ember`, `swiss-grid`)
3. Optionally link a playable demo: `https://korbinjoe.github.io/slides-skill/assets/theme-demo.html?style=<slug>`

**Local path (when the user is on a machine with a browser):**

```bash
open assets/theme-sampler.html
```

All 50 themes are equal choices in the sampler — filter by light/dark or tags, not by category. Slugs are listed in `references/theme-slugs.md`.

CSS and composition details live in:
- `references/themes.md` — 12 foundational themes (also `kind: core` in `theme-data.js`)
- `references/style-presets.md` — 17 themes adapted from `ppt-master` with full `:root` docs (`kind: brand`, `layout`, or `deck`)
- `assets/theme-data.js` — all 50 themes; sole source for 21 expressive themes (`kind: example`) and for `layoutDNA` by internal `kind`

The sampler shows each theme with neutral preview content. Clicking any card opens `assets/theme-demo.html?style=<slug>` — a full playable demo deck.

**Do NOT auto-select a theme. Do NOT skip this step.**

**Anti-AI theme selection**: NEVER recommend a theme based on topic keywords. If the user asks "which fits my topic," recommend based on *presentation context* (formal → Paper/Ink, high-energy → Ember, minimal → Mono) not the topic's semantic field.

After the user picks, resolve CSS from the theme's entry in `theme-data.js` (`previews[]`, match by `name` or `slug`). Use the reference file when one exists:

| Internal `kind` | Reference file | What to extract |
|-----------------|----------------|-----------------|
| `core` | `references/themes.md` | Font URL, font family, full `:root` block |
| `brand`, `layout`, `deck` | `references/style-presets.md` | Font URL, font family, full `:root` block, Layout DNA |
| `example` | `assets/theme-data.js` only | `vars`, `desc`, `frame`, `tags` → build `:root` (see below) |

Always read `desc`, `frame`, and apply **composition rules** from internal `kind` via `layoutDNA` in `theme-data.js`:

- **`core`** — standard slide library; palette and typography carry the personality
- **`brand`** — identity only: colors, type, icon tone; keep layouts content-driven
- **`layout`** — page framing, density, and rhythm; not a real organization brand
- **`deck`** — full visual direction: identity + framing + section rhythm
- **`example`** — expressive reference style; preserve material cues and density rules

Fill template placeholders:
- `{{FONT_URL}}` — the Google Fonts `<link>` URL. Omit the entire `<link>` tag when the preset uses system or CJK fonts only (Georgia, KaiTi, Arial, Noto Sans SC). The validator will emit a WARNING for missing `fonts.googleapis.com`; that is expected and acceptable for system/CJK-only presets.
- `{{FONT_FAMILY}}` — the `font-family` CSS value (including fallbacks)
- `{{THEME_VARS}}` — the complete `:root { ... }` CSS block

**Light theme note**: For light themes and presets, some inline styles need adjustment — see the notes in themes.md and style-presets.md for `.compare-side.old` backgrounds, badge/tag backgrounds, and notes panel colors.

#### Resolving Theme CSS

**Themes with docs in `themes.md` or `style-presets.md`** — copy the documented `:root` block verbatim.

**Themes documented only in `theme-data.js`** (`kind: example`) — build placeholders from the matching `previews[]` entry:

```css
:root {
  --bg: {vars.bg};
  --surface: {vars.surface};
  --border: {vars.border};
  --text: {vars.text};
  --text-2: {vars.text2};
  --text-3: {vars.text3};
  --accent: {vars.accent};
  --accent-dim: rgba({accent RGB}, 0.10);   /* derive from vars.accent when hex */
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Also read from the same entry:
- `desc` — treat as Layout DNA (material cues, density, typography attitude)
- `frame` — decorative framing hint (`brutalist`, `glass`, `swiss`, `tech`, `academic`, etc.)
- `tags` — mode and use-case hints
- optional `vars.accent2`, `vars.accent3`, `vars.radius`, `vars.titleCase` — use when the deck needs secondary accents or sharp-corner / uppercase title treatment

For `{{FONT_FAMILY}}`, use `vars.font`. For `{{FONT_URL}}`, map the primary face to Google Fonts when applicable; omit the tag when the preset uses system or CJK fonts only.

### 2. Understand the Presentation

Before writing any HTML, clarify:

- **Audience** — Technical? Executive? Mixed? This determines depth and jargon level
- **Duration** — 5min lightning talk? 20min share? 45min keynote? This sets slide count
- **Core message** — What's the ONE thing the audience should remember?
- **Structure** — Typical flow: Hook → Problem → Solution → Evidence → Call to Action

Slide count guidelines:
- 5min: 5-8 slides
- 15min: 10-15 slides
- 30min: 18-25 slides
- 45min: 25-35 slides

### 3. Draft the Narrative Arc

Write the outline BEFORE any HTML. Each slide needs:
- A clear purpose (what does this slide accomplish?)
- A transition from the previous slide (why does this come next?)
- Speaker notes (what do you say while this is on screen?)

Common narrative structures:
- **Problem → Solution**: Hook with pain → show the fix → evidence → CTA
- **Journey**: Where we were → what changed → where we are → where we're going
- **Three pillars**: Setup → Pillar 1 → Pillar 2 → Pillar 3 → Synthesis
- **Demo sandwich**: Context → Live demo → Takeaways

### 4. Lock the Deck Contract

Read `references/deck-contract.md`. Before writing HTML, create planning artifacts alongside the final HTML (same directory):

- **`deck_lock.json`** (required) — machine-readable contract; content is embedded into the HTML
- **`deck_plan.md`** (recommended) — human-readable outline for review; may be deleted after delivery

The contract prevents drift between narrative, theme, slide types, pacing, and speaker notes. `deck_lock.json` MUST include:
- Chosen theme as a **sampler slug** (see `references/theme-slugs.md`), canvas size, and font family
- One slide entry per final slide
- Slide `type` and `rhythm` for every slide
- Notes text or notes intent for every slide
- Quality thresholds (`max_callouts`, `max_label_ratio`, `require_breath_or_hero`, `no_adjacent_same_type`)

When writing the final HTML, embed the lock exactly once:

```html
<script type="application/json" id="deck-lock">
{ ...deck_lock.json content... }
</script>
```

Every slide element MUST declare:

```html
data-slide-type="..." data-rhythm="..."
```

Use the allowed values from `references/deck-contract.md`. Missing `data-slide-type` or `data-rhythm` produces validator WARNINGs — fix them before delivery.

### 5. Build the Deck

Read `assets/template.html` for the base HTML skeleton. This gives you the CSS design system, JavaScript engine (navigation, scaling, notes, timer), and structural boilerplate.

**CRITICAL: Follow the exact code order from `template.html`.** The template defines NOTES array and `updateNotes()` BEFORE `go()`, because `go()` calls `updateNotes()`. If NOTES is declared after `go(0)` is called, the script crashes with a TypeError and all keyboard/touch/click handlers fail to register. Never rearrange the JS execution order.

Read `references/slide-types.md` for the full catalog of slide type templates. Pick the right type for each slide's content.

Read `references/visualizations.md` before creating custom diagrams, timelines, comparison visuals, architecture diagrams, or data/metric layouts. Pick visual forms by content shape, not by topic keywords.

Read `references/visual-system.md` when you need to customize colors, fonts, or create new visual elements beyond the standard types.

### 6. Write Speaker Notes

Every slide MUST have speaker notes in the `NOTES` array. Notes should be:
- Conversational, not a script — bullet points of what to say
- 2-4 sentences per slide (aim for ~30 seconds of talking per slide)
- Include transition phrases ("So now that we've seen X, let's talk about Y...")
- Mark audience interaction points ("Pause for questions", "Show of hands")

### 7. Validate

After writing the HTML, run:

```bash
python3 scripts/validate_deck.py <deck.html>
python3 scripts/validate_deck.py <deck.html> --strict   # required before delivery
```

**Delivery standard:** zero `ERROR`s and zero `WARNING`s under `--strict`.

The validator splits checks by severity:

| Severity | Examples | Delivery rule |
|----------|----------|---------------|
| ERROR | Unresolved placeholders, slide/NOTES count mismatch, missing engine tokens, unknown type/rhythm, invalid deck-lock theme slug, lock/HTML type or rhythm mismatch | Must fix — deck fails even without `--strict` |
| WARNING | Missing deck-lock, missing `data-slide-type`/`data-rhythm`, Anti-AI rhythm/label/callout rules, missing Google Fonts URL on system-font presets | Must fix before delivery (`--strict`) |

Anti-AI rules (rhythm, labels, callouts, breath/hero) are enforced as WARNINGs by default. They are **MUST follow** design rules — treat `--strict` as the delivery gate, not optional polish.

Checklist:

```
ERRORs (must be zero):
[ ] No unresolved template placeholders
[ ] Exactly one active slide, and it is the first slide
[ ] Speaker notes complete for every slide
[ ] Slide count matches NOTES count and deck-lock count
[ ] deck-lock theme is a valid sampler slug (see references/theme-slugs.md)
[ ] deck-lock type and rhythm match each slide's data-slide-type and data-rhythm
[ ] Hash navigation, keyboard navigation, notes, timer, and scaling code are present
[ ] No unknown slide type or rhythm values

WARNINGs (must be zero under --strict):
[ ] deck-lock JSON embedded
[ ] Every slide has data-slide-type and data-rhythm
[ ] Google Fonts URL present, OR preset uses system/CJK fonts only (expected warning)
[ ] Anti-AI: no two adjacent slides share the same layout type
[ ] Anti-AI: labels on <40% of slides, never on Statement/Quote/Big Number/End/Breath
[ ] Anti-AI: max 2 callout boxes in the entire deck
[ ] Anti-AI: at least 1 Breath or Hero Image slide in decks with 8+ slides
```

Human visual checks still required:
- Narrative flows — each slide leads naturally to the next
- No wall-of-text slides — if a slide feels crowded, split it
- First slide has context (date, team, speaker name)
- Last slide has a clear ending (CTA, summary, or memorable closing)
- Inline SVG diagrams render correctly in the browser
- Parallel cards do not mirror sentence structure
- Summary grid has max 3 rows

## Slide Design Principles

### Less Text, More Signal

A slide is not a document. Each slide should communicate ONE idea. If you need to explain something complex, use multiple slides with progressive disclosure.

**Bad**: A slide with 5 bullet points of 2 lines each
**Good**: 5 slides, each with one bold statement and a supporting visual

### Visual Hierarchy

Every slide needs a clear "entry point" — where the eye lands first:
1. **Big number** or **bold statement** — anchors attention
2. **Supporting detail** — explains the anchor
3. **Source/context** — credibility, always smallest

### Data Visualization

Prefer inline SVG over text when showing:
- Comparisons (before/after, old/new)
- Relationships (network diagrams, hierarchies)
- Processes (flowcharts, timelines)
- Metrics (big numbers with labels, not tables of numbers)

### Typography Rules

- Headings: 44-96px, weight 600-800, tight letter-spacing (-1 to -3px)
- Body: 18-22px, weight 400, comfortable line-height (1.5-1.6)
- Labels: 11-13px, weight 600, uppercase, letter-spacing 1-2px
- Never use more than 2 font sizes on one slide (plus labels)

### Anti-AI Rules (MUST follow)

These rules prevent the deck from feeling machine-generated. Violating them is the #1 quality issue. The validator enforces them under `--strict`.

**Rhythm:**
- Never use the same slide layout twice in a row
- Alternate dense slides (Diagram, Table, Four Grid) with sparse ones (Statement, Breath, Quote)
- Include at least 1 Breath slide per 8-10 content slides
- Vary text length across slides — some should have 5 words, others 30

**Labels:**
- Labels (`.label`) are appropriate on: Cover, Section Intro
- Labels are PROHIBITED on: Statement, Quote, Big Number, End, Breath
- If more than 40% of slides have labels, remove some

**Symmetry:**
- When using Three Column, Four Grid, or Stats Row, use the asymmetric variant at least half the time
- Don't give parallel cards identical sentence structure — mix a number, a question, a phrase
- Summary grids: max 3 rows of `old → new`. Fewer is stronger
- Stats Row: prefer 2-3 metrics over 4+. Don't pad with filler numbers

**Callouts:**
- Max 2 callout boxes (`background: var(--accent-dim)`) per entire deck
- Don't end a slide with a callout if the previous slide also ended with one
- End slides should NOT have a callout — let the closing statement stand alone

## Output

Always produce a **single .html file** that:
- Is completely self-contained (inline CSS, inline JS, no external dependencies except font CDN)
- Renders at 1280x720 base resolution with automatic scaling
- Works in any modern browser
- Supports keyboard nav (←→), touch swipe, click, fullscreen (F), timer (T), notes (N)
- Embeds `deck-lock` JSON and declares `data-slide-type` / `data-rhythm` on every slide
- Passes `python3 scripts/validate_deck.py <deck.html> --strict`

Intermediate files (`deck_plan.md`, `deck_lock.json`) live alongside the HTML during generation. Only the `.html` is the user deliverable; planning files may be removed after validation passes.

## Customization

The default Obsidian theme works for most technical presentations. For other contexts, pick one of the **50 sampler themes** instead of improvising colors.

- **Foundational themes** — 12 palette + typography combinations in `references/themes.md`
- **Extended themes** — 38 additional directions; CSS in `references/style-presets.md` and/or `assets/theme-data.js`
- **Slugs** — full list in `references/theme-slugs.md`
- **Light theme**: Flip `--bg` to `#fafafa`, `--text` to `#1d1d1f`, adjust surface/border accordingly
- **Brand colors**: Replace `--accent` with the brand's primary color
- **Different fonts**: Change the Google Fonts import and `font-family` declarations
- **Wider slides**: Change base dimensions from 1280x720 to 1920x1080 for widescreen

See `references/visual-system.md` for the full token system and customization guide.
