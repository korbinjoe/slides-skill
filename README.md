# Slides

Professional presentation slides as self-contained HTML. No dependencies, no build step — open in any browser, present anywhere.

<img width="3840" height="15353" alt="image" src="https://github.com/user-attachments/assets/3a772176-f577-4920-9175-9da0947011dd" />

**[Theme Sampler](https://korbinjoe.github.io/slides-skill/)** · Browse all 50 themes with playable demo decks

Example output: [`examples/multi-agent-orchestration.html`](examples/multi-agent-orchestration.html) (open locally in a browser)

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

- **50 themes** — foundational palettes plus `ppt-master`-inspired editorial, enterprise, and industry directions
- **Interactive theme sampler** — preview every theme at [korbinjoe.github.io/slides-skill](https://korbinjoe.github.io/slides-skill/); filter by light/dark or tags
- **Playable theme demos** — each theme opens a full demo deck with navigation, fullscreen, timer, and speaker notes
- **19 slide types** — from bold statements to inline SVG diagrams
- **Self-contained HTML** — single file, no external dependencies (except font CDN)
- **Speaker notes + timer** — press `N` for notes, `T` for timer
- **Keyboard navigation** — arrow keys, swipe, click, fullscreen (`F`)
- **Deck contract + validator** — lock the plan, then check the generated HTML
- **Anti-AI design system** — rhythm rules that prevent generated-looking decks
- **1280x720 base** with automatic scaling to any screen

## Themes (50)

Preview all themes in the **[live sampler](https://korbinjoe.github.io/slides-skill/)**, or open `assets/theme-sampler.html` locally:

```bash
open assets/theme-sampler.html
```

Click any card to open `theme-demo.html?style=<slug>` — a full playable demo for that theme. Filter by light/dark or tags (Editorial, Enterprise, Brand, High Density, etc.).

### Foundational themes (12)

Documented in [`references/themes.md`](references/themes.md). Default starting point for most technical talks.

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

### Extended themes (38)

Adapted from `ppt-master`. Same sampler, same workflow — additional brand, enterprise, editorial, and industry directions.

| Documentation | Themes |
|---------------|--------|
| [`references/style-presets.md`](references/style-presets.md) | Anthropic, Google, Academic Defense, AI Ops, Government Blue/Red, Medical University, Pixel Retro, Psychology Attachment, China Telecom, POWERCHINA Classic/Modern, CATARC Business/Classic/Modern, CMB Transaction Banking, Chongqing University, Brutalist Newspaper, Glassmorphism SaaS, Swiss Grid, and 12 more listed in the quick reference table |
| [`assets/theme-data.js`](assets/theme-data.js) | All 50 themes (CSS variables, tags, demo content); sole source for expressive themes like Agent Coral, Code Amber, Ink Wash Literati |

Full slug list: [`references/theme-slugs.md`](references/theme-slugs.md).

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

The skill handles theme selection, narrative structure, slide type choices, and speaker notes. Agent workflow details live in [`SKILL.md`](SKILL.md).

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

1. **Theme selection** — pick from 50 themes via the [interactive sampler](https://korbinjoe.github.io/slides-skill/)
2. **Narrative planning** — the skill structures your content into a coherent arc
3. **Deck contract** — `deck_plan.md` and `deck_lock.json` keep theme slug, slide types, rhythm, and notes aligned
4. **Slide generation** — each slide gets the right layout type for its content
5. **Validation** — `scripts/validate_deck.py` checks structure, notes, anti-AI rhythm, and deck-lock consistency
6. **Single HTML output** — one file you can open, share, or host anywhere

The output is a single `.html` file with inline CSS, inline JS, and no build step. It renders at 1280x720 and scales automatically.

## Project Layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | Agent workflow and theme resolution rules |
| `assets/template.html` | Base deck skeleton |
| `assets/theme-sampler.html` | Interactive theme picker UI |
| `assets/theme-demo.html` | Playable demo decks per preset |
| `assets/theme-data.js` | Sampler data + theme CSS variables (metadata only) |
| `assets/theme-demos/` | Per-theme playable demo slide content (`{slug}.json`) |
| `assets/theme-demos.js` | Bundled demo content for `theme-demo.html` (generated) |
| `references/themes.md` | 12 core theme definitions |
| `references/style-presets.md` | Extended theme definitions (38 themes from `ppt-master`) |
| `references/theme-slugs.md` | Canonical slugs for all 50 themes |
| `references/slide-types.md` | Slide type HTML templates |
| `references/deck-contract.md` | Deck lock schema and rhythm rules |
| `scripts/validate_deck.py` | HTML deck validator |
| `scripts/verify_themes.py` | Theme count, slug uniqueness, doc sync |
| `scripts/sync_theme_slugs.py` | Regenerate `references/theme-slugs.md` from `theme-data.js` |
| `scripts/build_theme_demos.py` | Bundle `assets/theme-demos/*.json` into `theme-demos.js` |

## Validation

Generated decks should pass the local validator with zero errors and zero warnings:

```bash
python3 scripts/validate_deck.py path/to/deck.html --strict
```

Use `--strict` as the delivery gate — it treats Anti-AI rhythm rules, missing deck-lock, and missing slide metadata as failures.

The validator also checks `deck-lock` theme slugs against the sampler registry and compares per-slide `type`/`rhythm` between the lock and HTML.

Theme registry integrity (50 themes, unique slugs, `theme-slugs.md` in sync):

```bash
python3 scripts/verify_themes.py
python3 scripts/sync_theme_slugs.py   # regenerate slug doc after theme-data.js changes
```

CI runs `verify_themes.py`, the reference deck `--strict` check, and pytest on every push/PR.

Reference example: [`examples/multi-agent-orchestration.html`](examples/multi-agent-orchestration.html) passes `--strict`.

## Contributing

Contributions are welcome. Please keep changes focused:

- **New themes** — add to `assets/theme-data.js` and the sampler; add full CSS to `references/themes.md` or `references/style-presets.md` when applicable; add demo slides to `assets/theme-demos/<slug>.json`; run `python3 scripts/sync_theme_slugs.py` and `python3 scripts/build_theme_demos.py`
- **Sampler UI** — edit `assets/theme-sampler.html` and `assets/theme-demo.html` as needed
- **New slide types** — add to `references/slide-types.md` with HTML template and usage guidance
- **New visual patterns** — add selection rules to `references/visualizations.md`
- **GitHub Pages** — update `.github/workflows/pages.yml` when adding sampler assets
- **Bug fixes** — open an issue first if the fix is non-trivial

## License

[MIT](LICENSE)
