# Slides

Professional presentation slides as self-contained HTML. No dependencies, no build step — open in any browser, present anywhere.

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

- **12 themes** — dark premium, light editorial, monochrome, and more
- **19 slide types** — from bold statements to inline SVG diagrams
- **Self-contained HTML** — single file, no external dependencies (except font CDN)
- **Speaker notes + timer** — press `N` for notes, `T` for timer
- **Keyboard navigation** — arrow keys, swipe, click, fullscreen (`F`)
- **Anti-AI design system** — rhythm rules that prevent generated-looking decks
- **1280x720 base** with automatic scaling to any screen

## Themes

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

1. **Theme selection** — you pick from 12 visual themes via an interactive sampler
2. **Narrative planning** — the skill structures your content into a coherent arc
3. **Slide generation** — each slide gets the right layout type for its content
4. **Speaker notes** — every slide includes notes for the presenter
5. **Single HTML output** — one file you can open, share, or host anywhere

The output is a single `.html` file with inline CSS, inline JS, and no build step. It renders at 1280x720 and scales automatically.

## Contributing

Contributions are welcome. Please keep changes focused:

- **New themes** — add to `references/themes.md` following the existing format
- **New slide types** — add to `references/slide-types.md` with HTML template and usage guidance
- **Bug fixes** — open an issue first if the fix is non-trivial

## License

[MIT](LICENSE)
