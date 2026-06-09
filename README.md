# Slides

Professional presentation slides as self-contained HTML. No dependencies, no build step — open in any browser, present anywhere.

[![Multi-Agent Orchestration](<img width="3840" height="15353" alt="image" src="https://github.com/user-attachments/assets/3a772176-f577-4920-9175-9da0947011dd" />
)](https://korbinjoe.github.io/slides-skill/)

[View Live Demo](https://korbinjoe.github.io/slides-skill/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Install

**skills.sh**
```bash
npx skills add korbinjoe/slides-skill
```

**Claude Code Plugin Marketplace**
```
/plugin marketplace add korbinjoe/slides-skill
/plugin install slides@slides-skill
```

**Manual**
```bash
git clone git@github.com:korbinjoe/slides-skill.git ~/.claude/skills/slides
```

---

## What You Get

- **41 visual directions** — 12 core themes plus brand, layout, deck, and example styles adapted from `ppt-master`
- **Playable theme demos** — every visual direction opens a full 6-slide deck preview
- **19 slide types** — from bold statements to inline SVG diagrams
- **Self-contained HTML** — single file, no external dependencies (except font CDN)
- **Speaker notes + timer** — press `N` for notes, `T` for timer
- **Keyboard navigation** — arrow keys, swipe, click, fullscreen (`F`)
- **Deck contract + validator** — lock the plan, then check the generated HTML
- **Anti-AI design system** — rhythm rules that prevent generated-looking decks
- **1280x720 base** with automatic scaling to any screen

## Themes And Style Presets

| Theme | Mode | Accent | Font | Best For |
|-------|------|--------|------|----------|
| Obsidian | Dark | Gold | Outfit | Tech keynotes, product launches |
| Glacier | Dark | Ice Blue | Inter | Data reports, engineering |
| Paper | Light | Apple Blue | DM Sans | Business, corporate |
| Ink | Light | Indigo | Playfair Display | Design, editorial |
| Ember | Dark | Orange-Red | Space Grotesk | Startup pitch, bold claims |
| Forest | Dark | Emerald | Outfit | Growth, sustainability |
| Neon | Dark | Hot Pink | Space Grotesk | Creative, high-energy |
| Mono | Dark | Pure White | JetBrains Mono | Developer talks, minimalist |
| Dusk | Dark | Dusty Rose | Sora | Refined, evening editorial |
| Slate | Dark | Steel Gray | Manrope | Understated, architectural |
| Sand | Light | Warm Brown | Plus Jakarta Sans | Luxury, artisanal |
| Crimson | Dark | Wine Red | Outfit | Authoritative, powerful |

The interactive sampler also includes `ppt-master`-inspired presets:

- **Brands**: Anthropic, Google
- **Layouts**: Academic Defense, AI Ops, Government Blue, Government Red, Medical University, Pixel Retro, Psychology Attachment
- **Deck presets**: China Telecom, POWERCHINA Classic/Modern, CATARC Business/Classic/Modern, CMB Transaction Banking, Chongqing University
- **Example styles**: Brutalist Newspaper, Glassmorphism SaaS, Swiss Grid, Sugar Rush Memphis, Risograph Zine, Kubernetes Blueprint, Ink Wash Literati, Plant Dye Poetry, Pritzker Editorial, Global AI Capital, Warm Home Editorial, Fashion Magazine

Click any sampler card to open a full playable demo deck in a new page. Demo decks support arrow-key navigation, swipe, click-to-advance, fullscreen (`F`), timer (`T`), and speaker notes (`N`).

## Quick Start

After installing, just describe what you want in natural language:

```
"Create a 15-minute talk about our new API architecture for the engineering team"
```

```
"Make a pitch deck for our seed round — 10 slides, keep it bold"
```

```
"I need slides for tomorrow's design review, covering the rebrand progress"
```

The skill handles theme selection, narrative structure, slide type choices, and speaker notes.

## Slide Types

| Type | Purpose |
|------|---------|
| Cover | Title slide with speaker, date, and context |
| Section Intro | Chapter divider between major sections |
| Statement | One bold claim, no label — the words do the work |
| Two Column | Side-by-side comparison or parallel content |
| Three Column | Feature grid with asymmetric variant |
| Big Number | Single metric as the hero element |
| Comparison | Before/after with visual distinction |
| Quote | Expert opinion or user testimonial |
| Flow | Process or pipeline with step markers |
| Code | Code snippets, terminal output, directory trees |
| Layer Stack | Hierarchical breakdown with tagged levels |
| Diagram | Inline SVG for architecture or topology |
| Stats Row | 2-3 horizontal metrics |
| Four Grid | 2x2 cards with hero+supporting variant |
| Timeline | Horizontal milestones for roadmaps |
| End | Closing slide — summary or memorable statement |
| Interactive Question | Audience engagement with voting options |
| Breath | Near-empty reset slide for pacing |
| Hero Image | Full-slide visual centerpiece with text overlay |

## Installation Details

### Option 1: skills.sh (recommended)

```bash
npx skills add korbinjoe/slides-skill
```

This registers the skill with Claude Code. It will be available in all future sessions.

### Option 2: Claude Code Plugin Marketplace

```
/plugin marketplace add korbinjoe/slides-skill
/plugin install slides@slides-skill
```

### Option 3: Manual

Clone the repository into your Claude Code skills directory:

```bash
git clone git@github.com:korbinjoe/slides-skill.git ~/.claude/skills/slides
```

Then add the skill path to your Claude Code configuration.

## How It Works

1. **Visual direction selection** — you pick from 12 core themes or `ppt-master`-inspired style presets via an interactive sampler
2. **Narrative planning** — the skill structures your content into a coherent arc
3. **Deck contract** — `deck_plan.md` and `deck_lock.json` keep theme, slide types, rhythm, and notes aligned
4. **Slide generation** — each slide gets the right layout type for its content
5. **Validation** — `scripts/validate_deck.py` checks structure, notes, anti-AI rhythm, and deck-lock consistency
6. **Single HTML output** — one file you can open, share, or host anywhere

The output is a single `.html` file with inline CSS, inline JS, and no build step. It renders at 1280x720 and scales automatically.

## Validation

Generated decks should pass the local validator:

```bash
python3 scripts/validate_deck.py path/to/deck.html
```

Use `--strict` for public examples or demos where warnings should fail the check.

## Contributing

Contributions are welcome. Please keep changes focused:

- **New themes** — add to `references/themes.md` following the existing format
- **New style presets** — add to `references/style-presets.md` and the sampler data in `assets/theme-sampler.html`
- **New slide types** — add to `references/slide-types.md` with HTML template and usage guidance
- **New visual patterns** — add selection rules to `references/visualizations.md`
- **Bug fixes** — open an issue first if the fix is non-trivial

## License

[MIT](LICENSE)
