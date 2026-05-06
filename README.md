# Vertical Parts — Design System

> Industrial. Technical. Modern. The design language of **Vertical Parts** — a Brazilian specialist in parts and components for elevators, escalators and vertical transport equipment.

---

## 1 — About the brand

**Vertical Parts** is a Brazilian company specializing in parts and components for **elevators (elevadores), escalators (escadas rolantes)** and other vertical transport equipment. The institutional offering includes a product catalog and a **client area** (área do cliente).

The brand portfolio includes a family of internal products:

| Product | Repo | Purpose |
|---|---|---|
| **VP Click** | `verticalpartsIA/vp-click` | Internal operations / lead routing app (React + Vite + shadcn + Supabase) |
| **VPC CRM** (Leads2B integration) | `verticalpartsIA/vpcrm-verticalparts` | Lead-management landing + portal |
| **VP Dashboard** | `verticalpartsIA/vpdashboard` | BI & operational management for the parts inventory (>4k SKUs) |
| **VP Sistema** | `verticalpartsIA/vpsistema` | Central SSO / portal |
| **Resolve 360, VP Compras, VP Requisições, ProjectTask, Proposta Comercial** | various | Internal operational tooling |

### Sources

- Logo provided directly by the user: `uploads/CINZA E AMARELO.png` → `assets/logo-verticalparts-color.png`
- White logo extracted from `verticalpartsIA/vp-click@main:src/assets/logo-verticalparts-white.png` → `assets/logo-verticalparts-white.png`
- Dashboard mockup: `verticalpartsIA/vpcrm-verticalparts@master:assets/dashboard_mockup.webp`
- Existing institutional CSS reference: `verticalpartsIA/vpcrm-verticalparts@master:style.css` — uses **Red Hat Display**, sharp corners, yellow accent on black.
- Live brand assets referenced from the codebase: `verticalparts.com.br` (login backgrounds, white logo).
- Note: `verticalpartsIA/vpdashboard` was empty at time of read — UI kit recreation references the screen layouts implied by `vp-click` views (Calendar, Gantt, Table) and the dashboard mockup webp.

---

## 2 — Content fundamentals

**Language**: Portuguese (pt-BR). Always.

**Tone**: Professional, confident, technical. Direct — never cute. The voice of an experienced industrial supplier who knows their parts inside-out. Conveys reliability, precision and operational excellence.

**Voice rules**:
- Use **você** (informal-formal Brazilian standard) when addressing customers.
- Use **nós / a Vertical Parts** when speaking as the company.
- Imperative for CTAs ("Acessar Catálogo", "Solicitar Orçamento", "Entrar no Sistema").
- Never use first-person singular ("eu").

**Casing**:
- Headlines and primary CTAs: **ALL CAPS**, often with the `tracking-tight` letter spacing.
- Eyebrow labels (section tags, status, metadata): **ALL CAPS**, **wide-tracked** (0.18em).
- Body copy: sentence case.
- Buttons: ALL CAPS for primary, sentence case acceptable for tertiary/text links.

**Vocabulary cues** (lifted from existing copy):
- "Excelência em soluções para o mercado industrial"
- "Tecnologia de Ponta para sua Operação"
- "Gestão Inteligente de Leads"
- "Transforme Leads em Faturamento Real"
- Part-domain vocabulary: peças, componentes, elevadores, escadas rolantes, transporte vertical, estoque, catálogo, orçamento, requisição.

**Numbers and stats** are part of the voice — "+11 anos de mercado", ">4 mil peças", "+124 leads hoje", "R$ 450k pipeline". Numbers always tabular, often paired with a small eyebrow label above.

**Emoji**: ❌ Do not use. Industrial brand — emoji feels off. (One emoji-card pattern existed in legacy CSS but should be replaced with proper icons.)

**Punctuation**: No exclamation marks in body copy. Use a confident period.

---

## 3 — Visual foundations

### Palette
Three-color brand: **Black + Yellow + Gray + White**. That's the whole identity.

- **Yellow `#F5C400`** — the accent. Used for CTAs, the "PARTS" wordmark, key data points, hover states, dividers. Never for body text. Always pairs with black for contrast.
- **Black `#000000`** — primary surface for nav/footer/hero on dark mode; primary text on light.
- **Gray `#808080`** — the "VERTICAL" wordmark color. Used for muted text, metadata, technical specs.
- **White `#FFFFFF`** — primary surface in product UI and content sections.

A small extended grayscale (50/100/200/300/400/500/700/900) supports surfaces and dividers. Status colors (success/info/warning/danger) exist for dashboard states but are used sparingly — they are accent, not décor.

### Typography
**Red Hat Display** (300/400/600/700/800/900). Geometric, slab-adjacent grotesque. Bold-heavy usage — display sizes use 800–900. **JetBrains Mono** for part numbers / SKUs / technical data.

Typographic motifs:
- ALL CAPS display headlines, tight tracking (`-0.02em`).
- Eyebrows in tiny caps with very wide tracking (`0.18em`) — gives the technical-engineering feel.
- Tabular numerals everywhere a number lives.

### Backgrounds & surfaces
- **Solid color over gradient.** The brand is matte, not glossy.
- One acceptable gradient: a tight `radial-gradient` on hero surfaces from `#1a1a1a` → `#000` (subtle, monochromatic, non-distracting).
- A second accepted treatment: yellow protection block over an image — hard color block, never a soft fade.
- No noise/grain textures. No painterly imagery.

### Imagery
- Real photography of mechanical parts, machinery, escalator/elevator interiors. **Cool, slightly desaturated, often graded toward grayscale** with selective color accents (yellow safety stripes, indicators).
- The `glass-container` pattern in legacy CSS converts product imagery to grayscale until hover — embrace this monochrome-hover-color pattern.
- No illustrations of people in business suits. No abstract 3D blobs.

