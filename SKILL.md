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

### 1. Choose a Theme (MUST be first)

**This step is mandatory and comes before anything else.** Open `assets/theme-sampler.html` in the browser so the user can see all 8 themes as high-fidelity preview cards:

```bash
open assets/theme-sampler.html
```

The sampler shows each theme with identical neutral content (same metrics, same cards, same layout), so the user compares pure visual style — not topic associations.

Then ask the user to pick one. **Do NOT auto-select a theme. Do NOT skip this step.** Even if the user's request implies urgency, the theme choice takes 5 seconds and affects the entire deck.

**Anti-AI theme selection**: NEVER recommend a theme based on topic keywords. "AI topic → purple/neon" is the same cliché as "finance → green" or "healthcare → blue." If the user asks "which fits my topic," recommend based on *presentation context* (formal → Paper/Ink, high-energy → Ember, minimal → Mono) not the topic's semantic field.

After the user picks a theme, read `references/themes.md` to get the exact CSS `:root` variables, Google Fonts URL, and `font-family` for that theme. Fill these into the template placeholders:
- `{{FONT_URL}}` — the Google Fonts `<link>` URL
- `{{FONT_FAMILY}}` — the `font-family` CSS value (including fallbacks)
- `{{THEME_VARS}}` — the complete `:root { ... }` CSS block

**Light theme note**: For Paper and Ink themes, some inline styles need adjustment — see the notes in themes.md for `.compare-side.old` backgrounds, badge/tag backgrounds, and notes panel colors.

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

### 4. Build the Deck

Read `assets/template.html` for the base HTML skeleton. This gives you the CSS design system, JavaScript engine (navigation, scaling, notes, timer), and structural boilerplate.

**CRITICAL: Follow the exact code order from `template.html`.** The template defines NOTES array and `updateNotes()` BEFORE `go()`, because `go()` calls `updateNotes()`. If NOTES is declared after `go(0)` is called, the script crashes with a TypeError and all keyboard/touch/click handlers fail to register. Never rearrange the JS execution order.

Read `references/slide-types.md` for the full catalog of slide type templates. Pick the right type for each slide's content.

Read `references/visual-system.md` when you need to customize colors, fonts, or create new visual elements beyond the standard types.

### 5. Write Speaker Notes

Every slide MUST have speaker notes in the `NOTES` array. Notes should be:
- Conversational, not a script — bullet points of what to say
- 2-4 sentences per slide (aim for ~30 seconds of talking per slide)
- Include transition phrases ("So now that we've seen X, let's talk about Y...")
- Mark audience interaction points ("Pause for questions", "Show of hands")

### 6. Self-Check

Before delivering, verify:
```
[ ] Narrative flows — each slide leads naturally to the next
[ ] No wall-of-text slides — if it has >40 words of body text, split or use visuals
[ ] Speaker notes complete for every slide
[ ] First slide has context (date, team, speaker name)
[ ] Last slide has a clear ending (CTA, summary, or memorable closing)
[ ] Slide count matches talk duration
[ ] All SVG diagrams render correctly
[ ] Font loads (Google Fonts CDN link present)
[ ] Hash navigation works (#1, #2, etc.)
[ ] Anti-AI: no two adjacent slides share the same layout type
[ ] Anti-AI: labels used on <40% of slides, never on Statement/Quote/Big Number/End
[ ] Anti-AI: max 2 callout boxes in the entire deck
[ ] Anti-AI: at least 1 Breath or Hero Image slide exists
[ ] Anti-AI: parallel cards (3-col, 4-grid) don't mirror sentence structure
[ ] Anti-AI: Summary grid has max 3 rows
```

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

## Customization

The default dark theme works for most technical presentations. For other contexts:

- **Light theme**: Flip `--bg` to `#fafafa`, `--text` to `#1d1d1f`, adjust surface/border accordingly
- **Brand colors**: Replace `--accent` with the brand's primary color
- **Different fonts**: Change the Google Fonts import and `font-family` declarations
- **Wider slides**: Change base dimensions from 1280x720 to 1920x1080 for widescreen

See `references/visual-system.md` for the full token system and customization guide.
