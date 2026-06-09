# Style Presets

These presets adapt the `ppt-master` brand / layout / deck / example library for single-file HTML slides.

Use them when the user wants a specific institutional style, industry deck style, government / enterprise presentation style, cultural editorial style, or a richer visual direction than the 12 core themes in `references/themes.md`.

Open `assets/theme-sampler.html` to preview them alongside the core themes.

## How To Use

1. Let the user choose either a core theme or a style preset from the sampler.
2. If they choose a style preset, use the CSS variables below instead of a core theme.
3. Apply the preset's layout DNA while still using the normal HTML slide types and deck contract.
4. Do not copy `ppt-master`'s SVG/PPTX workflow. These are visual-system presets for the HTML deck framework only.

Each preset maps to the standard theme placeholders:

- `{{FONT_URL}}`: use the listed Google Fonts URL or leave blank if using system/CJK fonts only.
- `{{FONT_FAMILY}}`: use the listed font family.
- `{{THEME_VARS}}`: use the listed `:root` block.

## Selection Rules

- **Brand presets** set identity only. Keep structure free unless the user also asks for a layout direction.
- **Layout presets** set composition, page framing, density, and rhythm. They do not imply a real organization brand.
- **Deck presets** set both identity and structure. Use them when the user asks for a company / industry deck flavor.
- **Example styles** adapt high-quality `ppt-master/examples/*/design_spec.md` decks into reusable visual directions. Use them when the user wants a distinctive editorial, cultural, technical, or experimental style without a real organization brand.
- For enterprise, government, medical, university, finance, cultural, and editorial decks, prefer a style preset over generic color themes.
- Avoid keyword auto-matching. If unsure, show the sampler and ask the user to pick.

## Quick Reference

| Preset | Kind | Mode | Best For |
|---|---|---|---|
| Anthropic | Brand | Light | AI product, LLM research, technical training |
| Google | Brand | Light | Product launches, developer events, ecosystem education |
| Academic Defense | Layout | Light | Thesis defense, research progress, grant applications |
| AI Ops | Layout | Light | Telecom AI operations, enterprise architecture, digital transformation |
| Government Blue | Layout | Light | Policy briefings, Five-Year Plan, project reports |
| Government Red | Layout | Light | Government reports, policy interpretation, official briefings |
| Medical University | Layout | Light | Medical academic reports, hospital training, case discussion |
| Pixel Retro | Layout | Dark | Programming tutorials, game talks, geek showcases |
| Psychology Attachment | Layout | Light | Counseling lectures, psychology training, healing topics |
| China Telecom | Deck | Light | Telecom /政企 digitalization, internal reporting |
| POWERCHINA Classic | Deck | Light | Engineering proposals, annual summaries, business reports |
| POWERCHINA Modern | Deck | Dark | Major engineering, international promotion, technology showcases |
| CATARC Business | Deck | Dark | Automotive certification, high-end business reporting |
| CATARC Classic | Deck | Light | Automotive evaluation, consulting-style reports |
| CATARC Modern | Deck | Dark | Forward-looking automotive strategy, technology launches |
| CMB Transaction Banking | Deck | Light | Finance products, transaction banking, client cases |
| Chongqing University | Deck | Light | Academic defense, research reports, teaching presentations |
| Brutalist Newspaper | Example | Light | Dense editorial reports, industry analysis, newspaper-style briefings |
| Glassmorphism SaaS | Example | Dark | SaaS product stories, AI platforms, future-facing demos |
| Swiss Grid | Example | Light | Design education, typographic lectures, minimalist cultural decks |
| Sugar Rush Memphis | Example | Light | Pop culture, music/festival, energetic youth-facing presentations |
| Risograph Zine | Example | Light | Indie publishing, art books, DIY cultural guides |
| Kubernetes Blueprint | Example | Dark | DevOps, SRE, infrastructure and architecture talks |
| Ink Wash Literati | Example | Light | Literary talks, philosophy, self-cultivation topics |
| Plant Dye Poetry | Example | Light | Traditional craft, culture, museum/education decks |
| Pritzker Editorial | Example | Light | Architecture and design magazine narratives |
| Global AI Capital | Example | Dark | Finance/news infographics, AI market analysis |
| Warm Home Editorial | Example | Dark | Interiors, home design trends, warm lifestyle decks |
| Fashion Magazine | Example | Dark | Fashion, luxury, brand/editorial digest decks |