### Borders
- 1px borders are the default. 2px for emphasis (yellow accent stripes under nav, yellow side-borders on hero badges).
- Borders are usually `--vp-gray-200` on light, `--vp-steel` on dark.
- **Corner radii are minimal.** `0` (sharp) is the most common. `4–6px` is the upper end for cards/inputs. Pills only for tags. Anything ≥ 12px feels off-brand.

### Shadows
- `xs` / `sm` for inline UI (cards on hover, dropdowns).
- `md` / `lg` reserved for modals and floating cards.
- `--shadow-yellow` (yellow-tinted glow) only for the primary CTA's hover state. Used surgically.

### Hover & press states
- **Yellow primary buttons**: hover lifts (`translateY(-3px)`) and adds yellow shadow. Press settles back.
- **Outline / secondary**: hover *fills* with yellow and switches text to black. High contrast change.
- **Cards**: hover swaps `border-color` to yellow and lifts (`translateY(-10px)` for marketing surfaces, `-2px` for product UI).
- **Links**: hover changes color to yellow.
- **Press**: scale to `0.98` on tap (mobile/active).

### Motion
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out) for most things.
- Duration: 120ms for micro, 200ms for default, 320ms for entrances.
- No bounces. No spring physics. Industrial = controlled and quick. Background image carousel (login screen) is the one slow exception (8s crossfade).

### Layout rules
- Container max-widths: `1200px` (default), `1400px` (wide screens / dashboards), `960px` (narrow content).
- Generous vertical rhythm — sections breathe at 80–100px vertical padding on desktop.
- Grid-driven. 12-col implicit. Asymmetric splits (1.2fr / 1fr) for hero-style layouts.
- **Fixed nav** at 80px height, black background with a 2px yellow bottom border — this is a signature.

### Use of transparency / blur
- `backdrop-filter: blur(10–24px)` on glass cards over photographic backgrounds (login screen pattern).
- Yellow tint backgrounds: `rgba(245, 196, 0, 0.10)` for badges and pills. Always paired with a 2–3px yellow left border.

### Cards
The card system has two main flavors:
1. **Sharp marketing card** — `0` radius, 1px gray border, 3rem padding, hover lifts and turns border yellow.
2. **Product UI card** — `4–6px` radius, soft `shadow-sm`, white background, `var(--vp-gray-100)` page bg behind it. Used in dashboards.

### Iconography
See `ICONOGRAPHY` section below.

---

## 4 — Iconography

The Vertical Parts ecosystem uses **Lucide React** (`lucide-react ^0.462.0`) as its primary icon system — confirmed via the `vp-click` `package.json`. Lucide is line-style (1.5px stroke), monochrome, and matches the industrial-technical brand voice well.

**Rules**:
- Stroke width: `1.5` (Lucide default) or `2` for emphasis.
- Color: inherit from surrounding text. Yellow accent only on icons inside a primary-yellow surface or a key callout.
- Sizes: `16px` (inline with body), `20px` (buttons), `24px` (default), `32–40px` (feature cards).
- Avoid filled glyphs unless representing state (e.g. a star "favorited").

**Logo lockups available in `assets/`**:
- `logo-verticalparts-color.png` — gray + yellow on transparent (provided by user; primary mark on light surfaces).
- `logo-verticalparts-white.png` — all-white version for dark surfaces.
- A monogram could be derived from the circular "VP gear" in the color logo — not yet broken out as a separate file.

**Loading icons in HTML artifacts**: pull Lucide via CDN — `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()` after rendering.

**Emoji**: ❌ Not used. Some legacy CSS (`vpcrm-verticalparts/index.html`) uses 📊 ⚡ 📱 🤝 in feature cards — these are **placeholders to be replaced** with Lucide icons.

**Unicode chars as icons**: ❌ Not used. (Even arrows should be Lucide `ArrowRight`, not `→`.)

---

## 5 — Files in this design system

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest (works in Claude Code)
├── colors_and_type.css        ← all CSS variables (color, type, spacing, motion, radii, shadow)
├── assets/
│   ├── logo-verticalparts-color.png  ← primary mark (gray + yellow)
│   ├── logo-verticalparts-white.png  ← reverse mark for dark surfaces
│   └── dashboard_mockup.webp         ← reference image of the dashboard
├── preview/                   ← design system cards (rendered in the Design System tab)
│   ├── colors-primary.html
│   ├── colors-neutrals.html
│   ├── colors-status.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-eyebrow.html
│   ├── radii.html
│   ├── shadows.html
│   ├── spacing.html
│   ├── buttons.html
│   ├── inputs.html
│   ├── badges.html
│   ├── cards.html
│   ├── nav.html
│   └── logo-lockup.html
└── ui_kits/
    ├── website/               ← institutional site + catalog + client area
    │   ├── README.md
    │   ├── index.html
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── ProductCatalog.jsx
    │   ├── ClientArea.jsx
    │   └── Footer.jsx
    └── dashboard/             ← VP-internal operations dashboard
        ├── README.md
        ├── index.html
        ├── Sidebar.jsx
        ├── Topbar.jsx
        ├── KPIRow.jsx
        ├── PartsTable.jsx
        └── ChartCard.jsx
```

---

## 6 — Caveats

- The `vpdashboard` repo was empty when read; the dashboard UI kit is reconstructed from related `vp-click` views and the institutional dashboard mockup. **Please point me at the real source and I will tighten the recreation.**
- **Red Hat Display** is loaded from Google Fonts directly — the codebase uses the same. No font-file substitution required.
- The brand color logo is bitmap (PNG with alpha). An SVG version would render crisper at small sizes — please provide if available.

