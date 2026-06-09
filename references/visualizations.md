# Visualization Selection Guide

Use this guide when a slide needs a visual explanation. Pick by content shape,
not by topic keyword. Prefer one strong visual over a decorated bullet list.

## Selection Rules

| Pattern | Pick for | Skip if |
| --- | --- | --- |
| Big Number | One metric carries the message by itself. | There are 3+ metrics; use Stats Row or KPI-style cards. |
| Stats Row | 2-3 related metrics need quick comparison. | There are 4+ metrics; split the slide or use Four Grid only if all matter. |
| Comparison | Before/after, old/new, A/B, or tradeoff framing. | You need more than two sides; use Three Column or Comparison Table. |
| Flow | 3-6 sequential steps with simple forward motion. | The flow branches, loops, or has parallel lanes; use Diagram. |
| Timeline | 3-8 dated milestones. | Items have durations or ownership; use a roadmap/table hybrid. |
| Layer Stack | Hierarchical layers such as platform architecture or maturity levels. | The pieces are peers, not layers; use Three Column or Four Grid. |
| Diagram | Systems, networks, data movement, ownership boundaries, or topology. | A text list would explain it faster; do not draw a diagram as decoration. |
| Code | Code, terminal output, config, schema, API shape, or directory tree. | The important point is conceptual; use Statement plus a small snippet. |
| Four Grid | Four genuinely distinct ideas with similar weight. | One idea is dominant; use Three Column asymmetric or Statement. |
| Hero Image | One image can carry the emotional or concrete context of the slide. | The image is generic atmosphere; use a text-led slide instead. |
| Breath | The audience needs a pause after dense material. | The slide adds no independent idea; delete it. |

## Design Rules

- Do not use a chart or diagram just because the slide feels empty.
- If a visual has labels, keep them short enough to read from the back of a room.
- Put the takeaway in text outside the visual unless the visual itself is the takeaway.
- Prefer inline SVG for architecture, topology, process, and relationship visuals.
- Prefer native HTML/CSS for simple cards, stats, and comparisons.
- Avoid more than one visual metaphor on the same slide.

## Data Shape Shortcuts

- Ranking: horizontal bars or ordered list, not a pie.
- Composition of a whole: donut/pie only for 3-5 parts; otherwise use a table or bars.
- Trend over time: line or timeline depending on whether values or events matter.
- Conversion funnel: flow or funnel only if each stage narrows the previous one.
- Architecture: boxes for bounded systems, arrows only for meaningful data/control flow.
- Decision matrix: 2x2 only when both axes are real and useful.

## Anti-Patterns

- Three equal cards with identical sentence structure.
- A diagram whose arrows are unlabeled and interchangeable.
- More than four stats in one row.
- Decorative mini charts without sources or speaker purpose.
- Timeline milestones with no clear temporal spacing or order.
