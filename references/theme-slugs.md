# Theme Slugs

Canonical slugs for all **50 themes** — use in `theme-demo.html?style=<slug>`, `deck_lock.json` `"theme"`, and sampler links. Slugs are generated from display names via `slugify()` in `assets/theme-data.js`.

Filter themes in the sampler by **light/dark** mode or **tags** (Editorial, Enterprise, Brand, High Density, etc.).

## All slugs

`academic-defense`, `academic-warm`, `agent-coral`, `ai-ops`, `anthropic`, `brutalist-newspaper`, `catarc-business`, `catarc-classic`, `catarc-modern`, `china-telecom`, `chongqing-university`, `cmb-transaction-banking`, `code-amber`, `consulting-gold`, `crimson`, `dusk`, `ember`, `fashion-magazine`, `forest`, `glacier`, `glassmorphism-saas`, `global-ai-capital`, `google`, `government-blue`, `government-red`, `heritage-brick`, `imperial-indigo`, `ink`, `ink-wash-literati`, `kubernetes-blueprint`, `medical-university`, `mono`, `neon`, `obsidian`, `paper`, `pixel-retro`, `plant-dye-poetry`, `powerchina-classic`, `powerchina-modern`, `pritzker-editorial`, `psychology-attachment`, `risograph-zine`, `sand`, `showcase-purple`, `slate`, `sugar-rush-memphis`, `swiss-grid`, `transformer-deep-read`, `urban-editorial`, `warm-home-editorial`

## Agent note: internal `kind` metadata

Each entry in `assets/theme-data.js` `previews[]` also has a `kind` field (`core`, `brand`, `layout`, `deck`, `example`). This is **not shown to users** but controls composition rules via `layoutDNA`. See `SKILL.md` → **Resolving Theme CSS**.
