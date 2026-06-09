---
name: slides
description: >
  Create professional presentation slides as a single self-contained HTML file.
  Use when users want to make slides, presentations, decks, pitch decks, keynotes,
  or any kind of slideshow. Also applies to "make me a presentation about...",
  "create slides for my talk", "I need to present X", "help me prepare a deck".
  Proactively use this skill when the user mentions presentations, talks, sharing sessions,
  team demos, or conference speaking — even if they don't say "slides" explicitly.
---

# Slides

Create stunning presentation decks as single self-contained HTML files. No dependencies, no build step — open in any browser, present anywhere.

## Design Philosophy

This is not PowerPoint-as-HTML. These are **developer-grade presentations** with:

- Dark premium aesthetic (think Linear/Stripe keynotes, not corporate templates)
- Precise typography with display fonts (Outfit by default)
- Intentional whitespace and visual hierarchy
- Inline SVG diagrams instead of imported images
- Speaker notes, timer, and keyboard navigation built in

## Workflow

### 1. Choose a Theme or Style Preset (MUST be first)

**This step is mandatory and comes before anything else.** Open `assets/theme-sampler.html` in the browser so the user can see all visual directions as high-fidelity preview cards:

```bash
open assets/theme-sampler.html
```

The sampler includes:
- 12 core themes from `references/themes.md`
- Brand / layout / deck presets and example styles adapted from `ppt-master` in `references/style-presets.md`

The sampler shows each option with identical neutral content for fast comparison. Clicking any card opens `assets/theme-demo.html?style=<slug>` in a new page with a full 6-slide playable demo deck, including navigation, fullscreen, timer, and speaker notes.

Then ask the user to pick one. **Do NOT auto-select a theme. Do NOT skip this step.** Even if the user's request implies urgency, the theme choice takes 5 seconds and affects the entire deck.

**Anti-AI theme selection**: NEVER recommend a theme based on topic keywords. "AI topic → purple/neon" is the same cliché as "finance → green" or "healthcare → blue." If the user asks "which fits my topic," recommend based on *presentation context* (formal → Paper/Ink, high-energy → Ember, minimal → Mono) not the topic's semantic field.

After the user picks:
- Core theme: read `references/themes.md`
- Brand / layout / deck / example preset: read `references/style-presets.md`

Use the exact CSS `:root` variables, Google Fonts URL, `font-family`, and layout DNA for that option. Fill these into the template placeholders:
- `{{FONT_URL}}` — the Google Fonts `<link>` URL
- `{{FONT_FAMILY}}` — the `font-family` CSS value (including fallbacks)
- `{{THEME_VARS}}` — the complete `:root { ... }` CSS block

**Light theme note**: For light themes and presets, some inline styles need adjustment — see the notes in themes.md and style-presets.md for `.compare-side.old` backgrounds, badge/tag backgrounds, and notes panel colors.

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

Read `references/deck-contract.md`. Before writing HTML, create a compact `deck_plan.md` and `deck_lock.json` for the deck in the output directory or alongside the final HTML.

The contract is mandatory because it prevents drift between narrative, theme, slide types, pacing, and speaker notes. `deck_lock.json` MUST include:
- Chosen theme, canvas size, and font family
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

Use the allowed values from `references/deck-contract.md`. If a slide type is missing, the validator will infer it but this is treated as a warning and should be fixed.

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
```

Fix every `ERROR` before delivering. Resolve `WARNING`s when the fix improves clarity or reliability. Use `--strict` when preparing a demo or public example.

Validator-backed checks:
```
[ ] No unresolved template placeholders
[ ] Exactly one active slide, and it is the first slide
[ ] Speaker notes complete for every slide
[ ] Slide count matches NOTES count and deck-lock count
[ ] Font URL is present
[ ] Hash navigation, keyboard navigation, notes, timer, and scaling code are present
[ ] No unknown slide type or rhythm values
[ ] Anti-AI: no two adjacent slides share the same layout type
[ ] Anti-AI: labels used on <40% of slides, never on Statement/Quote/Big Number/End/Breath
[ ] Anti-AI: max 2 callout boxes in the entire deck
[ ] Anti-AI: at least 1 Breath or Hero Image slide exists in decks with 8+ slides
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

These rules prevent the deck from feeling machine-generated. Violating them is the #1 quality issue.

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
- Passes `python3 scripts/validate_deck.py <deck.html>` with zero errors

## Customization

The default dark theme works for most technical presentations. For other contexts:

- **Light theme**: Flip `--bg` to `#fafafa`, `--text` to `#1d1d1f`, adjust surface/border accordingly
- **Brand colors**: Replace `--accent` with the brand's primary color
- **Different fonts**: Change the Google Fonts import and `font-family` declarations
- **Wider slides**: Change base dimensions from 1280x720 to 1920x1080 for widescreen

See `references/visual-system.md` for the full token system and customization guide.
