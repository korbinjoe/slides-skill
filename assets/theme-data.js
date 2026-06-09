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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },

  {
    name: "Brutalist Newspaper", kind: "example", mode: "light",
    desc: "Editorial newspaper style with dense columns, black rules, and a single red accent.",
    tags: ["Example", "Editorial", "High Density"],
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
  if (item.kind === "core") return "references/themes.md";
  if (item.kind === "example") return "assets/theme-data.js";
  return "references/style-presets.md";
}

const examplePreviews = {
  "Brutalist Newspaper":      { metrics: [["2026",  "YEAR"],    ["$3.9T", "AI GDP"]],  bars: [92, 68, 45] },
  "Glassmorphism SaaS":       { metrics: [["90%",   "DEMO"],    ["3",     "BARRIERS"]], bars: [85, 60, 72] },
  "Swiss Grid":               { metrics: [["1957",  "GRID"],    ["24pt",  "BASE"]],     bars: [100, 50, 75] },
  "Sugar Rush Memphis":       { metrics: [["14",    "STAGES"],  ["5K+",   "FANS"]],     bars: [95, 80, 65] },
  "Risograph Zine":           { metrics: [["18",    "ZINES"],   ["DIY",   "PRINT"]],    bars: [70, 90, 55] },
  "Kubernetes Blueprint":     { metrics: [["5",     "CTRL"],    ["2",     "PLANES"]],   bars: [88, 72, 60] },
  "Ink Wash Literati":        { metrics: [["4",     "HIDE"],    ["14",    "PAGES"]],       bars: [40, 55, 80] },
  "Plant Dye Poetry":         { metrics: [["5",     "COLORS"],  ["12",    "CHAPTERS"]],       bars: [55, 70, 85] },
  "Pritzker Editorial":       { metrics: [["8",     "MASTERS"], ["2026",  "SEASON"]],   bars: [75, 60, 90] },
  "Global AI Capital":        { metrics: [["$2.5T", "MARKET"],  ["18",    "PAGES"]],    bars: [92, 78, 48] },
  "Warm Home Editorial":      { metrics: [["2026",  "TRENDS"],  ["12",    "TOPICS"]],     bars: [60, 75, 85] },
  "Fashion Magazine":         { metrics: [["SS26",  "SEASON"],  ["16",    "LOOKS"]],    bars: [88, 62, 74] },
  "Transformer Deep Read":    { metrics: [["28.4",  "BLEU"],    ["8×",    "P100"]],     bars: [95, 42, 68] },
  "Agent Coral":              { metrics: [["5",     "PATTERNS"],["12",    "SLIDES"]],   bars: [80, 65, 75] },
  "Code Amber":               { metrics: [["0.4%",  "FPR"],     ["93%",   "ALLOW"]],    bars: [88, 30, 70] },
  "Urban Editorial":          { metrics: [["−80%",  "WASTE"],   ["15",    "PAGES"]],    bars: [70, 85, 45] },
  "Showcase Purple":          { metrics: [["20",    "LAYOUTS"], ["IMAGE",  "VISUAL"]],   bars: [75, 55, 90] },
  "Consulting Gold":          { metrics: [["15%",   "REPEAT"],  ["5×",    "CAC"]],      bars: [35, 70, 60] },
  "Imperial Indigo":          { metrics: [["1929",  "START"],   ["10",    "SLIDES"]],   bars: [65, 80, 50] },
  "Heritage Brick":           { metrics: [["70th",  "ANNIV"],   ["9",     "SLIDES"]],   bars: [70, 50, 85] },
  "Academic Warm":            { metrics: [["10K×",  "FEWER"],   ["r=4",   "RANK"]],     bars: [92, 25, 75] }
};

function previewMarkup(item) {
  const p = examplePreviews[item.name];
  const metrics = p ? p.metrics
    : item.kind === "core" ? [["93%", "Metric A"], ["2.4s", "Metric B"]]
    : [["01", "Section"], ["3x", "Depth"]];
  const bars = p ? p.bars : [78, 56, 68];

  return `
    <div class="preview" data-frame="${item.frame}">
      <div class="label">${item.mode} · ${String(item.index).padStart(2, "0")}</div>
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
