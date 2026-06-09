// Shared theme/style data for theme-sampler.html and theme-demo.html.
(() => {
const previews = [
  {
    name: "Obsidian", kind: "core", mode: "dark",
    desc: "Dark premium with gold accents for confident technical keynotes.",
    tags: ["Dark", "Default", "Outfit"],
    frame: "default",
    vars: {
      bg: "#0f0f0f", surface: "#171717", border: "rgba(255,255,255,0.07)",
      text: "#ededed", text2: "#999999", text3: "#666666", accent: "#d4a04a",
      font: "Outfit, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Engineering Excellence 2026","subtitle":"Building Systems That Scale","info":"Technical Keynote · Q2 2026"},{"type":"big-number","number":"99.97%","label":"Platform Uptime","desc":"Sustained across 14 regions over 365 days — the result of deliberate architectural investment."},{"type":"cards","label":"Architecture","heading":"Three Pillars of Reliability","items":[{"title":"Isolation","desc":"Every service runs in its own failure domain with independent scaling"},{"title":"Observability","desc":"Distributed tracing from edge to storage, p99 latency tracked per-route"},{"title":"Automation","desc":"Zero-touch deployments with automated canary analysis and rollback"}]},{"type":"stats","label":"Scale","heading":"Platform Numbers","desc":"Serving a global developer community with sub-100ms response targets.","items":[{"value":"2.1M","label":"API calls per second"},{"value":"48ms","label":"p50 global latency"},{"value":"340TB","label":"Daily data processed"}]},{"type":"flow","label":"Delivery","heading":"From Commit to Production","steps":[{"title":"Merge","desc":"PR passes CI and two approvals"},{"title":"Canary","desc":"5% traffic for 30 minutes"},{"title":"Ramp","desc":"Progressive rollout over 4 hours"},{"title":"Bake","desc":"24-hour stability window"}]},{"type":"comparison","label":"Trade-offs","heading":"Monolith vs Microservices — Our Decision","columns":[{"title":"Monolith","points":["Simple deployment model","Lower operational overhead","Faster initial development"]},{"title":"Microservices","points":["Independent scaling per service","Team autonomy and ownership","Fault isolation by design"]}]},{"type":"bars","label":"Performance","heading":"Latency Distribution by Region","desc":"Edge caching and regional replicas keep all regions under target.","items":[{"label":"US-East","value":92},{"label":"EU-West","value":88},{"label":"AP-Tokyo","value":84},{"label":"AP-Mumbai","value":76}]},{"type":"timeline","label":"Roadmap","heading":"Platform Evolution","events":[{"date":"2024","title":"Multi-region","desc":"Expanded to 8 regions"},{"date":"2025-Q1","title":"Zero-trust","desc":"mTLS everywhere"},{"date":"2025-Q3","title":"Edge compute","desc":"Function-at-edge layer"},{"date":"2026","title":"14 regions","desc":"Full global coverage"}]},{"type":"table","label":"SLA","heading":"Service Level Objectives","headers":["Service","Target","Actual","Status"],"rows":[["API Gateway","99.95%","99.98%","Exceeded"],["Data Pipeline","99.9%","99.94%","Exceeded"],["Search Index","99.9%","99.91%","Met"],["Auth Service","99.99%","99.99%","Met"]]},{"type":"quote","text":"The best architecture is the one that makes the next change easy, not the one that anticipates every future change.","attribution":"Platform Engineering Team · Internal Retrospective"},{"type":"end","text":"Engineering Excellence · Building for the Next Decade"}] }
  },
  {
    name: "Glacier", kind: "core", mode: "dark",
    desc: "Deep navy canvas with cool blue highlights for engineering reviews.",
    tags: ["Dark", "Data", "Inter"],
    frame: "tech",
    vars: {
      bg: "#0a1628", surface: "#0f1f38", border: "rgba(93,173,236,0.14)",
      text: "#e8edf4", text2: "#8a9bb5", text3: "#4a6080", accent: "#5dadec",
      font: "Inter, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"System Performance Review","subtitle":"Q2 2026 Engineering Metrics","info":"Infrastructure Team · Monthly Review"},{"type":"stats","label":"Summary","heading":"Key Performance Indicators","desc":"All primary metrics trending positive against quarterly targets.","items":[{"value":"14.2ms","label":"p99 API latency (↓18%)"},{"value":"99.98%","label":"Availability (target: 99.95%)"},{"value":"$0.43","label":"Cost per 1M requests (↓22%)"}]},{"type":"bars","label":"Latency","heading":"p99 Latency by Endpoint","desc":"Top 6 endpoints by request volume. All under 50ms target.","items":[{"label":"/api/query","value":28},{"label":"/api/ingest","value":45},{"label":"/api/auth","value":12},{"label":"/api/search","value":38}]},{"type":"cards","label":"Incidents","heading":"Post-Incident Learnings","items":[{"title":"May 12 — Cache Stampede","desc":"TTL alignment caused synchronized invalidation. Fixed with jitter."},{"title":"May 19 — DNS Timeout","desc":"Provider failover took 47s. Added secondary resolver."},{"title":"May 28 — Memory Leak","desc":"gRPC connection pool growth. Bounded with max-idle config."}]},{"type":"table","label":"Capacity","heading":"Resource Utilization Trends","headers":["Resource","April","May","June (proj)","Threshold"],"rows":[["CPU (avg)","34%","38%","41%","70%"],["Memory","62%","65%","68%","80%"],["Disk IOPS","12K","14K","15K","25K"],["Network","2.1 Gbps","2.4 Gbps","2.6 Gbps","10 Gbps"]]},{"type":"two-column","label":"Deep Dive","heading":"Cache Hit Rate Improvement","left":{"title":"Before (April)","points":["78% hit rate across all caches","No tiered invalidation","Single-layer Redis"]},"right":{"title":"After (June)","points":["94% hit rate (+16pp)","TTL-based tiered invalidation","L1 in-process + L2 Redis"]}},{"type":"flow","label":"Automation","heading":"Incident Response Pipeline","steps":[{"title":"Detect","desc":"PagerDuty alert within 30s of threshold breach"},{"title":"Triage","desc":"Auto-runbook classifies by service and severity"},{"title":"Mitigate","desc":"Pre-approved rollback or circuit-break actions"},{"title":"Review","desc":"Blameless post-mortem within 48 hours"}]},{"type":"timeline","label":"Roadmap","heading":"Infrastructure Milestones","events":[{"date":"Jul","title":"GPU cluster","desc":"ML inference tier live"},{"date":"Aug","title":"eBPF tracing","desc":"Kernel-level observability"},{"date":"Sep","title":"Chaos eng","desc":"Automated failure injection"},{"date":"Oct","title":"Multi-AZ","desc":"Active-active failover"}]},{"type":"comparison","label":"Cost","heading":"Compute Cost Optimization Paths","columns":[{"title":"Reserved","points":["40% discount on baseline","1-year commitment","Predictable workloads"]},{"title":"Spot/Preemptible","points":["70% discount on burst","2-min termination notice","Fault-tolerant batch jobs"]},{"title":"Serverless","points":["Pay per invocation","Zero idle cost","Spiky, low-volume endpoints"]}]},{"type":"quote","text":"We don't optimize for the average case. We optimize for the tail — because that's where users feel the pain.","attribution":"SRE Principle #4"},{"type":"end","text":"Q2 Performance Review · Infrastructure Engineering"}] }
  },
  {
    name: "Paper", kind: "core", mode: "light",
    desc: "Clean white with Apple-style blue for crisp business presentations.",
    tags: ["Light", "Business", "DM Sans"],
    frame: "default",
    vars: {
      bg: "#fafafa", surface: "#ffffff", border: "rgba(0,0,0,0.07)",
      text: "#1d1d1f", text2: "#6e6e73", text3: "#aeaeb2", accent: "#0071e3",
      font: "'DM Sans', 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Q2 Business Review","subtitle":"Growth, Retention, and Next Horizons","info":"Executive Summary · June 2026"},{"type":"stats","label":"Highlights","heading":"Quarter at a Glance","desc":"Strong growth across all primary business metrics.","items":[{"value":"$42M","label":"ARR (+34% YoY)"},{"value":"94%","label":"Net Revenue Retention"},{"value":"1,240","label":"Enterprise Customers"}]},{"type":"bars","label":"Revenue","heading":"Revenue by Segment","desc":"Enterprise segment overtook SMB for the first time this quarter.","items":[{"label":"Enterprise","value":48},{"label":"Mid-Market","value":28},{"label":"SMB","value":18},{"label":"Self-Serve","value":6}]},{"type":"cards","label":"Growth","heading":"Three Growth Engines","items":[{"title":"Product-Led","desc":"Self-serve funnel converting at 12% from free to paid — up 3pp QoQ"},{"title":"Sales-Led","desc":"Enterprise ACV reached $180K with 14-day median close cycle"},{"title":"Platform","desc":"API marketplace launched with 34 partner integrations"}]},{"type":"two-column","label":"Retention","heading":"What's Driving NRR","left":{"title":"Expansion Drivers","points":["Seat-based upsell: +18% per account","Feature tier upgrades: 22% of base","API consumption growth: 3.2× YoY"]},"right":{"title":"Churn Signals","points":["Day-14 activation rate predicts 6-month churn","Support ticket volume inversely correlates","Contract length: 2-year churns 60% less"]}},{"type":"flow","label":"GTM","heading":"Customer Journey","steps":[{"title":"Discover","desc":"Content + community drive 68% of top-of-funnel"},{"title":"Activate","desc":"Time-to-value under 8 minutes for core workflow"},{"title":"Convert","desc":"Usage-based paywall at natural expansion point"},{"title":"Expand","desc":"CSM-driven upsell at 90-day maturity mark"}]},{"type":"table","label":"Pipeline","heading":"Sales Pipeline by Stage","headers":["Stage","Deals","Value","Win Rate"],"rows":[["Discovery","142","$8.4M","—"],["Evaluation","86","$12.1M","42%"],["Negotiation","34","$7.8M","71%"],["Closed Won","28","$5.2M","100%"]]},{"type":"comparison","label":"Competitive","heading":"Market Position","columns":[{"title":"Our Advantage","points":["Fastest time-to-value (8 min)","Deepest API integration layer","Highest NPS in category (72)"]},{"title":"Areas to Close","points":["Mobile experience gap","APAC localization","Enterprise SSO/compliance"]}]},{"type":"timeline","label":"Roadmap","heading":"H2 2026 Priorities","events":[{"date":"Jul","title":"Mobile v2","desc":"Native iOS and Android"},{"date":"Aug","title":"APAC launch","desc":"Tokyo + Singapore"},{"date":"Oct","title":"Enterprise+","desc":"SSO, audit logs, DLP"},{"date":"Dec","title":"Platform v2","desc":"Marketplace + revenue share"}]},{"type":"quote","text":"We're not selling software — we're selling the time our customers get back.","attribution":"Founding Principle"},{"type":"end","text":"Q2 Business Review · Onward"}] }
  },
  {
    name: "Ink", kind: "core", mode: "light",
    desc: "Warm cream and deep indigo with an editorial serif voice.",
    tags: ["Light", "Serif", "Editorial"],
    frame: "default",
    vars: {
      bg: "#f5f0eb", surface: "#fffdf9", border: "rgba(61,90,128,0.13)",
      text: "#2b2b2b", text2: "#5c5c5c", text3: "#9a9a9a", accent: "#3d5a80",
      font: "'Playfair Display', Georgia, 'Noto Sans SC', serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"The Future of Long-Form","subtitle":"How Readers, Writers, and Algorithms Are Reshaping Publishing","info":"Editorial Analysis · 2026"},{"type":"quote","text":"A book is no longer a fixed object. It is a living conversation between author and audience, mediated by recommendation engines.","attribution":"Frankfurt Book Fair Keynote, 2025"},{"type":"cards","label":"Landscape","heading":"Three Forces Reshaping Publishing","items":[{"title":"Algorithmic Discovery","desc":"68% of book purchases now begin with a recommendation engine, not a bookshelf"},{"title":"Serial Renaissance","desc":"Serialized fiction platforms grew 140% — readers want ongoing relationships, not endpoints"},{"title":"Audio-First","desc":"Audiobook revenue surpassed hardcover for the first time in Q4 2025"}]},{"type":"stats","label":"Market","heading":"Global Publishing Numbers","desc":"The industry is growing, but the growth is unevenly distributed.","items":[{"value":"$138B","label":"Global book market 2026"},{"value":"42%","label":"Digital format share"},{"value":"3.2×","label":"Indie pub growth rate vs trad"}]},{"type":"two-column","label":"Shift","heading":"Traditional vs New Publishing","left":{"title":"Traditional Model","points":["18-month production cycle","Advance against royalties","Bookstore-centric distribution","Editor as gatekeeper"]},"right":{"title":"Emerging Model","points":["4-week serial release cadence","Revenue share from day one","Algorithm-driven distribution","Reader metrics as signal"]}},{"type":"timeline","label":"History","heading":"Inflection Points in Publishing","events":[{"date":"2007","title":"Kindle Launch","desc":"E-book as mainstream format"},{"date":"2014","title":"KU Model","desc":"Subscription reading arrives"},{"date":"2021","title":"BookTok","desc":"Social discovery explodes"},{"date":"2025","title":"AI Writing Tools","desc":"Co-creation becomes normal"}]},{"type":"bars","label":"Formats","heading":"Revenue Share by Format","desc":"Digital formats now dominate in units but print holds value share.","items":[{"label":"Audiobook","value":34},{"label":"E-book","value":28},{"label":"Paperback","value":22},{"label":"Hardcover","value":16}]},{"type":"image-text","label":"Case Study","heading":"How Serial Fiction Won Gen Z","imgAlt":"Mobile reading app screenshot","points":["Daily chapter drops create habit loops","Comment threads per paragraph build community","Tip-based monetization outperforms subscriptions 2:1","Top serialized authors earn $400K+/year"]},{"type":"flow","label":"Strategy","heading":"The Modern Author Playbook","steps":[{"title":"Build Audience","desc":"Newsletter + social proof before the manuscript"},{"title":"Serialize","desc":"Release chapters weekly, measure engagement"},{"title":"Bundle","desc":"Collected edition as premium product"},{"title":"Extend","desc":"Audio, translation, adaptation rights"}]},{"type":"quote","text":"The question is no longer 'will people read?' — it's 'will your work find the algorithm that connects it to the right reader?'","attribution":"Industry Forecast"},{"type":"end","text":"The Future of Long-Form · An Editorial Analysis"}] }
  },
  {
    name: "Ember", kind: "core", mode: "dark",
    desc: "Deep charcoal with orange-red energy for assertive product vision.",
    tags: ["Dark", "Bold", "Space Grotesk"],
    frame: "default",
    vars: {
      bg: "#1a1210", surface: "#251c18", border: "rgba(232,93,58,0.13)",
      text: "#f0e6e0", text2: "#b09a8e", text3: "#6b584c", accent: "#e85d3a",
      font: "'Space Grotesk', 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Ignite","subtitle":"A Product Vision for the Next Wave","info":"Product Strategy · H2 2026"},{"type":"big-number","number":"10×","label":"Developer Velocity Target","desc":"Ship features 10× faster by removing every manual step between idea and production."},{"type":"section","label":"Part 01","title":"The Problem","subtitle":"Why today's tools fail at the last mile of software delivery."},{"type":"cards","label":"Pain Points","heading":"Three Barriers to Velocity","items":[{"title":"Config Drift","desc":"Environments diverge within days. Staging never matches production."},{"title":"Review Bottleneck","desc":"Average PR waits 19 hours for review. Momentum dies in queues."},{"title":"Deploy Fear","desc":"58% of teams delay deploys to Friday-safe windows. Speed suffers."}]},{"type":"stats","label":"Market","heading":"The Opportunity","desc":"Developer tools spending is accelerating while satisfaction declines.","items":[{"value":"$45B","label":"DevTools TAM 2026"},{"value":"34%","label":"Developer satisfaction (↓12pp)"},{"value":"4.2hr","label":"Daily context-switching cost"}]},{"type":"flow","label":"Vision","heading":"Zero-Friction Delivery","steps":[{"title":"Write","desc":"AI-assisted coding with full project context"},{"title":"Review","desc":"Automated review in < 60 seconds"},{"title":"Test","desc":"Deterministic test gen from diff"},{"title":"Ship","desc":"One-click deploy with auto-rollback"}]},{"type":"comparison","label":"Positioning","heading":"Where We Win","columns":[{"title":"Us","points":["End-to-end from code to prod","AI-native, not AI-bolted","Sub-minute feedback loops"]},{"title":"Incumbents","points":["Point solutions require glue","AI features feel retrofitted","Minutes to hours for feedback"]}]},{"type":"timeline","label":"Roadmap","heading":"Path to Market","events":[{"date":"Q3","title":"Alpha","desc":"50 design partners"},{"date":"Q4","title":"Beta","desc":"Public waitlist launch"},{"date":"2027-Q1","title":"GA","desc":"Self-serve + enterprise"},{"date":"2027-Q2","title":"Platform","desc":"Plugin ecosystem"}]},{"type":"bars","label":"Traction","heading":"Early Signal","desc":"Alpha cohort metrics after 6 weeks of usage.","items":[{"label":"Deploy frequency","value":92},{"label":"Lead time reduction","value":78},{"label":"Change failure rate","value":35},{"label":"MTTR improvement","value":85}]},{"type":"quote","text":"The best developer tool is the one that disappears. You just think, and the code is live.","attribution":"Product Manifesto"},{"type":"end","text":"Ignite · Let's Build It"}] }
  },
  {
    name: "Forest", kind: "core", mode: "dark",
    desc: "Deep green with emerald highlights for grounded growth narratives.",
    tags: ["Dark", "Organic", "Outfit"],
    frame: "default",
    vars: {
      bg: "#0d1912", surface: "#142218", border: "rgba(60,179,113,0.13)",
      text: "#e0efe6", text2: "#8ab89e", text3: "#4a7a60", accent: "#3cb371",
      font: "Outfit, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Roots & Growth","subtitle":"Sustainability Report 2026","info":"ESG & Impact · Annual Review"},{"type":"big-number","number":"−42%","label":"Carbon Reduction","desc":"Year-over-year decrease in Scope 1+2 emissions, on track for net-zero by 2030."},{"type":"cards","label":"Impact","heading":"Three Commitments Delivered","items":[{"title":"100% Renewable","desc":"All data centers now powered by renewable energy through direct PPAs"},{"title":"Zero Waste","desc":"Office operations achieved zero-landfill status across 8 locations"},{"title":"Carbon Negative","desc":"Offset purchases exceed remaining emissions by 1.4× since March"}]},{"type":"stats","label":"Metrics","heading":"Environmental Performance","desc":"Tracked against Science Based Targets initiative framework.","items":[{"value":"12,400t","label":"CO₂e avoided"},{"value":"98%","label":"Renewable energy share"},{"value":"340ML","label":"Water recycled"}]},{"type":"flow","label":"Supply Chain","heading":"Green Procurement Pipeline","steps":[{"title":"Assess","desc":"Supplier ESG scoring on 14 criteria"},{"title":"Engage","desc":"Improvement plans for high-risk tier"},{"title":"Audit","desc":"Third-party verification annually"},{"title":"Report","desc":"Transparent supply chain dashboard"}]},{"type":"bars","label":"Energy","heading":"Energy Mix Transition","desc":"Shift from grid-dependent to renewable-first operations.","items":[{"label":"Solar PPA","value":42},{"label":"Wind PPA","value":38},{"label":"Hydro","value":12},{"label":"Grid (remaining)","value":8}]},{"type":"two-column","label":"Social","heading":"Community & Workforce Impact","left":{"title":"Workforce","points":["46% women in leadership (↑8pp)","Living wage certified globally","12,000 training hours delivered"]},"right":{"title":"Community","points":["$2.4M in grants to local orgs","8 reforestation partnerships","340 employee volunteer days"]}},{"type":"timeline","label":"Journey","heading":"Sustainability Milestones","events":[{"date":"2022","title":"Baseline","desc":"First GHG inventory completed"},{"date":"2023","title":"SBTi","desc":"Targets validated by SBTi"},{"date":"2025","title":"Renewable","desc":"100% renewable electricity"},{"date":"2030","title":"Net Zero","desc":"Full value chain target"}]},{"type":"table","label":"Governance","heading":"ESG Governance Structure","headers":["Level","Body","Frequency","Focus"],"rows":[["Board","ESG Committee","Quarterly","Strategy & targets"],["C-Suite","Sustainability Council","Monthly","Execution & KPIs"],["Operations","Green Teams","Bi-weekly","Project delivery"],["External","Advisory Panel","Semi-annual","Stakeholder alignment"]]},{"type":"quote","text":"Growth without conscience is just extraction. We're building a company that can look at the next generation and say: we left it better.","attribution":"Sustainability Charter"},{"type":"end","text":"Roots & Growth · Sustainability Report 2026"}] }
  },
  {
    name: "Neon", kind: "core", mode: "dark",
    desc: "Hot-pink neon glow for high-energy showcases and demos.",
    tags: ["Dark", "Electric", "Space Grotesk"],
    frame: "tech",
    vars: {
      bg: "#0d0d12", surface: "#1a1a22", border: "rgba(236,72,153,0.15)",
      text: "#f0eaee", text2: "#a0909a", text3: "#605058", accent: "#ec4899",
      font: "'Space Grotesk', 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"SYNTHWAVE","subtitle":"Next-Gen Creative Platform","info":"Product Launch · Summer 2026"},{"type":"big-number","number":"120fps","label":"Real-Time Rendering","desc":"Full creative pipeline at 120 frames per second — no compromise between quality and speed."},{"type":"section","label":"Drop 01","title":"The Engine","subtitle":"Built for creators who refuse to wait for renders."},{"type":"cards","label":"Features","heading":"Core Creative Tools","items":[{"title":"Neural Brush","desc":"AI-powered brushes that understand context, style, and intent in real-time"},{"title":"Live Collab","desc":"Up to 50 creators in one canvas with conflict-free simultaneous editing"},{"title":"Instant Export","desc":"One-click publish to every platform — web, mobile, print, video"}]},{"type":"stats","label":"Performance","heading":"Benchmark Numbers","desc":"Tested on M4 Pro and RTX 5090 at 4K resolution.","items":[{"value":"120fps","label":"Canvas render rate"},{"value":"<50ms","label":"AI brush response"},{"value":"8K","label":"Max export resolution"}]},{"type":"comparison","label":"vs Others","heading":"Why Creators Switch","columns":[{"title":"SYNTHWAVE","points":["GPU-native engine from scratch","AI tools built-in, not plugins","Real-time multiplayer canvas"]},{"title":"Legacy Tools","points":["CPU-bound rendering pipeline","AI via third-party extensions","Turn-based file sharing"]}]},{"type":"flow","label":"Workflow","heading":"From Concept to Published","steps":[{"title":"Sketch","desc":"Neural brush captures rough ideas into refined shapes"},{"title":"Compose","desc":"Layer, blend, and arrange with non-destructive editing"},{"title":"Animate","desc":"Timeline-based motion with physics simulation"},{"title":"Ship","desc":"Multi-format export and direct social publishing"}]},{"type":"bars","label":"Adoption","heading":"Beta Community Growth","desc":"Three months of closed beta with creator-led growth.","items":[{"label":"Signups","value":95},{"label":"DAU/MAU","value":72},{"label":"Content created","value":88},{"label":"Shared externally","value":64}]},{"type":"timeline","label":"Launch Plan","heading":"SYNTHWAVE Release Timeline","events":[{"date":"Jun","title":"Open Beta","desc":"Public access, free tier"},{"date":"Aug","title":"Pro Launch","desc":"Paid tier + team features"},{"date":"Oct","title":"Marketplace","desc":"Creator asset store"},{"date":"Dec","title":"Mobile","desc":"iPad + Android tablet"}]},{"type":"quote","text":"We don't make tools for people who follow tutorials. We make tools for people who skip them.","attribution":"SYNTHWAVE Design Philosophy"},{"type":"end","text":"SYNTHWAVE · Create at the Speed of Thought"}] }
  },
  {
    name: "Mono", kind: "core", mode: "dark",
    desc: "Pure black and white, zero distraction, maximum contrast.",
    tags: ["Dark", "Mono", "Developer"],
    frame: "default",
    vars: {
      bg: "#111111", surface: "#1a1a1a", border: "rgba(255,255,255,0.1)",
      text: "#ffffff", text2: "#a0a0a0", text3: "#555555", accent: "#ffffff",
      font: "'JetBrains Mono', 'Noto Sans SC', monospace"
    },
    demoContent: { "slides": [{"type":"cover","title":"$ dev-stack","subtitle":"A Developer's Toolkit, Rebuilt from Scratch","info":"Open Source · v1.0 Release Notes"},{"type":"big-number","number":"0","label":"Runtime Dependencies","desc":"Zero external dependencies. One binary. Every platform. No node_modules, no pip install, no cargo fetch."},{"type":"cards","label":"Design","heading":"Three Design Principles","items":[{"title":"Single Binary","desc":"One executable, no runtime, no container. Copy it anywhere and run."},{"title":"Config as Code","desc":"TOML config, version-controlled, diffable, mergeable."},{"title":"Unix Philosophy","desc":"Does one thing. Composes with pipes. Exits with meaningful codes."}]},{"type":"table","label":"Benchmarks","heading":"Performance Comparison","headers":["Task","dev-stack","Tool A","Tool B","Tool C"],"rows":[["Cold start","12ms","340ms","890ms","1.2s"],["File watch","2ms","45ms","120ms","200ms"],["Full rebuild","0.8s","4.2s","12s","18s"],["Memory (idle)","8MB","120MB","340MB","1.1GB"]]},{"type":"flow","label":"Architecture","heading":"How It Works","steps":[{"title":"Parse","desc":"TOML config → typed AST in <1ms"},{"title":"Watch","desc":"Kernel-level FS events, no polling"},{"title":"Build","desc":"Incremental graph with content hashing"},{"title":"Serve","desc":"Zero-copy HTTP with live reload"}]},{"type":"two-column","label":"API","heading":"CLI Interface","left":{"title":"Core Commands","points":["dev-stack init — scaffold project","dev-stack build — incremental build","dev-stack serve — dev server","dev-stack check — lint + typecheck"]},"right":{"title":"Flags","points":["--watch — file watcher mode","--release — optimized output","--port=N — server port","--verbose — debug logging"]}},{"type":"stats","label":"Community","heading":"One Month Post-Launch","desc":"Organic growth through developer word-of-mouth.","items":[{"value":"4.2K","label":"GitHub stars"},{"value":"186","label":"Contributors"},{"value":"12","label":"Language plugins"}]},{"type":"comparison","label":"Trade-offs","heading":"What We Chose — And What We Didn't","columns":[{"title":"Chose","points":["Speed over plugin ecosystem","Convention over configuration","Stability over bleeding-edge features"]},{"title":"Did Not Choose","points":["GUI configuration panels","Cloud-hosted build service","Proprietary extension format"]}]},{"type":"bars","label":"Language Support","heading":"Plugin Maturity by Language","desc":"Community-maintained language plugins ranked by test coverage.","items":[{"label":"TypeScript","value":98},{"label":"Rust","value":94},{"label":"Go","value":88},{"label":"Python","value":76}]},{"type":"quote","text":"The fastest build tool is the one with nothing left to remove.","attribution":"dev-stack README.md"},{"type":"end","text":"$ dev-stack · v1.0 · MIT License"}] }
  },
  {
    name: "Dusk", kind: "core", mode: "dark",
    desc: "Warm dark with dusty rose accents for thoughtful editorial decks.",
    tags: ["Dark", "Warm", "Sora"],
    frame: "default",
    vars: {
      bg: "#13101a", surface: "#1c1824", border: "rgba(196,137,154,0.13)",
      text: "#ede6ea", text2: "#a8949e", text3: "#6a5862", accent: "#c4899a",
      font: "Sora, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Designing with Intention","subtitle":"Lessons from a Decade of Product Design","info":"Creative Retrospective · 2026"},{"type":"quote","text":"Good design is obvious. Great design is transparent. The best work disappears into the experience it creates.","attribution":"Studio Principle #1"},{"type":"section","label":"Chapter 01","title":"Less, But Better","subtitle":"Why reduction is the hardest design skill to master."},{"type":"cards","label":"Philosophy","heading":"Three Tensions in Every Project","items":[{"title":"Beauty vs Clarity","desc":"Aesthetics should amplify comprehension, never compete with it"},{"title":"Delight vs Speed","desc":"Micro-interactions matter, but not at the cost of task completion"},{"title":"Consistency vs Context","desc":"Systems enable speed; breaking them enables meaning"}]},{"type":"two-column","label":"Process","heading":"How We Work","left":{"title":"Discovery","points":["Stakeholder interviews, not briefs","Competitive audit of adjacent categories","User journey mapping with real data","Constraint inventory before ideation"]},"right":{"title":"Execution","points":["Lo-fi → mid-fi → eng handoff","Design tokens, not pixel specs","Paired design-engineering sprints","Weekly user testing cadence"]}},{"type":"stats","label":"Impact","heading":"Design-Led Outcomes","desc":"Measured impact from design-led product changes over 18 months.","items":[{"value":"+34%","label":"Task completion rate"},{"value":"−52%","label":"Support ticket volume"},{"value":"72","label":"NPS (from 41)"}]},{"type":"flow","label":"System","heading":"Design System Lifecycle","steps":[{"title":"Audit","desc":"Inventory all existing patterns and variants"},{"title":"Consolidate","desc":"Reduce to minimum viable component set"},{"title":"Document","desc":"Usage guidelines with do/don't examples"},{"title":"Evolve","desc":"Quarterly review with usage analytics"}]},{"type":"image-text","label":"Case Study","heading":"Redesigning the Onboarding Flow","imgAlt":"Before/after onboarding screens","points":["Reduced steps from 7 to 3 with progressive disclosure","Time-to-first-value dropped from 12 min to 4 min","Completion rate increased from 54% to 89%","Support tickets during onboarding fell 68%"]},{"type":"timeline","label":"Evolution","heading":"A Decade of Design Practice","events":[{"date":"2016","title":"Visual Design","desc":"Pixel-perfect deliverables"},{"date":"2018","title":"Systems","desc":"Component-first thinking"},{"date":"2021","title":"Research-Led","desc":"Qual + quant integrated"},{"date":"2024","title":"AI-Augmented","desc":"Generative design tooling"}]},{"type":"bars","label":"Metrics","heading":"Design Quality Indicators","desc":"Internal scoring across recent major projects.","items":[{"label":"Accessibility (WCAG AA)","value":96},{"label":"Consistency score","value":88},{"label":"Developer satisfaction","value":82},{"label":"User comprehension","value":91}]},{"type":"quote","text":"We don't ship interfaces. We ship understanding.","attribution":"Studio Retrospective"},{"type":"end","text":"Designing with Intention · A Creative Retrospective"}] }
  },
  {
    name: "Slate", kind: "core", mode: "dark",
    desc: "Cool dark gray and steel accents for understated authority.",
    tags: ["Dark", "Quiet", "Manrope"],
    frame: "default",
    vars: {
      bg: "#111318", surface: "#191c22", border: "rgba(148,163,184,0.11)",
      text: "#e2e6ec", text2: "#8892a4", text3: "#4e5668", accent: "#94a3b8",
      font: "Manrope, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Security Posture Review","subtitle":"Enterprise Security Program — Annual Assessment","info":"CISO Report · 2026"},{"type":"stats","label":"Overview","heading":"Security Program Metrics","desc":"Organization-wide security posture measured against NIST CSF 2.0 framework.","items":[{"value":"4.2/5","label":"NIST CSF maturity score"},{"value":"0","label":"Critical incidents (12-month)"},{"value":"99.8%","label":"Patch compliance rate"}]},{"type":"cards","label":"Wins","heading":"Key Achievements This Year","items":[{"title":"Zero Trust Rollout","desc":"All internal services now require identity verification — no implicit trust from network location"},{"title":"SOC 2 Type II","desc":"Achieved certification with zero findings across 114 control points"},{"title":"Phishing Reduction","desc":"Employee phishing click rate dropped from 12% to 1.8% through continuous training"}]},{"type":"comparison","label":"Framework","heading":"Defense in Depth — Layer Assessment","columns":[{"title":"Network","points":["Micro-segmentation: 100% coverage","East-west traffic inspection","Encrypted DNS (DoH/DoT)"]},{"title":"Application","points":["SAST/DAST in every pipeline","Runtime application self-protection","API gateway rate limiting"]},{"title":"Data","points":["Encryption at rest and in transit","DLP policies on all endpoints","Automated classification engine"]}]},{"type":"table","label":"Incidents","heading":"Incident Response Performance","headers":["Metric","Target","Actual","Trend"],"rows":[["MTTD (detect)","< 15 min","8 min","↓ improving"],["MTTR (respond)","< 4 hours","2.1 hours","↓ improving"],["False positive rate","< 5%","3.2%","↓ improving"],["Escalation accuracy","> 90%","94%","↑ improving"]]},{"type":"flow","label":"Process","heading":"Vulnerability Management Lifecycle","steps":[{"title":"Discover","desc":"Continuous scanning across all assets"},{"title":"Prioritize","desc":"CVSS + exploitability + business context"},{"title":"Remediate","desc":"SLA: Critical 24h, High 7d, Medium 30d"},{"title":"Verify","desc":"Re-scan and close with evidence"}]},{"type":"bars","label":"Compliance","heading":"Regulatory Compliance Status","desc":"Coverage across applicable frameworks and standards.","items":[{"label":"SOC 2 Type II","value":100},{"label":"ISO 27001","value":95},{"label":"GDPR","value":92},{"label":"HIPAA","value":88}]},{"type":"two-column","label":"Threat Intel","heading":"Threat Landscape Observations","left":{"title":"Rising Threats","points":["AI-generated phishing (+340% volume)","Supply chain attacks via CI/CD","Credential stuffing with leaked datasets"]},"right":{"title":"Our Countermeasures","points":["AI-based email analysis engine","SBOM verification in build pipeline","Passwordless auth rollout (78% adopted)"]}},{"type":"timeline","label":"Roadmap","heading":"Security Program Roadmap","events":[{"date":"Q3","title":"SIEM Migration","desc":"Next-gen SIEM with AI triage"},{"date":"Q4","title":"Red Team","desc":"Annual adversary simulation"},{"date":"2027-Q1","title":"FedRAMP","desc":"Moderate authorization"},{"date":"2027-Q2","title":"Bug Bounty","desc":"Public program launch"}]},{"type":"quote","text":"Security is not a feature. It's a property of how every feature is built.","attribution":"Security Engineering Principle"},{"type":"end","text":"Security Posture Review · Enterprise Program 2026"}] }
  },
  {
    name: "Sand", kind: "core", mode: "light",
    desc: "Warm cream with earthy brown, close to a luxury print magazine.",
    tags: ["Light", "Warm", "Jakarta"],
    frame: "default",
    vars: {
      bg: "#f7f3ee", surface: "#fffdf9", border: "rgba(150,115,77,0.13)",
      text: "#2c2418", text2: "#7a6b58", text3: "#b0a290", accent: "#96734d",
      font: "'Plus Jakarta Sans', 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Maison Collection","subtitle":"Autumn/Winter 2026 · Private Preview","info":"Luxury Hospitality Group"},{"type":"quote","text":"Luxury is not about what you add. It is about what you refuse to compromise.","attribution":"Brand Philosophy"},{"type":"cards","label":"Collection","heading":"Three New Properties","items":[{"title":"Kyoto Pavilion","desc":"12-room ryokan where every surface is handcrafted from local hinoki and Shigaraki clay"},{"title":"Amalfi Terrace","desc":"Cliffside retreat with private sea access, restored from an 18th-century lemon grove estate"},{"title":"Marrakech Riad","desc":"A 16th-century courtyard palace reimagined with contemporary Berber artisanship"}]},{"type":"stats","label":"Performance","heading":"Portfolio Numbers","desc":"Twelve months of measured guest experience and commercial performance.","items":[{"value":"97%","label":"Guest satisfaction score"},{"value":"$1,240","label":"Average daily rate"},{"value":"82%","label":"Annual occupancy"}]},{"type":"image-text","label":"Spotlight","heading":"The Kyoto Pavilion Experience","imgAlt":"Kyoto Pavilion interior","points":["Private onsen fed by natural mineral springs","Kaiseki dining with ingredients from the estate garden","Tea ceremony room designed by Kengo Kuma Studio","Meditation garden accessible only to guests"]},{"type":"two-column","label":"Philosophy","heading":"Design Language","left":{"title":"Material","points":["Natural stone, aged timber, raw linen","No synthetic surfaces in guest areas","Every textile handwoven or hand-dyed","Hardware: unlacquered brass, aged patina"]},"right":{"title":"Experience","points":["No visible technology in guest rooms","Sound design: silence as a luxury","Scent program: site-specific botanicals","Staff ratio: 3:1 minimum"]}},{"type":"timeline","label":"Heritage","heading":"Brand Journey","events":[{"date":"2008","title":"Founded","desc":"First property in Provence"},{"date":"2014","title":"Asia Entry","desc":"Bali and Kyoto properties"},{"date":"2020","title":"Collection","desc":"Curated portfolio model"},{"date":"2026","title":"12 Properties","desc":"Four continents, one voice"}]},{"type":"flow","label":"Guest Journey","heading":"The Guest Experience Arc","steps":[{"title":"Anticipation","desc":"Personal concierge contact 14 days before arrival"},{"title":"Arrival","desc":"No check-in desk — greeted by name, shown to room"},{"title":"Immersion","desc":"Curated daily experiences tailored to guest profile"},{"title":"Departure","desc":"Handwritten note + bespoke gift from local artisan"}]},{"type":"bars","label":"Sustainability","heading":"Environmental Commitments","desc":"Progress toward 2028 full sustainability certification.","items":[{"label":"Local sourcing","value":92},{"label":"Renewable energy","value":78},{"label":"Water recycling","value":85},{"label":"Zero waste (food)","value":68}]},{"type":"table","label":"Calendar","heading":"2026–27 Private Events","headers":["Date","Property","Experience","Capacity"],"rows":[["Oct 2026","Kyoto","Autumn Viewing Dinner","16 guests"],["Dec 2026","Marrakech","Winter Solstice Retreat","24 guests"],["Mar 2027","Amalfi","Spring Harvest Week","20 guests"],["Jun 2027","Provence","Lavender Season Residency","12 guests"]]},{"type":"end","text":"Maison Collection · Where Every Detail Is a Decision"}] }
  },
  {
    name: "Crimson", kind: "core", mode: "dark",
    desc: "Concentrated wine red for authoritative leadership moments.",
    tags: ["Dark", "Power", "Outfit"],
    frame: "default",
    vars: {
      bg: "#120c0e", surface: "#1c1416", border: "rgba(190,18,60,0.13)",
      text: "#f0e8ea", text2: "#a89098", text3: "#604850", accent: "#be123c",
      font: "Outfit, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Strategic Direction","subtitle":"Board of Directors · Annual Strategy Briefing","info":"Confidential · June 2026"},{"type":"stats","label":"Position","heading":"Where We Stand","desc":"Market position strengthened across all three strategic pillars.","items":[{"value":"#2","label":"Global market rank (from #4)"},{"value":"$8.6B","label":"Revenue (+28% YoY)"},{"value":"22%","label":"Operating margin"}]},{"type":"big-number","number":"$8.6B","label":"Annual Revenue","desc":"Crossed the $8B threshold for the first time — 28% growth driven by enterprise and international expansion."},{"type":"cards","label":"Strategy","heading":"Three Strategic Priorities","items":[{"title":"Market Expansion","desc":"Enter 6 new markets in APAC and LATAM by Q4, targeting $1.2B incremental TAM"},{"title":"Platform Consolidation","desc":"Unify three product lines into single platform, reducing operational complexity 40%"},{"title":"Talent Density","desc":"Increase senior IC ratio to 35% through targeted hiring and internal development"}]},{"type":"comparison","label":"Competition","heading":"Competitive Landscape Shift","columns":[{"title":"Our Position","points":["Strongest enterprise relationships","Deepest product integration moat","Highest customer lifetime value"]},{"title":"Competitive Threats","points":["Aggressive pricing from new entrants","Open-source alternatives maturing","Vertical-specific challengers emerging"]}]},{"type":"flow","label":"Execution","heading":"Strategic Execution Framework","steps":[{"title":"Align","desc":"Quarterly OKR cascade from board priorities"},{"title":"Resource","desc":"Capital allocation tied to strategic pillars"},{"title":"Execute","desc":"90-day sprint cycles with milestone gates"},{"title":"Review","desc":"Monthly operating review with course correction"}]},{"type":"table","label":"Financial","heading":"Three-Year Financial Outlook","headers":["Metric","FY2026","FY2027E","FY2028E"],"rows":[["Revenue","$8.6B","$11.2B","$14.5B"],["Gross Margin","72%","74%","76%"],["Operating Margin","22%","25%","28%"],["Free Cash Flow","$1.4B","$2.1B","$3.0B"]]},{"type":"bars","label":"Segments","heading":"Revenue by Business Unit","desc":"Enterprise segment accelerating; consumer segment stable.","items":[{"label":"Enterprise","value":52},{"label":"Platform","value":28},{"label":"Consumer","value":14},{"label":"Services","value":6}]},{"type":"timeline","label":"Milestones","heading":"Key Dates — Next 12 Months","events":[{"date":"Q3","title":"APAC Launch","desc":"Japan + Singapore offices"},{"date":"Q4","title":"Platform v3","desc":"Unified product release"},{"date":"2027-Q1","title":"LATAM","desc":"Brazil + Mexico entry"},{"date":"2027-Q2","title":"IPO Prep","desc":"S-1 readiness milestone"}]},{"type":"quote","text":"Strategy is not a plan. It is a set of choices that position you to win — and the discipline to say no to everything else.","attribution":"Board Strategy Session"},{"type":"end","text":"Strategic Direction · Confidential"}] }
  },

  {
    name: "Anthropic", kind: "brand", mode: "light",
    desc: "Restrained AI product identity, conclusion-first and research-forward.",
    tags: ["Brand", "AI", "Light"],
    frame: "default",
    vars: {
      bg: "#ffffff", surface: "#f8fafc", border: "#e2e8f0",
      text: "#191919", text2: "#64748b", text3: "#94a3b8", accent: "#d97757",
      accent2: "#4a90d9", accent3: "#10b981", font: "'DM Sans', 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Responsible AI Progress","subtitle":"Building AI Systems That Are Safe, Beneficial, and Understandable","info":"Research Update · 2026"},{"type":"cards","label":"Research","heading":"Three Research Frontiers","items":[{"title":"Interpretability","desc":"Mechanistic understanding of model internals — from circuits to features to behaviors"},{"title":"Alignment","desc":"Training methods that reliably produce models pursuing intended objectives"},{"title":"Evaluation","desc":"Comprehensive benchmarks for safety-relevant capabilities and failure modes"}]},{"type":"stats","label":"Scale","heading":"Research Output","desc":"Expanding the frontier of AI safety research while building production systems.","items":[{"value":"34","label":"Papers published (12-month)"},{"value":"12","label":"Open-source safety tools"},{"value":"8","label":"Industry collaborations"}]},{"type":"two-column","label":"Approach","heading":"Safety by Design, Not by Patch","left":{"title":"Proactive Measures","points":["Constitutional AI training methodology","Red-teaming before every model release","Automated monitoring of model outputs","Staged deployment with human oversight"]},"right":{"title":"Research Directions","points":["Scaling monosemanticity to frontier models","Sleeper agent detection techniques","Reward hacking identification","Honest and calibrated uncertainty"]}},{"type":"flow","label":"Process","heading":"Model Release Protocol","steps":[{"title":"Train","desc":"RLHF + Constitutional AI constraints"},{"title":"Evaluate","desc":"Safety evals across 200+ scenarios"},{"title":"Red Team","desc":"Internal + external adversarial testing"},{"title":"Deploy","desc":"Staged rollout with usage monitoring"}]},{"type":"comparison","label":"Methods","heading":"Alignment Approaches Compared","columns":[{"title":"RLHF","points":["Human preference learning","Scalable but preference-dependent","Widely adopted baseline"]},{"title":"Constitutional AI","points":["Principle-based self-supervision","Reduced human labeling burden","Explicit value specification"]},{"title":"Debate","points":["Model-vs-model argumentation","Scalable oversight mechanism","Active research frontier"]}]},{"type":"big-number","number":"200+","label":"Safety Evaluation Scenarios","desc":"Every model release passes through 200+ structured safety evaluations before any external access."},{"type":"timeline","label":"Journey","heading":"Safety Research Milestones","events":[{"date":"2023","title":"Constitutional AI","desc":"Published foundational paper"},{"date":"2024","title":"Monosemanticity","desc":"Dictionary learning at scale"},{"date":"2025","title":"RSP v2","desc":"Updated scaling policy"},{"date":"2026","title":"Interpretability","desc":"Circuit-level model understanding"}]},{"type":"table","label":"Evals","heading":"Safety Evaluation Categories","headers":["Category","Tests","Coverage","Frequency"],"rows":[["Harmful content","48","Text + code + multimodal","Every release"],["Honesty","32","Calibration + refusal accuracy","Every release"],["Jailbreak resistance","64","Known + novel attack patterns","Weekly"],["Bias & fairness","28","Demographic + contextual","Monthly"],["Privacy","18","PII handling + memorization","Every release"]]},{"type":"quote","text":"The goal is not to build the most powerful AI. The goal is to build the most trustworthy AI — and demonstrate that safety and capability are not at odds.","attribution":"Research Charter"},{"type":"end","text":"Responsible AI Progress · Safety as a Foundation"}] }
  },
  {
    name: "Google", kind: "brand", mode: "light",
    desc: "Friendly multi-color product ecosystem style inspired by Google decks.",
    tags: ["Brand", "Multicolor", "Light"],
    frame: "google",
    vars: {
      bg: "#ffffff", surface: "#f8fafd", border: "#e8eaed",
      text: "#202124", text2: "#5f6368", text3: "#9aa0a6", accent: "#4285f4",
      accent2: "#34a853", accent3: "#fbbc05", font: "Roboto, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Building for Everyone","subtitle":"Product Ecosystem Update · 2026","info":"Developer Conference Keynote"},{"type":"stats","label":"Reach","heading":"Platform Scale","desc":"Serving billions of users across every screen and surface.","items":[{"value":"4.3B","label":"Monthly active users"},{"value":"15M","label":"Developers on platform"},{"value":"190+","label":"Countries served"}]},{"type":"cards","label":"AI","heading":"AI Across Every Product","items":[{"title":"Search","desc":"AI Overviews now handle 40% of queries with direct, conversational answers"},{"title":"Workspace","desc":"Help Me Write, Smart Canvas, and Duet AI embedded in every collaboration tool"},{"title":"Cloud","desc":"Vertex AI processes 2B+ predictions daily across enterprise customers"}]},{"type":"big-number","number":"40%","label":"Queries with AI Overviews","desc":"Four in ten search queries now receive AI-generated answers alongside traditional results."},{"type":"comparison","label":"Platform","heading":"Android vs Web — Developer Focus","columns":[{"title":"Android","points":["Kotlin-first with Jetpack Compose","On-device ML via MediaPipe","Adaptive layouts for foldables"]},{"title":"Web","points":["Core Web Vitals as ranking signal","WebGPU for ML inference in browser","Baseline for cross-browser compat"]}]},{"type":"flow","label":"Developer","heading":"Build → Test → Launch → Grow","steps":[{"title":"Build","desc":"Firebase + Android Studio + AI code assist"},{"title":"Test","desc":"Cloud Testing Lab: 1000+ device configurations"},{"title":"Launch","desc":"Play Console with staged rollouts and ANR tracking"},{"title":"Grow","desc":"Analytics + A/B testing + acquisition campaigns"}]},{"type":"two-column","label":"Cloud","heading":"Google Cloud Platform Highlights","left":{"title":"Infrastructure","points":["6th-gen TPU pods for training","Distributed cloud across 40 regions","Confidential computing GA","Carbon-neutral since 2007"]},"right":{"title":"AI/ML","points":["Gemini API in Vertex AI","Grounding with Google Search","Enterprise-grade RAG pipeline","Managed fine-tuning service"]}},{"type":"table","label":"Products","heading":"Key Product Metrics","headers":["Product","MAU","YoY Growth","AI Feature"],"rows":[["Search","4.3B","+2%","AI Overviews"],["YouTube","2.5B","+8%","Dream Screen"],["Gmail","1.8B","+4%","Help Me Write"],["Maps","1.2B","+6%","Immersive View"],["Photos","1.1B","+12%","Magic Editor"]]},{"type":"timeline","label":"Roadmap","heading":"2026 Launch Calendar","events":[{"date":"Q1","title":"Gemini 2.5","desc":"Multimodal reasoning model"},{"date":"Q2","title":"Android 17","desc":"On-device AI runtime"},{"date":"Q3","title":"Pixel 11","desc":"Custom Tensor G6 chip"},{"date":"Q4","title":"Cloud Next","desc":"Enterprise AI platform update"}]},{"type":"bars","label":"Sustainability","heading":"Environmental Progress","desc":"On track for 24/7 carbon-free energy by 2030.","items":[{"label":"Carbon-free energy","value":78},{"label":"Water replenishment","value":62},{"label":"Circular economy","value":45},{"label":"Supply chain audit","value":88}]},{"type":"quote","text":"Technology is most powerful when it works for everyone — not just the technically savvy, not just the well-connected, but everyone.","attribution":"Product Philosophy"},{"type":"end","text":"Building for Everyone · Google 2026"}] }
  },

  {
    name: "Academic Defense", kind: "layout", mode: "light",
    desc: "Rigorous thesis-defense structure with dark-blue headers and red anchors.",
    tags: ["Layout", "Academic", "High Density"],
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#f4f7fb", border: "#d7e4f2",
      text: "#172033", text2: "#4f5f70", text3: "#8b99a8", accent: "#003366",
      accent2: "#cc0000", accent3: "#0066cc", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Causal Inference in Observational Health Data","subtitle":"PhD Thesis Defense","info":"Department of Biostatistics · June 2026"},{"type":"section","label":"Chapter 1","title":"Research Question","subtitle":"Can we recover causal treatment effects from electronic health records without randomization?"},{"type":"cards","label":"Background","heading":"Three Methodological Challenges","items":[{"title":"Confounding","desc":"Treatment assignment correlates with patient severity — naïve comparison is biased"},{"title":"Missing Data","desc":"EHR data is collected for clinical care, not research — missingness is non-random"},{"title":"Time-Varying","desc":"Treatment decisions change over time in response to evolving patient status"}]},{"type":"stats","label":"Dataset","heading":"Study Population","desc":"Retrospective cohort from three academic medical centers, 2018–2025.","items":[{"value":"2.4M","label":"Patient records"},{"value":"340","label":"Variables per patient"},{"value":"7 yr","label":"Median follow-up"}]},{"type":"flow","label":"Method","heading":"Analytical Pipeline","steps":[{"title":"Extract","desc":"Structured EHR data + NLP on clinical notes"},{"title":"Align","desc":"Target trial emulation framework"},{"title":"Estimate","desc":"Doubly-robust TMLE with Super Learner"},{"title":"Validate","desc":"Negative control outcomes + RCT benchmark"}]},{"type":"two-column","label":"Results","heading":"Primary Findings","left":{"title":"Treatment A vs B","points":["ATE: −2.3 days (95% CI: −3.1, −1.5)","Consistent across subgroups","Robust to unmeasured confounding (E-value: 2.8)"]},"right":{"title":"Sensitivity Analysis","points":["Results stable across 5 Super Learner specifications","Missing data mechanism: MAR assumption supported","Propensity score overlap: sufficient across all strata"]}},{"type":"table","label":"Results","heading":"Treatment Effect Estimates by Subgroup","headers":["Subgroup","N","ATE","95% CI","p-value"],"rows":[["Overall","18,432","−2.3 days","(−3.1, −1.5)","<0.001"],["Age ≥ 65","6,812","−2.8 days","(−4.0, −1.6)","<0.001"],["Female","9,104","−2.1 days","(−3.2, −1.0)","<0.001"],["Comorbidity ≥ 3","4,228","−3.4 days","(−5.1, −1.7)","<0.001"]]},{"type":"comparison","label":"Validation","heading":"Our Estimates vs RCT Benchmark","columns":[{"title":"This Study (Observational)","points":["ATE: −2.3 days (−3.1, −1.5)","N = 18,432","Cost: $0 (existing data)","Time: 6 months"]},{"title":"CLARITY Trial (RCT)","points":["ATE: −2.1 days (−3.0, −1.2)","N = 4,200","Cost: $12M","Time: 4 years"]}]},{"type":"bars","label":"Contributions","heading":"Methodological Contributions","desc":"Novel extensions to existing causal inference methods.","items":[{"label":"TMLE with EHR missingness","value":92},{"label":"NLP confounder extraction","value":78},{"label":"Time-varying protocol","value":85},{"label":"Validation framework","value":88}]},{"type":"image-text","label":"Implications","heading":"Clinical and Policy Impact","imgAlt":"Causal DAG diagram","points":["Method enables causal learning from routine clinical data","Reduces dependence on expensive RCTs for evidence generation","Framework is generalizable to other treatment comparisons","Open-source R package: causalEHR v1.2 on CRAN"]},{"type":"quote","text":"The randomized trial remains the gold standard — but when we can recover the same answer from data that already exists, we owe it to patients to try.","attribution":"Thesis Conclusion"},{"type":"end","text":"Causal Inference in Observational Health Data · PhD Defense"}] }
  },
  {
    name: "AI Ops", kind: "layout", mode: "light",
    desc: "Information-dense telecom operations pages with red-blue zoning.",
    tags: ["Layout", "Enterprise", "High Density"],
    frame: "split",
    vars: {
      bg: "#ffffff", surface: "#fdf3eb", border: "#f8cbad",
      text: "#1f2933", text2: "#5b6572", text3: "#8b95a1", accent: "#c00000",
      accent2: "#2e75b6", accent3: "#5b9bd5", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"AI 运维平台","subtitle":"智能化运营管理系统 · 季度汇报","info":"信息技术部 · 2026年Q2"},{"type":"stats","label":"核心指标","heading":"平台运营概览","desc":"全网智能化运维覆盖率持续提升。","items":[{"value":"99.99%","label":"网络可用率"},{"value":"↓62%","label":"告警数量（同比）"},{"value":"85%","label":"故障自动恢复率"}]},{"type":"cards","label":"能力","heading":"三大核心能力","items":[{"title":"智能告警","desc":"基于时序异常检测的告警引擎，误报率降至 3.2%，同比下降 68%"},{"title":"根因定位","desc":"多维度关联分析，平均定位时间从 47 分钟缩短至 8 分钟"},{"title":"自动修复","desc":"预编排 120+ 修复脚本，85% 的常见故障实现分钟级自动恢复"}]},{"type":"big-number","number":"8min","label":"平均故障定位时间","desc":"从传统人工排查的 47 分钟缩短至 AI 辅助的 8 分钟，提速 83%。"},{"type":"flow","label":"架构","heading":"智能运维处理流程","steps":[{"title":"采集","desc":"全网设备指标、日志、拓扑实时采集"},{"title":"检测","desc":"AI 模型实时异常检测与告警压缩"},{"title":"分析","desc":"知识图谱驱动的根因关联分析"},{"title":"执行","desc":"自动化预案执行与人工复核"}]},{"type":"table","label":"效果","heading":"运维效率对比","headers":["指标","传统模式","AI 模式","提升幅度"],"rows":[["告警处理量/人/天","120条","450条","3.75×"],["误报率","22%","3.2%","↓85%"],["MTTR","47分钟","8分钟","↓83%"],["人均管理设备数","800台","3,200台","4×"]]},{"type":"comparison","label":"方案","heading":"运维模式演进","columns":[{"title":"传统运维","points":["被动响应告警","人工逐级排查","经验依赖度高","7×24 值守"]},{"title":"AI 运维","points":["主动预测故障","智能根因定位","知识图谱沉淀","自动化修复优先"]}]},{"type":"bars","label":"覆盖","heading":"各业务域接入进度","desc":"已完成核心网和传输网的全量接入，接入网正在推进中。","items":[{"label":"核心网","value":100},{"label":"传输网","value":95},{"label":"接入网","value":72},{"label":"IT 支撑系统","value":68}]},{"type":"timeline","label":"规划","heading":"平台建设里程碑","events":[{"date":"2025-Q1","title":"1.0 上线","desc":"告警压缩与基础分析"},{"date":"2025-Q3","title":"2.0 升级","desc":"根因分析与自动恢复"},{"date":"2026-Q2","title":"3.0 演进","desc":"预测性维护能力"},{"date":"2026-Q4","title":"4.0 目标","desc":"全场景自治运维"}]},{"type":"two-column","label":"团队","heading":"组织保障","left":{"title":"技术团队","points":["AI 算法工程师 12 人","平台开发工程师 18 人","运维专家（知识沉淀）8 人"]},"right":{"title":"机制保障","points":["周迭代发布节奏","月度效果复盘","季度 OKR 对齐","年度能力评估"]}},{"type":"quote","text":"从人盯屏幕到机器盯网络，不是替代运维人员，而是让运维人员做更有价值的事。","attribution":"平台设计理念"},{"type":"end","text":"AI 运维平台 · 让网络自己照顾自己"}] }
  },
  {
    name: "Government Blue", kind: "layout", mode: "light",
    desc: "Modern government briefing style with blue gradient authority.",
    tags: ["Layout", "Government", "Light"],
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#f3f8ff", border: "#d6e8ff",
      text: "#1a1a1a", text2: "#5d6b7a", text3: "#93a3b5", accent: "#0050b3",
      accent2: "#00b4d8", accent3: "#2e75b6", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"数字政府建设","subtitle":"新型智慧城市 · 年度工作报告","info":"数字化转型办公室 · 2026年"},{"type":"stats","label":"成效","heading":"数字化转型核心成果","desc":"以数据驱动、协同高效为目标，全面推进政务数字化。","items":[{"value":"92%","label":"政务服务网办率"},{"value":"1,240","label":"高频事项\"一网通办\""},{"value":"↓64%","label":"平均办理时间"}]},{"type":"big-number","number":"92%","label":"政务服务网办率","desc":"从 2023 年的 61% 提升至 92%，群众和企业办事基本实现\"最多跑一次\"。"},{"type":"cards","label":"工程","heading":"三大重点工程","items":[{"title":"一网通办","desc":"整合 42 个部门、1,240 项高频事项，统一受理、统一反馈"},{"title":"一网统管","desc":"城市运行管理中心接入 18 万路感知设备，实时感知城市状态"},{"title":"一网协同","desc":"跨部门协同平台覆盖 56 个单位，公文流转效率提升 3.2 倍"}]},{"type":"flow","label":"流程","heading":"\"一件事\"办理流程再造","steps":[{"title":"梳理","desc":"拆解事项为最小颗粒度材料清单"},{"title":"整合","desc":"跨部门材料共享，减少重复提交"},{"title":"优化","desc":"并联审批替代串联，压缩时限"},{"title":"评估","desc":"办件数据驱动的持续优化"}]},{"type":"table","label":"进展","heading":"重点事项办理提速","headers":["事项","改革前","改革后","提速"],"rows":[["企业开办","5个工作日","0.5个工作日","10×"],["不动产登记","15个工作日","1个工作日","15×"],["工程许可","60个工作日","20个工作日","3×"],["社保转移","30个工作日","3个工作日","10×"]]},{"type":"comparison","label":"模式","heading":"传统政务 vs 数字政务","columns":[{"title":"传统模式","points":["群众跑多个窗口","材料重复提交","部门各自为政","事后监管为主"]},{"title":"数字模式","points":["一窗受理、一次办好","数据共享、免提交","协同联动、一体化","全程在线、实时监管"]}]},{"type":"bars","label":"满意度","heading":"群众满意度调查","desc":"2026年上半年政务服务评价数据。","items":[{"label":"办事便利度","value":94},{"label":"服务态度","value":92},{"label":"办理时效","value":88},{"label":"信息透明度","value":86}]},{"type":"timeline","label":"历程","heading":"数字政府建设历程","events":[{"date":"2022","title":"顶层设计","desc":"出台数字政府建设规划"},{"date":"2023","title":"基础建设","desc":"政务云、数据中台上线"},{"date":"2025","title":"深化应用","desc":"\"一网通办\"全面推广"},{"date":"2027","title":"智慧治理","desc":"AI 辅助决策全域覆盖"}]},{"type":"two-column","label":"安全","heading":"数据安全保障体系","left":{"title":"技术措施","points":["数据分级分类管理","全链路加密传输","访问审计与溯源","隐私计算技术应用"]},"right":{"title":"制度保障","points":["数据安全责任制","定期安全评估","应急响应预案","人员培训考核"]}},{"type":"quote","text":"让数据多跑路、群众少跑腿，不是口号，是用系统工程方法重新设计每一个政务流程。","attribution":"数字化转型工作方针"},{"type":"end","text":"数字政府建设 · 为人民服务的数字化表达"}] }
  },
  {
    name: "Government Red", kind: "layout", mode: "light",
    desc: "Dignified government report language with red-blue institutional contrast.",
    tags: ["Layout", "Government", "Light"],
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#fbf5f4", border: "#ead7d5",
      text: "#1a1a1a", text2: "#625a5a", text3: "#9b8f8f", accent: "#8b0000",
      accent2: "#003366", accent3: "#b31b1b", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"乡村振兴工作报告","subtitle":"巩固拓展脱贫攻坚成果 · 全面推进乡村振兴","info":"农业农村局 · 2026年度"},{"type":"stats","label":"成效","heading":"年度核心指标","desc":"稳步推进，各项指标达到或超过年度目标。","items":[{"value":"98.6%","label":"脱贫人口稳岗就业率"},{"value":"¥18,420","label":"脱贫人口人均收入"},{"value":"↑12.3%","label":"收入增速（高于全省均值）"}]},{"type":"cards","label":"举措","heading":"三大重点工作","items":[{"title":"防止返贫监测","desc":"建立\"三线预警\"机制，累计排查 12.4 万户，风险消除率 96.2%"},{"title":"产业帮扶","desc":"培育 34 个特色产业项目，带动 8,600 户增收，户均增收 ¥6,200"},{"title":"人才振兴","desc":"选派 86 名科技特派员，培训新型职业农民 2,400 人次"}]},{"type":"flow","label":"机制","heading":"防止返贫监测帮扶流程","steps":[{"title":"排查","desc":"网格员月度入户摸排，数据同步系统"},{"title":"预警","desc":"收入、医疗、教育三线自动预警"},{"title":"帮扶","desc":"一户一策精准帮扶方案，30日内启动"},{"title":"销号","desc":"风险消除后持续跟踪 6 个月方可销号"}]},{"type":"table","label":"产业","heading":"特色产业带动成效","headers":["产业类别","项目数","覆盖户数","户均增收","带动就业"],"rows":[["特色种植","12","3,200户","¥5,800","1,400人"],["生态养殖","8","2,100户","¥6,400","860人"],["农产品加工","6","1,800户","¥7,200","1,200人"],["乡村旅游","8","1,500户","¥5,600","640人"]]},{"type":"two-column","label":"建设","heading":"乡村建设行动","left":{"title":"基础设施","points":["新建农村公路 186 公里","自来水普及率达 99.2%","4G/5G 信号行政村全覆盖","农村生活垃圾收运率 95%"]},"right":{"title":"公共服务","points":["村卫生室标准化建设 100%","乡镇寄宿制学校改造 28 所","农家书屋数字化升级 340 个","养老服务站覆盖率 78%"]}},{"type":"comparison","label":"对比","heading":"帮扶模式创新","columns":[{"title":"传统帮扶","points":["政府主导投入","单一资金帮扶","短期效果明显","可持续性不足"]},{"title":"创新模式","points":["政府引导 + 市场运作","产业 + 就业 + 金融组合","利益联结机制","内生发展动力"]}]},{"type":"big-number","number":"96.2%","label":"返贫风险消除率","desc":"累计识别风险户 1,240 户，已消除风险 1,193 户，47 户帮扶措施落实中。"},{"type":"bars","label":"资金","heading":"衔接资金使用情况","desc":"优化支出结构，产业发展类占比持续提升。","items":[{"label":"产业发展","value":62},{"label":"基础设施","value":18},{"label":"就业帮扶","value":12},{"label":"其他","value":8}]},{"type":"timeline","label":"规划","heading":"乡村振兴阶段目标","events":[{"date":"2024","title":"巩固期","desc":"守牢不发生规模性返贫底线"},{"date":"2025","title":"提升期","desc":"特色产业全覆盖"},{"date":"2027","title":"发展期","desc":"城乡融合初步形成"},{"date":"2030","title":"振兴期","desc":"农业农村现代化取得实质性进展"}]},{"type":"quote","text":"脱贫摘帽不是终点，而是新生活、新奋斗的起点。","attribution":"工作总纲"},{"type":"end","text":"乡村振兴工作报告 · 让乡亲们的日子越过越好"}] }
  },
  {
    name: "Medical University", kind: "layout", mode: "light",
    desc: "Medical academic framing with blue header, green life accent, orange signal.",
    tags: ["Layout", "Medical", "Academic"],
    frame: "medical",
    vars: {
      bg: "#ffffff", surface: "#f2f8fd", border: "#d4e8f5",
      text: "#18314a", text2: "#52677d", text3: "#92a2b0", accent: "#0066b3",
      accent2: "#00a86b", accent3: "#ff6b35", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Precision Oncology Initiative","subtitle":"Translational Research & Clinical Outcomes","info":"University Medical Center · Annual Report 2026"},{"type":"stats","label":"Program","heading":"Initiative at a Glance","desc":"Five-year precision oncology program bridging genomics to patient care.","items":[{"value":"12,400","label":"Patients genomically profiled"},{"value":"34%","label":"Matched to targeted therapy"},{"value":"2.8×","label":"Median PFS improvement"}]},{"type":"cards","label":"Pillars","heading":"Three Research Pillars","items":[{"title":"Molecular Profiling","desc":"Comprehensive genomic profiling of solid tumors with 523-gene panel and RNA sequencing"},{"title":"Biomarker Discovery","desc":"Multi-omics integration identifying novel predictive biomarkers for immunotherapy response"},{"title":"Clinical Trials","desc":"18 investigator-initiated trials with 6 industry partnerships targeting actionable mutations"}]},{"type":"big-number","number":"34%","label":"Patients Matched to Targeted Therapy","desc":"One in three profiled patients received a genomically-guided treatment recommendation."},{"type":"flow","label":"Pipeline","heading":"Bench-to-Bedside Workflow","steps":[{"title":"Profile","desc":"523-gene panel + RNA + ctDNA on every eligible patient"},{"title":"Analyze","desc":"Molecular tumor board reviews actionable findings weekly"},{"title":"Match","desc":"Algorithm maps variants to approved/trial therapies"},{"title":"Treat","desc":"Precision protocol with longitudinal ctDNA monitoring"}]},{"type":"table","label":"Trials","heading":"Active Clinical Trials","headers":["Trial","Phase","Target","Enrolled","Status"],"rows":[["PREC-101","II","HER2 low-expression","142/200","Enrolling"],["PREC-204","I/II","KRAS G12D","48/60","Enrolling"],["PREC-305","III","TMB-high solid tumors","380/500","Active"],["PREC-410","II","ctDNA-guided de-escalation","92/150","Enrolling"]]},{"type":"comparison","label":"Outcomes","heading":"Standard vs Precision Protocol Outcomes","columns":[{"title":"Standard of Care","points":["Median PFS: 6.2 months","ORR: 28%","Grade 3+ AE: 42%","Median OS: 14.8 months"]},{"title":"Precision Protocol","points":["Median PFS: 11.4 months (+84%)","ORR: 47% (+68%)","Grade 3+ AE: 31% (−26%)","Median OS: 22.6 months (+53%)"]}]},{"type":"bars","label":"Mutations","heading":"Actionable Mutation Frequency","desc":"Top alterations identified in profiled patient cohort.","items":[{"label":"EGFR mutations","value":18},{"label":"KRAS variants","value":24},{"label":"HER2 amplification","value":12},{"label":"BRAF V600E","value":8}]},{"type":"timeline","label":"Milestones","heading":"Program Evolution","events":[{"date":"2021","title":"Launch","desc":"First 500 patients profiled"},{"date":"2023","title":"MTB","desc":"Weekly molecular tumor board"},{"date":"2025","title":"ctDNA","desc":"Liquid biopsy integration"},{"date":"2027","title":"AI-guided","desc":"ML-driven treatment matching"}]},{"type":"image-text","label":"Innovation","heading":"ctDNA Monitoring as Response Biomarker","imgAlt":"ctDNA kinetics chart","points":["Serial ctDNA tracking predicts radiographic response 6 weeks earlier","Molecular residual disease detection sensitivity: 0.01% VAF","Early ctDNA clearance correlates with 3.4× improved PFS","Enables adaptive trial designs with real-time response assessment"]},{"type":"quote","text":"Every tumor is unique. Our job is to read its molecular signature and find the therapy it cannot resist.","attribution":"Program Director · Precision Oncology"},{"type":"end","text":"Precision Oncology Initiative · Translating Genomes into Cures"}] }
  },
  {
    name: "Pixel Retro", kind: "layout", mode: "dark",
    desc: "Retro game UI, neon lines, blocky frames, and zero-radius components.",
    tags: ["Layout", "Retro", "Dark", "Tech"],
    frame: "pixel",
    vars: {
      bg: "#080a12", surface: "#101521", border: "#39ff14",
      text: "#f2fff0", text2: "#9caeaa", text3: "#5c6c68", accent: "#39ff14",
      accent2: "#ffd60a", accent3: "#ff2d55", font: "'JetBrains Mono', 'Noto Sans SC', monospace",
      radius: "0px", titleCase: "uppercase"
    },
    demoContent: { "slides": [{"type":"cover","title":"PIXEL QUEST","subtitle":"Indie Game Dev Postmortem","info":"GDC Talk · 2026"},{"type":"big-number","number":"847K","label":"COPIES SOLD","desc":"From a two-person team working in a garage. No publisher. No marketing budget. Just a great game."},{"type":"section","label":"LEVEL 01","title":"THE IDEA","subtitle":"How a 48-hour game jam prototype became an 847K seller."},{"type":"cards","label":"DESIGN PILLARS","heading":"Three Design Rules","items":[{"title":"ONE-BUTTON DEPTH","desc":"Every mechanic uses one button. Complexity comes from timing, not input combos."},{"title":"5-SECOND LOOPS","desc":"Core gameplay loop completes in 5 seconds. Mastery takes 50 hours."},{"title":"READABLE PIXELS","desc":"Every sprite tells its function in 4 colors or fewer. No labels needed."}]},{"type":"stats","label":"DEV STATS","heading":"Development Numbers","desc":"28 months from jam prototype to 1.0 release.","items":[{"value":"28mo","label":"Development time"},{"value":"2","label":"Team size"},{"value":"$12K","label":"Total budget"}]},{"type":"flow","label":"PIPELINE","heading":"Asset Pipeline","steps":[{"title":"SKETCH","desc":"Paper prototype, photograph, trace in Aseprite"},{"title":"ANIMATE","desc":"8-frame cycles, 2-color constraint per layer"},{"title":"INTEGRATE","desc":"Tiled maps + custom collision in Godot"},{"title":"POLISH","desc":"Juice pass: screenshake, particles, SFX sync"}]},{"type":"table","label":"PLATFORMS","heading":"Sales by Platform","headers":["Platform","Units","Revenue","Avg Price"],"rows":[["Steam","412K","$4.1M","$9.99"],["Switch","186K","$2.2M","$11.99"],["Mobile","204K","$0.6M","$2.99"],["itch.io","45K","$0.18M","Pay-what-you-want"]]},{"type":"comparison","label":"TECH","heading":"Engine Decision: Godot vs Unity","columns":[{"title":"GODOT (CHOSEN)","points":["MIT license, no revenue share","GDScript = fast iteration","Tiny binary size (30MB)","Perfect for 2D pixel art"]},{"title":"UNITY","points":["Larger ecosystem","Better 3D pipeline","Runtime fee controversy","Overkill for our scope"]}]},{"type":"bars","label":"RETENTION","heading":"Player Retention Curves","desc":"Day-N retention for organic installs on Steam.","items":[{"label":"Day 1","value":82},{"label":"Day 7","value":54},{"label":"Day 30","value":32},{"label":"Day 90","value":18}]},{"type":"timeline","label":"TIMELINE","heading":"Development Journey","events":[{"date":"2024-01","title":"JAM","desc":"48-hour prototype"},{"date":"2024-06","title":"DEMO","desc":"Steam Next Fest"},{"date":"2025-04","title":"EARLY ACCESS","desc":"First 3 worlds"},{"date":"2026-01","title":"1.0 LAUNCH","desc":"Full game + level editor"}]},{"type":"quote","text":"CONSTRAINTS ARE NOT LIMITATIONS. THEY ARE THE GAME DESIGN.","attribution":"POSTMORTEM CONCLUSION"},{"type":"end","text":"PIXEL QUEST · GAME OVER · INSERT COIN TO CONTINUE"}] }
  },
  {
    name: "Psychology Attachment", kind: "layout", mode: "light",
    desc: "Warm professional healing style with blue-green gradient semantics.",
    tags: ["Layout", "Psychology", "Warm"],
    frame: "psych",
    vars: {
      bg: "#f8fafc", surface: "#ffffff", border: "#e5e7eb",
      text: "#1e3348", text2: "#5d6f7d", text3: "#95a1ab", accent: "#2e5c8e",
      accent2: "#3d8b7a", accent3: "#e07843", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"Attachment Patterns in Digital Relationships","subtitle":"A Longitudinal Study of Online Bonding Behaviors","info":"Department of Clinical Psychology · 2026"},{"type":"quote","text":"The need for a secure base does not vanish when relationships move online — it simply finds new expressions and new vulnerabilities.","attribution":"Study Framework"},{"type":"cards","label":"Background","heading":"Three Observations from the Literature","items":[{"title":"Digital Proximity","desc":"Online interactions activate the same attachment system as face-to-face, but with altered feedback loops"},{"title":"Asynchronous Bonding","desc":"Messaging latency creates ambiguity that disproportionately affects anxious attachment styles"},{"title":"Platform Design","desc":"Read receipts, typing indicators, and online status serve as digital proximity signals"}]},{"type":"stats","label":"Sample","heading":"Study Design","desc":"Mixed-methods longitudinal study over 18 months.","items":[{"value":"1,240","label":"Participants (18–35)"},{"value":"4","label":"Measurement waves"},{"value":"18mo","label":"Follow-up period"}]},{"type":"two-column","label":"Method","heading":"Assessment Battery","left":{"title":"Quantitative Measures","points":["ECR-R (attachment dimensions)","PHQ-9 (depressive symptoms)","Digital Communication Log (app-level)","Relationship Satisfaction Scale"]},"right":{"title":"Qualitative Component","points":["Semi-structured interviews (n=60)","Experience sampling (5× daily, 2 weeks)","Critical incident narratives","Thematic analysis with member-checking"]}},{"type":"comparison","label":"Findings","heading":"Attachment Style and Digital Behavior","columns":[{"title":"Secure","points":["Consistent response latency","Comfortable with offline periods","Uses voice/video frequently","Low monitoring of partner activity"]},{"title":"Anxious","points":["Hypervigilant to read receipts","Distressed by response delays","Prefers text (controllable)","Frequent status checking"]},{"title":"Avoidant","points":["Deliberately delayed responses","Prefers asynchronous channels","Avoids video calls","Compartmentalizes platforms"]}]},{"type":"flow","label":"Model","heading":"Digital Attachment Cycle","steps":[{"title":"Signal","desc":"Partner sends or withholds digital proximity cue"},{"title":"Interpret","desc":"Attachment schema shapes meaning of cue"},{"title":"Regulate","desc":"Strategy deployed: approach, avoid, or protest"},{"title":"Feedback","desc":"Partner response reinforces or disrupts pattern"}]},{"type":"bars","label":"Data","heading":"Distress Response by Attachment Style","desc":"Mean distress rating (0–10) when partner is 'seen but not replied' for 2+ hours.","items":[{"label":"Anxious-preoccupied","value":82},{"label":"Fearful-avoidant","value":58},{"label":"Secure","value":24},{"label":"Dismissive-avoidant","value":18}]},{"type":"table","label":"Results","heading":"Key Regression Results (Standardized β)","headers":["Predictor","Satisfaction","Distress","Monitoring"],"rows":[["Attachment anxiety","−.34***",".48***",".52***"],["Attachment avoidance","−.28***",".12*","−.18**"],["Platform count","−.08",".22**",".31***"],["Relationship length",".24**","−.16*","−.22**"]]},{"type":"image-text","label":"Clinical","heading":"Implications for Digital-Age Therapy","imgAlt":"Therapeutic framework diagram","points":["Therapists should assess digital communication patterns as attachment data","'Phone stacking' and 'notification fasting' as therapeutic interventions","Couples therapy protocols need platform-specific psychoeducation","Secure base provision can be taught in digital contexts"]},{"type":"timeline","label":"Context","heading":"Digital Attachment Research Timeline","events":[{"date":"2015","title":"First studies","desc":"Texting and attachment anxiety"},{"date":"2019","title":"Social media","desc":"Platform-specific effects"},{"date":"2022","title":"Pandemic shift","desc":"Forced digital-primary bonds"},{"date":"2026","title":"This study","desc":"Longitudinal + mixed-methods"}]},{"type":"quote","text":"We don't need to unplug to heal. We need to understand how our deepest relational patterns show up in every notification, every ellipsis, every silence.","attribution":"Study Conclusion"},{"type":"end","text":"Attachment Patterns in Digital Relationships · Longitudinal Study"}] }
  },

  {
    name: "China Telecom", kind: "deck", mode: "light",
    desc: "Enterprise-government hybrid deck with telecom red and silver lanes.",
    tags: ["Deck", "SOE", "High Density"],
    frame: "brand-red",
    vars: {
      bg: "#ffffff", surface: "#f5f6f8", border: "#d9d9d9",
      text: "#2b2f33", text2: "#6b7280", text3: "#9ca3af", accent: "#c00000",
      accent2: "#d9d9d9", accent3: "#dceaf8", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"数智赋能 共创未来","subtitle":"中国电信 · 数字化转型专题汇报","info":"政企事业部 · 2026年Q2"},{"type":"stats","label":"业绩","heading":"经营业绩概览","desc":"产业数字化收入增速持续领先行业。","items":[{"value":"¥1,842亿","label":"产业数字化收入"},{"value":"+18.6%","label":"同比增速"},{"value":"52.3%","label":"占服务收入比重"}]},{"type":"cards","label":"战略","heading":"三大战略方向","items":[{"title":"云改数转","desc":"天翼云 4.0 全栈自研，算力规模行业第一，政务云市场份额 #1"},{"title":"AI 赋能","desc":"星辰大模型行业版本 12 个，覆盖政务、医疗、教育、工业等场景"},{"title":"安全底座","desc":"量子加密通信网络覆盖 31 省，安全服务收入同比增长 34%"}]},{"type":"big-number","number":"#1","label":"政务云市场份额","desc":"连续三年保持政务云市场第一，服务超过 1,200 个政府客户。"},{"type":"flow","label":"能力","heading":"数字化解决方案交付流程","steps":[{"title":"需求","desc":"行业咨询团队深入理解客户业务场景"},{"title":"方案","desc":"基于天翼云 + AI + 安全的整合方案设计"},{"title":"交付","desc":"属地化团队实施部署与系统集成"},{"title":"运营","desc":"7×24 运维保障与持续优化迭代"}]},{"type":"table","label":"行业","heading":"重点行业数字化成果","headers":["行业","客户数","标杆项目","收入增速"],"rows":[["政务","1,200+","数字政府一体化平台","+22%"],["医疗","860+","远程影像诊断中心","+28%"],["教育","2,400+","智慧校园整体解决方案","+16%"],["工业","540+","5G + 工业互联网","+34%"]]},{"type":"comparison","label":"优势","heading":"差异化竞争优势","columns":[{"title":"我们的优势","points":["全栈自研云平台","属地化服务网络覆盖全国","政企客户信任基础深厚","安全合规能力行业领先"]},{"title":"竞品差距","points":["公有云厂商缺乏属地服务","互联网厂商缺乏政企基因","外资厂商面临合规约束","传统 IT 厂商缺乏云能力"]}]},{"type":"bars","label":"云","heading":"天翼云业务增长","desc":"各产品线收入增速（同比）。","items":[{"label":"IaaS","value":42},{"label":"PaaS","value":68},{"label":"SaaS","value":55},{"label":"安全服务","value":34}]},{"type":"two-column","label":"创新","heading":"关键技术突破","left":{"title":"算力网络","points":["全国一体化算力调度平台","边缘节点覆盖 300+ 城市","算力交易平台上线","跨域算力协同时延 <10ms"]},"right":{"title":"AI 能力","points":["星辰大模型参数量达千亿级","行业微调模型 12 个","AI 日均调用量超 5 亿次","端侧推理能力持续优化"]}},{"type":"timeline","label":"历程","heading":"数字化转型里程碑","events":[{"date":"2020","title":"云改数转","desc":"战略正式提出"},{"date":"2022","title":"天翼云 3.0","desc":"全栈自研突破"},{"date":"2024","title":"星辰大模型","desc":"行业大模型发布"},{"date":"2026","title":"算力网络","desc":"全国一体化调度"}]},{"type":"quote","text":"数字化转型不是选择题，是必答题。我们的使命是让每一个客户的数字化之路走得更稳、更快、更安全。","attribution":"转型工作方针"},{"type":"end","text":"数智赋能 共创未来 · 中国电信"}] }
  },
  {
    name: "POWERCHINA Classic", kind: "deck", mode: "light",
    desc: "Composed state-owned engineering report style with POWERCHINA blue.",
    tags: ["Deck", "Engineering"],
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#f4f6f8", border: "#d9e3ee",
      text: "#1a1a1a", text2: "#4a5568", text3: "#718096", accent: "#00418d",
      accent2: "#0066cc", accent3: "#c41e3a", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"重大工程建设报告","subtitle":"中国电建 · 年度工程进展汇报","info":"工程管理部 · 2026年"},{"type":"stats","label":"概览","heading":"年度工程数据","desc":"坚持安全第一、质量为本，工程建设稳步推进。","items":[{"value":"186","label":"在建项目"},{"value":"¥2,840亿","label":"合同总额"},{"value":"99.7%","label":"安全生产达标率"}]},{"type":"cards","label":"重点","heading":"三大标志性工程","items":[{"title":"抽水蓄能电站","desc":"装机容量 240 万千瓦，上下水库落差 620 米，预计 2027 年全面投产"},{"title":"跨流域引调水","desc":"输水线路全长 438 公里，年调水量 30 亿立方米，惠及 1,200 万人"},{"title":"海上风电基地","desc":"总装机 500 万千瓦，单机最大 16MW，配套 220kV 海上升压站"}]},{"type":"flow","label":"管理","heading":"工程项目全生命周期管理","steps":[{"title":"规划","desc":"可行性研究与初步设计审查"},{"title":"建设","desc":"进度、质量、安全、成本四控管理"},{"title":"验收","desc":"分部分项验收与竣工验收"},{"title":"运维","desc":"智慧运维平台与长期监测"}]},{"type":"table","label":"进度","heading":"重点项目进展","headers":["项目","计划进度","实际进度","偏差","状态"],"rows":[["抽水蓄能","68%","71%","+3%","超前"],["引调水工程","45%","44%","−1%","基本同步"],["海上风电","32%","35%","+3%","超前"],["高速公路","56%","52%","−4%","可控偏差"]]},{"type":"big-number","number":"0","label":"重大安全事故","desc":"连续 1,460 天零重大安全事故，安全生产管理体系持续有效运行。"},{"type":"comparison","label":"创新","heading":"传统施工 vs 数字化施工","columns":[{"title":"传统模式","points":["二维图纸交底","人工巡检为主","事后分析质量数据","经验驱动决策"]},{"title":"数字化模式","points":["BIM + 三维可视化","无人机 + AI 巡检","实时质量数据采集","数据驱动决策"]}]},{"type":"bars","label":"质量","heading":"各项目质量评定","desc":"分部工程优良率统计。","items":[{"label":"抽水蓄能","value":98},{"label":"引调水工程","value":96},{"label":"海上风电","value":97},{"label":"高速公路","value":94}]},{"type":"two-column","label":"ESG","heading":"绿色建造与社会责任","left":{"title":"绿色施工","points":["施工废水零排放","扬尘在线监测 100% 覆盖","固废资源化利用率 92%","绿色建材使用占比 78%"]},"right":{"title":"社会责任","points":["属地化用工比例 65%","技能培训 4,200 人次","社区共建项目 18 个","精准帮扶投入 ¥1,200 万"]}},{"type":"timeline","label":"里程碑","heading":"年度工程大事记","events":[{"date":"2026-01","title":"开工","desc":"海上风电首批机组吊装"},{"date":"2026-04","title":"贯通","desc":"引调水隧洞主体贯通"},{"date":"2026-08","title":"蓄水","desc":"抽水蓄能下库蓄水"},{"date":"2026-12","title":"并网","desc":"海上风电首批并网发电"}]},{"type":"quote","text":"每一项工程都是对自然的承诺：建设得了，也守护得住。","attribution":"工程建设理念"},{"type":"end","text":"重大工程建设报告 · 中国电建"}] }
  },
  {
    name: "POWERCHINA Modern", kind: "deck", mode: "dark",
    desc: "Grand engineering narrative with deep-blue tech gradient and precision grid.",
    tags: ["Deck", "Engineering", "Dark"],
    frame: "tech",
    vars: {
      bg: "#001f45", surface: "#072c61", border: "rgba(0,136,255,0.2)",
      text: "#ffffff", text2: "#cbd5e1", text3: "#8090a5", accent: "#0088ff",
      accent2: "#00418d", accent3: "#ffd700", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"智慧能源","subtitle":"新型电力系统技术创新报告","info":"科技创新部 · 2026年"},{"type":"big-number","number":"67GW","label":"新能源装机容量","desc":"风电、光伏、抽水蓄能累计投运装机容量突破 67GW，同比增长 23%。"},{"type":"cards","label":"创新","heading":"三大技术突破","items":[{"title":"数字孪生电站","desc":"全场景三维建模精度达厘米级，运维效率提升 40%，故障预测准确率 92%"},{"title":"海上浮式风电","desc":"自主研发 15MW 半潜式浮体平台，适用水深 50-200 米，成本降低 28%"},{"title":"氢能储运","desc":"高压固态储氢技术突破，储氢密度 5.5wt%，加氢站建设成本降低 35%"}]},{"type":"stats","label":"研发","heading":"科技创新投入","desc":"研发投入持续增长，创新成果加速转化。","items":[{"value":"¥86亿","label":"年度研发投入"},{"value":"1,240","label":"新增专利"},{"value":"18","label":"国家级科技奖项"}]},{"type":"flow","label":"路线","heading":"新型电力系统建设路径","steps":[{"title":"源端","desc":"大规模新能源基地建设与送出"},{"title":"网端","desc":"柔性直流输电与智能电网调度"},{"title":"荷端","desc":"需求侧响应与虚拟电厂聚合"},{"title":"储端","desc":"多元化储能配置与协调优化"}]},{"type":"comparison","label":"技术","heading":"储能技术路线对比","columns":[{"title":"抽水蓄能","points":["成熟可靠，寿命 50 年+","调节能力强，GW 级","选址受地形限制","建设周期 6-8 年"]},{"title":"电化学储能","points":["灵活部署，选址自由","响应速度快，毫秒级","寿命 10-15 年","成本快速下降"]},{"title":"氢储能","points":["长时储能优势明显","跨季节能量转移","效率有待提升","产业链尚在完善"]}]},{"type":"table","label":"项目","heading":"在建重点新能源项目","headers":["项目","类型","装机","投产时间","状态"],"rows":[["青海海南基地","光伏 + 储能","16GW","2027","建设中"],["广东阳江","海上风电","8GW","2026-Q4","调试中"],["河北丰宁","抽水蓄能","3.6GW","2026-Q3","蓄水中"],["内蒙古","风光氢储","12GW","2028","规划中"]]},{"type":"bars","label":"能源","heading":"装机结构演变","desc":"清洁能源占比持续提升（%）。","items":[{"label":"水电","value":38},{"label":"风电","value":24},{"label":"光伏","value":22},{"label":"抽蓄 + 储能","value":10}]},{"type":"two-column","label":"数字","heading":"数字化转型进展","left":{"title":"智慧建造","points":["BIM 正向设计覆盖率 85%","AI 质量检测系统上线","无人化施工设备 200+ 台","5G 专网覆盖 40+ 工地"]},"right":{"title":"智慧运维","points":["数字孪生电站 120+ 座","设备健康管理系统","预测性维护准确率 92%","远程集控中心 8 个"]}},{"type":"timeline","label":"展望","heading":"技术发展路线图","events":[{"date":"2026","title":"15MW","desc":"大容量海上风机量产"},{"date":"2027","title":"钙钛矿","desc":"新型光伏电池中试"},{"date":"2028","title":"液态氢","desc":"氢能长距输运示范"},{"date":"2030","title":"聚变","desc":"参与聚变能源工程"}]},{"type":"quote","text":"让每一滴水、每一缕风、每一束光都成为清洁能源的一部分。","attribution":"科技创新愿景"},{"type":"end","text":"智慧能源 · 新型电力系统技术创新"}] }
  },
  {
    name: "CATARC Business", kind: "deck", mode: "dark",
    desc: "Authoritative automotive certification deck with deep-blue tech gradient.",
    tags: ["Deck", "Automotive", "Business"],
    frame: "tech",
    vars: {
      bg: "#003366", surface: "#001f4d", border: "rgba(0,122,204,0.22)",
      text: "#ffffff", text2: "#d7dee8", text3: "#8ea0b4", accent: "#007acc",
      accent2: "#0050b3", accent3: "#d32f2f", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"新能源汽车认证报告","subtitle":"中汽中心 · 2026年度技术认证与检测服务","info":"检测认证事业部"},{"type":"stats","label":"业务","heading":"年度认证数据","desc":"新能源汽车认证检测业务持续高速增长。","items":[{"value":"3,420","label":"认证项目数"},{"value":"+38%","label":"同比增长"},{"value":"99.2%","label":"客户满意度"}]},{"type":"cards","label":"能力","heading":"三大核心服务","items":[{"title":"整车认证","desc":"涵盖安全、排放、能耗等 42 项强制性检测标准，出具国家认可的检测报告"},{"title":"电池检测","desc":"热失控、挤压、过充等 28 项安全测试，覆盖电芯-模组-系统全层级"},{"title":"智能网联","desc":"L2-L4 自动驾驶系统测试评价，覆盖 180+ 测试场景"}]},{"type":"big-number","number":"3,420","label":"年度认证项目","desc":"同比增长 38%，覆盖国内外 86 家主机厂和 210 家零部件企业。"},{"type":"flow","label":"流程","heading":"认证检测服务流程","steps":[{"title":"受理","desc":"客户提交申请材料与样品"},{"title":"检测","desc":"依据国标/行标执行检测试验"},{"title":"评审","desc":"技术委员会审核检测结果"},{"title":"发证","desc":"出具检测报告与认证证书"}]},{"type":"table","label":"标准","heading":"2026年重点新标准","headers":["标准号","名称","实施日期","影响范围"],"rows":[["GB 38031-2025","电动汽车动力电池安全","2026-07","所有新能源车"],["GB/T 40429-2025","智能网联汽车 L3 要求","2026-01","L3 级车型"],["GB 19578-2025","乘用车燃料消耗量","2026-07","所有乘用车"],["GB/T XXXXX","固态电池安全测试","2026-12","固态电池车型"]]},{"type":"comparison","label":"设施","heading":"检测设施升级","columns":[{"title":"现有设施","points":["碰撞实验室 4 座","环境仓 12 间","电磁兼容暗室 6 间","电池安全实验室 8 间"]},{"title":"新增建设","points":["极端气候测试中心","智能网联封闭测试场","氢燃料电池专用实验室","高压快充测试平台"]}]},{"type":"bars","label":"市场","heading":"认证收入结构","desc":"按业务类型分布。","items":[{"label":"整车认证","value":42},{"label":"电池检测","value":28},{"label":"智能网联","value":18},{"label":"技术咨询","value":12}]},{"type":"two-column","label":"国际","heading":"国际化业务拓展","left":{"title":"已获认可","points":["联合国 ECE 认证资质","欧盟 e-Mark 检测授权","日本 PSE 合作实验室","东盟互认协议签署"]},"right":{"title":"拓展方向","points":["中东 GCC 认证渠道","南美 INMETRO 合作","印度 AIS 标准对接","\"一带一路\" 技术服务"]}},{"type":"timeline","label":"发展","heading":"认证能力发展历程","events":[{"date":"2018","title":"新能源","desc":"新能源汽车检测能力建设"},{"date":"2021","title":"智能网联","desc":"自动驾驶测试场投用"},{"date":"2024","title":"固态电池","desc":"新型电池检测标准参与制定"},{"date":"2026","title":"全球布局","desc":"海外认证服务网络建成"}]},{"type":"quote","text":"每一份认证报告背后，是对公众安全的郑重承诺。","attribution":"检测认证使命"},{"type":"end","text":"新能源汽车认证报告 · 中汽中心"}] }
  },
  {
    name: "CATARC Classic", kind: "deck", mode: "light",
    desc: "Consulting-style automotive report with deep-blue bars and red emphasis.",
    tags: ["Deck", "Automotive"],
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#f5f5f5", border: "#e0e0e0",
      text: "#333333", text2: "#666666", text3: "#999999", accent: "#004098",
      accent2: "#cc0000", accent3: "#4caf50", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"中国汽车产业年度分析","subtitle":"市场格局、技术趋势与政策展望","info":"中汽中心 · 产业研究院 · 2026年"},{"type":"stats","label":"市场","heading":"2026年市场全景","desc":"新能源渗透率首次过半，产业格局深度重塑。","items":[{"value":"2,860万辆","label":"全年汽车销量"},{"value":"52.4%","label":"新能源渗透率"},{"value":"480万辆","label":"出口量"}]},{"type":"big-number","number":"52.4%","label":"新能源渗透率","desc":"历史性突破：新能源汽车销量首次超过传统燃油车，标志着产业转型跨越临界点。"},{"type":"cards","label":"趋势","heading":"三大结构性变化","items":[{"title":"价格带下沉","desc":"10 万元以下新能源车型占比从 18% 升至 32%，加速替代燃油入门市场"},{"title":"出口结构升级","desc":"新能源出口均价从 $15K 升至 $22K，品牌溢价能力显著增强"},{"title":"技术路线分化","desc":"纯电 vs 插混比例从 7:3 变为 5.5:4.5，增程式快速崛起"}]},{"type":"table","label":"排名","heading":"新能源销量 TOP 10","headers":["排名","品牌","销量","市占率","增速"],"rows":[["1","比亚迪","420万","28.0%","+18%"],["2","特斯拉","180万","12.0%","+8%"],["3","吉利","124万","8.3%","+42%"],["4","长安","98万","6.5%","+36%"],["5","理想","64万","4.3%","+52%"]]},{"type":"comparison","label":"路线","heading":"技术路线竞争","columns":[{"title":"纯电","points":["补能焦虑持续缓解","800V 快充 10→80% 仅需 15 分钟","电池成本跌至 $60/kWh","固态电池量产在即"]},{"title":"插混/增程","points":["综合续航 1200km+","无里程焦虑","低温性能优势","燃油基础设施兼容"]}]},{"type":"bars","label":"出口","heading":"出口目的地分布","desc":"前四大出口市场占比。","items":[{"label":"欧洲","value":35},{"label":"东南亚","value":28},{"label":"中东","value":18},{"label":"南美","value":12}]},{"type":"flow","label":"链条","heading":"产业链重构逻辑","steps":[{"title":"上游","desc":"锂电材料价格回归理性，产能出清"},{"title":"中游","desc":"电池厂集中度提升，CR3 达 72%"},{"title":"下游","desc":"整车厂软件定义汽车能力分化"},{"title":"后市场","desc":"新能源售后服务体系重建"}]},{"type":"two-column","label":"政策","heading":"政策环境变化","left":{"title":"国内政策","points":["新能源购置税减免延至 2027","碳积分交易价格机制优化","充电基础设施纳入新基建","智能网联道路测试法规完善"]},"right":{"title":"国际环境","points":["欧盟碳关税 CBAM 全面实施","美国 IRA 法案本土化要求","东盟新能源关税互惠谈判","\"一带一路\" 产能合作深化"]}},{"type":"timeline","label":"展望","heading":"产业关键节点预测","events":[{"date":"2026","title":"渗透过半","desc":"新能源销量超燃油"},{"date":"2027","title":"固态电池","desc":"首款固态电池车量产"},{"date":"2028","title":"L3 商用","desc":"高速公路 L3 规模落地"},{"date":"2030","title":"碳达峰","desc":"汽车行业碳达峰目标"}]},{"type":"quote","text":"中国汽车产业用二十年完成了从跟随到引领的转变，下一个二十年的命题是：如何让引领可持续。","attribution":"产业研究结论"},{"type":"end","text":"中国汽车产业年度分析 · 中汽中心"}] }
  },
  {
    name: "CATARC Modern", kind: "deck", mode: "dark",
    desc: "Futuristic strategy release style with night sky, tech blue, and cyan.",
    tags: ["Deck", "Automotive", "Dark"],
    frame: "tech",
    vars: {
      bg: "#001529", surface: "#002b52", border: "rgba(0,229,255,0.18)",
      text: "#ffffff", text2: "#c7d2df", text3: "#748498", accent: "#1890ff",
      accent2: "#00e5ff", accent3: "#096dd9", font: "Arial, 'Noto Sans SC', sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"自动驾驶技术白皮书","subtitle":"从辅助驾驶到高阶自动驾驶的技术演进","info":"中汽中心 · 智能网联研究所 · 2026年"},{"type":"big-number","number":"L3","label":"高速公路自动驾驶","desc":"2026年，首批 L3 级高速公路自动驾驶系统通过国家准入测试，进入量产阶段。"},{"type":"cards","label":"挑战","heading":"三大技术瓶颈","items":[{"title":"感知边界","desc":"极端天气、遮挡场景下的感知可靠性仍是 L4 的核心障碍"},{"title":"决策安全","desc":"长尾场景的决策覆盖率不足，需万亿公里级仿真验证"},{"title":"责任界定","desc":"人机切换场景的法律责任归属，标准体系尚待完善"}]},{"type":"stats","label":"测试","heading":"国家级测试数据","desc":"基于中汽中心智能网联测试基地的累计数据。","items":[{"value":"280万km","label":"封闭场地测试里程"},{"value":"12亿km","label":"仿真测试里程"},{"value":"180+","label":"标准测试场景"}]},{"type":"flow","label":"路线","heading":"自动驾驶分级演进","steps":[{"title":"L2+","desc":"高速 NOA，驾驶员持续监控"},{"title":"L3","desc":"高速公路条件自动驾驶，系统负责"},{"title":"L4","desc":"限定区域全自动，无需驾驶员"},{"title":"L5","desc":"全场景全自动，终极目标"}]},{"type":"comparison","label":"方案","heading":"技术路线对比","columns":[{"title":"视觉主导","points":["BEV + Transformer 架构","成本优势明显","依赖数据驱动迭代","代表：特斯拉 FSD"]},{"title":"多传感器融合","points":["激光雷达 + 摄像头 + 毫米波","冗余设计提高安全性","硬件成本较高","代表：Waymo, 华为"]}]},{"type":"table","label":"标准","heading":"自动驾驶标准体系","headers":["类别","标准数量","已发布","制定中","规划中"],"rows":[["基础通用","12","8","3","1"],["功能安全","8","5","2","1"],["测试评价","15","9","4","2"],["信息安全","10","6","3","1"],["数据管理","6","2","3","1"]]},{"type":"bars","label":"技术","heading":"关键技术成熟度评估","desc":"基于 TRL（技术就绪度）评级，满分 9 级。","items":[{"label":"感知融合","value":82},{"label":"规划决策","value":68},{"label":"V2X 通信","value":75},{"label":"OTA 升级","value":90}]},{"type":"two-column","label":"生态","heading":"产业生态构建","left":{"title":"测试基础设施","points":["国家级封闭测试场 4 个","开放道路测试区 12 个","仿真测试云平台","V2X 通信测试环境"]},"right":{"title":"标准与法规","points":["参与 UN/WP.29 法规制定","国家标准 + 行业标准双轨","测试评价方法学研究","数据安全合规框架"]}},{"type":"image-text","label":"案例","heading":"高速公路 L3 准入测试","imgAlt":"L3 测试场景示意","points":["覆盖 12 类高速公路典型场景","包含匝道合流、隧道、施工区等","人机切换响应时间 ≤ 10 秒","极端天气条件下的降级策略验证"]},{"type":"timeline","label":"展望","heading":"自动驾驶发展路线","events":[{"date":"2026","title":"L3 准入","desc":"高速公路 L3 量产"},{"date":"2027","title":"城市 NOA","desc":"城市场景 L2+ 普及"},{"date":"2028","title":"L4 示范","desc":"港口/矿区 L4 规模应用"},{"date":"2030","title":"L4 扩展","desc":"限定城区 L4 运营"}]},{"type":"quote","text":"自动驾驶的终极目标不是取代驾驶员，而是消灭交通事故。","attribution":"技术白皮书结语"},{"type":"end","text":"自动驾驶技术白皮书 · 中汽中心"}] }
  },
  {
    name: "CMB Transaction Banking", kind: "deck", mode: "light",
    desc: "Refined finance product deck with bank red, deep red, and finance blue.",
    tags: ["Deck", "Finance"],
    frame: "brand-red",
    vars: {
      bg: "#ffffff", surface: "#f7f7f7", border: "#e9e9e9",
      text: "#1f1f1f", text2: "#666666", text3: "#999999", accent: "#c8152d",
      accent2: "#8f0f1b", accent3: "#2175d9", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"交易银行业务报告","subtitle":"招商银行 · 公司金融数字化转型","info":"交易银行部 · 2026年半年报"},{"type":"stats","label":"业绩","heading":"上半年经营指标","desc":"交易银行业务保持高质量增长态势。","items":[{"value":"¥18.6万亿","label":"交易结算量"},{"value":"+22%","label":"同比增长"},{"value":"¥126亿","label":"中间业务收入"}]},{"type":"cards","label":"产品","heading":"三大核心产品线","items":[{"title":"CBS 现金管理","desc":"服务 2.8 万家集团客户，资金归集效率提升 40%，跨行支付成功率 99.6%"},{"title":"跨境金融","desc":"覆盖 130+ 币种结算，CIPS 直参行优势，跨境电商收款 T+0 到账"},{"title":"供应链金融","desc":"区块链应收账款平台累计融资 ¥3,200 亿，核心企业 1,200 家"}]},{"type":"big-number","number":"¥18.6万亿","label":"交易结算量","desc":"上半年交易结算量同比增长 22%，企业客户活跃度持续提升。"},{"type":"flow","label":"数字化","heading":"交易银行数字化路径","steps":[{"title":"在线化","desc":"98% 的交易通过线上渠道完成"},{"title":"智能化","desc":"AI 驱动的资金预测与风险预警"},{"title":"生态化","desc":"API 开放银行接入 ERP/财务系统"},{"title":"平台化","desc":"「招商银行企业 App」一站式服务"}]},{"type":"table","label":"产品","heading":"核心产品经营数据","headers":["产品","客户数","交易量","收入","增速"],"rows":[["现金管理","28,000","¥8.2万亿","¥42亿","+18%"],["贸易融资","6,400","¥3.1万亿","¥38亿","+24%"],["跨境结算","12,800","¥4.8万亿","¥28亿","+28%"],["供应链金融","1,200","¥2.5万亿","¥18亿","+34%"]]},{"type":"comparison","label":"优势","heading":"招行交易银行差异化优势","columns":[{"title":"我行优势","points":["APP 用户体验行业第一","API 接口 800+，最全","供应链金融区块链平台","跨境 T+0 结算能力"]},{"title":"需加强领域","points":["大型央企深耕不足","海外分行网络覆盖","本币互换业务拓展","产业链金融场景化"]}]},{"type":"bars","label":"渠道","heading":"交易渠道分布","desc":"线上化率持续提升。","items":[{"label":"企业 App","value":52},{"label":"网银","value":34},{"label":"API 直连","value":12},{"label":"柜面","value":2}]},{"type":"two-column","label":"风控","heading":"风控与合规","left":{"title":"智能风控","points":["交易反欺诈模型准确率 99.4%","可疑交易自动拦截","客户画像实时更新","大额交易智能审核"]},"right":{"title":"合规体系","points":["反洗钱系统全面升级","跨境合规自动化审查","监管报送 T+1 完成","内控审计全流程覆盖"]}},{"type":"timeline","label":"历程","heading":"交易银行发展历程","events":[{"date":"2015","title":"起步","desc":"交易银行事业部成立"},{"date":"2019","title":"数字化","desc":"企业 App 上线"},{"date":"2022","title":"开放银行","desc":"API 平台发布"},{"date":"2026","title":"智能化","desc":"AI 驱动的交易银行"}]},{"type":"quote","text":"交易银行的本质是帮助企业让资金流动得更快、更安全、成本更低。","attribution":"交易银行业务理念"},{"type":"end","text":"交易银行业务报告 · 招商银行"}] }
  },
  {
    name: "Chongqing University", kind: "deck", mode: "light",
    desc: "Academic minimalism with CQU blue, mountain-city curves, and dawn gold.",
    tags: ["Deck", "Academic"],
    frame: "academic",
    vars: {
      bg: "#fafcff", surface: "#e3f2fd", border: "#cce4f6",
      text: "#1a2e44", text2: "#333d4a", text3: "#6b7b8c", accent: "#006bb7",
      accent2: "#004a82", accent3: "#d4a84b", font: "'Noto Sans SC', Arial, sans-serif"
    },
    demoContent: { "slides": [{"type":"cover","title":"重庆大学科研成果报告","subtitle":"面向国家重大需求的基础与应用研究","info":"科学技术发展研究院 · 2026年度"},{"type":"stats","label":"总览","heading":"年度科研数据","desc":"科研经费与高水平成果产出再创新高。","items":[{"value":"¥28.6亿","label":"科研经费到账"},{"value":"186","label":"国家级项目立项"},{"value":"12","label":"国家级科技奖项"}]},{"type":"cards","label":"方向","heading":"三大优势学科群","items":[{"title":"智能制造","desc":"机器人与智能装备实验室入选国家重点实验室重组，发表 Nature 子刊 3 篇"},{"title":"绿色建筑","desc":"山地城镇建设国家重点实验室，主持长江上游生态修复重大项目"},{"title":"生物医学","desc":"生物工程学院牵头脑科学与类脑智能重大专项，获批经费 ¥1.2 亿"}]},{"type":"big-number","number":"186","label":"国家级项目立项","desc":"含国家自然科学基金 142 项（重点项目 8 项）、国家重点研发计划 24 项。"},{"type":"flow","label":"转化","heading":"科技成果转化路径","steps":[{"title":"发现","desc":"基础研究产出原创性成果"},{"title":"验证","desc":"实验室验证与中试放大"},{"title":"转化","desc":"技术许可或成立衍生企业"},{"title":"产业化","desc":"对接产业资本与市场应用"}]},{"type":"table","label":"论文","heading":"高水平论文产出","headers":["类别","数量","同比","代表成果"],"rows":[["Nature/Science 主刊","4篇","+100%","新型拓扑量子材料"],["Nature 子刊","18篇","+38%","脑机接口新范式"],["ESI 高被引论文","86篇","+24%","绿色建筑材料"],["国际顶会","142篇","+16%","具身智能"]]},{"type":"comparison","label":"合作","heading":"产学研合作模式","columns":[{"title":"传统模式","points":["项目制合作","成果交付即结束","企业被动接收","转化周期 3-5 年"]},{"title":"新型模式","points":["联合实验室共建","全周期深度参与","需求驱动研发","转化周期 1-2 年"]}]},{"type":"two-column","label":"平台","heading":"重大科研平台","left":{"title":"国家级平台","points":["国家重点实验室 3 个","国家工程研究中心 2 个","国家国际合作基地 4 个","前沿科学中心 1 个"]},"right":{"title":"省部级平台","points":["教育部重点实验室 8 个","重庆市重点实验室 22 个","协同创新中心 3 个","院士工作站 6 个"]}},{"type":"bars","label":"经费","heading":"科研经费来源结构","desc":"多元化的经费来源保障研究持续性。","items":[{"label":"国家项目","value":48},{"label":"企业合作","value":28},{"label":"地方项目","value":16},{"label":"国际合作","value":8}]},{"type":"image-text","label":"亮点","heading":"脑机接口研究突破","imgAlt":"脑机接口实验装置","points":["国际首次实现非侵入式高精度脑机接口","信号解码准确率达 96.8%，超越侵入式方案","Nature Biomedical Engineering 发表","已申请国际专利 12 项"]},{"type":"timeline","label":"规划","heading":"\"十四五\"科研发展节点","events":[{"date":"2024","title":"基础建设","desc":"新增 3 个国家级平台"},{"date":"2025","title":"人才引育","desc":"全职院士 + 长江学者 12 人"},{"date":"2026","title":"成果突破","desc":"Nature/Science 主刊 4 篇"},{"date":"2027","title":"转化提速","desc":"科技成果转化收入翻番"}]},{"type":"quote","text":"研以致用，学以报国。重庆大学的科研始终面向国家重大需求，扎根西部、服务全局。","attribution":"科研工作理念"},{"type":"end","text":"重庆大学科研成果报告 · 复兴民族 誓作前锋"}] }
  },

  {
    name: "Brutalist Newspaper", kind: "example", mode: "light",
    desc: "Editorial newspaper style with dense columns, black rules, and a single red accent.",
    tags: ["Example", "Editorial", "High Density"],
      demoContent: {
            "cardsHeading": "Issue at a Glance",
            "cardsLabel": "THREE OBSERVATIONS",
            "cards": [
                  {
                        "title": "Revenue Shift",
                        "desc": "Revenue concentration is breaking from user-count rankings"
                  },
                  {
                        "title": "Training Costs",
                        "desc": "Frontier training costs cleared the $200M floor, heading to $1-3B by late 2027"
                  },
                  {
                        "title": "Inference Decline",
                        "desc": "Inference cost is falling ~10x per year for the same capability"
                  }
            ],
            "statsHeading": "Revenue League Table",
            "statsDesc": "LLM revenue share Q1 2026 -- Counterpoint Research",
            "stats": [
                  {
                        "value": "31.4%",
                        "label": "Anthropic"
                  },
                  {
                        "value": "$20.7B",
                        "label": "Quarterly LLM Revenue"
                  },
                  {
                        "value": "3.8B",
                        "label": "Monthly LLM Users"
                  }
            ],
            "stepsHeading": "The ARPU Divide",
            "steps": [
                  {
                        "title": "Scale Users",
                        "desc": "Meta leads with ~1,000M MAU at $0.10 ARPU"
                  },
                  {
                        "title": "Monetize API",
                        "desc": "Anthropic reaches $16.20 ARPU via enterprise coding workloads"
                  },
                  {
                        "title": "Train Frontier",
                        "desc": "Costs cleared $200-500M per run for 2026 frontier models"
                  },
                  {
                        "title": "Regulate",
                        "desc": "EU, US, and China each pursuing divergent regulatory frameworks"
                  }
            ],
            "barsHeading": "Inference Power Spread",
            "barsDesc": "Watts per medium prompt across frontier models",
            "bars": [
                  {
                        "label": "Claude 4 Opus",
                        "value": 22
                  },
                  {
                        "label": "GPT-4",
                        "value": 45
                  },
                  {
                        "label": "Gemini 2.5",
                        "value": 60
                  },
                  {
                        "label": "DeepSeek V3",
                        "value": 100
                  }
            ],
            "quote": "The league table changed. The bench-design community is now permanently behind the model-release cycle."
      ,
      "slides": [{"type":"cover","title":"THE AI INDUSTRY 2026","subtitle":"Annual Report — Volume 1, Edition 1","info":"Compiled May 2026 · Sources: Stanford HAI · Counterpoint · OneTrust · IEEE Spectrum"},{"type":"stats","label":"Front Page","heading":"Issue at a Glance","desc":"The year the league table changed.","items":[{"value":"$2.02T","label":"AI Spending 2026E"},{"value":"3.8B","label":"Monthly LLM Users"},{"value":"$20.7B","label":"Q1 LLM Revenue"}]},{"type":"bars","label":"Lead Story","heading":"Revenue League Table Q1 2026","desc":"First non-OpenAI lab in #1 since the modern LLM era began.","items":[{"label":"Anthropic","value":31},{"label":"OpenAI","value":29},{"label":"Google","value":12},{"label":"Microsoft","value":7}]},{"type":"table","label":"Sidebar Data","heading":"The ARPU Divide — Scale ≠ Monetisation","headers":["Lab","MAU","ARPU"],"rows":[["Anthropic","134M","$16.20"],["Microsoft","—","$5.00"],["OpenAI","900M","$2.20"],["Google","—","$1.10"],["Meta","~1B","$0.10"]]},{"type":"big-number","number":"$500M+","label":"Frontier Training Cost","desc":"Crossed the half-billion line per run. Power and grid interconnect, not chip supply, are the binding constraint."},{"type":"comparison","label":"Regulation","heading":"Three Rulebooks, One Race","columns":[{"title":"EU","points":["AI Act full force Aug 2025","€35M or 7% turnover penalty","General-purpose AI systemic risk"]},{"title":"United States","points":["EO 14179 + state laws","Varies by state penalty","Innovation-first reframing"]},{"title":"China","points":["Gen-AI Services Measures","License revocation penalty","Watermark rules Sep 2025"]}]},{"type":"timeline","label":"Timeline","heading":"2025–2026 — Six Milestones","events":[{"date":"2025-01","title":"US EO 14179","desc":"Federal posture reversed"},{"date":"2025-08","title":"EU AI Act","desc":"First binding horizontal AI statute"},{"date":"2025-09","title":"China Watermarks","desc":"State-mandated watermark regime"},{"date":"2025-Q4","title":"DeepSeek-R1","desc":"Open-weights reasoning model"},{"date":"2026-Q1","title":"Anthropic #1","desc":"Overtakes OpenAI on revenue"},{"date":"2026-04","title":"HAI Index 2026","desc":"SWE-bench Verified saturated"}]},{"type":"cards","label":"Inference","heading":"Watts per Query — 4.6× Spread","items":[{"title":"5 W","desc":"Claude 4 Opus per medium prompt"},{"title":"23 W","desc":"DeepSeek V3 per medium prompt"},{"title":"~10×/yr","desc":"Inference cost decline at constant capability"}]},{"type":"two-column","label":"Capability","heading":"Benchmarks Saturated Faster Than Built","left":{"title":"SWE-bench Verified","points":["Coding: ~60% → ~100% of human baseline","Benchmark half-life dropped from years to months"]},"right":{"title":"Frontier Science","points":["PhD-level science QA: meet/exceed baseline","Competition mathematics: meet baseline"]}},{"type":"table","label":"Closing","heading":"What Changed · What Didn't","headers":["Dimension","Changed","Did Not Change"],"rows":[["Revenue","Leader ≠ user-count leader","Frontier cohort still ~5 labs"],["Training","Cost crossed $500M/run","China labs: $0 EU revenue"],["Inference","Power 4.6× discriminator","Open-weights ≠ revenue"],["Benchmarks","Half-life: years → months","Power/grid hardest to source"]]},{"type":"quote","text":"The bench-design community is now permanently behind the model-release cycle.","attribution":"Stanford HAI AI Index 2026"},{"type":"end","text":"THE AI INDUSTRY 2026 · Annual Report · Volume 1, Edition 1"}]},
    frame: "brutalist",
    vars: {
      bg: "#ffffff", surface: "#f4f1ea", border: "#000000",
      text: "#111111", text2: "#3a3a3a", text3: "#6b6b6b", accent: "#c8102e",
      accent2: "#111111", accent3: "#1a6e3a", font: "Arial Black, Georgia, 'Noto Sans SC', serif",
      radius: "0px", titleCase: "uppercase"
    }
  },
  {
    name: "Glassmorphism SaaS", kind: "example", mode: "dark",
    desc: "Deep-space glass panels with blue, purple, and cyan neon highlights.",
    tags: ["Example", "SaaS", "Glass", "Dark"],
      demoContent: {
            "cardsHeading": "Three Production Barriers",
            "cardsLabel": "WHY AGENTS FAIL",
            "cards": [
                  {
                        "title": "Unstable Performance",
                        "desc": "Multi-step reasoning accumulates errors with uncontrollable P95 latency"
                  },
                  {
                        "title": "Unpredictable Cost",
                        "desc": "Single-task token drift varies 5-50x between runs"
                  },
                  {
                        "title": "No Quality Loop",
                        "desc": "Failure causes are opaque with no regression testing in place"
                  }
            ],
            "statsHeading": "KPI Dashboard",
            "statsDesc": "Four metrics to monitor before production launch",
            "stats": [
                  {
                        "value": "92.4%",
                        "label": "Task Success Rate"
                  },
                  {
                        "value": "4.8s",
                        "label": "P95 Latency"
                  },
                  {
                        "value": "¥0.42",
                        "label": "Cost per Task"
                  }
            ],
            "stepsHeading": "Tool Orchestration Pipeline",
            "steps": [
                  {
                        "title": "Parse Intent",
                        "desc": "Decompose user request into actionable subtasks"
                  },
                  {
                        "title": "Select Tools",
                        "desc": "Match schema and retrieve relevant tool descriptions"
                  },
                  {
                        "title": "Execute & Validate",
                        "desc": "Fill parameters, enforce timeouts, check return schema"
                  },
                  {
                        "title": "Aggregate Results",
                        "desc": "Multi-round consolidation into final response"
                  }
            ],
            "barsHeading": "12-Week Optimization",
            "barsDesc": "Production metrics improvement over time",
            "bars": [
                  {
                        "label": "Task Accuracy",
                        "value": 92
                  },
                  {
                        "label": "Cost Reduction",
                        "value": 65
                  },
                  {
                        "label": "Latency Improvement",
                        "value": 78
                  },
                  {
                        "label": "Reliability SLO",
                        "value": 99
                  }
            ],
            "quote": "The next agent starts with engineering -- not just adding an LLM, but truly embedding it into the system."
      ,
      "slides": [{"type":"cover","title":"AI Agent Engineering","subtitle":"From Demo to Production — Beyond Just a Large Model","info":"2026 · Tech Sharing Series"},{"type":"big-number","number":"90%","label":"Agent Projects Stall at Demo","desc":"Reaching production requires crossing four engineering thresholds: Architecture, Context, Evaluation, Observability."},{"type":"cards","label":"Pain Points","heading":"Three Barriers to Agent Production","items":[{"title":"Unstable Performance","desc":"Multi-step reasoning compounds errors, P95 latency unpredictable"},{"title":"Unpredictable Cost","desc":"Token drift per task varies 5-50x"},{"title":"No Quality Loop","desc":"Failure causes opaque, regression tests missing"}]},{"type":"comparison","label":"Architecture","heading":"Workflow vs Agent vs Multi-Agent","columns":[{"title":"Workflow","points":["Fixed paths","Predictable & debuggable","Deterministic tasks"]},{"title":"Agent","points":["Dynamic paths","LLM-driven decisions","Semi-structured exploration"]},{"title":"Multi-Agent","points":["Multi-role collaboration","Task distribution","Complex long-horizon tasks"]}]},{"type":"flow","label":"Tool Orchestration","heading":"Six Steps to Reliable Tool Calling","steps":[{"title":"Parse Task","desc":"Decompose user intent"},{"title":"Select Tool","desc":"Schema matching + retrieval"},{"title":"Execute","desc":"Parameter fill + timeout control"},{"title":"Validate & Retry","desc":"JSON schema check + exponential backoff"}]},{"type":"stats","label":"KPI Dashboard","heading":"Four Gauges Before Going Live","desc":"Monitor these metrics before any production deployment.","items":[{"value":"92.4%","label":"Task Success Rate"},{"value":"4.8s","label":"P95 Latency"},{"value":"$0.06","label":"Cost per Task"}]},{"type":"bars","label":"Optimization","heading":"12-Week Accuracy vs Cost Trend","desc":"Continuous optimization: accuracy up, cost down.","items":[{"label":"Week 1","value":71},{"label":"Week 4 (reranker)","value":78},{"label":"Week 8 (fallback)","value":85},{"label":"Week 12 (cache)","value":92}]},{"type":"table","label":"Failure Modes","heading":"Four Failure Categories","headers":["Category","Symptom","Root Cause"],"rows":[["Tool Error","Schema mismatch","Parameter hallucination"],["Infinite Loop","Plan keeps revising","No termination in reflection chain"],["Hallucination","Fabricated results","Invents tools or fakes success"],["Cost Blowout","Token drift","Repeated retrieval, chain too long"]]},{"type":"timeline","label":"Roadmap","heading":"Prototype to Production — 12 Weeks in 4 Phases","events":[{"date":"W1–W3","title":"Prototype","desc":"Single task end-to-end + tool schema draft"},{"date":"W4–W7","title":"Engineering","desc":"Eval sets + auto tests + fallback mechanisms"},{"date":"W8–W10","title":"Scale","desc":"Cache + rate limiting + multi-tenant isolation"},{"date":"W11–W12","title":"Production","desc":"Canary rollout + SLO monitoring"}]},{"type":"image-text","label":"Context Engineering","heading":"Context Is the Agent's Real Weight","imgAlt":"Hub-spoke diagram of context engineering","points":["RAG / Vector recall / BM25 hybrid","Reranker / Top-K filtering","Token budget allocation","Long-short term memory + session state"]},{"type":"quote","text":"It's not about \"adding an LLM\" — it's about truly fitting the LLM into your system.","attribution":"Agent Engineering Principles"},{"type":"end","text":"Start your next Agent from engineering first."}]},
    frame: "glass",
    vars: {
      bg: "#0a0e27", surface: "rgba(26,33,80,0.58)", border: "rgba(168,176,208,0.28)",
      text: "#e8ecff", text2: "#a8b0d0", text3: "#6b7299", accent: "#5b8def",
      accent2: "#a26bfa", accent3: "#3dddfc", font: "'Inter', 'Noto Sans SC', sans-serif"
    }
  },
  {
    name: "Swiss Grid", kind: "example", mode: "light",
    desc: "International Typographic Style: strict grid, white space, black type, red signal.",
    tags: ["Example", "Design", "Minimal", "Light"],
      demoContent: {
            "cardsHeading": "Three Definitive Typefaces",
            "cardsLabel": "TYPOGRAPHY",
            "cards": [
                  {
                        "title": "Akzidenz-Grotesk",
                        "desc": "Berthold 1896 -- the first modern commercial sans-serif"
                  },
                  {
                        "title": "Helvetica",
                        "desc": "Miedinger 1957 -- neutral, objective, maximally readable"
                  },
                  {
                        "title": "Univers",
                        "desc": "Frutiger 1957 -- 21 weights in the first systematic coordinate system"
                  }
            ],
            "statsHeading": "Eight Core Principles",
            "statsDesc": "The foundation of Swiss International Typographic Style",
            "stats": [
                  {
                        "value": "8",
                        "label": "Core Principles"
                  },
                  {
                        "value": "1957",
                        "label": "Year of Helvetica"
                  },
                  {
                        "value": "60+",
                        "label": "Years of Influence"
                  }
            ],
            "stepsHeading": "Digital Continuation",
            "steps": [
                  {
                        "title": "960 Grid System",
                        "desc": "2008 -- first grid grammar brought to the web"
                  },
                  {
                        "title": "Bootstrap 12-Col",
                        "desc": "2011 -- modular grid democratized for all developers"
                  },
                  {
                        "title": "CSS Grid",
                        "desc": "2017 -- browser-native grid specification"
                  },
                  {
                        "title": "Design Systems",
                        "desc": "2020s -- enterprise VI extended to screens at scale"
                  }
            ],
            "barsHeading": "Modern Brand Adoption",
            "barsDesc": "Swiss design DNA in contemporary brands",
            "bars": [
                  {
                        "label": "Apple",
                        "value": 95
                  },
                  {
                        "label": "Google",
                        "value": 85
                  },
                  {
                        "label": "Airbnb",
                        "value": 80
                  },
                  {
                        "label": "IBM",
                        "value": 90
                  }
            ],
            "quote": "The grid is not a constraint. It is a grammar of freedom."
      ,
      "slides": [{"type":"cover","title":"Grid Systems","subtitle":"The Grid as a Way of Seeing","info":"A Lecture on Swiss International Typographic Style · 2026"},{"type":"quote","text":"The grid system is an aid, not a guarantee. It permits a number of possible uses and each designer can look for a solution appropriate to his personal style.","attribution":"Josef Müller-Brockmann, Grid Systems in Graphic Design, 1981"},{"type":"timeline","label":"History","heading":"Twin Origins · 1896 → 1957","events":[{"date":"1896","title":"Akzidenz-Grotesk","desc":"First modern commercial sans-serif"},{"date":"1908","title":"Basel Reform","desc":"Basel School of Design curriculum reform"},{"date":"1918","title":"Ernst Keller","desc":"Zurich School of Applied Arts"},{"date":"1936","title":"Müller-Brockmann","desc":"Opens Zurich studio"},{"date":"1957","title":"Helvetica + Univers","desc":"Both typefaces launched in the same year"}]},{"type":"cards","label":"Core Principles","heading":"Eight Core Principles","items":[{"title":"Objectivity","desc":"Objectivity over expression · Mathematical grid as skeleton"},{"title":"Asymmetry","desc":"Asymmetric layout · Sans-serif typography · Flush-left ragged-right"},{"title":"Negative Space","desc":"Whitespace is structure · Reproducible at scale"}]},{"type":"table","label":"Shapers","heading":"Eight Shapers of Swiss Design","headers":["Name","Years","Contribution"],"rows":[["Ernst Keller","1891–1968","Zurich school founder"],["Max Bill","1908–1994","Bauhaus → Ulm"],["Emil Ruder","1914–1970","Basel Typographie"],["Armin Hofmann","1920–2020","Basel poster master"],["Josef Müller-Brockmann","1914–1996","Grid Systems author"],["Max Miedinger","1910–1980","Designed Helvetica"]]},{"type":"timeline","label":"Biography","heading":"Josef Müller-Brockmann · 1914–1996","events":[{"date":"1914","title":"Born","desc":"Rapperswil, Switzerland"},{"date":"1936","title":"Studio","desc":"Independent studio in Zurich"},{"date":"1950","title":"Tonhalle","desc":"Musica Viva poster series begins"},{"date":"1958","title":"Neue Grafik","desc":"Co-founded the journal"},{"date":"1981","title":"Grid Systems","desc":"Published Grid Systems in Graphic Design"}]},{"type":"comparison","label":"Typography","heading":"Three Definitive Typefaces","columns":[{"title":"Akzidenz-Grotesk","points":["1896 · Berthold","First modern commercial sans-serif","Swiss school early favorite"]},{"title":"Helvetica","points":["1957 · Miedinger","Named \"Swiss\" in Latin","Neutral, objective, maximally readable"]},{"title":"Univers","points":["1957 · Frutiger","21 weights in numerical coordinate system","Beginning of type family engineering"]}]},{"type":"two-column","label":"Grid Types","heading":"Four Grid Types","left":{"title":"Simple","points":["Manuscript: single column, ancient, long-form","Column: multi-column, magazine grammar"]},"right":{"title":"Complex","points":["Modular: row × column matrix, poster & catalog","Hierarchical: irregular but internally logical"]}},{"type":"flow","label":"Digital Era","heading":"The Digital Continuation","steps":[{"title":"960 Grid","desc":"2008 — Grid grammar on the web"},{"title":"Bootstrap 12-col","desc":"2011 — Modular grid democratized"},{"title":"CSS Grid","desc":"2017 — Browser-native grid"},{"title":"Design Systems","desc":"2020s — Enterprise VI on screens"}]},{"type":"cards","label":"Legacy","heading":"Swiss DNA in Modern Brands","items":[{"title":"Apple & Google","desc":"Minimalist rationalism · Material grid + geometric type"},{"title":"Spotify & Airbnb","desc":"Magazine-feel layout · Modular grid + minimal identity"},{"title":"IBM & Lufthansa","desc":"1960s Swiss pedigree · Corporate identity systems"}]},{"type":"image-text","label":"Negative Space","heading":"Whitespace Is Structure","imgAlt":"Red dot on white field with fine horizontal line","points":["Whitespace is not leftover — it is the carrier of information","The space between is the message"]},{"type":"end","text":"The grid is not a constraint. It is a grammar of freedom."}]},
    frame: "swiss",
    vars: {
      bg: "#ffffff", surface: "#f4f4f4", border: "#e8e8e8",
      text: "#1a1a1a", text2: "#666666", text3: "#999999", accent: "#d9251d",
      accent2: "#1a4fa0", accent3: "#1a1a1a", font: "Arial, Helvetica, 'Noto Sans SC', sans-serif",
      radius: "0px"
    }
  },
  {
    name: "Sugar Rush Memphis", kind: "example", mode: "light",
    desc: "Memphis pop style with cream base, candy colors, thick outlines, and poster energy.",
    tags: ["Example", "Pop", "Memphis", "Light"],
      demoContent: {
            "cardsHeading": "By the Numbers",
            "cardsLabel": "FESTIVAL STATS",
            "cards": [
                  {
                        "title": "7 Days",
                        "desc": "Seven consecutive days of non-stop music and art"
                  },
                  {
                        "title": "5 Stages",
                        "desc": "Five themed stages from rock to hip-hop"
                  },
                  {
                        "title": "80 Artists",
                        "desc": "Eighty acts across four genre camps"
                  }
            ],
            "statsHeading": "Festival Scale",
            "statsDesc": "Sugar Rush 2026 key metrics",
            "stats": [
                  {
                        "value": "50K",
                        "label": "Expected Fans"
                  },
                  {
                        "value": "5",
                        "label": "Themed Stages"
                  },
                  {
                        "value": "¥499",
                        "label": "Early Bird Price"
                  }
            ],
            "stepsHeading": "Seven Days of Sugar",
            "steps": [
                  {
                        "title": "Opening Night",
                        "desc": "Day 1 kick-off with cross-genre showcase"
                  },
                  {
                        "title": "Rock & Electro",
                        "desc": "Days 2-3 dedicated to guitar and synth energy"
                  },
                  {
                        "title": "Folk & Hip-Hop",
                        "desc": "Days 4-5 for storytelling and street beats"
                  },
                  {
                        "title": "Grand Finale",
                        "desc": "Days 6-7 crossover night and closing celebration"
                  }
            ],
            "barsHeading": "Genre Distribution",
            "barsDesc": "Artist lineup by music style",
            "bars": [
                  {
                        "label": "Electronic",
                        "value": 38
                  },
                  {
                        "label": "Rock",
                        "value": 31
                  },
                  {
                        "label": "Folk",
                        "value": 19
                  },
                  {
                        "label": "Hip-Hop",
                        "value": 12
                  }
            ],
            "quote": "See you in summer. Let the sweetest season begin."
      ,
      "slides": [{"type":"cover","title":"SUGAR RUSH","subtitle":"2026 Summer Music Festival · Annual Handbook","info":"7.18 – 7.24 · Coconut Island · Let the sweetest summer arrive"},{"type":"section","label":"Part 1","title":"WHAT.","subtitle":"When the whole world is getting hotter, we decided to make it sweeter."},{"type":"stats","label":"By the Numbers","heading":"Festival at a Glance","desc":"Seven days of non-stop celebration.","items":[{"value":"7","label":"Days of Music"},{"value":"80","label":"Artists"},{"value":"50K","label":"Expected Fans"}]},{"type":"cards","label":"Values","heading":"What We Stand For","items":[{"title":"FREE","desc":"No genre snobbery — all styles welcome"},{"title":"FUN","desc":"Play to the max, keep the sweetest memories"},{"title":"FOREVER YOUNG","desc":"18 or 80, no age on the dance floor"}]},{"type":"table","label":"Headliners","heading":"The Headliners","headers":["Artist","Genre","Signature Track"],"rows":[["Cherry Bomb","Rock","Pink Static"],["Neon Cloud","Electronic","3AM Mirror"],["Mint Folk","Folk","Slow Lemon"],["Yellow Hustle","Hip-Hop","Sugar High"]]},{"type":"bars","label":"Genre Split","heading":"Four Flavors, One Festival","desc":"80 artists across four genre camps.","items":[{"label":"Electronic","value":38},{"label":"Rock","value":31},{"label":"Folk","value":19},{"label":"Hip-Hop","value":13}]},{"type":"timeline","label":"Schedule","heading":"Seven Days of Sugar","events":[{"date":"7.18","title":"Opening Night","desc":"Grand ceremony"},{"date":"7.19","title":"Rock Day","desc":"Cherry Stage headliner"},{"date":"7.20","title":"Electro Night","desc":"Neon Grid all night"},{"date":"7.21","title":"Folk Afternoon","desc":"Mint Grove sessions"},{"date":"7.22","title":"Hip-Hop Midnight","desc":"Yellow Block takeover"},{"date":"7.24","title":"Closing","desc":"Grand finale"}]},{"type":"two-column","label":"Beyond Music","heading":"Beyond the Music","left":{"title":"Market","points":["50+ vendor stalls","Limited-edition merch","Local street food"]},"right":{"title":"Art Installations","points":["10 giant installations","AR interactive experiences","Glow-in-the-dark graffiti wall"]}},{"type":"comparison","label":"Tickets","heading":"Get Your Ticket","columns":[{"title":"Early Bird","points":["¥499","Limited 5,000","SOLD OUT"]},{"title":"Regular","points":["¥799","Includes 1 drink","General admission"]},{"title":"VIP 7-Day","points":["¥1,999","All-access pass","VIP lounge + meet & greet"]}]},{"type":"end","text":"SEE YOU IN SUMMER. SUGAR RUSH 2026 · 7.18–7.24"}]},
    frame: "memphis",
    vars: {
      bg: "#fff8ee", surface: "#ffe9c7", border: "#1a1a2e",
      text: "#1a1a2e", text2: "#5c5c7a", text3: "#8b819b", accent: "#ff3da5",
      accent2: "#00b8d9", accent3: "#ffd93d", font: "Impact, Arial, 'Noto Sans SC', sans-serif",
      radius: "0px", titleCase: "uppercase"
    }
  },
  {
    name: "Risograph Zine", kind: "example", mode: "light",
    desc: "DIY print style with warm paper, riso blue, fluorescent pink, and rough poster rhythm.",
    tags: ["Example", "Zine", "Print", "Light"],
      demoContent: {
            "cardsHeading": "Zine Culture Essentials",
            "cardsLabel": "WHAT IS A ZINE",
            "cards": [
                  {
                        "title": "Self-Published",
                        "desc": "Non-commercial, small-run publications under 1,000 copies"
                  },
                  {
                        "title": "DIY Binding",
                        "desc": "Simple staple or fold construction with full author control"
                  },
                  {
                        "title": "Mixed Content",
                        "desc": "Drawings, poetry, collage, recipes -- no editorial gatekeeping"
                  }
            ],
            "statsHeading": "Risograph Process",
            "statsDesc": "The soul of zine craft since 1986",
            "stats": [
                  {
                        "value": "5",
                        "label": "Print Steps"
                  },
                  {
                        "value": "1-3px",
                        "label": "Misregistration"
                  },
                  {
                        "value": "1986",
                        "label": "Riso 007 Released"
                  }
            ],
            "stepsHeading": "Make Your First Zine",
            "steps": [
                  {
                        "title": "Pick a Topic",
                        "desc": "Choose something you genuinely care about"
                  },
                  {
                        "title": "Fold an A4 Sheet",
                        "desc": "Use the 8-page fold method for instant structure"
                  },
                  {
                        "title": "Fill 8 Pages",
                        "desc": "Handwrite, collage, paste -- there are no rules"
                  },
                  {
                        "title": "Print 10 Copies",
                        "desc": "Give 5 to friends, send 5 to indie bookstores"
                  }
            ],
            "barsHeading": "Global Zine Hubs",
            "barsDesc": "Indie bookstore density by city",
            "bars": [
                  {
                        "label": "Tokyo Jimbocho",
                        "value": 95
                  },
                  {
                        "label": "Paris Left Bank",
                        "value": 75
                  },
                  {
                        "label": "London Canals",
                        "value": 60
                  },
                  {
                        "label": "New York Strand",
                        "value": 80
                  }
            ],
            "quote": "Print one. Gift one. Trade one. A zine is the world's smallest publishing house."
      ,
      "slides": [{"type":"cover","title":"Zine Culture Guide","subtitle":"A map from a single sheet of paper to an indie bookstore","info":"PPT Master Risograph Demo · 2026"},{"type":"section","label":"Part 1","title":"ZINE = MAGAZINE − Commercial Logic","subtitle":"Self-made, non-commercial, ultra-small print runs"},{"type":"timeline","label":"History","heading":"Four Waves of Zine History","events":[{"date":"1920s","title":"Amateur Publishing","desc":"Harlem Renaissance Fire!! magazine"},{"date":"1930s","title":"Sci-Fi Fanzines","desc":"\"Fanzine\" coined by Russ Chauvenet 1940"},{"date":"1976","title":"Punk Era","desc":"Sniffin' Glue + photocopier revolution"},{"date":"1991","title":"Riot Grrrl","desc":"Bikini Kill + Riot Grrrl Press"},{"date":"2010s","title":"Contemporary Revival","desc":"Zine fairs explode worldwide"}]},{"type":"cards","label":"Risograph","heading":"Risograph: The Soul of Zine Craft","items":[{"title":"Limited Palette","desc":"One ink drum per color — constrained creativity"},{"title":"Misregistration","desc":"1–3px offset — the signature analog charm"},{"title":"Halftone + Overlap","desc":"Screen dots + ink layering creates third colors"}]},{"type":"flow","label":"Process","heading":"5 Steps: Digital Image to Printed Sheet","steps":[{"title":"Receive Image","desc":"Digital file input"},{"title":"Burn Master","desc":"Ablate pixelated master plate"},{"title":"Mount Drum","desc":"Master wraps color ink drum"},{"title":"Print","desc":"Multi-pass for multiple colors"}]},{"type":"image-text","label":"DIY","heading":"One Sheet → One Zine (8-Page Fold)","imgAlt":"Hands folding a single sheet into an 8-page booklet","points":["Fold: long edge → short edge → center line = 8 panels","Cut: one slit along the fold to the center","Assemble: push both ends inward","Fill: no rules — draw, paste, write"]},{"type":"comparison","label":"Global Bookstores","heading":"Three Cities, Three Attitudes","columns":[{"title":"Paris","points":["Shakespeare and Company","Hosted thousands of writers since 1951"]},{"title":"London","points":["Daunt Books + Word on the Water","1920s Dutch canal barge bookshop"]},{"title":"New York","points":["Strand: 18 miles of books since 1927","Yu & Me: Chinatown women's bookshop"]}]},{"type":"table","label":"China Map","heading":"China Indie Bookstore Map (Zine-Friendly)","headers":["Bookstore","City","Specialty","Zine Score"],"rows":[["1200bookshop","Guangzhou","24-hour indie","★★★"],["Librairie Avant-Garde","Nanjing","Underground parking lot","★★"],["Fangsuo Commune","Chengdu","Art + design focus","★★★"],["PageOne","Beijing","Photography + architecture","★★"]]},{"type":"flow","label":"Action","heading":"Your First Zine: 4 Steps","steps":[{"title":"Pick a Topic","desc":"Something you genuinely care about"},{"title":"Fold A4","desc":"Use the 8-page fold method"},{"title":"Fill 8 Pages","desc":"Handwrite, collage, old photos"},{"title":"Print 10 Copies","desc":"5 for friends, 5 for a bookstore"}]},{"type":"end","text":"Print one. Give one. Trade one. A zine is the world's smallest publishing house."}]},
    frame: "zine",
    vars: {
      bg: "#f5efe0", surface: "#eae2cc", border: "#1a1a1a",
      text: "#1a1a1a", text2: "#5a5a5a", text3: "#8c8275", accent: "#1e4dbc",
      accent2: "#ff5c8a", accent3: "#e8a02e", font: "Impact, 'Arial Narrow', 'Noto Sans SC', sans-serif",
      radius: "0px", titleCase: "uppercase"
    }
  },
  {
    name: "Kubernetes Blueprint", kind: "example", mode: "dark",
    desc: "Engineering blueprint style with deep navy paper, cyan linework, and amber callouts.",
    tags: ["Example", "Blueprint", "Tech", "Dark"],
      demoContent: {
            "cardsHeading": "Control Plane Components",
            "cardsLabel": "ARCHITECTURE",
            "cards": [
                  {
                        "title": "kube-apiserver",
                        "desc": "The single spine -- every state change crosses through it"
                  },
                  {
                        "title": "etcd",
                        "desc": "The only persistent store -- source of truth for cluster state"
                  },
                  {
                        "title": "kube-scheduler",
                        "desc": "Assigns pods to nodes based on resource constraints"
                  }
            ],
            "statsHeading": "Cluster Blueprint",
            "statsDesc": "Kubernetes architecture key numbers",
            "stats": [
                  {
                        "value": "5",
                        "label": "Control Plane Components"
                  },
                  {
                        "value": "4",
                        "label": "Service Types"
                  },
                  {
                        "value": "3",
                        "label": "Worker Node Layers"
                  }
            ],
            "stepsHeading": "Pod Lifecycle Phases",
            "steps": [
                  {
                        "title": "Pending",
                        "desc": "Pod accepted but containers not yet running"
                  },
                  {
                        "title": "Running",
                        "desc": "At least one container is executing"
                  },
                  {
                        "title": "Succeeded",
                        "desc": "All containers terminated with exit code 0"
                  },
                  {
                        "title": "Failed",
                        "desc": "At least one container terminated with non-zero exit"
                  }
            ],
            "barsHeading": "Service Networking",
            "barsDesc": "Four ways to be reachable in a cluster",
            "bars": [
                  {
                        "label": "ClusterIP",
                        "value": 100
                  },
                  {
                        "label": "NodePort",
                        "value": 75
                  },
                  {
                        "label": "LoadBalancer",
                        "value": 60
                  },
                  {
                        "label": "ExternalName",
                        "value": 30
                  }
            ],
            "quote": "One spine, one truth, one reconcile loop -- everything else is a variation."
      ,
      "slides": [{"type":"cover","title":"Kubernetes Cluster Architecture","subtitle":"A Blueprint of the Modern Container Orchestrator","info":"K8S-ARCH-2026 · Engineering Reference"},{"type":"two-column","label":"Architecture","heading":"Two Planes, One Spine","left":{"title":"Control Plane","points":["Global decisions, desired-state holder","kube-apiserver is the single link","Every line crosses through it"]},"right":{"title":"Data Plane","points":["Workload execution (Pods)","Worker nodes run containers","Reports status back via kubelet"]}},{"type":"cards","label":"Control Plane","heading":"Control Plane: 5 Components","items":[{"title":"kube-apiserver","desc":"Central hub — only component talking to etcd"},{"title":"etcd","desc":"Consistent key-value store — the single source of truth"},{"title":"Scheduler + Controllers","desc":"Place pods on nodes · Reconcile desired vs actual state"}]},{"type":"comparison","label":"Worker Node","heading":"Worker Node: Three Layers","columns":[{"title":"kubelet","points":["Agent reconciling PodSpecs","Reports node status"]},{"title":"kube-proxy","points":["Service rules via iptables/IPVS","Network routing"]},{"title":"Container Runtime","points":["containerd or CRI-O","CRI contract interface"]}]},{"type":"flow","label":"Pod Lifecycle","heading":"Pod Lifecycle: One Schedule, Many States","steps":[{"title":"Pending","desc":"Scheduled but not yet running"},{"title":"Running","desc":"At least one container active"},{"title":"Succeeded","desc":"All containers terminated with exit 0"},{"title":"Failed","desc":"At least one container terminated non-zero"}]},{"type":"table","label":"Services","heading":"Services: Four Ways to Be Reachable","headers":["Type","Scope","Port Range"],"rows":[["ClusterIP","Internal only","Any"],["NodePort","Every node","30000–32767"],["LoadBalancer","Cloud LB → nodes","Any"],["ExternalName","DNS CNAME","N/A"]]},{"type":"image-text","label":"Storage","heading":"Storage: PV / PVC / StorageClass","imgAlt":"Layered diagram: Pod → PVC → PV → StorageClass","points":["Static vs dynamic provisioning","Access modes: RWO / ROX / RWX / RWOP","Reclaim policies: Retain / Delete","CSI driver as the provisioner spine"]},{"type":"two-column","label":"HA Topology","heading":"HA Topology: Stacked vs External etcd","left":{"title":"Stacked","points":["etcd co-located with control plane","Simpler setup, fewer hosts","Coupled failure domain"]},"right":{"title":"External","points":["etcd on dedicated hosts","Independent scaling","Requires more infrastructure"]}},{"type":"bars","label":"API Server","heading":"Everything Through the API Server","desc":"All state transitions are API-mediated for pluggability, observability, and audit.","items":[{"label":"kubectl","value":95},{"label":"kubelet","value":88},{"label":"scheduler","value":72},{"label":"controller-mgr","value":65}]},{"type":"stats","label":"Takeaways","heading":"Three Things to Remember","desc":"The essential architecture invariants.","items":[{"value":"1 Spine","label":"kube-apiserver mediates every state change"},{"value":"1 Truth","label":"etcd is the only persistent store"},{"value":"1 Loop","label":"Controllers: watch, diff, act"}]},{"type":"quote","text":"One spine, one truth, one reconcile loop — controllers watch, diff, act. Everything else is a variation.","attribution":"Kubernetes Architecture Principles"},{"type":"end","text":"Kubernetes Cluster Architecture · K8S-ARCH-2026"}]},
    frame: "blueprint",
    vars: {
      bg: "#0e2a47", surface: "#1a3a5c", border: "#2d4a6b",
      text: "#f0f4f8", text2: "#a0b8d0", text3: "#6b85a3", accent: "#5ba3e0",
      accent2: "#ffb627", accent3: "#3e7ab8", font: "'JetBrains Mono', 'Noto Sans SC', monospace"
    }
  },
  {
    name: "Ink Wash Literati", kind: "example", mode: "light",
    desc: "Xuan paper, ink-black typography, cinnabar emphasis, and restrained literary space.",
    tags: ["Example", "Ink", "Light"],
      demoContent: {
            "cardsHeading": "藏拙的三个核心动作",
            "cardsLabel": "城府智慧",
            "cards": [
                  {
                        "title": "收起锋芒",
                        "desc": "实力没强到能自保时，锋芒就是风险"
                  },
                  {
                        "title": "压下欲望",
                        "desc": "不要把人生押在一场街头冲突里"
                  },
                  {
                        "title": "移开视线",
                        "desc": "把自己从别人的视线中心挪开"
                  }
            ],
            "statsHeading": "藏住四件事，养出四种力",
            "statsDesc": "核心输出",
            "stats": [
                  {
                        "value": "4",
                        "label": "藏住的事"
                  },
                  {
                        "value": "4",
                        "label": "养出的力"
                  },
                  {
                        "value": "∞",
                        "label": "延迟满足"
                  }
            ],
            "stepsHeading": "藏拙的四层功夫",
            "steps": [
                  {
                        "title": "藏住情绪",
                        "desc": "不被几句话激怒，保持内心安定"
                  },
                  {
                        "title": "藏住野心",
                        "desc": "不被人提前设防，保留战略空间"
                  },
                  {
                        "title": "藏住实力",
                        "desc": "不被人过早消耗，蓄积真正的能量"
                  },
                  {
                        "title": "藏住判断",
                        "desc": "不在局势未明时被迫站队"
                  }
            ],
            "barsHeading": "表现与反应",
            "barsDesc": "太早亮牌的代价",
            "bars": [
                  {
                        "label": "太聪明→防他",
                        "value": 90
                  },
                  {
                        "label": "太强势→躲他",
                        "value": 85
                  },
                  {
                        "label": "太急切→压价",
                        "value": 75
                  },
                  {
                        "label": "太想赢→入局",
                        "value": 80
                  }
            ],
            "quote": "沉得住，藏得住，等得起。让结果替自己说话。"
      ,
      "slides": [{"type":"cover","title":"男人最顶级的城府：藏拙","subtitle":"沉得住，藏得住，等得起","info":"谋事论 · 论尽成事逻辑"},{"type":"quote","text":"男人太早亮牌，就是给别人递刀。","attribution":"藏拙之道"},{"type":"two-column","label":"看见问题","heading":"烧烤摊上的两种人","left":{"title":"刚升职的人","points":["开口讲资源、人脉、项目","旁人嘴上恭维、眼里盘算"]},"right":{"title":"另一个男人","points":["话不多，只问关键问题","散场时把每人底牌看了七八分"]}},{"type":"cards","label":"定义","heading":"藏拙 ≠ 装傻 ≠ 认怂","items":[{"title":"收锋芒","desc":"把锋芒收起来"},{"title":"压欲望","desc":"把欲望压下去"},{"title":"挪中心","desc":"把自己从别人的视线中心挪开"}]},{"type":"table","label":"常见错误","heading":"把\"被看见\"误以为\"被尊重\"","headers":["行为","后果"],"rows":[["刚有成绩就想让所有人知道","引来试探和嫉妒"],["刚有资源就忍不住展示","引来借力和拆台"],["刚看透人性就急着戳破","引来所有人防备"],["站在明处没有遮挡","试探、嫉妒、拆台全来"]]},{"type":"image-text","label":"历史佐证","heading":"韩信胯下之辱","imgAlt":"韩信忍辱负重","points":["不是歌颂屈辱","他没有把人生押在一场街头冲突里","小局赢了只是出口气","大局赢了才有翻身的资格"]},{"type":"bars","label":"策略","heading":"把\"拙\"变成盾","desc":"适当慢一点、钝一点、淡一点，减少无谓消耗。","items":[{"label":"太聪明 → 被防","value":90},{"label":"太强势 → 被躲","value":80},{"label":"太急切 → 被压价","value":70},{"label":"太想赢 → 被拖入局","value":85}]},{"type":"comparison","label":"辨明区分","heading":"藏拙 vs 消极避世","columns":[{"title":"消极避世","points":["动机：怕输","状态：越躲越废","沉默是借口","内心：委屈"]},{"title":"藏拙","points":["动机：为赢","状态：越藏越厚","沉默是蓄力","内心：布局"]}]},{"type":"flow","label":"核心输出","heading":"藏住四件事 · 养出四种力","steps":[{"title":"藏住情绪","desc":"不被几句话激怒"},{"title":"藏住野心","desc":"不被人提前设防"},{"title":"藏住实力","desc":"不被人过早消耗"},{"title":"藏住判断","desc":"不在局势未明时被迫站队"}]},{"type":"quote","text":"潜龙勿用 —— 龙在深渊时，不是没有力量，而是时机未到。","attribution":"《易经》"},{"type":"end","text":"沉得住，藏得住，等得起。让结果替自己说话。"}]},
    frame: "ink",
    vars: {
      bg: "#f5f1e8", surface: "#efead9", border: "#c8c0ae",
      text: "#1a1a1a", text2: "#5c5852", text3: "#8b8680", accent: "#a52a2a",
      accent2: "#1a1a1a", accent3: "#8b8680", font: "'KaiTi', 'STKaiti', 'Noto Sans SC', serif"
    }
  },
  {
    name: "Plant Dye Poetry", kind: "example", mode: "light",
    desc: "Eastern botanical dye palette with xuan paper, sky blue-green, ochre, and soft craft warmth.",
    tags: ["Example", "Craft", "Light"],
      demoContent: {
            "cardsHeading": "草木之色",
            "cardsLabel": "植物染三百色",
            "cards": [
                  {
                        "title": "雨过天青",
                        "desc": "宋徽宗「雨过天青云破处」，土青与黄芩套染而成"
                  },
                  {
                        "title": "苍黄",
                        "desc": "报春鸟之色，大黄与苏木染制，蓝矾媒染"
                  },
                  {
                        "title": "银红",
                        "desc": "朝霞初染之色，红花、苏木与明矾媒染"
                  }
            ],
            "statsHeading": "染色之术",
            "statsDesc": "远始轩辕之世",
            "stats": [
                  {
                        "value": "300+",
                        "label": "传统色"
                  },
                  {
                        "value": "13",
                        "label": "非遗技艺"
                  },
                  {
                        "value": "5000+",
                        "label": "年染色史"
                  }
            ],
            "stepsHeading": "亲手植物染",
            "steps": [
                  {
                        "title": "烧水",
                        "desc": "清水入锅煮沸，准备染液基底"
                  },
                  {
                        "title": "投料熬制",
                        "desc": "植物染料浸入，1-2小时滤出染液"
                  },
                  {
                        "title": "浸染",
                        "desc": "布料入染液，反复浸泡着色"
                  },
                  {
                        "title": "定色",
                        "desc": "阳光晒暖固定色彩，紧张焦虑渐渐消失"
                  }
            ],
            "barsHeading": "四色取自草木",
            "barsDesc": "植物染料源分布",
            "bars": [
                  {
                        "label": "红系（茄草/苏木）",
                        "value": 35
                  },
                  {
                        "label": "黄系（槐花/栀子）",
                        "value": 30
                  },
                  {
                        "label": "蓝系（蓝草/鼠李）",
                        "value": 25
                  },
                  {
                        "label": "黑系（胡桃/板栗）",
                        "value": 10
                  }
            ],
            "quote": "最动人的色彩不在潘通色卡里，而早已藏在山河草木之间。"
      ,
      "slides": [{"type":"cover","title":"裁云织月 · 草木成诗","subtitle":"揭秘李子柒春晚战袍背后，植物染成的 300 种中国传统色","info":"源自 · 凤凰空间 | 2026.04"},{"type":"image-text","label":"启幕","heading":"最动人的色彩","imgAlt":"李子柒春晚战袍特写","points":["最动人的色彩不在潘通色卡里","而早已藏在山河草木之间","2025 春晚《迎福》视觉秀 · 13 项非遗技艺","黄青渐变 · 化身蝴蝶仙子"]},{"type":"two-column","label":"战袍解密","heading":"五方正色 × 手工吊染","left":{"title":"黄色 · 土地","points":["取材湖北神农架黄栌","代表中华土地"]},"right":{"title":"青色 · 春天","points":["取材江南初春马兰草","代表生生不息"]}},{"type":"timeline","label":"千年染技","heading":"染色之术 · 远始轩辕之世","events":[{"date":"轩辕之世","title":"草木之汁","desc":"黄帝制玄冠黄裳，以草木之汁染成文彩"},{"date":"西周","title":"设\"染人\"","desc":"专职染色官职设立"},{"date":"秦朝","title":"染色司","desc":"国家级染色机构"},{"date":"唐宋","title":"染院","desc":"皇家染色作坊"},{"date":"明清","title":"蓝靛所","desc":"《天工开物》记载技艺"}]},{"type":"table","label":"草木之色","heading":"草木之色 · 染出自然万物","headers":["色名","色值","诗意","染料"],"rows":[["雨过天青","#7AA4B6","宋徽宗：雨过天青云破处","土靛 95% + 黄芩 5%"],["苍黄","#B29A55","报春鸟 · 麛鹿之色","大黄 + 苏木"],["暮云灰","#7D6E74","柳永：千里烟波暮霭沉沉","苏木 + 蓝矾"],["天水碧","#8FB09A","南唐李煜妃 · 丝帛露宿","蓝靛染月白"]]},{"type":"comparison","label":"诗意之色","heading":"诗意之色 · 文学意境","columns":[{"title":"银红","points":["#E49AA5","浅绯色 · 朝霞初染","黛玉窗前霞影纱"]},{"title":"酡色","points":["#C86868","美人欲醉朱颜酡","贵妃醉酒"]},{"title":"相思灰","points":["#A69E98","一寸相思一寸灰","茶叶 + 石榴皮"]}]},{"type":"cards","label":"染料植物","heading":"染料植物 · 四色皆取自草木","items":[{"title":"红：茜草 · 苏木 · 红花","desc":"花瓣与根茎中提取暖色"},{"title":"蓝：蓝草 · 鼠李","desc":"叶茎沤制出靛蓝"},{"title":"黄黑：槐花 · 胡桃壳","desc":"花蕾与果壳的自然馈赠"}]},{"type":"flow","label":"亲手植物染","heading":"自我疗愈的过程","steps":[{"title":"烧水","desc":"清水入锅煮沸"},{"title":"投料","desc":"植物染料浸入"},{"title":"熬制","desc":"1–2 小时滤出染液"},{"title":"浸染定色","desc":"布料入染 · 阳光晒暖固色"}]},{"type":"stats","label":"文脉传承","heading":"薛涛笺 · 千年风雅可复刻","desc":"唐代才女薛涛用浣花溪水 + 木芙蓉皮染成芙蓉红信笺","items":[{"value":"300+","label":"中国传统色"},{"value":"13","label":"非遗技艺于一身"},{"value":"千年","label":"植物染色传承"}]},{"type":"big-number","number":"300","label":"种中国传统色","desc":"从天地造化的草木之色，到流转千年的绢帛华章。中国传统色彩 = 视觉体验 × 文化记忆。"},{"type":"quote","text":"色彩不止于视觉，更是文化记忆的承载者。","attribution":"《国色 300 色》· 黄荣华 著"},{"type":"end","text":"草木成诗 · 完"}]},
    frame: "ink",
    vars: {
      bg: "#f7f2e8", surface: "#ede5d3", border: "#d7ceb9",
      text: "#3a3530", text2: "#7a7068", text3: "#9b948b", accent: "#6b9aae",
      accent2: "#c99e62", accent3: "#6f8f75", font: "'KaiTi', 'STKaiti', 'Noto Sans SC', serif"
    }
  },
  {
    name: "Pritzker Editorial", kind: "example", mode: "light",
    desc: "Architecture magazine style with concrete paper, ink-black type, and warm gold numbering.",
    tags: ["Example", "Architecture", "Editorial", "Light"],
      demoContent: {
            "cardsHeading": "8 Masters, 8 New Works",
            "cardsLabel": "PRITZKER LAUREATES 2026",
            "cards": [
                  {
                        "title": "Ando Tadao",
                        "desc": "Suzhou H+ Museum -- concrete poetry in a Jiangnan garden"
                  },
                  {
                        "title": "Zaha Hadid",
                        "desc": "Danjiang Bridge -- 920m single-tower cable-stayed, posthumous masterwork"
                  },
                  {
                        "title": "Peter Zumthor",
                        "desc": "LACMA David Geffen Gallery -- 20 years, $724M, seven minimalist pavilions"
                  }
            ],
            "statsHeading": "Architecture in Numbers",
            "statsDesc": "Key metrics from the 2026 Pritzker master season",
            "stats": [
                  {
                        "value": "8",
                        "label": "New Works"
                  },
                  {
                        "value": "$724M",
                        "label": "LACMA Budget"
                  },
                  {
                        "value": "920m",
                        "label": "Danjiang Bridge Span"
                  }
            ],
            "stepsHeading": "Design Philosophies",
            "steps": [
                  {
                        "title": "Root in Land",
                        "desc": "Ando and Kere draw from local memory and native materials"
                  },
                  {
                        "title": "Break Boundaries",
                        "desc": "Zaha and Gehry push geometry beyond conventional limits"
                  },
                  {
                        "title": "Serve People",
                        "desc": "Chipperfield and Foster design public spaces for human experience"
                  },
                  {
                        "title": "Persist",
                        "desc": "Zumthor spent 20 years polishing one museum into a poetic vessel"
                  }
            ],
            "barsHeading": "Global Footprint",
            "barsDesc": "Geographic distribution of 2026 landmark projects",
            "bars": [
                  {
                        "label": "Asia",
                        "value": 40
                  },
                  {
                        "label": "North America",
                        "value": 25
                  },
                  {
                        "label": "Europe",
                        "value": 20
                  },
                  {
                        "label": "Middle East & Africa",
                        "value": 15
                  }
            ],
            "quote": "All enduring classics are born from day-after-day devotion to craft."
      ,
      "slides": [{"type":"cover","title":"2026 Pritzker Prize Masters Season","subtitle":"8 New Works, 8 Kinds of Dedication","info":"From the Suzhou Creek to the desert hinterland · 2026"},{"type":"table","label":"Overview","heading":"Eight Masters, Eight Commitments","headers":["#","Architect","Project","Location"],"rows":[["01","Tadao Ando","H+ Museum","Suzhou, China"],["02","David Chipperfield","Santa Giulia Arena","Milan, Italy"],["03","Zaha Hadid (posthumous)","Danjiang Bridge","Taipei"],["04","Norman Foster","JIA Art","Shanghai, China"],["05","Peter Zumthor","LACMA Geffen","Los Angeles, USA"],["06","Frank Gehry (posthumous)","Guggenheim Abu Dhabi","Abu Dhabi, UAE"]]},{"type":"image-text","label":"Ando","heading":"A Concrete Poem in Jiangnan Gardens","imgAlt":"Tadao Ando H+ Museum concrete facade","points":["Tadao Ando · 1995 Pritzker · Opened Jan 2026","Three-dimensional garden — roaming architecture","Fair-faced concrete, geometric lines × light and shadow","\"Let architecture return to nature, let art heal the heart\""]},{"type":"cards","label":"Three Projects","heading":"Three Milestones in 2026","items":[{"title":"Zaha Hadid · Danjiang Bridge","desc":"920m span, longest single-tower asymmetric cable-stayed bridge. 100% faithful to original design."},{"title":"Norman Foster · JIA Art Shanghai","desc":"Steel petals blooming on Suzhou Creek. Triple experience: art, views, city."},{"title":"OMA × SANAA · New Museum NYC","desc":"$82M expansion, 5,574 m². Deconstructivist meets ethereal transparency."}]},{"type":"stats","label":"Zumthor","heading":"Peter Zumthor · LACMA Geffen Gallery","desc":"20 years of refinement — a poetic vessel for art.","items":[{"value":"$724M","label":"Total Investment"},{"value":"32,293 m²","label":"Gallery Area"},{"value":"20 yrs","label":"In Development"}]},{"type":"big-number","number":"920m","label":"Danjiang Bridge Span","desc":"Zaha Hadid's posthumous masterwork. World's longest single-tower asymmetric cable-stayed bridge, opened May 2026."},{"type":"two-column","label":"Gehry & Kéré","heading":"Two Visions at the Edges","left":{"title":"Frank Gehry · Abu Dhabi","points":["Deconstructivist swan song","Metal facade shifts with desert light","Advanced shading for extreme climate"]},"right":{"title":"Francis Kéré · Dakar","points":["Rammed-earth brick screens","Baobab tree in central courtyard","Natural ventilation, no AC dependency"]}},{"type":"timeline","label":"Pritzker Timeline","heading":"Prize Years of Featured Architects","events":[{"date":"1989","title":"Frank Gehry","desc":"Deconstructivism pioneer"},{"date":"1995","title":"Tadao Ando","desc":"Concrete poetry"},{"date":"1999","title":"Norman Foster","desc":"High-tech humanism"},{"date":"2004","title":"Zaha Hadid","desc":"Parametric fluidity"},{"date":"2009","title":"Peter Zumthor","desc":"Poetic minimalism"},{"date":"2022","title":"Francis Kéré","desc":"Vernacular innovation"}]},{"type":"quote","text":"All enduring classics are born from daily perseverance. Some spent 20 years polishing one building — that is the power of deep dedication.","attribution":"2026 Pritzker Masters Season"},{"type":"end","text":"All enduring classics are born from deep dedication."}]},
    frame: "swiss",
    vars: {
      bg: "#f5f2ec", surface: "#ede8de", border: "#d4cfc4",
      text: "#1c1c1c", text2: "#5c5852", text3: "#8b8680", accent: "#b8935a",
      accent2: "#1c1c1c", accent3: "#8b8680", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Global AI Capital", kind: "example", mode: "dark",
    desc: "Bloomberg/Economist information-graphic style for sober AI finance analysis.",
    tags: ["Example", "Finance", "Editorial", "Dark", "High Density"],
      demoContent: {
            "cardsHeading": "Q1 Venture Landscape",
            "cardsLabel": "CAPITAL FLOWS",
            "cards": [
                  {
                        "title": "$297B VC",
                        "desc": "Record-breaking single-quarter global venture capital total"
                  },
                  {
                        "title": "81% AI Share",
                        "desc": "AI captured 81% of all venture funding in Q1 2026"
                  },
                  {
                        "title": "65% Concentration",
                        "desc": "Top 4 deals accounted for 65% of total quarterly VC"
                  }
            ],
            "statsHeading": "Hyperscaler Capex",
            "statsDesc": "Four tech giants spending $725B in 2026, up 77% YoY",
            "stats": [
                  {
                        "value": "$725B",
                        "label": "Combined Capex"
                  },
                  {
                        "value": "$200B",
                        "label": "Amazon Capex"
                  },
                  {
                        "value": "60%+",
                        "label": "Goes to Power/Cooling"
                  }
            ],
            "stepsHeading": "Capital Cycle",
            "steps": [
                  {
                        "title": "VC Mega-Rounds",
                        "desc": "Single rounds exceeding $30B for frontier AI labs"
                  },
                  {
                        "title": "Valuation Surge",
                        "desc": "OpenAI $852B, Anthropic approaching $900B, xAI $1.25T"
                  },
                  {
                        "title": "Nvidia Loop",
                        "desc": "$40B+ in equity investments flowing back as chip purchases"
                  },
                  {
                        "title": "Infrastructure Build",
                        "desc": "Stargate and global data center campus expansion"
                  }
            ],
            "barsHeading": "AI Lab Valuations",
            "barsDesc": "Frontier AI company market positions Q2 2026",
            "bars": [
                  {
                        "label": "xAI (incl. SpaceX)",
                        "value": 100
                  },
                  {
                        "label": "Anthropic",
                        "value": 72
                  },
                  {
                        "label": "OpenAI",
                        "value": 68
                  },
                  {
                        "label": "DeepSeek",
                        "value": 4
                  }
            ],
            "quote": "Capital, compute, and the closed loop -- when the chip maker is also the largest shareholder."
      ,
      "slides": [{"type":"cover","title":"2026 Global AI Capital Landscape","subtitle":"Capital, Compute, and the Closed Loop","info":"May 2026 · Industry Insight · Data as of 2026-05-15"},{"type":"stats","label":"Panorama","heading":"Q1 2026 Global VC: $297B Record","desc":"AI takes 81% of all venture capital.","items":[{"value":"$297B","label":"Single-Quarter VC"},{"value":"81%","label":"AI Share (~$242B)"},{"value":"65%","label":"Top 4 Deal Concentration"}]},{"type":"bars","label":"Hyperscaler Capex","heading":"2026 Hyperscaler Capex: $725B (+77% YoY)","desc":"60%+ flows to power, cooling, and construction — not chips.","items":[{"label":"Amazon","value":100},{"label":"Microsoft","value":95},{"label":"Alphabet","value":95},{"label":"Meta","value":73}]},{"type":"table","label":"Big Three","heading":"Big Three 2026 Valuation Leaps","headers":["Company","Start of Year","Latest","Driver"],"rows":[["OpenAI","$300B","$852B","Consumer + IPO path"],["Anthropic","$61.5B","$380B → $900B","Enterprise API"],["xAI","$50B","$230B → $1.25T","SpaceX merger narrative"]]},{"type":"comparison","label":"US vs China","heading":"US-China AI Capital: Two Tracks","columns":[{"title":"United States","points":["$30–122B single rounds","IPO delayed","Market-driven","Peak: $852B valuation"]},{"title":"China","points":["$2–4B single rounds","Q1 HK IPOs landed","Government-led (Big Fund)","Peak: $56B market cap"]}]},{"type":"cards","label":"Second Tier","heading":"Second Tier: $10–50B Elites","items":[{"title":"SSI $32B","desc":"Sutskever's lab — 6× valuation jump"},{"title":"Perplexity $21B","desc":"45M monthly active users"},{"title":"Mistral $13.7B","desc":"Paris data center, 13,800 GPUs"}]},{"type":"big-number","number":"$40B+","label":"Nvidia Equity Investments in 2026","desc":"Nvidia invests in OpenAI, xAI, Anthropic, Mistral — then 85% of revenue comes from just 6 customers. A circular capital loop."},{"type":"flow","label":"Nvidia Loop","heading":"How Money Circulates: Nvidia's Closed Loop","steps":[{"title":"Nvidia Invests $40B","desc":"Equity into AI labs"},{"title":"Labs Buy Chips","desc":"Hundreds of billions in compute commitments"},{"title":"Revenue Returns","desc":"85% from 6 customers"},{"title":"Cycle Repeats","desc":"Investment → purchase → revenue"}]},{"type":"two-column","label":"Bubble Risk","heading":"Four Risks That Amplify Each Other","left":{"title":"Capital Side","points":["Capex/Revenue gap exceeds 2001 telecom bubble","Nvidia 85% revenue from 6 clients"]},"right":{"title":"Business Side","points":["MIT: 95% of AI pilots produce no commercial value","Operating cash flow → debt financing"]}},{"type":"timeline","label":"Judgments","heading":"Six Closing Judgments","events":[{"date":"1","title":"Capital concentration","desc":"2026's defining theme"},{"date":"2","title":"Compute = hard currency","desc":"Real scarcity"},{"date":"3","title":"Power > Chips","desc":"Grid is the constraint"},{"date":"4","title":"US-China dual track","desc":"Two systems diverge"},{"date":"5","title":"ROI lags","desc":"But hyperscalers haven't stopped spending"},{"date":"6","title":"Anthropic > OpenAI","desc":"Valuation crossover"}]},{"type":"end","text":"2026 Global AI Capital Landscape · Industry Insight"}]},
    frame: "brutalist",
    vars: {
      bg: "#0e1116", surface: "#1a1f26", border: "#2a2f36",
      text: "#e8e6e1", text2: "#c9c5be", text3: "#8a857e", accent: "#e63946",
      accent2: "#f4a261", accent3: "#52b788", font: "Cambria, Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Warm Home Editorial", kind: "example", mode: "dark",
    desc: "Warm dark magazine style for interiors, natural materials, and human-centered trends.",
    tags: ["Example", "Home", "Editorial", "Warm", "Dark"],
      demoContent: {
            "cardsHeading": "Three Foundation Elements",
            "cardsLabel": "CMT SYSTEM",
            "cards": [
                  {
                        "title": "Color",
                        "desc": "The emotional magician of space -- warm tones embrace, cool tones calm"
                  },
                  {
                        "title": "Material",
                        "desc": "The tactile language -- raw wood warmth, handwoven comfort"
                  },
                  {
                        "title": "Texture",
                        "desc": "The soul in the details -- every surface has a unique fingerprint"
                  }
            ],
            "statsHeading": "Design Trends 2026",
            "statsDesc": "From Instagram aesthetics back to human-scale living",
            "stats": [
                  {
                        "value": "CMT",
                        "label": "Color-Material-Texture"
                  },
                  {
                        "value": "3",
                        "label": "Foundation Elements"
                  },
                  {
                        "value": "4",
                        "label": "Trending Styles"
                  }
            ],
            "stepsHeading": "Style Evolution",
            "steps": [
                  {
                        "title": "Cream 2.0",
                        "desc": "Beyond formula -- from preset combos to nuanced expression"
                  },
                  {
                        "title": "Bohemian Spirit",
                        "desc": "Bold colors, free textiles, layered nonchalance"
                  },
                  {
                        "title": "Vintage Memory",
                        "desc": "Weathered wood and wrought iron with patina of time"
                  },
                  {
                        "title": "Sustainable Luxury",
                        "desc": "Eco-surfaces, reclaimed wood, responsible aesthetics"
                  }
            ],
            "barsHeading": "Space Perception",
            "barsDesc": "How color affects spatial experience",
            "bars": [
                  {
                        "label": "Light Tones (expand)",
                        "value": 85
                  },
                  {
                        "label": "Warm Tones (embrace)",
                        "value": 70
                  },
                  {
                        "label": "Bold Accents (energy)",
                        "value": 55
                  },
                  {
                        "label": "Dark Tones (cozy)",
                        "value": 40
                  }
            ],
            "quote": "True elegance is the exquisite resonance of color, material, and texture."
      ,
      "slides": [{"type":"cover","title":"2026 Home Design Trends","subtitle":"Return to the human scale — let color, material, and texture shape spatial elegance","info":"Based on \"The Elegance of Space\" · 2026"},{"type":"section","label":"Part 1","title":"From \"Influencer Style\" to \"Human Scale\"","subtitle":"2026 shifts from visual symbol stacking to human-centered care"},{"type":"cards","label":"Three Elements","heading":"Color · Material · Texture","items":[{"title":"Color","desc":"The mood magician of space — changes visual scale and atmosphere"},{"title":"Material","desc":"The tactile language — natural wood, handwoven linen, ceramic"},{"title":"Texture","desc":"The soul of detail — each surface's unique fingerprint"}]},{"type":"two-column","label":"Color Practice","heading":"Warm vs Cool Tones in Space","left":{"title":"Light / Cool Tones","points":["Increase light reflection","Space feels open and airy","Gray-green → calm focus"]},"right":{"title":"Warm / Saturated","points":["Room feels compact and cozy","Coffee tones → warm embrace","Accent colors → personality"]}},{"type":"image-text","label":"CMT System","heading":"CMT: Color · Material · Texture Symphony","imgAlt":"Concentric circles showing CMT system layers","points":["Physical layer: smooth/rough, transparent/opaque, gloss/matte","Psychological layer: handmade/industrial, simple/luxe","Not simple stacking — systematic weaving like a symphony"]},{"type":"comparison","label":"2026 Styles","heading":"2026 Trending Styles","columns":[{"title":"Cream 2.0","points":["Beyond \"white walls + wood\"","Cream, oat, ivory base","Wool, linen, natural wood accents"]},{"title":"Bohemian","points":["Bold colors + free textiles","Layered, unrestrained feel","Handwoven tapestries"]},{"title":"Sustainable Luxe","points":["Eco-finishes, natural light","Reclaimed wood, cork, jute","Responsible aesthetics"]}]},{"type":"stats","label":"Book","heading":"\"The Elegance of Space\" — A Deconstructable Aesthetic System","desc":"By Song Wenwen, Tsinghua University Color Research Lab.","items":[{"value":"CMT","label":"Colour + Material + Texture framework"},{"value":"4","label":"Chapters: Color, Material, Texture, Synthesis"},{"value":"2","label":"Audiences: designers + homeowners"}]},{"type":"flow","label":"Application","heading":"Applying the CMT Framework","steps":[{"title":"Color Base","desc":"Choose your emotional palette"},{"title":"Material Selection","desc":"Match physical properties to intent"},{"title":"Texture Layering","desc":"Add tactile and visual depth"},{"title":"Harmony Check","desc":"Ensure all three elements resonate"}]},{"type":"quote","text":"True elegance is the exquisite resonance of color, material, and texture — with both beauty and warmth.","attribution":"The Elegance of Space, 2026"},{"type":"end","text":"Let home return to the human scale."}]},
    frame: "default",
    vars: {
      bg: "#1a1714", surface: "#2a2520", border: "#3d362e",
      text: "#e8e0d4", text2: "#b0a08e", text3: "#7a6e60", accent: "#c4a882",
      accent2: "#d4956a", accent3: "#8b7355", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Fashion Magazine", kind: "example", mode: "dark",
    desc: "Luxury fashion editorial style with black canvas, gold accents, and image-led pacing.",
    tags: ["Example", "Fashion", "Editorial", "Dark"],
      demoContent: {
            "cardsHeading": "This Week in Fashion",
            "cardsLabel": "TOP STORIES",
            "cards": [
                  {
                        "title": "Hermes Home",
                        "desc": "Milan Design Week: metalwork, leather, and textile sculptural narratives"
                  },
                  {
                        "title": "CHANEL COCO BEACH",
                        "desc": "Shanghai pop-up with Matthieu Blazy's debut resort collection"
                  },
                  {
                        "title": "Gucci Memoria",
                        "desc": "Immersive 105-year retrospective at Milan's San Simpliciano cloister"
                  }
            ],
            "statsHeading": "Brand Panorama",
            "statsDesc": "Coverage across luxury tiers this week",
            "stats": [
                  {
                        "value": "18",
                        "label": "Brands Featured"
                  },
                  {
                        "value": "6",
                        "label": "Top Luxury Houses"
                  },
                  {
                        "value": "4",
                        "label": "Cross-Industry Collabs"
                  }
            ],
            "stepsHeading": "Weekly Highlights",
            "steps": [
                  {
                        "title": "Haute Couture",
                        "desc": "Hermes, Chanel, Dior, and LV set the creative agenda"
                  },
                  {
                        "title": "Art & Heritage",
                        "desc": "Gucci Memoria and McQueen exhibitions merge fashion with culture"
                  },
                  {
                        "title": "Design Crossover",
                        "desc": "Chloe x Poltronova and ARKET x Laila Gohar bridge disciplines"
                  },
                  {
                        "title": "New Voices",
                        "desc": "TAD FAB zipper language and Apede Mod origami structures emerge"
                  }
            ],
            "barsHeading": "Category Mix",
            "barsDesc": "Content distribution by fashion segment",
            "bars": [
                  {
                        "label": "Top Luxury",
                        "value": 40
                  },
                  {
                        "label": "Designer/Premium",
                        "value": 30
                  },
                  {
                        "label": "Lifestyle & Beauty",
                        "value": 20
                  },
                  {
                        "label": "Streetwear & Collab",
                        "value": 10
                  }
            ],
            "quote": "Unlocking the overture of style -- see you next week."
      ,
      "slides": [{"type":"cover","title":"NEWS Cafe | Aesthetic Weekly","subtitle":"Unlocking the Style Chapter","info":"Weekly Fashion Highlights · April 2026"},{"type":"cards","label":"Top Luxury","heading":"Three Maisons at Milan Design Week","items":[{"title":"Hermes Home","desc":"30 rectangular columns, immersive staging — metal, leather, textile dialogue"},{"title":"Louis Vuitton Objets Nomades","desc":"Art Deco tribute, Campana studio + Raw Edges new works"},{"title":"Gucci Memoria","desc":"San Simpliciano cloister — 12 tapestries, 105-year brand journey"}]},{"type":"image-text","label":"CHANEL","heading":"CHANEL COCO BEACH 2026","imgAlt":"CHANEL beachside boutique","points":["Shanghai pop-up boutique opens","Garden-facing holiday villa concept","Pastoral landscapes + black sand inspiration","Matthieu Blazy's first COCO BEACH collection"]},{"type":"two-column","label":"Dior","heading":"Dior: Fashion Meets Horology","left":{"title":"Fashion","points":["Sabrina Carpenter at Coachella","Jonathan Anderson design"]},"right":{"title":"Watches","points":["Chiffre Rouge refresh","Three limited editions","Red second hand — Dior's \"life color\""]}},{"type":"comparison","label":"Art Houses","heading":"Two Expressions of Art","columns":[{"title":"Bottega Veneta","points":["\"for the Arts\" photo book","Peter Fraser's Venice","Weaving aesthetics in focus"]},{"title":"Alexander McQueen","points":["\"Beneath the Surface\" Shanghai","Immersive exhibition","Manta bag reprises 2010 icon"]}]},{"type":"table","label":"Collabs","heading":"This Week's Collaborations","headers":["Brand","Partner","Highlight"],"rows":[["JORYA","YVMIN","\"Princess Diary\" Chengdu pop-up"],["ARKET","Laila Gohar","Milan 18th-century carousel installation"],["Steve Madden","Lexie Liu","China brand ambassador"],["Crocs","Pop Mart MOLLY","20th anniversary triple collab"]]},{"type":"stats","label":"Beauty","heading":"Fragrance & Beauty This Week","desc":"Sensory new chapters from BOSS and fresh.","items":[{"value":"BOSS","label":"Heart of the King — wood-leather scent"},{"value":"fresh","label":"\"Ferment\" outdoors — tea culture inspired"},{"value":"2","label":"Major launches this week"}]},{"type":"bars","label":"Highlights","heading":"This Week's Spotlight Brands","desc":"Top 4 brands by editorial coverage.","items":[{"label":"Hermes","value":95},{"label":"CHANEL","value":88},{"label":"Dior","value":82},{"label":"Gucci","value":78}]},{"type":"flow","label":"Brand Tiers","heading":"Brand Panorama by Tier","steps":[{"title":"Top Luxury","desc":"Hermes · CHANEL · Dior · LV · Gucci"},{"title":"Designer","desc":"BV · CELINE · McQueen · Max Mara"},{"title":"Contemporary","desc":"TAD FAB · Apede Mod · JORYA"},{"title":"Lifestyle","desc":"BOSS · fresh · ARKET · Crocs"}]},{"type":"end","text":"NEWS Cafe · See You Next Week"}]},
    frame: "default",
    vars: {
      bg: "#0a0a0a", surface: "#1a1a1a", border: "#2a2520",
      text: "#f5f0eb", text2: "#9e9690", text3: "#6f6660", accent: "#c9a96e",
      accent2: "#e8d5b5", accent3: "#8b7355", font: "'Playfair Display', Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Transformer Deep Read", kind: "example", mode: "light",
    desc: "Paper-reading academic style with cool navy blueprint and restrained serif typography.",
    tags: ["Example", "Academic", "Light"],
      demoContent: {
            "cardsHeading": "Paper Impact",
            "cardsLabel": "WHY THIS PAPER MATTERS",
            "cards": [
                  {
                        "title": "28.4 BLEU EN-DE",
                        "desc": "+2.0 over previous SOTA ensembles on WMT 2014"
                  },
                  {
                        "title": "41.8 BLEU EN-FR",
                        "desc": "New single-model state-of-the-art for English-French"
                  },
                  {
                        "title": "3.5 Days x 8 GPUs",
                        "desc": "A fraction of prior training cost with no recurrence"
                  }
            ],
            "statsHeading": "Architecture at a Glance",
            "statsDesc": "The Transformer: attention is all you need",
            "stats": [
                  {
                        "value": "0",
                        "label": "Recurrence"
                  },
                  {
                        "value": "0",
                        "label": "Convolution"
                  },
                  {
                        "value": "6+6",
                        "label": "Encoder-Decoder Layers"
                  }
            ],
            "stepsHeading": "Sequence Modeling Evolution",
            "steps": [
                  {
                        "title": "RNN Chains",
                        "desc": "Strong but inherently sequential -- O(n) path length"
                  },
                  {
                        "title": "CNN Stacks",
                        "desc": "Parallelizable but signals grow with distance"
                  },
                  {
                        "title": "Self-Attention",
                        "desc": "Any two positions related in O(1) operations"
                  },
                  {
                        "title": "The Transformer",
                        "desc": "Stacked self-attention + feed-forward, nothing else"
                  }
            ],
            "barsHeading": "Computational Efficiency",
            "barsDesc": "Per-layer complexity comparison",
            "bars": [
                  {
                        "label": "Self-Attention",
                        "value": 85
                  },
                  {
                        "label": "Recurrent",
                        "value": 50
                  },
                  {
                        "label": "Convolutional",
                        "value": 65
                  },
                  {
                        "label": "Restricted Attn",
                        "value": 70
                  }
            ],
            "quote": "The Transformer rebuilt sequence-to-sequence modeling around a single mechanism: attention."
      ,
      "slides": [{"type":"cover","title":"Attention Is All You Need","subtitle":"A Paper Deep-Read","info":"Vaswani et al. · Google Brain · NeurIPS 2017 · arXiv:1706.03762"},{"type":"stats","label":"Impact","heading":"A Simpler Model, Better Results, Less Training","desc":"Zero recurrence, zero convolution — only attention + feed-forward.","items":[{"value":"28.4","label":"BLEU EN-DE (+2.0 SOTA)"},{"value":"41.8","label":"BLEU EN-FR (new SOTA)"},{"value":"3.5 days","label":"8× P100 GPUs training"}]},{"type":"cards","label":"Motivation","heading":"What Hurts in RNN/CNN Sequence Models","items":[{"title":"Sequential Bottleneck","desc":"h_t depends on h_{t-1} — no within-example parallelism"},{"title":"Long-Range Path","desc":"Distant tokens hard to relate; path grows with distance"},{"title":"Memory Ceiling","desc":"Sequence length limits batch size at long context"}]},{"type":"flow","label":"Architecture","heading":"Encoder-Decoder Stack","steps":[{"title":"Input Embed","desc":"Embeddings + positional encoding"},{"title":"Encoder ×N","desc":"Multi-Head Self-Attention + FFN"},{"title":"Decoder ×N","desc":"Masked Self-Attn + Cross-Attn + FFN"},{"title":"Output","desc":"Linear + Softmax → token probabilities"}]},{"type":"two-column","label":"Enc vs Dec","heading":"Same Skeleton, Three Asymmetries","left":{"title":"Encoder (N=6)","points":["Multi-Head Self-Attention → FFN","LayerNorm(x + Sublayer(x))","All positions attend to all"]},"right":{"title":"Decoder (N=6)","points":["Masked Self-Attn → Cross-Attn → FFN","Same residual + LayerNorm","Auto-regressive: attend only to earlier"]}},{"type":"image-text","label":"Attention","heading":"Scaled Dot-Product Attention","imgAlt":"QKV attention mechanism diagram","points":["Compute QK^T, scale by sqrt(d_k), softmax → weights","Multiply by V — weighted sum is the output","Scaling prevents softmax saturation in high-d_k","Multi-Head: h=8 parallel subspace projections, then concat"]},{"type":"comparison","label":"Three Roles","heading":"One Mechanism, Three Roles","columns":[{"title":"Encoder Self-Attn","points":["Q, K, V from encoder","Every position attends all"]},{"title":"Decoder Masked","points":["Same but masked","Position i only sees ≤i"]},{"title":"Encoder-Decoder","points":["Q from decoder","K, V from encoder output"]}]},{"type":"table","label":"Complexity","heading":"Complexity Comparison (Table 1)","headers":["Layer Type","Complexity","Sequential Ops","Max Path"],"rows":[["Self-Attention","O(n²·d)","O(1)","O(1)"],["Recurrent","O(n·d²)","O(n)","O(n)"],["Convolutional","O(k·n·d²)","O(1)","O(log_k n)"],["Restricted Attn","O(r·n·d)","O(1)","O(n/r)"]]},{"type":"bars","label":"Results","heading":"WMT'14 EN-DE BLEU Scores","desc":"Transformer (big) achieves 28.4 BLEU — new SOTA at a fraction of training cost.","items":[{"label":"Transformer (big)","value":95},{"label":"Prior ensemble","value":88},{"label":"ConvS2S","value":84},{"label":"ByteNet","value":79}]},{"type":"cards","label":"Ablations","heading":"Five Takeaways from Ablation Study","items":[{"title":"Head Count Sweet Spot","desc":"Single-head loses 0.9 BLEU; too many (32) also degrades"},{"title":"Key Dim > Value Dim","desc":"Reducing d_k hurts more than reducing d_v"},{"title":"Dropout Essential","desc":"Removing it loses ~0.5–1.0 BLEU"}]},{"type":"big-number","number":"10,000+","label":"Citations and Counting","desc":"Transformer became the substrate for BERT, GPT, T5, ViT, AlphaFold, and most modern LLMs. \"Just attention\" was the right inductive bias."},{"type":"end","text":"One paper, a generation of models. arXiv:1706.03762"}]},
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#f5f7fa", border: "#e2e8f0",
      text: "#1a202c", text2: "#4a5568", text3: "#a0aec0", accent: "#3182ce",
      accent2: "#1a365d", accent3: "#2f855a", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Agent Coral", kind: "example", mode: "dark",
    desc: "Dark engineering canvas with warm coral accents for agentic-systems technical talks.",
    tags: ["Example", "Tech", "Dark"],
      demoContent: {
            "cardsHeading": "When to Use Agents",
            "cardsLabel": "DESIGN PRINCIPLES",
            "cards": [
                  {
                        "title": "Start Simple",
                        "desc": "Single LLM calls with retrieval and tools often suffice"
                  },
                  {
                        "title": "Workflows",
                        "desc": "Predefined code paths for predictable, well-defined tasks"
                  },
                  {
                        "title": "Agents",
                        "desc": "Dynamic LLM-driven processes when flexibility matters at scale"
                  }
            ],
            "statsHeading": "Building Block",
            "statsDesc": "The augmented LLM as foundation",
            "stats": [
                  {
                        "value": "5",
                        "label": "Workflow Patterns"
                  },
                  {
                        "value": "3",
                        "label": "Core Augmentations"
                  },
                  {
                        "value": "1",
                        "label": "Agent Loop"
                  }
            ],
            "stepsHeading": "Five Workflow Patterns",
            "steps": [
                  {
                        "title": "Prompt Chaining",
                        "desc": "Sequential steps with gate checks between each call"
                  },
                  {
                        "title": "Routing",
                        "desc": "Classify input and direct to specialized handlers"
                  },
                  {
                        "title": "Parallelization",
                        "desc": "Fan-out subtasks and aggregate results"
                  },
                  {
                        "title": "Orchestrator-Workers",
                        "desc": "Dynamic task decomposition with delegated execution"
                  }
            ],
            "barsHeading": "Pattern Suitability",
            "barsDesc": "When each agentic pattern excels",
            "bars": [
                  {
                        "label": "Prompt Chaining",
                        "value": 90
                  },
                  {
                        "label": "Routing",
                        "value": 75
                  },
                  {
                        "label": "Parallelization",
                        "value": 80
                  },
                  {
                        "label": "Orchestrator",
                        "value": 65
                  }
            ],
            "quote": "Simple, composable patterns for LLM-based agentic systems -- complexity should be earned."
      ,
      "slides": [{"type":"cover","title":"Building Effective Agents","subtitle":"Simple, composable patterns for LLM-based agentic systems","info":"Anthropic Engineering · December 2024"},{"type":"two-column","label":"Definitions","heading":"What Are Agents?","left":{"title":"Workflows","points":["LLMs + tools in predefined code paths","Orchestrated by developer logic","Predictable and consistent"]},"right":{"title":"Agents","points":["LLMs dynamically direct processes","Autonomous tool usage","Flexible, model-driven decisions"]}},{"type":"cards","label":"When to Use","heading":"When (and When Not) to Use Agents","items":[{"title":"Start Simple","desc":"Single LLM calls with retrieval often suffice"},{"title":"Workflows for Predictability","desc":"Well-defined tasks needing consistency"},{"title":"Agents for Flexibility","desc":"Complex tasks needing model-driven decisions at scale"}]},{"type":"image-text","label":"Building Block","heading":"The Augmented LLM","imgAlt":"LLM augmented with retrieval, tools, and memory","points":["Foundation: LLM + retrieval + tools + memory","Models generate queries, select tools, manage retention","Tailor capabilities to your use case","Model Context Protocol (MCP) for tool integration"]},{"type":"flow","label":"Patterns","heading":"Four Workflow Patterns","steps":[{"title":"Prompt Chaining","desc":"Sequential steps with gate checks"},{"title":"Routing","desc":"Classify → direct to specialized handler"},{"title":"Parallelization","desc":"Sectioning + voting for speed/diversity"},{"title":"Orchestrator-Workers","desc":"Dynamic subtask delegation"}]},{"type":"comparison","label":"Patterns Detail","heading":"Chaining vs Routing vs Parallelization","columns":[{"title":"Chaining","points":["Fixed subtask sequence","Gate checks at each step","Trade latency for accuracy"]},{"title":"Routing","points":["Input classification","Specialized prompts","Separation of concerns"]},{"title":"Parallelization","points":["Independent subtasks","Multiple perspectives","Speed optimization"]}]},{"type":"image-text","label":"Evaluator-Optimizer","heading":"Evaluator-Optimizer Pattern","imgAlt":"Generate-evaluate feedback loop diagram","points":["One LLM generates, another evaluates in a loop","Best when evaluation criteria are clear","Iterative refinement adds measurable value","Examples: literary translation, multi-round search"]},{"type":"big-number","number":"3","label":"Core Principles","desc":"Simplicity: keep agent design simple. Transparency: show planning steps. ACI Design: craft agent-computer interfaces through thorough tool docs and testing."},{"type":"stats","label":"Practice","heading":"Agents in Practice","desc":"Two proven domains where agents deliver measurable value.","items":[{"value":"Support","label":"Conversation + tools + measurable resolutions"},{"value":"Coding","label":"Verifiable via tests, SWE-bench validated"},{"value":"> Prompts","label":"More time on tool engineering than prompt tuning"}]},{"type":"quote","text":"Build the right system, not the most sophisticated one. Start simple, add complexity only when simpler solutions fall short.","attribution":"Anthropic Engineering"},{"type":"end","text":"Simple, composable patterns for effective agents."}]},
    frame: "tech",
    vars: {
      bg: "#0f1117", surface: "#1a1d27", border: "#2d3348",
      text: "#e8e8ec", text2: "#9ca3af", text3: "#6b7280", accent: "#d4845a",
      accent2: "#5b9bd5", accent3: "#e8b87d", font: "Inter, 'Noto Sans SC', sans-serif"
    }
  },
  {
    name: "Code Amber", kind: "example", mode: "dark",
    desc: "Deep-space dark with amber warmth and sky-blue data highlights for developer talks.",
    tags: ["Example", "Tech", "Dark"],
      demoContent: {
            "cardsHeading": "The Permission Problem",
            "cardsLabel": "AUTO MODE",
            "cards": [
                  {
                        "title": "93% Approved",
                        "desc": "Users approve 93% of permission prompts -- approval fatigue sets in"
                  },
                  {
                        "title": "Classifier Guard",
                        "desc": "Model-based classifiers delegate safe approvals automatically"
                  },
                  {
                        "title": "0.4% FPR",
                        "desc": "Full pipeline achieves 0.4% false positive rate on real traffic"
                  }
            ],
            "statsHeading": "Evaluation Results",
            "statsDesc": "Performance across three test datasets",
            "stats": [
                  {
                        "value": "0.4%",
                        "label": "False Positive Rate"
                  },
                  {
                        "value": "17%",
                        "label": "FNR Overeager"
                  },
                  {
                        "value": "5.7%",
                        "label": "FNR Exfiltration"
                  }
            ],
            "stepsHeading": "Three-Tier Permission System",
            "steps": [
                  {
                        "title": "Built-in Allowlist",
                        "desc": "Safe tools and user settings pass without classification"
                  },
                  {
                        "title": "In-Project Ops",
                        "desc": "File operations within project boundaries skip classifier"
                  },
                  {
                        "title": "Transcript Classifier",
                        "desc": "Shell commands and external tools evaluated by Sonnet model"
                  },
                  {
                        "title": "Deny & Continue",
                        "desc": "Blocked actions prompt agent to retry safer approaches"
                  }
            ],
            "barsHeading": "Threat Categories",
            "barsDesc": "Why an agent might take dangerous action",
            "bars": [
                  {
                        "label": "Overeager Behavior",
                        "value": 45
                  },
                  {
                        "label": "Honest Mistakes",
                        "value": 30
                  },
                  {
                        "label": "Prompt Injection",
                        "value": 20
                  },
                  {
                        "label": "Misalignment",
                        "value": 5
                  }
            ],
            "quote": "Substantially safer than no guardrails -- catching dangerous actions to make autonomous operation viable."
      ,
      "slides": [{"type":"cover","title":"Claude Code Auto Mode","subtitle":"A Safer Way to Skip Permissions","info":"Anthropic Engineering · Mar 2026"},{"type":"big-number","number":"93%","label":"Permission Prompts Approved","desc":"Approval fatigue sets in. Two extremes: sandbox (safe, high-maintenance) or --dangerously-skip-permissions (zero protection)."},{"type":"cards","label":"Threat Model","heading":"Why an Agent Might Take Dangerous Action","items":[{"title":"Overeager Behavior","desc":"Takes initiative beyond what user would approve"},{"title":"Honest Mistakes","desc":"Misunderstands blast radius of actions"},{"title":"Prompt Injection","desc":"Hijacked by planted instructions in tool outputs"}]},{"type":"flow","label":"Architecture","heading":"Two Layers of Defense","steps":[{"title":"Input Layer","desc":"Prompt-injection probe scans tool outputs"},{"title":"Stage 1 Filter","desc":"Fast single-token classification"},{"title":"Stage 2 Reasoning","desc":"Chain-of-thought only if flagged"},{"title":"Deny & Continue","desc":"Blocked → agent retries safer approach"}]},{"type":"comparison","label":"Permission Tiers","heading":"Three-Tier Permission System","columns":[{"title":"Tier 1","points":["Built-in safe-tool allowlist","User settings","No classifier needed"]},{"title":"Tier 2","points":["In-project file operations","No classifier call","Scoped to workspace"]},{"title":"Tier 3","points":["Shell commands, web fetches","Transcript classifier evaluates","Full reasoning pipeline"]}]},{"type":"image-text","label":"Classifier","heading":"Reasoning-Blind by Design","imgAlt":"Diagram showing what the classifier sees vs strips","points":["Strips assistant text — agent can't \"talk\" classifier into approving","Strips tool results — primary prompt-injection defense","Sees only user messages + bare tool call commands","Complementary to CoT monitoring"]},{"type":"table","label":"Evaluation","heading":"Performance: The Honest Numbers","headers":["Dataset","Size","FPR","FNR"],"rows":[["Real traffic","n=10K","0.4%","—"],["Real overeager","n=52","—","17%"],["Synthetic exfil","n=1K","—","5.7%"],["Stage 1 alone","—","8.5%","6.6% / 1.8%"]]},{"type":"stats","label":"Key Metrics","heading":"Pipeline Performance Summary","desc":"Full two-stage pipeline metrics across all test sets.","items":[{"value":"0.4%","label":"False Positive Rate"},{"value":"17%","label":"FNR on Overeager"},{"value":"5.7%","label":"FNR on Exfiltration"}]},{"type":"bars","label":"Design Decisions","heading":"Two-Stage Classification Efficiency","desc":"Stage 1 fast filter reduces unnecessary reasoning calls.","items":[{"label":"Stage 1 FPR","value":85},{"label":"Stage 2 FPR (final)","value":4},{"label":"Cache-hit savings","value":72},{"label":"Deny-continue success","value":88}]},{"type":"quote","text":"Auto mode catches enough dangerous actions to make autonomous operation substantially safer — but is not a replacement for careful human review on high-stakes infrastructure.","attribution":"Anthropic Engineering"},{"type":"end","text":"Substantially safer than no guardrails. anthropic.com/engineering/claude-code-auto-mode"}]},
    frame: "tech",
    vars: {
      bg: "#0d1117", surface: "#161b22", border: "#30363d",
      text: "#e6edf3", text2: "#8b949e", text3: "#6e7681", accent: "#d4a574",
      accent2: "#60a5fa", accent3: "#34d399", font: "Inter, 'Noto Sans SC', sans-serif"
    }
  },
  {
    name: "Urban Editorial", kind: "example", mode: "light",
    desc: "Magazine editorial on architecture and urban renewal with multi-accent semantic zoning.",
    tags: ["Example", "Editorial", "Light"],
      demoContent: {
            "cardsHeading": "The Aging Crisis",
            "cardsLabel": "HIGH-RISE RENEWAL",
            "cards": [
                  {
                        "title": "Fire Risk",
                        "desc": "36,000 high-rise fires in the first 8 months of 2025 alone"
                  },
                  {
                        "title": "Maintenance Burden",
                        "desc": "Structural, fire, and elevator risks surge after 10 years"
                  },
                  {
                        "title": "Quay Quarter Tower",
                        "desc": "World's first fully upgraded skyscraper -- 65% structure retained"
                  }
            ],
            "statsHeading": "Regeneration Impact",
            "statsDesc": "Sydney Quay Quarter Tower environmental metrics",
            "stats": [
                  {
                        "value": "-80%",
                        "label": "Construction Waste"
                  },
                  {
                        "value": "-40%",
                        "label": "Carbon Emissions"
                  },
                  {
                        "value": "-30%",
                        "label": "Energy Consumption"
                  }
            ],
            "stepsHeading": "From Diagnosis to Renewal",
            "steps": [
                  {
                        "title": "Health Check",
                        "desc": "297 cities have launched urban diagnostic assessments"
                  },
                  {
                        "title": "Structural Reuse",
                        "desc": "Retain core structure, upgrade facade and systems"
                  },
                  {
                        "title": "Function Shift",
                        "desc": "Office-to-residential or mixed-use conversion"
                  },
                  {
                        "title": "Community Build",
                        "desc": "Shared governance models for renovation funding"
                  }
            ],
            "barsHeading": "Global Case Studies",
            "barsDesc": "Adaptive reuse success metrics",
            "bars": [
                  {
                        "label": "Sydney QQT",
                        "value": 95
                  },
                  {
                        "label": "Shenzhen MVRDV",
                        "value": 80
                  },
                  {
                        "label": "Shanghai Edison",
                        "value": 75
                  },
                  {
                        "label": "NYC One Wall St",
                        "value": 85
                  }
            ],
            "quote": "From chasing height to building depth -- proactive regeneration, not demolition."
      ,
      "slides": [{"type":"cover","title":"Active Regeneration","subtitle":"After the fire — where do aging high-rises go?","info":"Based on \"Sun Wantong\" public account · 2026.05"},{"type":"big-number","number":"36,000","label":"High-Rise Fires in 8 Months","desc":"China 2025 Jan–Aug, exceeding the 2023 full-year total. Ground rescue reaches 50–80m; above 100m buildings must self-rescue."},{"type":"cards","label":"The Problem","heading":"High-Rises Are Aging","items":[{"title":"Rising Maintenance","desc":"Fire, elevator, facade risks emerge after 10+ years"},{"title":"Declining Demand","desc":"Fewer people want to live in aging towers"},{"title":"Western Precedent","desc":"Pruitt-Igoe: 33 towers → full demolition in 1972"}]},{"type":"stats","label":"Sydney Model","heading":"Quay Quarter Tower: A Regeneration Benchmark","desc":"World's first fully upgraded skyscraper — 3XN design.","items":[{"value":"−80%","label":"Construction Waste"},{"value":"−40%","label":"Carbon Emissions"},{"value":"−30%","label":"Energy Consumption"}]},{"type":"timeline","label":"Global Cases","heading":"Global Adaptive Reuse Cases","events":[{"date":"1976→2020","title":"QQT Sydney","desc":"65% structure retained, 95% core reused"},{"date":"1994→2024","title":"Shenzhen MVRDV","desc":"Colorful grid facade adds shade + ventilation"},{"date":"1988→2023","title":"Shanghai Edison","desc":"China's first carbon-neutral renovation hotel"},{"date":"1931→2022","title":"NYC One Wall St","desc":"50-story office → 566 apartments"}]},{"type":"comparison","label":"China Trials","heading":"Chinese Pilot Projects","columns":[{"title":"Beijing \"Office Orange\"","points":["Tiantongyuan high-rise residential → office","Addresses live-work separation","Functional transformation"]},{"title":"Hangzhou Zhegong Village","points":["First rebuild-in-place project","Demolished 13, rebuilt 7 buildings","¥530M total, residents funded ¥470M"]}]},{"type":"two-column","label":"The Hard Part","heading":"The Real Challenge: Getting Everyone to Pay","left":{"title":"Obstacles","points":["More units = harder consensus","Funding sources unclear","Cost per household: ¥100K–1M"]},"right":{"title":"Possible Path","points":["Co-build, co-govern, co-share model","Building \"pension fund\" concept","Community self-management committees"]}},{"type":"flow","label":"Roadmap","heading":"From Height to Depth: Four Steps","steps":[{"title":"Health Check","desc":"297 cities + 150+ counties started urban checkups"},{"title":"Design","desc":"Professional institutions provide safe plans"},{"title":"Coordinate","desc":"Government platform + community organizations"},{"title":"Regenerate","desc":"Multi-party collaboration for renewal"}]},{"type":"quote","text":"The real question isn't how high we built — it's how deep we're willing to invest in what we've already built.","attribution":"Urban Regeneration Editorial"},{"type":"end","text":"From pursuing height to accumulating depth."}]},
    frame: "default",
    vars: {
      bg: "#f5f2ec", surface: "#ebe6dc", border: "#d6cfc0",
      text: "#2b3a4a", text2: "#5a6b7a", text3: "#8a8275", accent: "#c2410c",
      accent2: "#6b7a4f", accent3: "#8b7355", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Showcase Purple", kind: "example", mode: "dark",
    desc: "Mixed-style visual showcase with purple, gold-orange, and cyan on a deep canvas.",
    tags: ["Example", "Showcase", "Dark"],
      demoContent: {
            "cardsHeading": "20 Visual Languages",
            "cardsLabel": "IMAGE-TEXT SHOWCASE",
            "cards": [
                  {
                        "title": "Left-Right Splits",
                        "desc": "Portrait images paired with text bodies in asymmetric layouts"
                  },
                  {
                        "title": "Full-Bleed Canvases",
                        "desc": "Images as backgrounds with floating text overlays and scrims"
                  },
                  {
                        "title": "Grid Compositions",
                        "desc": "Z-pattern, 9-grid, radial, and diagonal arrangements"
                  }
            ],
            "statsHeading": "Layout Diversity",
            "statsDesc": "A catalog of image-text pairing techniques",
            "stats": [
                  {
                        "value": "20",
                        "label": "Layout Patterns"
                  },
                  {
                        "value": "12",
                        "label": "Rendering Styles"
                  },
                  {
                        "value": "10",
                        "label": "Color Palettes"
                  }
            ],
            "stepsHeading": "Composition Techniques",
            "steps": [
                  {
                        "title": "Asymmetric Split",
                        "desc": "Image and text in unequal columns for visual hierarchy"
                  },
                  {
                        "title": "Full-Bleed Hero",
                        "desc": "Image covers entire canvas with scrim for text legibility"
                  },
                  {
                        "title": "Grid Matrix",
                        "desc": "Images and text arranged in structured multi-cell grids"
                  },
                  {
                        "title": "Overlap & Layer",
                        "desc": "Text crosses image boundaries for dynamic tension"
                  }
            ],
            "barsHeading": "Style Spectrum",
            "barsDesc": "Rendering variety across the 20 slides",
            "bars": [
                  {
                        "label": "Photography-Based",
                        "value": 35
                  },
                  {
                        "label": "Illustration",
                        "value": 30
                  },
                  {
                        "label": "Diagram/Tech",
                        "value": 20
                  },
                  {
                        "label": "Artistic/Abstract",
                        "value": 15
                  }
            ],
            "quote": "20 ways to make images and text speak together -- each layout tells a different story."
      ,
      "slides": [{"type":"cover","title":"Visual Composition","subtitle":"20 Visual Language Experiments in Juxtaposition","info":"PPT Master · 2026"},{"type":"cards","label":"Classic Layouts","heading":"Three Foundational Image-Text Patterns","items":[{"title":"Left Image, Right Text","desc":"Vertical image left (3:7 ratio) — text-dominant narrative pages"},{"title":"Right Image Bleed","desc":"Image bleeds to edge (7:3 ratio) — creates visual tension"},{"title":"Top Banner + 3 Columns","desc":"Wide image header with three-column text annotations below"}]},{"type":"comparison","label":"Rendering Styles","heading":"Visual Rendering Approaches","columns":[{"title":"Editorial + Corporate","points":["Corporate photography","Cool professional palette","Clean Swiss minimalism"]},{"title":"Artistic + Organic","points":["Watercolor rendering","Paper-cut layering","Ink-wash brush notes"]},{"title":"Digital + Tech","points":["3D isometric views","Pixel art retro","Digital dashboard neon"]}]},{"type":"table","label":"Layout Grid","heading":"12 Layout Patterns by Complexity","headers":["Pattern","Image Area","Text Area","Best For"],"rows":[["Left 1/3 vertical","427px","733px","Text-dominant narratives"],["Z-shape 3-row","3 alternating","3 alternating","Visual storytelling"],["9-grid center","1 center cell","8 surrounding","Technical annotation"],["Diagonal split","Upper-left triangle","Lower-right","Dynamic tension"],["Circle crop + radial","Center 380px Ø","4 corner blocks","Dashboard focus"]]},{"type":"flow","label":"Composition","heading":"Four Composition Principles","steps":[{"title":"Hierarchy","desc":"Image vs text — who leads?"},{"title":"Proportion","desc":"3:7, 5:5, or 7:3 ratio"},{"title":"Negative Space","desc":"Breathing room defines structure"},{"title":"Visual Flow","desc":"Z-path, L-path, or radial"}]},{"type":"two-column","label":"Advanced","heading":"Advanced Techniques","left":{"title":"Image as Canvas","points":["Full-bleed with dark overlay","Dense info cards layered on top","Text becomes foreground architecture"]},"right":{"title":"Shape Masking","points":["Circle, hexagon, polygon crops","Text fills gaps around shapes","Creates organic layout rhythm"]}},{"type":"stats","label":"Coverage","heading":"20 Patterns in One Deck","desc":"A comprehensive visual language laboratory.","items":[{"value":"20","label":"Unique layout patterns"},{"value":"12","label":"Rendering × palette combos"},{"value":"6","label":"Image-text ratio variants"}]},{"type":"bars","label":"Effectiveness","heading":"Layout Effectiveness by Use Case","desc":"Subjective ratings across presentation contexts.","items":[{"label":"Corporate decks","value":85},{"label":"Creative portfolios","value":92},{"label":"Data presentations","value":70},{"label":"Editorial features","value":95}]},{"type":"image-text","label":"Closing Pattern","heading":"Chalkboard Mono — The Minimal Close","imgAlt":"Dark chalkboard texture with single centered line","points":["Full-bleed dark background with 60%+ negative space","Single sentence absolutely centered","Negative space IS the content","Maximum restraint, maximum impact"]},{"type":"end","text":"20 Visual Languages · One Design System"}]},
    frame: "default",
    vars: {
      bg: "#0f1117", surface: "#1a1d2e", border: "#2a2d3e",
      text: "#e8e8f0", text2: "#9090a0", text3: "#5a5a72", accent: "#7c6ff7",
      accent2: "#f5a623", accent3: "#4ecdc4", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Consulting Gold", kind: "example", mode: "light",
    desc: "MBB-level consulting deck with navy authority, gold data highlights, and eco-green accent.",
    tags: ["Example", "Consulting", "Light"],
      demoContent: {
            "cardsHeading": "The Retention Gap",
            "cardsLabel": "STRATEGIC CHALLENGE",
            "cards": [
                  {
                        "title": "15% Repeat Rate",
                        "desc": "Only 15% of customers return vs. 40% industry benchmark"
                  },
                  {
                        "title": "78% Poor Service",
                        "desc": "After-sales rated Fair or Poor by the vast majority"
                  },
                  {
                        "title": "52% Lost",
                        "desc": "Over half of churned customers went to competitors"
                  }
            ],
            "statsHeading": "Customer Profile",
            "statsDesc": "Young, middle-income buyers with high lifetime value potential",
            "stats": [
                  {
                        "value": "75%",
                        "label": "Under Age 40"
                  },
                  {
                        "value": "82%",
                        "label": "Middle Income"
                  },
                  {
                        "value": "40%",
                        "label": "Survey Return Rate"
                  }
            ],
            "stepsHeading": "Implementation Roadmap",
            "steps": [
                  {
                        "title": "Q1 Quick Wins",
                        "desc": "Launch customer magazine and questionnaire incentive"
                  },
                  {
                        "title": "Q2 Service Uplift",
                        "desc": "Roll out 3-year free after-sales across franchises"
                  },
                  {
                        "title": "Q3 Financial Incentives",
                        "desc": "Activate 20% loyalty discount and trade-in programme"
                  },
                  {
                        "title": "Q4 Evaluate",
                        "desc": "Measure KPIs: repeat rate 15% to 30%, satisfaction 33% to 60%"
                  }
            ],
            "barsHeading": "Churn Root Causes",
            "barsDesc": "78% of customer loss is addressable",
            "bars": [
                  {
                        "label": "Bought Competitor",
                        "value": 52
                  },
                  {
                        "label": "Poor Service",
                        "value": 26
                  },
                  {
                        "label": "Relocated",
                        "value": 8
                  },
                  {
                        "label": "Unknown/Other",
                        "value": 14
                  }
            ],
            "quote": "Customer retention is the highest-ROI growth lever -- fix service first, then layer incentives."
      ,
      "slides": [{"type":"cover","title":"Kimsoong Customer Loyalty Programme","subtitle":"Strategic Framework for Customer Retention & Growth","info":"European Headquarters | Strategic Proposal | April 2026"},{"type":"stats","label":"The Challenge","heading":"A Critical Retention Gap","desc":"The cost of acquiring a new customer is 5–7× retaining an existing one.","items":[{"value":"15%","label":"Repeat Buyer Rate (vs 40% benchmark)"},{"value":"78%","label":"Rate After-Sales Fair/Poor"},{"value":"52%","label":"Lost to Competitors"}]},{"type":"bars","label":"Root Cause","heading":"Why Customers Leave","desc":"78% of churn is within Kimsoong's control.","items":[{"label":"Bought competitor","value":52},{"label":"Disappointed with service","value":26},{"label":"Relocated","value":8},{"label":"No longer drive","value":5}]},{"type":"table","label":"Customer Profile","heading":"Who Buys Kimsoong?","headers":["Dimension","Finding","Implication"],"rows":[["Age","75% under 40","High lifetime value potential"],["Income","82% middle income","Price-sensitive but stable"],["Occupation","75% employed","Regular purchase cycle"],["Interests","Dining, Sport, Travel, Environment","Brand-aligned values"]]},{"type":"cards","label":"Strategy","heading":"Four Pillars of Customer Loyalty","items":[{"title":"Long-Term Relationships","desc":"Build trust to increase profits over lifetime"},{"title":"Accurate Profiling","desc":"Data-driven decisions from better questionnaires"},{"title":"Staff Engagement","desc":"Service excellence starts with employee buy-in"}]},{"type":"comparison","label":"Initiatives","heading":"Five Recommended Initiatives","columns":[{"title":"High Impact","points":["3-Year Free After-Sales ★","20% Loyalty Discount","Enhanced Trade-in Programme"]},{"title":"Quick Wins","points":["Customer Magazine (brand)","Questionnaire Incentive Pen","Highest ROI for data collection"]}]},{"type":"timeline","label":"Roadmap","heading":"Phased Rollout: Quick Wins First","events":[{"date":"Q1","title":"Quick Wins","desc":"Launch magazine, deploy questionnaire incentive"},{"date":"Q2","title":"Service Uplift","desc":"3-Year Free After-Sales across franchises"},{"date":"Q3","title":"Financial Incentives","desc":"20% discount + trade-in programme"},{"date":"Q4","title":"Evaluate & Optimize","desc":"Measure KPIs, adjust programme"}]},{"type":"flow","label":"KPI Targets","heading":"Success Metrics: 12-Month Targets","steps":[{"title":"Repeat Rate","desc":"15% → 30%"},{"title":"Satisfaction","desc":"Good+ rating: 33% → 60%"},{"title":"Data Quality","desc":"Questionnaire return: 40% → 70%"},{"title":"ROI Validation","desc":"Phase 4 evaluation cycle"}]},{"type":"big-number","number":"2×","label":"Repeat Buyer Target","desc":"Transforming 15% repeat buyers to 30%+ is achievable within 12 months. Fix after-sales first, build data capability, then phase financial incentives."},{"type":"end","text":"Customer retention is the highest-ROI growth lever for Kimsoong Europe."}]},
    frame: "default",
    vars: {
      bg: "#ffffff", surface: "#f4f6f8", border: "#d5dde5",
      text: "#2c3e50", text2: "#5d6d7e", text3: "#95a5a6", accent: "#e8a838",
      accent2: "#2d8a4e", accent3: "#1a3a5c", font: "Inter, 'Noto Sans SC', sans-serif"
    }
  },
  {
    name: "Imperial Indigo", kind: "example", mode: "dark",
    desc: "Deep indigo canvas with antique gold accents evoking classical Chinese architecture.",
    tags: ["Example", "Classical", "Dark"],
      demoContent: {
            "cardsHeading": "归国初期的建筑实践",
            "cardsLabel": "建筑师林徽因",
            "cards": [
                  {
                        "title": "梁启超墓碑",
                        "desc": "1929年，学成归国后的第一件作品"
                  },
                  {
                        "title": "吉海铁路总站",
                        "desc": "设计总体风貌，哥特式雄狮造型"
                  },
                  {
                        "title": "人民英雄纪念碑",
                        "desc": "提出扩大碑座与双层台阶的关键修改"
                  }
            ],
            "statsHeading": "学术贡献",
            "statsDesc": "中国建筑理论的奠基者",
            "stats": [
                  {
                        "value": "1932",
                        "label": "首篇建筑论文"
                  },
                  {
                        "value": "70",
                        "label": "逝世周年"
                  },
                  {
                        "value": "7",
                        "label": "墓碑上的字"
                  }
            ],
            "stepsHeading": "一生轨迹",
            "steps": [
                  {
                        "title": "求学",
                        "desc": "1924年赴美宾夕法尼亚大学学习建筑"
                  },
                  {
                        "title": "奠基",
                        "desc": "1930年加入中国营造学社，开启古建筑考察"
                  },
                  {
                        "title": "坚守",
                        "desc": "战乱流亡中肺炎发作，仍坚持研究写作"
                  },
                  {
                        "title": "丰碑",
                        "desc": "参与国徽和人民英雄纪念碑设计"
                  }
            ],
            "barsHeading": "学术影响",
            "barsDesc": "林徽因的多维贡献",
            "bars": [
                  {
                        "label": "建筑实践",
                        "value": 75
                  },
                  {
                        "label": "理论奠基",
                        "value": 90
                  },
                  {
                        "label": "学科建设",
                        "value": 85
                  },
                  {
                        "label": "古建筑保护",
                        "value": 80
                  }
            ],
            "quote": "墓碑上只有七个字：建筑师林徽因墓。她用一生证明了这个身份。"
      ,
      "slides": [{"type":"cover","title":"林徽因：被文学光环遮蔽的建筑巨匠","subtitle":"逝世70周年 · 重识中国建筑史上的女性力量","info":"凤凰空间 · 2025"},{"type":"timeline","label":"生平","heading":"建筑巨匠的一生","events":[{"date":"1904","title":"出生杭州","desc":"书香门第"},{"date":"1924","title":"赴美留学","desc":"宾夕法尼亚大学"},{"date":"1930","title":"加入营造学社","desc":"中国建筑史研究"},{"date":"1932","title":"首篇论文","desc":"《论中国建筑之几个特征》"},{"date":"1949","title":"设计国徽","desc":"新中国象征"},{"date":"1955","title":"逝世","desc":"墓碑刻\"建筑师林徽因墓\""}]},{"type":"cards","label":"建筑实践","heading":"归国初期的建筑实践","items":[{"title":"1929 梁启超墓碑","desc":"学成归来第一件作品"},{"title":"1929 吉海铁路总站","desc":"设计总体风貌，哥特式雄狮造型"},{"title":"1932 北大地质馆","desc":"中国最早引入西方现代主义建筑"}]},{"type":"two-column","label":"丰碑之作","heading":"国之重器上的建筑印记","left":{"title":"人民英雄纪念碑","points":["提出创造性修改方案","亲自设计碑座饰纹与花环浮雕","以唐代风格为蓝本"]},"right":{"title":"八宝山革命公墓","points":["主体建筑格局设计","最终也安葬在自己参与设计的空间中"]}},{"type":"image-text","label":"学术先驱","heading":"首篇建筑论文：技惊四座","imgAlt":"林徽因1932年建筑论文","points":["首次由中国学者发表的建筑理论文章","定义了木框架结构体系基本特征","反驳西方学者对中国建筑的误读","描绘中国建筑史的完整概念框架"]},{"type":"flow","label":"学术贡献","heading":"学术贡献一览","steps":[{"title":"\"建筑意\"概念","desc":"技术、美、历史与人情的凝聚"},{"title":"《清式营造则例》","desc":"归纳中国建筑理论框架"},{"title":"民居研究先驱","desc":"率先提出保护民间建筑"},{"title":"住宅概论课","desc":"1949年清华首次系统教授"}]},{"type":"stats","label":"坚韧意志","heading":"穿越战火的建筑斗士","desc":"荒郊野谷考察古建筑，风餐露宿不退缩。","items":[{"value":"15+","label":"省份实地考察"},{"value":"2000+","label":"古建筑测量记录"},{"value":"8年","label":"战乱中坚持研究"}]},{"type":"quote","text":"什么美人不美人，我还有好多事要做呢！","attribution":"林徽因"},{"type":"comparison","label":"历史地位","heading":"她想要终生奋斗的事业","columns":[{"title":"学科奠基","points":["与梁思成创办东北大学、清华大学建筑系","深入荒凉之地测量古建筑"]},{"title":"思想先行","points":["在国徽和纪念碑上倾注最后心血","是思想上的先行者"]}]},{"type":"end","text":"建筑师林徽因墓 · 她用一生证明，她是当之无愧的建筑师"}]},
    frame: "default",
    vars: {
      bg: "#1a1a2e", surface: "#16213e", border: "#2a2a4a",
      text: "#e8e8e8", text2: "#a0a0b0", text3: "#6b6b80", accent: "#c9a96e",
      accent2: "#e8d5b7", accent3: "#8b6f47", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Heritage Brick", kind: "example", mode: "light",
    desc: "Museum-exhibition style with brick-red accents and warm paper for cultural narratives.",
    tags: ["Example", "Museum", "Light"],
      demoContent: {
            "cardsHeading": "重新认识她",
            "cardsLabel": "建筑师而非传说",
            "cards": [
                  {
                        "title": "建筑实践",
                        "desc": "从墓碑到车站，她的建筑实践有清晰轨迹"
                  },
                  {
                        "title": "理论提出者",
                        "desc": "1932年她已在定义“中国建筑”的核心特征"
                  },
                  {
                        "title": "行动者",
                        "desc": "穿越战火与病痛，本身就是行动者"
                  }
            ],
            "statsHeading": "她留下的方法",
            "statsDesc": "学科、方法与远见",
            "stats": [
                  {
                        "value": "3",
                        "label": "方法维度"
                  },
                  {
                        "value": "2",
                        "label": "大学建筑系"
                  },
                  {
                        "value": "1932",
                        "label": "首篇理论文章"
                  }
            ],
            "stepsHeading": "三个维度重看她",
            "steps": [
                  {
                        "title": "作品",
                        "desc": "从梁启超墓碑到人民英雄纪念碑的建筑历程"
                  },
                  {
                        "title": "理论",
                        "desc": "定义中国木构架体系，反驳西方误读"
                  },
                  {
                        "title": "方法",
                        "desc": "测绘、考察、史料与类型分析并重"
                  },
                  {
                        "title": "远见",
                        "desc": "民居保护、现代住宅、普通人居住问题"
                  }
            ],
            "barsHeading": "贡献维度",
            "barsDesc": "从八卦回到专业",
            "bars": [
                  {
                        "label": "建筑实践",
                        "value": 70
                  },
                  {
                        "label": "理论奠基",
                        "value": 95
                  },
                  {
                        "label": "学科建设",
                        "value": 85
                  },
                  {
                        "label": "精神遗产",
                        "value": 90
                  }
            ],
            "quote": "墓碑上的七个字，已经足够准确。"
      ,
      "slides": [{"type":"cover","title":"林徽因","subtitle":"重识建筑师，而非传说","info":"逝世70周年 · 从作品、理论与行动三个维度重看"},{"type":"big-number","number":"70","label":"周年","desc":"被看见的，常常不是她最重要的部分。真正支撑其历史地位的是建筑实践、理论建构与学科奠基。"},{"type":"timeline","label":"建筑实践","heading":"从墓碑到车站：清晰的建筑轨迹","events":[{"date":"1929","title":"梁启超墓碑","desc":"学成归国后的起点"},{"date":"1929","title":"吉海铁路总站","desc":"现代性与民族象征并置"},{"date":"1932","title":"北大地质馆","desc":"现代主义转向"},{"date":"1938","title":"映秋院","desc":"地方材料与民居经验"},{"date":"1940","title":"昆明自宅","desc":"战时条件下的自我建造"}]},{"type":"cards","label":"四个现场","heading":"四个现场，四种建筑回应","items":[{"title":"吉海铁路总站","desc":"地标性公共建筑的象征表达"},{"title":"北大地质馆","desc":"现代主义转向"},{"title":"昆明自宅","desc":"战时条件下的自我建造"}]},{"type":"two-column","label":"国家尺度","heading":"国家记忆中的建筑工作","left":{"title":"人民英雄纪念碑","points":["提出扩大碑座与双层台阶","纹样与尺度体现传统建筑语汇"]},"right":{"title":"八宝山革命公墓","points":["主体格局设计","她最终也安葬在此"]}},{"type":"image-text","label":"理论奠基","heading":"1932年，她已在定义\"中国建筑\"","imgAlt":"林徽因1932年论文手稿","points":["中国专业学者首次系统论述中国建筑","反驳了西方知识框架中的误读","提出木构架体系关键特征","为中国建筑史叙述打下理论骨架"]},{"type":"comparison","label":"方法论","heading":"她真正留下的是一套方法","columns":[{"title":"研究方法","points":["测绘、考察、史料分析并重","建筑意、营造则例"]},{"title":"学科建设","points":["参与东北大学、清华大学建筑系","住宅概论、民间建筑保护"]}]},{"type":"flow","label":"行动者","heading":"她本身就是行动者","steps":[{"title":"实地考察","desc":"翻山涉水并非旁观"},{"title":"战乱流亡","desc":"病痛没有中止研究"},{"title":"职业使命","desc":"\"我还有好多事要做呢\""},{"title":"奠基时刻","desc":"把个人生命压进建筑学"}]},{"type":"quote","text":"重新认识她，不是从传奇回到八卦，而是从八卦回到专业。她留下的，不只是作品，更是中国如何理解自身建筑的一套语言。","attribution":"建筑师林徽因墓"},{"type":"end","text":"墓碑上的七个字，已经足够准确。"}]},
    frame: "default",
    vars: {
      bg: "#f6f1e8", surface: "#efe7da", border: "#d8cbb8",
      text: "#1f1b16", text2: "#6a6258", text3: "#978c7e", accent: "#a44a3f",
      accent2: "#b6915e", accent3: "#6e7c80", font: "Georgia, 'Noto Sans SC', serif"
    }
  },
  {
    name: "Academic Warm", kind: "example", mode: "light",
    desc: "Technical-paper style with warm orange data markers and navy structural lines.",
    tags: ["Example", "Academic", "Light"],
      demoContent: {
            "cardsHeading": "The Fine-Tuning Problem",
            "cardsLabel": "LORA PAPER DEEP-READ",
            "cards": [
                  {
                        "title": "Full Fine-Tuning",
                        "desc": "GPT-3 175B requires storing a full parameter copy per downstream task"
                  },
                  {
                        "title": "Adapter Layers",
                        "desc": "Add model depth but introduce inference latency on short sequences"
                  },
                  {
                        "title": "Low-Rank Insight",
                        "desc": "Weight updates have low intrinsic dimensionality -- rank 1-2 suffices"
                  }
            ],
            "statsHeading": "LoRA at GPT-3 Scale",
            "statsDesc": "Results on 175B parameters",
            "stats": [
                  {
                        "value": "10,000x",
                        "label": "Parameter Reduction"
                  },
                  {
                        "value": "350GB→1.2TB",
                        "label": "VRAM Savings"
                  },
                  {
                        "value": "+25%",
                        "label": "Training Throughput"
                  }
            ],
            "stepsHeading": "How LoRA Works",
            "steps": [
                  {
                        "title": "Freeze Pretrained",
                        "desc": "Keep original weights W0 completely frozen during adaptation"
                  },
                  {
                        "title": "Inject Low-Rank",
                        "desc": "Add parallel branch: down-project A then up-project B"
                  },
                  {
                        "title": "Train Only A, B",
                        "desc": "Gaussian init for A, zero init for B -- starts at delta W = 0"
                  },
                  {
                        "title": "Merge at Deploy",
                        "desc": "W = W0 + BA -- zero additional inference latency"
                  }
            ],
            "barsHeading": "Benchmark Performance",
            "barsDesc": "LoRA matches or exceeds full fine-tuning",
            "bars": [
                  {
                        "label": "RoBERTa GLUE",
                        "value": 87
                  },
                  {
                        "label": "DeBERTa GLUE",
                        "value": 91
                  },
                  {
                        "label": "GPT-3 WikiSQL",
                        "value": 74
                  },
                  {
                        "label": "GPT-3 SAMSum",
                        "value": 72
                  }
            ],
            "quote": "Low-rank adaptation: parameter-efficient, zero extra latency, quality on par or better."
      ,
      "slides": [{"type":"cover","title":"LoRA: Low-Rank Adaptation of Large Language Models","subtitle":"Paper Deep-Read","info":"Hu et al., 2021 · Microsoft · arXiv:2106.09685"},{"type":"big-number","number":"175B","label":"Trainable Parameters per Task","desc":"GPT-3 full fine-tuning: each downstream task requires a complete 175B parameter copy. N tasks = N × 175B in storage."},{"type":"cards","label":"Prior Art","heading":"Why Existing Efficient Methods Fall Short","items":[{"title":"Adapter Layers","desc":"Add model depth → inference latency, especially on short sequences"},{"title":"Prefix/Prompt Tuning","desc":"Consume input length → compress usable sequence"},{"title":"Common Issue","desc":"Rarely match full fine-tuning baseline — efficiency vs quality tradeoff"}]},{"type":"image-text","label":"Core Insight","heading":"Weight Updates Are Low-Rank","imgAlt":"Low-rank decomposition diagram W0 + BA","points":["Over-parameterized models live on a low-dimensional manifold","Hypothesis: adaptation ΔW also has low intrinsic rank","Even with d = 12,288, rank r = 1–2 suffices","Freeze W₀, train only A and B matrices"]},{"type":"flow","label":"Method","heading":"LoRA: Freeze W₀, Inject Low-Rank BA","steps":[{"title":"Decompose","desc":"ΔW = B·A where A∈R^(r×d), B∈R^(d×r)"},{"title":"Initialize","desc":"A ~ Gaussian, B = 0 → start ΔW = 0"},{"title":"Train","desc":"W₀ frozen, only train A and B"},{"title":"Merge","desc":"Deploy: W = W₀ + BA — same as original model"}]},{"type":"comparison","label":"Advantages","heading":"Four Key Advantages","columns":[{"title":"Efficiency","points":["No gradient storage for frozen params","VRAM: 1.2TB → 350GB","Training throughput +25%"]},{"title":"Deployment","points":["Zero inference latency added","Merge weights: W = W₀ + BA","Hot-swap: subtract BA, add B'A'"]}]},{"type":"table","label":"GLUE Results","heading":"GLUE Benchmark: Fewer Params, Same or Better","headers":["Model","Method","Score","Params"],"rows":[["RoBERTa-base","Full FT","86.4","125M"],["RoBERTa-base","LoRA","87.2","0.3M"],["RoBERTa-large","Full FT","88.9","355M"],["RoBERTa-large","LoRA","89.0","0.8M"],["DeBERTa-XXL","Full FT","91.1","1500M"],["DeBERTa-XXL","LoRA","91.3","4.7M"]]},{"type":"stats","label":"GPT-3 Results","heading":"GPT-3 175B: Still Holds at Scale","desc":"WikiSQL, MNLI, SAMSum all match or exceed full fine-tuning.","items":[{"value":"10,000×","label":"Parameter reduction (350GB → 35MB)"},{"value":"1/3","label":"VRAM usage (1.2TB → 350GB)"},{"value":"0%","label":"Extra inference latency"}]},{"type":"bars","label":"Rank Analysis","heading":"How Much Rank Do You Need?","desc":"Adapting Wq + Wv: rank r=1 already sufficient; r=64 adds minimal gain.","items":[{"label":"r=1 (Wq,Wv)","value":95},{"label":"r=4 (Wq,Wv)","value":97},{"label":"r=64 (Wq,Wv)","value":98},{"label":"r=1 (Wq only)","value":88}]},{"type":"quote","text":"Low-rank adaptation = parameter efficient + zero extra inference latency + quality on par or better. One foundation model, many hot-swappable LoRA modules.","attribution":"Hu et al., 2021 · Microsoft Research"},{"type":"end","text":"LoRA · Low-Rank Adaptation · arXiv:2106.09685"}]},
    frame: "academic",
    vars: {
      bg: "#ffffff", surface: "#f4f7fa", border: "#d8dee6",
      text: "#1d2733", text2: "#5b6776", text3: "#8a94a1", accent: "#e8743b",
      accent2: "#3e7cb1", accent3: "#1b3a5c", font: "'Noto Sans SC', Arial, sans-serif"
    }
  }
];


const layoutDNA = {
  core: "Use the standard slide library. Let the color palette, typography, and pacing carry the personality rather than adding heavy decorative frames.",
  brand: "Use the preset as identity only: keep the brand color, typography, icon style, and tone while choosing slide layouts by content.",
  layout: "Use the preset for page framing, density, and rhythm. Treat it as composition guidance, not a real organization brand.",
  deck: "Use the preset as a complete visual direction: identity, page framing, density, and section rhythm should all follow the preview.",
  example: "Use the preset as an expressive visual style adapted from a ppt-master example deck. Preserve its material cues, typography attitude, and density rules while composing slides with the HTML framework."
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

previews.forEach((item, index) => {
  item.slug = slugify(item.name);
  item.index = index + 1;
});

function cssVar(name, value) {
  return value ? `--${name}: ${value};` : "";
}

function cardStyle(item) {
  const v = item.vars;
  return [
    cssVar("bg", v.bg),
    cssVar("surface", v.surface),
    cssVar("border", v.border),
    cssVar("text", v.text),
    cssVar("text-2", v.text2),
    cssVar("text-3", v.text3),
    cssVar("accent", v.accent),
    cssVar("accent-2", v.accent2 || v.accent),
    cssVar("accent-3", v.accent3 || v.accent2 || v.accent),
    cssVar("font", v.font),
    cssVar("radius", v.radius),
    cssVar("title-case", v.titleCase)
  ].filter(Boolean).join(" ");
}

function themeVars(item) {
  const v = item.vars;
  const accent = v.accent;
  const dim = accent.startsWith("#") ? hexToRgba(accent, 0.1) : "rgba(255,255,255,0.08)";
  return `:root {
  --bg: ${v.bg};
  --surface: ${v.surface};
  --border: ${v.border};
  --text: ${v.text};
  --text-2: ${v.text2};
  --text-3: ${v.text3};
  --accent: ${v.accent};
  --accent-dim: ${dim};
  --mono: 'SF Mono', 'JetBrains Mono', 'Fira Code', monospace;
}`;
}

function hexToRgba(hex, alpha) {
  if (!hex || !hex.startsWith("#") || hex.length !== 7) return `rgba(255,255,255,${alpha})`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function fontUrl(item) {
  const font = item.vars.font;
  if (font.includes("JetBrains Mono")) return "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap";
  if (font.includes("Playfair Display")) return "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap";
  if (font.includes("Space Grotesk")) return "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
  if (font.includes("Plus Jakarta Sans")) return "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";
  if (font.includes("DM Sans")) return "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap";
  if (font.includes("Inter")) return "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
  if (font.includes("Sora")) return "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap";
  if (font.includes("Manrope")) return "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap";
  if (font.includes("Roboto")) return "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
  if (font.includes("Outfit")) return "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap";
  return "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap";
}

function referencePath(item) {
  return item.kind === "core" ? "references/themes.md" : "references/style-presets.md";
}

const examplePreviews = {
  "Brutalist Newspaper":      { metrics: [["2026",  "YEAR"],    ["$3.9T", "AI GDP"]],  bars: [92, 68, 45] },
  "Glassmorphism SaaS":       { metrics: [["90%",   "DEMO"],    ["3",     "BARRIERS"]], bars: [85, 60, 72] },
  "Swiss Grid":               { metrics: [["1957",  "GRID"],    ["24pt",  "BASE"]],     bars: [100, 50, 75] },
  "Sugar Rush Memphis":       { metrics: [["14",    "STAGES"],  ["5K+",   "FANS"]],     bars: [95, 80, 65] },
  "Risograph Zine":           { metrics: [["18",    "ZINES"],   ["DIY",   "PRINT"]],    bars: [70, 90, 55] },
  "Kubernetes Blueprint":     { metrics: [["5",     "CTRL"],    ["2",     "PLANES"]],   bars: [88, 72, 60] },
  "Ink Wash Literati":        { metrics: [["四",    "藏"],      ["14",    "页"]],       bars: [40, 55, 80] },
  "Plant Dye Poetry":         { metrics: [["五色",  "正色"],    ["12",    "章"]],       bars: [55, 70, 85] },
  "Pritzker Editorial":       { metrics: [["8",     "MASTERS"], ["2026",  "SEASON"]],   bars: [75, 60, 90] },
  "Global AI Capital":        { metrics: [["$2.5T", "MARKET"],  ["18",    "PAGES"]],    bars: [92, 78, 48] },
  "Warm Home Editorial":      { metrics: [["2026",  "趋势"],    ["12",    "议题"]],     bars: [60, 75, 85] },
  "Fashion Magazine":         { metrics: [["SS26",  "SEASON"],  ["16",    "LOOKS"]],    bars: [88, 62, 74] },
  "Transformer Deep Read":    { metrics: [["28.4",  "BLEU"],    ["8×",    "P100"]],     bars: [95, 42, 68] },
  "Agent Coral":              { metrics: [["5",     "PATTERNS"],["12",    "SLIDES"]],   bars: [80, 65, 75] },
  "Code Amber":               { metrics: [["0.4%",  "FPR"],     ["93%",   "ALLOW"]],    bars: [88, 30, 70] },
  "Urban Editorial":          { metrics: [["−80%",  "WASTE"],   ["15",    "PAGES"]],    bars: [70, 85, 45] },
  "Showcase Purple":          { metrics: [["20",    "LAYOUTS"], ["图文",   "VISUAL"]],   bars: [75, 55, 90] },
  "Consulting Gold":          { metrics: [["15%",   "REPEAT"],  ["5×",    "CAC"]],      bars: [35, 70, 60] },
  "Imperial Indigo":          { metrics: [["1929",  "起点"],    ["10",    "SLIDES"]],   bars: [65, 80, 50] },
  "Heritage Brick":           { metrics: [["70th",  "ANNIV"],   ["9",     "SLIDES"]],   bars: [70, 50, 85] },
  "Academic Warm":            { metrics: [["10K×",  "FEWER"],   ["r=4",   "RANK"]],     bars: [92, 25, 75] }
};

function previewMarkup(item) {
  const kind = item.kind === "core" ? "theme" : item.kind;
  const p = examplePreviews[item.name];
  const metrics = p ? p.metrics
    : item.kind === "core" ? [["93%", "Metric A"], ["2.4s", "Metric B"]]
    : [["01", "Section"], ["3x", "Depth"]];
  const bars = p ? p.bars : [78, 56, 68];

  return `
    <div class="preview" data-frame="${item.frame}">
      <div class="label">${kind} · ${String(item.index).padStart(2, "0")}</div>
      <div class="title">${item.name}</div>
      <p class="sub">${item.desc}</p>
      <div class="mini-layout">
        <div class="metrics">
          ${metrics.map(([value, label]) => `<div class="metric-card"><strong>${value}</strong><span>${label}</span></div>`).join("")}
        </div>
        <div class="panel">
          <div class="panel-head"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
          <div class="bars">
            <span class="bar"><i style="width: ${bars[0]}%"></i></span>
            <span class="bar"><i style="width: ${bars[1]}%"></i></span>
            <span class="bar"><i style="width: ${bars[2]}%"></i></span>
          </div>
        </div>
      </div>
    </div>
  `;
}


globalThis.SLIDES_THEME_DATA = { previews, layoutDNA, slugify, cssVar, cardStyle, themeVars, hexToRgba, fontUrl, referencePath, previewMarkup };
})();
