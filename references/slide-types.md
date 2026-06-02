# Slide Type Templates

A catalog of reusable slide layouts. Each type serves a specific narrative purpose.
Pick the right type for each slide's content — don't default to bullet lists.

## Table of Contents

1. [Cover](#cover) — Title slide, first impression
2. [Section Intro](#section-intro) — Chapter divider
3. [Statement](#statement) — One bold claim (no label)
4. [Two Column](#two-column) — Side-by-side comparison or parallel content
5. [Three Column](#three-column) — Feature grid, with asymmetric variant
6. [Big Number](#big-number) — Data-driven impact (no label)
7. [Comparison](#comparison) — Before/After or Old/New
8. [Quote](#quote) — Expert opinion or user voice (no label)
9. [Flow](#flow) — Process or pipeline
10. [Code](#code) — Code snippet or terminal output
11. [Layer Stack](#layer-stack) — Hierarchical breakdown
12. [Diagram](#diagram) — SVG-based visual explanation
13. [Stats Row](#stats-row) — Metrics, prefer 2-3 over 4+
14. [Four Grid](#four-grid) — 2x2 cards, with hero+supporting variant
15. [Timeline](#timeline) — Chronological events
16. [End](#end) — Closing slide (max 3 summary rows, no callout)
17. [Interactive Question](#interactive-question) — Audience engagement
18. [Breath](#breath) — Near-empty reset slide
19. [Hero Image](#hero-image) — Full-slide visual centerpiece
20. [Rhythm & Anti-AI Guide](#rhythm--anti-ai-guide) — Composition rules

---

## Cover

The opening slide. Sets tone, provides context. Use `class="slide cover active"` for the first slide.

```html
<div class="slide cover active">
  <p style="font-size: 14px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-3); margin-bottom: 20px;">TEAM NAME · DATE</p>
  <h1>Presentation Title</h1>
  <p style="margin-top: 12px; font-size: 20px; color: var(--text-2);">Subtitle or tagline</p>
  <p style="margin-top: 16px; font-size: 16px; color: var(--text-3); font-weight: 400;">Speaker: Name</p>
</div>
```

**When to use**: Always the first slide. Include team/org context, date, speaker name.

---

## Section Intro

Chapter divider. Signals a topic shift. Minimal content, maximum breathing room.

```html
<div class="slide section-intro">
  <div class="label">Part N · Section Label</div>
  <h2>Section Title</h2>
  <p style="margin-top: 8px; font-size: 18px; color: var(--text-2);">Optional one-line subtitle</p>
</div>
```

**When to use**: Between major sections. Gives the audience a mental reset.

---

## Statement

One bold claim that fills the slide. No supporting detail — the speaker provides context verbally. **No label** — the statement itself is the entry point. Adding a label above a statement weakens it.

```html
<div class="slide" style="align-items: flex-start;">
  <p style="font-size: 48px; font-weight: 700; line-height: 1.2; color: var(--text); letter-spacing: -1.5px; max-width: 18ch;">The bold<br>statement here</p>
  <p style="margin-top: 20px; font-size: 20px; color: var(--text-2); max-width: 36ch;">One supporting sentence that adds nuance.</p>
</div>
```

**When to use**: Key insights, provocative claims, transitions. The fewer words, the stronger the impact.

---

## Two Column

Side-by-side layout for comparisons, parallel concepts, or text + visual.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Slide Title</h3>
  <div class="two-col">
    <div class="block bordered">
      <h4>Left Column Title</h4>
      <p>Left column content. Keep it concise.</p>
    </div>
    <div class="block bordered">
      <h4>Right Column Title</h4>
      <p>Right column content. Mirror the structure.</p>
    </div>
  </div>
</div>
```

**Variant — Cards with surface background:**

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 16px; width: 100%;">
  <div style="padding: 24px; background: var(--surface); border-radius: 10px; border-top: 3px solid var(--accent);">
    <p class="label">Card Label</p>
    <p style="font-size: 16px; color: var(--text-2); line-height: 1.6;">Card content here.</p>
  </div>
  <div style="padding: 24px; background: var(--surface); border-radius: 10px; border-top: 3px solid var(--accent);">
    <p class="label">Card Label</p>
    <p style="font-size: 16px; color: var(--text-2); line-height: 1.6;">Card content here.</p>
  </div>
</div>
```

**When to use**: Any time you have two parallel concepts, before/after states, or pros/cons.

---

## Three Column

Three content blocks. Default is equal-width, but **prefer the asymmetric variant** to avoid the "three pillars" AI pattern.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Slide Title</h3>
  <div class="three-col">
    <div style="padding: 18px; background: var(--surface); border-radius: 8px; border-top: 2px solid var(--accent);">
      <p style="font-size: 22px; font-weight: 600; color: var(--text); margin-bottom: 6px;">Heading</p>
      <p style="font-size: 14px; color: var(--text-3);">Description text</p>
    </div>
    <div style="padding: 18px; background: var(--surface); border-radius: 8px; border-top: 2px solid var(--accent);">
      <p style="font-size: 22px; font-weight: 600; color: var(--text); margin-bottom: 6px;">Heading</p>
      <p style="font-size: 14px; color: var(--text-3);">Description text</p>
    </div>
    <div style="padding: 18px; background: var(--surface); border-radius: 8px; border-top: 2px solid var(--accent);">
      <p style="font-size: 22px; font-weight: 600; color: var(--text); margin-bottom: 6px;">Heading</p>
      <p style="font-size: 14px; color: var(--text-3);">Description text</p>
    </div>
  </div>
</div>
```

**Variant — 1-big + 2-small (asymmetric, preferred):**

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Slide Title</h3>
  <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; margin-top: 20px;">
    <div style="padding: 24px; background: var(--surface); border-radius: 10px; border-left: 3px solid var(--accent); grid-row: span 2;">
      <p style="font-size: 24px; font-weight: 600; color: var(--text); margin-bottom: 10px;">Primary Point</p>
      <p style="font-size: 16px; color: var(--text-2); line-height: 1.6;">The main idea gets more space and visual weight. This breaks the "three equal boxes" AI pattern.</p>
    </div>
    <div style="padding: 16px; background: var(--surface); border-radius: 8px;">
      <p style="font-size: 17px; font-weight: 600; color: var(--text); margin-bottom: 4px;">Secondary</p>
      <p style="font-size: 13px; color: var(--text-3);">Supporting point</p>
    </div>
    <div style="padding: 16px; background: var(--surface); border-radius: 8px;">
      <p style="font-size: 17px; font-weight: 600; color: var(--text); margin-bottom: 4px;">Tertiary</p>
      <p style="font-size: 13px; color: var(--text-3);">Supporting point</p>
    </div>
  </div>
</div>
```

**Anti-pattern**: Don't give all three columns identical structure (same label, same heading size, same description length). Vary the content depth — one column can be a number, another a sentence, another a list.

**When to use**: Feature lists, multi-option comparisons. Use asymmetric variant when one point matters more than the others.

---

## Big Number

A single metric that tells the story. The number is the hero. **No label needed** — the number itself is the entry point.

```html
<div class="slide" style="align-items: flex-start;">
  <div style="display: flex; align-items: baseline; gap: 16px; margin: 12px 0 24px;">
    <span style="font-size: 120px; font-weight: 800; color: var(--accent); letter-spacing: -4px; line-height: 1;">93%</span>
    <span style="font-size: 22px; color: var(--text-2);">descriptive label for the number</span>
  </div>
  <p style="font-size: 18px; color: var(--text-3); max-width: 50ch;">Supporting context that explains why this number matters.</p>
  <p class="source">Source citation — Year</p>
</div>
```

**When to use**: Whenever you have a compelling metric. One number per slide. Don't force a label — the number speaks for itself.

---

## Comparison

Before/After or Old/New with visual distinction between sides.

```html
<div class="slide">
  <h3>Slide Title</h3>
  <div class="compare" style="margin-top: 12px;">
    <div class="compare-side old">
      <div class="title">Before</div>
      <p style="font-size: 28px; font-weight: 700; color: var(--text-3);">Old Value</p>
      <p style="font-size: 15px;">Description</p>
    </div>
    <div class="compare-arrow">→</div>
    <div class="compare-side new">
      <div class="title">After</div>
      <p style="font-size: 28px; font-weight: 700; color: var(--accent);">New Value</p>
      <p style="font-size: 15px;">Description</p>
    </div>
  </div>
  <p class="source">Data source</p>
</div>
```

**When to use**: Impact demonstration, A/B results, state transitions.

---

## Quote

Expert opinion, user testimonial, or memorable phrase. **No label** — the quote mark and left border are enough visual signal.

```html
<div class="slide" style="align-items: flex-start;">
  <div class="quote-block">
    <p>"The quoted text goes here. Keep it under two lines for readability."</p>
    <div class="attr">— Author Name, Title/Organization</div>
  </div>
  <p style="margin-top: 20px; font-size: 18px; color: var(--text-2); max-width: 50ch;">Optional commentary that connects the quote to your narrative.</p>
</div>
```

**When to use**: Authority backing, user voice, provocative industry opinions. Don't add a "QUOTE TYPE" label above — it's redundant and breaks the mood.

---

## Flow

Process visualization using CSS flex boxes and arrows.

```html
<div class="slide">
  <h3>Process Title</h3>
  <div class="flow-visual">
    <div class="flow-step active-step">Step 1</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">Step 2</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step">Step 3</div>
    <div class="flow-arrow">→</div>
    <div class="flow-step active-step">Step 4</div>
  </div>
  <p style="margin-top: 16px; font-size: 16px; color: var(--text-3);">Supporting explanation of the process.</p>
</div>
```

Use `active-step` class to highlight key steps (typically the start and end, or the current focus).

**When to use**: Workflows, pipelines, user journeys, deployment processes.

---

## Code

Code snippet or terminal output. Uses monospace styling.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Code Title</h3>
  <div class="mono">Agent(
  name="reviewer",
  instructions="You are a code reviewer...",
  tools=[read_file, search],
  handoffs=[qa_agent]
)</div>
  <p style="margin-top: 12px; font-size: 16px; color: var(--text-3);">Explanation of what this code demonstrates.</p>
</div>
```

**Variant — Directory tree:**

```html
<div class="mono" style="font-size: 12px; line-height: 1.65;">project/
├── SKILL.md      <span style="color: var(--accent);"># Main instructions</span>
├── scripts/      <span style="color: var(--text-3);"># Executable tools</span>
├── references/   <span style="color: var(--text-3);"># Domain knowledge</span>
└── assets/       <span style="color: var(--text-3);"># Templates & files</span></div>
```

**When to use**: API examples, configuration snippets, file structures, terminal output.

---

## Layer Stack

Hierarchical breakdown with tagged levels. Good for architectures and taxonomies.

```html
<div class="slide">
  <h3>Stack Title</h3>
  <div class="layer-stack">
    <div class="layer-item">
      <span class="layer-tag" style="color: var(--accent);">L4</span>
      <span class="layer-content">Top level description</span>
    </div>
    <div class="layer-item">
      <span class="layer-tag">L3</span>
      <span class="layer-content">Third level description</span>
    </div>
    <div class="layer-item">
      <span class="layer-tag">L2</span>
      <span class="layer-content">Second level description</span>
    </div>
    <div class="layer-item">
      <span class="layer-tag">L1</span>
      <span class="layer-content">Base level description</span>
    </div>
  </div>
</div>
```

**When to use**: Architecture layers, organizational hierarchies, maturity models.

---

## Diagram

Inline SVG for custom visuals — network diagrams, flow charts, topologies.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Diagram Title</h3>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 12px; width: 100%;">
    <!-- Left: SVG diagram -->
    <svg viewBox="0 0 300 200" style="width: 100%; max-width: 320px;">
      <!-- SVG nodes, edges, labels -->
      <circle cx="150" cy="100" r="28" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <text x="150" y="106" text-anchor="middle" fill="var(--accent)" font-size="14">Node</text>
    </svg>
    <!-- Right: text explanation -->
    <div>
      <p style="font-size: 18px; color: var(--text);">Key insight from the diagram.</p>
      <p style="font-size: 16px; color: var(--text-2); margin-top: 8px;">Supporting explanation.</p>
    </div>
  </div>
</div>
```

**SVG tips:**
- Use `var(--accent)` for highlighted elements, `#666`/`#999` for secondary
- Keep viewBox proportional to available space
- Use `text-anchor="middle"` for centered labels
- Dashed lines for relationships: `stroke-dasharray="4,3"`
- Arrow markers for direction (define in `<defs>`)

**When to use**: Anything that's better shown than told — architectures, topologies, data flows.

---

## Stats Row

Multiple metrics displayed horizontally. **Use 2-3 stats, not 4+** — fewer numbers hit harder.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Performance Metrics</h3>
  <div class="stat-row">
    <div class="stat">
      <div class="stat-num">90%</div>
      <div class="stat-label">Speed improvement</div>
    </div>
    <div class="stat">
      <div class="stat-num">3-5</div>
      <div class="stat-label">Parallel agents</div>
    </div>
    <div class="stat">
      <div class="stat-num">15x</div>
      <div class="stat-label">Token cost</div>
    </div>
  </div>
</div>
```

**Variant — One hero stat + supporting context:**

```html
<div class="slide" style="align-items: flex-start;">
  <div style="display: flex; align-items: baseline; gap: 16px; margin: 12px 0;">
    <span style="font-size: 96px; font-weight: 800; color: var(--accent); letter-spacing: -3px; line-height: 1;">90%</span>
    <span style="font-size: 20px; color: var(--text-2);">faster delivery</span>
  </div>
  <div style="display: flex; gap: 32px; margin-top: 24px;">
    <div>
      <p style="font-size: 28px; font-weight: 700; color: var(--text);">3-5</p>
      <p style="font-size: 13px; color: var(--text-3);">Parallel agents</p>
    </div>
    <div>
      <p style="font-size: 28px; font-weight: 700; color: var(--text);">15x</p>
      <p style="font-size: 13px; color: var(--text-3);">Token savings</p>
    </div>
  </div>
</div>
```

**Anti-pattern**: Filling exactly 4 stat slots with padding metrics (like "0 外部依赖") just to fill space. If you only have 2 real numbers, show 2. A slide with one powerful stat beats four mediocre ones.

**When to use**: Performance results, project metrics. Prefer the hero variant when one number is clearly the star.

---

## Four Grid

2x2 card layout. **Vary the card content** — don't make all four cards identical in structure.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Grid Title</h3>
  <div class="four-grid">
    <div class="block">
      <h4>Card 1</h4>
      <p>Description for card one.</p>
    </div>
    <div class="block">
      <h4>Card 2</h4>
      <p>Description for card two.</p>
    </div>
    <div class="block">
      <h4>Card 3</h4>
      <p>Description for card three.</p>
    </div>
    <div class="block">
      <h4>Card 4</h4>
      <p>Description for card four.</p>
    </div>
  </div>
</div>
```

**Variant — 1-hero + 3-supporting (asymmetric):**

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Grid Title</h3>
  <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; gap: 16px; margin-top: 16px;">
    <div style="grid-column: span 2; padding: 20px 24px; background: var(--accent-dim); border-radius: 10px; border-left: 3px solid var(--accent);">
      <p style="font-size: 20px; font-weight: 600; color: var(--text);">The headline card — gets full width and accent treatment</p>
      <p style="font-size: 15px; color: var(--text-2); margin-top: 6px;">This is the most important of the four points.</p>
    </div>
    <div style="padding: 16px; background: var(--surface); border-radius: 8px;">
      <h4 style="font-size: 15px; margin-bottom: 4px;">Card 2</h4>
      <p style="font-size: 13px; color: var(--text-3);">Secondary detail.</p>
    </div>
    <div style="padding: 16px; background: var(--surface); border-radius: 8px;">
      <h4 style="font-size: 15px; margin-bottom: 4px;">Card 3</h4>
      <p style="font-size: 13px; color: var(--text-3);">Secondary detail.</p>
    </div>
  </div>
</div>
```

**Anti-pattern**: Four cards with identical sentence structure ("XXX。深色主题 + YYY，ZZZ 友好。") is the most recognizable AI fingerprint. Mix formats: one card can be a number, one a short phrase, one a sentence.

**When to use**: Feature sets, categorized information. Consider whether 3 cards (Three Column) or 2 cards (Two Column) would be stronger — don't default to four just because you have four points.

---

## Timeline

Horizontal timeline with milestone markers.

```html
<div class="slide" style="align-items: flex-start;">
  <h3>Timeline Title</h3>
  <div style="display: flex; align-items: center; gap: 0; margin: 20px 0; width: 100%; position: relative;">
    <div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--accent), rgba(212,160,74,0.3)); transform: translateY(-50%);"></div>
    <div style="flex: 1; text-align: center; position: relative;">
      <div style="font-size: 13px; font-weight: 600; color: var(--accent);">2024.Q1</div>
      <div style="width: 8px; height: 8px; background: var(--accent); border-radius: 50%; margin: 6px auto;"></div>
      <div style="font-size: 11px; color: var(--text-3); line-height: 1.4;">Event<br>description</div>
    </div>
    <!-- repeat for each milestone -->
  </div>
</div>
```

**When to use**: Product roadmaps, historical context, release timelines.

---

## End

Closing slide. The simplest version is the strongest — **don't add a callout box underneath**.

```html
<div class="slide end-slide">
  <h2>The closing statement<br>goes here, making it<br><strong>memorable</strong>.</h2>
</div>
```

**Variant — Summary grid (max 3 rows, no callout):**

```html
<div class="slide" style="align-items: flex-start; justify-content: center;">
  <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px 20px; align-items: center;">
    <p style="font-size: 19px; color: var(--text-3); text-align: right;">Old way</p>
    <span style="color: var(--accent); font-size: 18px;">→</span>
    <p style="font-size: 19px; color: var(--text); font-weight: 600;">New way</p>
    <!-- max 3 rows — more than 3 becomes a wall of text -->
  </div>
</div>
```

**Anti-pattern**: Don't stack 4+ parallel `old → new` rows — it becomes a mechanical list. If you have many transformations, pick the 2-3 most impactful. Don't add a callout CTA box at the bottom of a summary — let the summary speak for itself, or use a separate End slide after it.

**When to use**: Always the last slide (or second to last if followed by Q&A).

---

## Interactive Question

Audience engagement slide with voting options or discussion prompt.

```html
<div class="slide" style="align-items: flex-start; padding-top: 90px;">
  <h2 style="font-size: 52px; font-weight: 700; line-height: 1.2; letter-spacing: -2px;">The question<br><span style="color: var(--accent);">to the audience?</span></h2>
  <div style="margin-top: 32px; display: flex; gap: 16px;">
    <div style="padding: 14px 28px; border: 2px solid rgba(80,200,120,0.4); border-radius: 10px; background: rgba(80,200,120,0.06); text-align: center; min-width: 140px;">
      <p style="font-size: 24px; font-weight: 700; color: #50c878;">Option A</p>
    </div>
    <div style="padding: 14px 28px; border: 2px solid rgba(212,160,74,0.4); border-radius: 10px; background: rgba(212,160,74,0.06); text-align: center; min-width: 140px;">
      <p style="font-size: 24px; font-weight: 700; color: var(--accent);">Option B</p>
    </div>
  </div>
  <p style="margin-top: 16px; font-size: 14px; color: var(--text-3);">Show of hands?</p>
</div>
```

**When to use**: Opening hooks, mid-talk engagement, gathering feedback.

---

## Breath

A near-empty slide that lets the audience reset. Use between dense sections. The simplest slide type — and the one AI almost never generates on its own.

```html
<div class="slide" style="align-items: center; justify-content: center;">
  <p style="font-size: 36px; font-weight: 300; color: var(--text-3); letter-spacing: -1px;">So what does this actually mean?</p>
</div>
```

**Variant — with accent highlight:**

```html
<div class="slide" style="align-items: center; justify-content: center;">
  <p style="font-size: 28px; font-weight: 400; color: var(--text-2);">We built it.</p>
  <p style="font-size: 28px; font-weight: 400; color: var(--text-2);">We shipped it.</p>
  <p style="font-size: 28px; font-weight: 700; color: var(--accent); margin-top: 8px;">Then we threw it away.</p>
</div>
```

**When to use**: After a complex diagram or data-heavy section. Before a major topic shift. When you want the audience to sit with a question. Aim for at least 1 breath slide per 8-10 content slides.

---

## Hero Image

Full-slide visual with text overlay. Uses a gradient or solid background with a prominent SVG, emoji, or visual metaphor as the centerpiece. Breaks the "rectangles in rectangles" monotony.

```html
<div class="slide" style="align-items: center; justify-content: center; background: radial-gradient(ellipse at 30% 50%, rgba(212,160,74,0.08) 0%, transparent 70%);">
  <p style="font-size: 80px; margin-bottom: 24px;">🏗️</p>
  <p style="font-size: 36px; font-weight: 600; color: var(--text); letter-spacing: -1px;">Building in public</p>
  <p style="font-size: 18px; color: var(--text-3); margin-top: 8px;">What happens when you ship before it's ready</p>
</div>
```

**Variant — SVG centerpiece:**

```html
<div class="slide" style="align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(212,160,74,0.06) 0%, transparent 60%);">
  <svg viewBox="0 0 200 200" style="width: 160px; height: 160px; margin-bottom: 20px;">
    <circle cx="100" cy="100" r="80" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="8,4"/>
    <circle cx="100" cy="100" r="40" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="1.5"/>
    <text x="100" y="108" text-anchor="middle" fill="var(--accent)" font-size="24" font-weight="700">Core</text>
  </svg>
  <p style="font-size: 28px; font-weight: 500; color: var(--text);">Everything else is optional</p>
</div>
```

**When to use**: Emotional beats, metaphorical transitions, "album cover" moments. Use sparingly — one per section at most.

---

## Rhythm & Anti-AI Guide

Building a deck that doesn't feel AI-generated is about **rhythm variation**, not just good templates.

### Slide-to-slide rules

1. **Never use the same layout twice in a row.** Statement → Statement is monotonous. Statement → Diagram → Breath → Stats is alive.
2. **Alternate information density.** Follow a dense slide (Diagram, Table, Four Grid) with a sparse one (Statement, Breath, Quote). This creates breathing room.
3. **Label sparingly.** Labels (`.label`) work on Section Intro and Cover. They're redundant on Statement, Quote, Big Number, End, and Breath. If more than 40% of your slides have labels, you're overusing them.
4. **Max 2 callout boxes per deck.** The accent-dim callout (`background: var(--accent-dim)`) is a strong visual element. Using it on every other slide dilutes its impact.
5. **Break symmetry intentionally.** When using Three Column, Four Grid, or Stats Row, prefer the asymmetric variant at least half the time.

### Content-level rules

6. **Don't mirror sentence structure across cards.** If card 1 says "XXX。YYY，ZZZ。", card 2 should NOT follow the same pattern. Mix: a number, a question, a single word, a short phrase.
7. **Summary slides: max 3 rows.** More than 3 `old → new` pairs becomes a feature list, not a summary.
8. **Don't pad stats.** If you have 2 meaningful numbers, show 2 — not 4 with filler.
9. **Vary text length across slides.** Some slides should have 5 words. Others can have 30. A deck where every slide has 15-25 words feels generated.

### Recommended rhythm patterns

```
Hook pattern:    Question → Breath → Statement → Evidence → Evidence → Breath → CTA
Journey pattern: Cover → Context(2-col) → Problem(statement) → Breath → Solution(diagram) → Proof(stats) → Breath → End
Deep-dive:       Section → Overview(3-col asymm) → Detail(diagram) → Detail(code) → Breath → Recap(big-number) → Section
```

Keep each slide under ~40 words of body text. If you need more content, split into multiple slides with progressive disclosure.
