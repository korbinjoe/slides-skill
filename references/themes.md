# Theme Presets

12 foundational themes for slides. Each defines colors, typography, and mood.

These are 12 of the **50 themes** in the sampler. For the full set — including enterprise, editorial, and industry themes from `ppt-master` — see `references/style-presets.md` and `assets/theme-data.js`.

---

## Quick Reference

| Theme | Mode | Accent | Font | Best For |
|-------|------|--------|------|----------|
| [Obsidian](#obsidian) | Dark | Gold | Outfit | Tech keynotes, product launches |
| [Glacier](#glacier) | Dark | Ice Blue | Inter | Data reports, engineering |
| [Paper](#paper) | Light | Apple Blue | DM Sans | Business, corporate |
| [Ink](#ink) | Light | Indigo | Playfair Display | Design, editorial |
| [Ember](#ember) | Dark | Orange-Red | Space Grotesk | Startup pitch, bold claims |
| [Forest](#forest) | Dark | Emerald | Outfit | Growth, sustainability |
| [Neon](#neon) | Dark | Hot Pink | Space Grotesk | Creative, high-energy |
| [Mono](#mono) | Dark | Pure White | JetBrains Mono | Developer talks, minimalist |
| [Dusk](#dusk) | Dark | Dusty Rose | Sora | Refined, evening editorial |
| [Slate](#slate) | Dark | Steel Gray | Manrope | Understated, architectural |
| [Sand](#sand) | Light | Warm Brown | Plus Jakarta Sans | Luxury, artisanal |
| [Crimson](#crimson) | Dark | Wine Red | Outfit | Authoritative, powerful |

---

## Obsidian

> Dark premium with gold accents. Think Linear/Stripe keynotes.

**Best for**: Technical sharing sessions, product releases, team demos

```
Font URL: https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap
Font Family: 'Outfit', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #0f0f0f;
  --surface: #171717;
  --border: rgba(255,255,255,0.06);
  --text: #ededed;
  --text-2: #999;
  --text-3: #666;
  --accent: #d4a04a;
  --accent-dim: rgba(212,160,74,0.12);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Glacier

> Deep navy canvas with cool blue highlights. Clean and data-friendly.

**Best for**: Data analysis, engineering reviews, technical deep-dives

```
Font URL: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap
Font Family: 'Inter', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #0a1628;
  --surface: #0f1f38;
  --border: rgba(93,173,236,0.1);
  --text: #e8edf4;
  --text-2: #8a9bb5;
  --text-3: #4a6080;
  --accent: #5dadec;
  --accent-dim: rgba(93,173,236,0.1);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Paper

> Clean white canvas with Apple-style blue. Professional and approachable.

**Best for**: Business presentations, product demos, corporate decks

```
Font URL: https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap
Font Family: 'DM Sans', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #fafafa;
  --surface: #ffffff;
  --border: rgba(0,0,0,0.06);
  --text: #1d1d1f;
  --text-2: #6e6e73;
  --text-3: #aeaeb2;
  --accent: #0071e3;
  --accent-dim: rgba(0,113,227,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

**Note**: Light theme needs adjusted inline styles for comparison/old-side backgrounds:
- `.compare-side.old`: use `background: rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.08);`
- Inline badge/tag backgrounds: use `rgba(0,0,0,0.04)` instead of `rgba(255,255,255,0.04)`
- Notes panel background: use `rgba(245,245,245,0.95)` with `color: rgba(0,0,0,0.8)`

---

## Ink

> Warm cream paper with deep indigo. Editorial, literary, refined.

**Best for**: Design reviews, brand storytelling, conference talks

```
Font URL: https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap
Font Family: 'Playfair Display', Georgia, 'PingFang SC', 'Noto Sans SC', serif
```

```css
:root {
  --bg: #f5f0eb;
  --surface: #fffdf9;
  --border: rgba(61,90,128,0.1);
  --text: #2b2b2b;
  --text-2: #5c5c5c;
  --text-3: #9a9a9a;
  --accent: #3d5a80;
  --accent-dim: rgba(61,90,128,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

**Note**: Same light-theme inline style adjustments as Paper apply here.

---

## Ember

> Deep charcoal with warm orange-red energy. Bold and assertive.

**Best for**: Startup pitches, provocative talks, product vision

```
Font URL: https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap
Font Family: 'Space Grotesk', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #1a1210;
  --surface: #251c18;
  --border: rgba(232,93,58,0.1);
  --text: #f0e6e0;
  --text-2: #b09a8e;
  --text-3: #6b584c;
  --accent: #e85d3a;
  --accent-dim: rgba(232,93,58,0.1);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Forest

> Deep green canvas with emerald highlights. Organic and grounded.

**Best for**: Growth reports, sustainability, OKR reviews

```
Font URL: https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap
Font Family: 'Outfit', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #0d1912;
  --surface: #142218;
  --border: rgba(60,179,113,0.1);
  --text: #e0efe6;
  --text-2: #8ab89e;
  --text-3: #4a7a60;
  --accent: #3cb371;
  --accent-dim: rgba(60,179,113,0.1);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Neon

> Deep dark canvas with hot pink neon glow. Bold and electric.

**Best for**: Creative showcases, high-energy demos, bold visual identity

```
Font URL: https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap
Font Family: 'Space Grotesk', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #0d0d12;
  --surface: #1a1a22;
  --border: rgba(236,72,153,0.1);
  --text: #f0eaee;
  --text-2: #a0909a;
  --text-3: #605058;
  --accent: #ec4899;
  --accent-dim: rgba(236,72,153,0.1);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Mono

> Pure black and white. No color accent. Maximum contrast, zero distraction.

**Best for**: Developer talks, open-source demos, minimalist aesthetics

```
Font URL: https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap
Font Family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace
```

```css
:root {
  --bg: #111111;
  --surface: #1a1a1a;
  --border: rgba(255,255,255,0.08);
  --text: #ffffff;
  --text-2: #a0a0a0;
  --text-3: #555555;
  --accent: #ffffff;
  --accent-dim: rgba(255,255,255,0.06);
  --mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
}
```

**Note**: Since accent is white, the `.scenario` badge (which uses `color: var(--bg); background: var(--accent)`) will show white-on-black — this is correct and intended for Mono theme.

---

## Dusk

> Deep warm dark with muted rose accents. Refined, editorial, evening atmosphere.

**Best for**: Refined presentations, evening events, thoughtful retrospectives

```
Font URL: https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap
Font Family: 'Sora', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #13101a;
  --surface: #1c1824;
  --border: rgba(196,137,154,0.1);
  --text: #ede6ea;
  --text-2: #a8949e;
  --text-3: #6a5862;
  --accent: #c4899a;
  --accent-dim: rgba(196,137,154,0.1);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Slate

> Cool dark gray with restrained steel accents. The quietest theme — confidence through understatement.

**Best for**: Understated authority, architecture, premium corporate

```
Font URL: https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap
Font Family: 'Manrope', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #111318;
  --surface: #191c22;
  --border: rgba(148,163,184,0.08);
  --text: #e2e6ec;
  --text-2: #8892a4;
  --text-3: #4e5668;
  --accent: #94a3b8;
  --accent-dim: rgba(148,163,184,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Sand

> Warm cream canvas with earthy brown accents. Feels like a luxury print magazine.

**Best for**: Luxury branding, editorial, warm storytelling

```
Font URL: https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap
Font Family: 'Plus Jakarta Sans', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #f7f3ee;
  --surface: #fffdf9;
  --border: rgba(150,115,77,0.1);
  --text: #2c2418;
  --text-2: #7a6b58;
  --text-3: #b0a290;
  --accent: #96734d;
  --accent-dim: rgba(150,115,77,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

**Note**: Light theme — same inline style adjustments as Paper/Ink apply here.

---

## Crimson

> Deep dark with concentrated wine-red accents. Power without shouting.

**Best for**: Authoritative presentations, leadership talks, high-stakes pitches

```
Font URL: https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap
Font Family: 'Outfit', -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #120c0e;
  --surface: #1c1416;
  --border: rgba(190,18,60,0.1);
  --text: #f0e8ea;
  --text-2: #a89098;
  --text-3: #604850;
  --accent: #be123c;
  --accent-dim: rgba(190,18,60,0.1);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## Creating Custom Themes

To create a new theme, define these 8 CSS variables:

| Variable | Purpose |
|----------|---------|
| `--bg` | Page background |
| `--surface` | Card/block background (slightly lighter/darker than bg) |
| `--border` | Subtle dividers (use accent color at ~6-10% opacity) |
| `--text` | Primary text (high contrast against bg) |
| `--text-2` | Secondary text (~60% contrast) |
| `--text-3` | Tertiary/muted text (~35% contrast) |
| `--accent` | Highlight color for CTAs, labels, big numbers |
| `--accent-dim` | Accent at ~8-12% opacity for tinted backgrounds |

Rules:
- `--bg` → `--surface` contrast should be subtle (5-10% difference)
- `--text` must have WCAG AA contrast ratio against `--bg` (4.5:1 minimum)
- `--accent` should pop against both `--bg` and `--surface`
- `--accent-dim` = accent color at 8-12% opacity
- `--border` = accent color at 6-10% opacity, or white/black at 6%
