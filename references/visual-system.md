# Visual System

Design tokens and customization guide for the slides framework.

## Color Tokens

> **12 core theme presets are defined in `references/themes.md`** — including Obsidian, Glacier, Paper, Ink, Ember, Forest, Neon, Mono, Dusk, Slate, Sand, and Crimson. Brand / layout / industry deck presets adapted from `ppt-master` are defined in `references/style-presets.md`. See those files for complete `:root` CSS blocks, font URLs, and usage guidance.

### CSS Variable Reference

| Variable | Purpose |
|----------|---------|
| `--bg` | Page background |
| `--surface` | Card/block background |
| `--border` | Subtle dividers |
| `--text` | Primary text |
| `--text-2` | Secondary text |
| `--text-3` | Tertiary/muted text |
| `--accent` | Highlight color for CTAs, labels, big numbers |
| `--accent-dim` | Accent at low opacity for tinted backgrounds |
| `--mono` | Monospace font stack |

### Semantic Colors (inline, not in :root)

These are used inline for specific purposes:

| Color | Value | Usage |
|-------|-------|-------|
| Success | `#50c878` / `rgba(80,200,120,...)` | Positive states, "yes" options |
| Danger | `#ff5050` / `rgba(255,80,80,...)` | Warnings, negative states, "no" options |
| Complete | `#4ecd8c` / `rgba(78,205,140,...)` | Done states, success badges |
| Pro | `#4ade80` | Advantage items in comparisons |
| Con | `#f87171` | Disadvantage items in comparisons |

## Typography

### Font Stack

```
Display/Headings: 'Outfit' (Google Fonts)
System fallback: -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
Monospace: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace
```

### Type Scale

| Element | Size | Weight | Line-height | Letter-spacing |
|---------|------|--------|-------------|----------------|
| Cover h1 | 96px | 800 | 1.1 | -3px |
| h1 | 72px | 700 | 1.1 | -2px |
| h2 | 52px | 600 | 1.15 | -1.5px |
| Statement | 48px | 700 | 1.2 | -1.5px |
| h3 | 24px | 500 | 1.3 | — |
| Body | 20px | 400 | 1.6 | — |
| List item | 21px | 400 | 1.5 | — |
| Table | 19px | 400 | — | — |
| Label | 12px | 600 | — | 2px (uppercase) |
| Mono | 15px | 400 | 1.8 | — |
| Source | 14px | 400 | — | — (italic) |
| Dim | 14px | 400 | — | — |

### Font Options

Each theme preset in `references/themes.md` pairs a specific font with its color scheme. The fonts used across all themes:

| Font | Style | Used By |
|------|-------|---------|
| Outfit | Geometric display | Obsidian, Forest, Crimson |
| Inter | Technical, neutral | Glacier |
| DM Sans | Clean, rounded | Paper |
| Playfair Display | Serif, editorial | Ink |
| Space Grotesk | Bold, geometric | Ember, Neon |
| JetBrains Mono | Monospace, hacker | Mono |
| Sora | Refined geometric | Dusk |
| Manrope | Quiet corporate | Slate |
| Plus Jakarta Sans | Warm editorial | Sand |
| Noto Sans SC | CJK deck typography | style presets |

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Slide padding | 72px top/bottom, 128px left/right | Content frame |
| Cover bottom padding | 86px | Cover slide positioning |
| Section gap | 40px (two-col), 28px (three-col) | Grid gutters |
| Block padding | 20px | Content block internal spacing |
| Card padding | 16-24px | Card internal spacing |
| List item padding | 10px vertical | Between list items |
| Element margin | 12-20px | Between related elements |
| Big gap | 32-48px | Between distinct content groups |

## Component Patterns

### Accent-Bordered Card

```html
<div style="padding: 24px; background: var(--surface); border-radius: 10px; border-top: 3px solid var(--accent);">
  <p class="label">Card Label</p>
  <!-- content -->
</div>
```

### Callout Box

```html
<div style="padding: 14px 20px; background: var(--accent-dim); border-radius: 8px;">
  <p style="font-size: 16px; color: var(--text);">
    <span style="color: var(--accent); font-weight: 600;">Prefix →</span> Main message
  </p>
</div>
```

### Left-Bordered Insight

```html
<div style="padding: 14px 16px; background: var(--surface); border-radius: 8px; border-left: 3px solid var(--accent);">
  <p style="font-size: 14px; font-weight: 600; color: var(--text);">Title</p>
  <p style="font-size: 12px; color: var(--text-2);">Description</p>
</div>
```

### Inline Tag/Badge

```html
<span style="padding: 5px 10px; background: rgba(255,255,255,0.04); border-radius: 4px; font-size: 13px; color: var(--text);">Tag Text</span>
```

### Scenario Badge

```html
<div class="scenario">Label · Category</div>
```

### Pill Stat

```html
<div style="display: flex; align-items: baseline; gap: 8px;">
  <span style="font-size: 42px; font-weight: 700; color: var(--accent); letter-spacing: -1px;">42</span>
  <span style="font-size: 16px; color: var(--text-3);">unit label</span>
</div>
```

## SVG Conventions

### Arrow Markers

Define in `<defs>` at the start of each SVG:

```html
<defs>
  <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6" fill="#d4a04a"/>
  </marker>
  <marker id="arrowGray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6" fill="#666"/>
  </marker>
</defs>
```

### Node Styles

```
Primary node:   stroke="var(--accent)" stroke-width="2"
Secondary node: stroke="#666" or "#999" stroke-width="1.5"
Highlighted:    fill="rgba(212,160,74,0.15)" stroke="var(--accent)"
```

### Edge Styles

```
Solid connection:   stroke="var(--accent)" stroke-width="1.5"
Dashed relation:    stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="4,3"
Feedback/return:    stroke="rgba(212,160,74,0.4)" stroke-width="1.2" stroke-dasharray="5,3"
Secondary:          stroke="#666" stroke-width="1"
```

### Text in SVG

```
Labels: text-anchor="middle" fill="#ededed" font-size="10-14"
Muted:  text-anchor="middle" fill="#999" font-size="8-10"
Accent: text-anchor="middle" fill="#d4a04a" font-weight="600"
```

## Responsive Behavior

The deck renders at a fixed 1280x720 base and scales proportionally to fill the viewport. No CSS media queries needed — the JavaScript `scaleDeck()` function handles all sizing.

For widescreen (16:9 native), change the base to 1920x1080:
```js
// In scaleDeck():
const sw = window.innerWidth / 1920;
const sh = window.innerHeight / 1080;
// Also update #deck width/height
```

## Print / Export

The slides are designed for screen presentation. For PDF export:
1. Open in browser
2. Use browser Print (Cmd+P)
3. Set paper to Landscape, margins to None
4. Each slide becomes one page