---

## Brand Presets

### Anthropic

Restrained AI product identity. Conclusion-first, research-forward, no emoji.

```
Font URL: https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap
Font Family: 'DM Sans', 'Helvetica Neue', Arial, 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f8fafc;
  --border: #e2e8f0;
  --text: #191919;
  --text-2: #64748b;
  --text-3: #94a3b8;
  --accent: #d97757;
  --accent-dim: rgba(217,119,87,0.10);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: white canvas, black typography, orange accents, sparse cards, stroke icons, restrained copy.

### Google

Friendly multi-product identity. Modern, optimistic, and clear.

```
Font URL: https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap
Font Family: Roboto, 'Google Sans', 'PingFang SC', 'Noto Sans SC', sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f8fafd;
  --border: #e8eaed;
  --text: #202124;
  --text-2: #5f6368;
  --text-3: #9aa0a6;
  --accent: #4285f4;
  --accent-dim: rgba(66,133,244,0.10);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: white canvas, rounded product UI surfaces, multicolor accents (`#4285f4`, `#34a853`, `#fbbc05`, `#ea4335`), filled icons.

---

## Layout Presets

### Academic Defense

Rigorous thesis-defense structure with institutional header bars.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f4f7fb;
  --border: #d7e4f2;
  --text: #172033;
  --text-2: #4f5f70;
  --text-3: #8b99a8;
  --accent: #003366;
  --accent-dim: rgba(0,51,102,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: dark-blue top header, red left bar (`#cc0000`), key-message bar below header, disciplined card grids, footer metadata.

### AI Ops

Information-dense enterprise / telecom operations framing.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #fdf3eb;
  --border: #f8cbad;
  --text: #1f2933;
  --text-2: #5b6572;
  --text-3: #8b95a1;
  --accent: #c00000;
  --accent-dim: rgba(192,0,0,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: red vertical title bar, blue labels (`#2e75b6`), dashed zone frames, warm-gray overview panels, high information density.

### Government Blue

Modern official briefing style with blue gradient authority.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f3f8ff;
  --border: #d6e8ff;
  --text: #1a1a1a;
  --text-2: #5d6b7a;
  --text-3: #93a3b5;
  --accent: #0050b3;
  --accent-dim: rgba(0,80,179,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: blue top rule, numbered title block, clean white body, official but modern spacing.

### Government Red

Dignified official report style with red-blue institutional contrast.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #fbf5f4;
  --border: #ead7d5;
  --text: #1a1a1a;
  --text-2: #625a5a;
  --text-3: #9b8f8f;
  --accent: #8b0000;
  --accent-dim: rgba(139,0,0,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: red top rule, blue secondary lines, serious hierarchy, conservative page density.

### Medical University

Medical academic report style with blue trust and green life accents.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f2f8fd;
  --border: #d4e8f5;
  --text: #18314a;
  --text-2: #52677d;
  --text-3: #92a2b0;
  --accent: #0066b3;
  --accent-dim: rgba(0,102,179,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: medical-blue header, orange left bar (`#ff6b35`), life green (`#00a86b`) for positive / health signals, clean research cards.

### Pixel Retro

Retro gaming / programming style. Use deliberately.

```
Font URL: https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap
Font Family: 'JetBrains Mono', 'SF Mono', 'Noto Sans SC', monospace
```

```css
:root {
  --bg: #080a12;
  --surface: #101521;
  --border: #39ff14;
  --text: #f2fff0;
  --text-2: #9caeaa;
  --text-3: #5c6c68;
  --accent: #39ff14;
  --accent-dim: rgba(57,255,20,0.10);
  --mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
}
```

Layout DNA: zero-radius cards, 2-3px borders, scanline/grid backgrounds, blocky progress bars, neon green plus yellow/red secondary accents.

### Psychology Attachment

Warm professional psychology / counseling style.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --border: #e5e7eb;
  --text: #1e3348;
  --text-2: #5d6f7d;
  --text-3: #95a1ab;
  --accent: #2e5c8e;
  --accent-dim: rgba(46,92,142,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: blue-green gradient moments (`#2e5c8e` to `#3d8b7a`), warm orange highlights (`#e07843`), rounded 12-16px cards, soft quote/tip bars.

---

## Deck Presets

### China Telecom

Enterprise-government hybrid. Useful for telecom,政企 digitalization, and internal reporting.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f5f6f8;
  --border: #d9d9d9;
  --text: #2b2f33;
  --text-2: #6b7280;
  --text-3: #9ca3af;
  --accent: #c00000;
  --accent-dim: rgba(192,0,0,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: telecom red title bars, silver-gray structural lanes, restrained city / digital motifs, high-density report pages.

### POWERCHINA Classic

Composed engineering report style.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f4f6f8;
  --border: #d9e3ee;
  --text: #1a1a1a;
  --text-2: #4a5568;
  --text-3: #718096;
  --accent: #00418d;
  --accent-dim: rgba(0,65,141,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: POWERCHINA blue bars, secondary vibrant blue (`#0066cc`), occasional China red / gold for achievements.

### POWERCHINA Modern

Grand engineering narrative with deep-blue tech gradient.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #001f45;
  --surface: #072c61;
  --border: rgba(0,136,255,0.20);
  --text: #ffffff;
  --text-2: #cbd5e1;
  --text-3: #8090a5;
  --accent: #0088ff;
  --accent-dim: rgba(0,136,255,0.12);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: deep sea blue, precision grid, engineering white text, gold milestone accents.

### CATARC Business

Automotive certification and high-end reporting.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #003366;
  --surface: #001f4d;
  --border: rgba(0,122,204,0.22);
  --text: #ffffff;
  --text-2: #d7dee8;
  --text-3: #8ea0b4;
  --accent: #007acc;
  --accent-dim: rgba(0,122,204,0.12);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: deep-blue tech gradient, clean white content variants, red emphasis (`#d32f2f`) for alerts.

### CATARC Classic

Consulting-style automotive evaluation deck.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f5f5f5;
  --border: #e0e0e0;
  --text: #333333;
  --text-2: #666666;
  --text-3: #999999;
  --accent: #004098;
  --accent-dim: rgba(0,64,152,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: deep-blue top/bottom rules, square chapter number blocks, red for key warnings, green for certification success.

### CATARC Modern

Forward-looking automotive strategy release style.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: Arial, 'Noto Sans SC', 'PingFang SC', sans-serif
```

```css
:root {
  --bg: #001529;
  --surface: #002b52;
  --border: rgba(0,229,255,0.18);
  --text: #ffffff;
  --text-2: #c7d2df;
  --text-3: #748498;
  --accent: #1890ff;
  --accent-dim: rgba(24,144,255,0.12);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: immersive dark pages, neon cyan (`#00e5ff`), light-gray content pages when density increases.

### CMB Transaction Banking

Refined finance product deck.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #ffffff;
  --surface: #f7f7f7;
  --border: #e9e9e9;
  --text: #1f1f1f;
  --text-2: #666666;
  --text-3: #999999;
  --accent: #c8152d;
  --accent-dim: rgba(200,21,45,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: CMB red, deep red (`#8f0f1b`) for dark moments, finance blue (`#2175d9`) for secondary emphasis, practical case-study layouts.

### Chongqing University

Academic minimalism with mountain-city character.

```
Font URL: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap
Font Family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif
```

```css
:root {
  --bg: #fafcff;
  --surface: #e3f2fd;
  --border: #cce4f6;
  --text: #1a2e44;
  --text-2: #333d4a;
  --text-3: #6b7b8c;
  --accent: #006bb7;
  --accent-dim: rgba(0,107,183,0.08);
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}
```

Layout DNA: CQU blue, deep-blue chapter moments, dawn gold accents (`#d4a84b`), wave / terrain curves used sparingly.
