# Personal Website Rebuild — Product & Technical Specification

**Author:** Claude Code (Principal Engineer mode)
**Date:** 2026-02-26
**Status:** Draft — pending owner approval

---

## 1. Goals

| # | Goal |
|---|------|
| G1 | Replace the outdated 2016 academic-era site with a modern, industry-focused professional presence |
| G2 | Establish a credible, up-to-date home base suitable for job search and inbound opportunities |
| G3 | Accurately represent current seniority: Principal Software Engineer / Lead with 10+ years at scale |
| G4 | Load fast, look sharp on all devices, and require zero build tooling |

### Non-Goals

- Blog / writing platform (not in scope for v1; architecture must not preclude adding it later)
- CMS or server-side rendering
- Contact form with backend (mailto link is sufficient for v1)
- Preserving any content from the old site except factual career data

---

## 2. Target Audience

**Primary:** Engineering hiring managers, technical recruiters, CTOs at growth-stage companies and large tech orgs
**Secondary:** Peers and collaborators who receive a URL as a professional introduction
**Signal to send:** "This person operates at principal level — architectural leadership, cross-org impact, production-scale systems."

---

## 3. Information Architecture

The site is a **single HTML page** with anchor-scroll navigation. No multi-page routing. No SPA framework. All content visible without JavaScript (JS is purely for UX polish).

### Sections (in order)

```
┌─────────────────────────────────────────┐
│  NAV  — name logo + anchor links         │
├─────────────────────────────────────────┤
│  HERO — name, title, tagline, CTAs       │
├─────────────────────────────────────────┤
│  ABOUT — 3-sentence professional summary │
├─────────────────────────────────────────┤
│  EXPERIENCE — 4 roles (cards/timeline)   │
├─────────────────────────────────────────┤
│  SKILLS — grouped capability badges      │
├─────────────────────────────────────────┤
│  EDUCATION — 3 lines, clean              │
├─────────────────────────────────────────┤
│  CONTACT — CTA + social links            │
└─────────────────────────────────────────┘
```

---

## 4. Content Specification

### 4.1 Nav
- Left: `Alaa Azazi` (wordmark, links to #hero)
- Right: `About · Experience · Skills · Contact`
- Behavior: sticky on scroll; transparent→opaque transition on scroll; hamburger menu on mobile

### 4.2 Hero

| Field | Content |
|-------|---------|
| Name | **Alaa Azazi** |
| Title | Principal Software Engineer |
| Tagline | *Architecting large-scale distributed systems, data platforms, and cloud infrastructure at production scale.* |
| CTA primary | `View Experience` → scrolls to #experience |
| CTA secondary | `LinkedIn ↗` → opens linkedin.com/in/alaaazazi |
| Sub-line | `Calgary, AB · alaa.azazi@gmail.com · github.com/Azazi` |

**Visual treatment:** Full-viewport hero (100vh), large typographic name at display weight, title in lighter weight below it. One bold geometric accent element (e.g. an angled rule or a subtle grid motif). No photo required unless the owner chooses to add one.

### 4.3 About

> "I'm a Principal Software Engineer with 10+ years of experience building large-scale distributed systems and high-throughput data platforms. I specialize in distributed architecture, AWS cloud infrastructure, and engineering leadership — driving org-wide technical strategy, decomposing monoliths, and shipping systems that operate at massive scale. Currently at Datavant, where I lead teams building secure, interoperable health-data platforms processing 10B+ records per day."

*This is a starting draft; final copy to be refined during development.*

### 4.4 Experience

Display as a vertical timeline or stacked cards with company, title, dates, and 3 impact bullets max per role. Roles to include:

#### Role 1 — Datavant
| Field | Value |
|-------|-------|
| Title | Lead / Principal Software Engineer |
| Period | June 2023 – Present |
| Bullets | • Architected health-data connectivity platform processing **10B+ records/day** |
| | • Designed event-driven microservices (EKS + EventBridge): **10x throughput**, **70% latency reduction** |
| | • Led platform, ingestion, and infra teams; defined cross-org architecture standards and roadmaps |
| | • Reduced infrastructure cost by **40–50%** through architectural simplification and right-sizing |

#### Role 2 — Amazon Web Services
| Field | Value |
|-------|-------|
| Title | Tech Lead, Senior Software Engineer |
| Period | September 2021 – June 2023 |
| Bullets | • Owned architecture for AWS Migration Service pipelines analyzing **1M+ discovery data points** per assessment |
| | • Rebuilt assessment pipeline (Lambda, DynamoDB, Step Functions): **60% latency reduction**, **8x throughput** |
| | • Decomposed monolith into microservices; established SLO guidelines, API versioning, and chaos testing practices |

#### Role 3 — AppDirect
| Field | Value |
|-------|-------|
| Title | Staff Software Engineer |
| Period | January 2019 – August 2021 |
| Bullets | • Architected real-time distributed analytics platform powering low-latency dashboards at scale |
| | • Co-led ML infrastructure modernization into Kubernetes microservices: **150% model iteration velocity** improvement |
| | • Championed distributed systems best practices, observability, and CI/CD improvements |

#### Role 4 — VizworX / Physio4D *(condensed into one card)*
| Field | Value |
|-------|-------|
| Title | Software Engineer |
| Period | July 2015 – January 2019 |
| Bullets | • Built real-time facial recognition pipelines, AR tools (HoloLens/Unity), and interactive geospatial visualizations |
| | • Developed computer vision–based posture-tracking mobile application |

### 4.5 Skills

Grouped into labeled clusters, displayed as pill badges:

| Cluster | Items |
|---------|-------|
| **Architecture** | Distributed Systems · Microservices · Event-Driven Architecture · System Design · Scalability |
| **Cloud & Infra** | AWS · Kubernetes · EKS · Lambda · DynamoDB · EventBridge · Step Functions · Terraform · IaC |
| **Data** | Data Platforms · Kafka · Spark · Snowflake · PostgreSQL · MongoDB · ScyllaDB |
| **Engineering** | Reliability Engineering · CI/CD · API Gateway · Security & Compliance · SLO/SLA |
| **Languages** | Python · TypeScript · Node.js · Java |

*No tag cloud. Explicit grouping communicates depth and range without visual noise.*

### 4.6 Education

Single clean list, no awards, no timeline:

- **M.Sc. Computer Science** — University of Calgary, 2016 (GPA 4.0)
- **B.Sc. Computer Science & Mathematics** — University of Calgary, 2014 (Distinction)
- **Diploma, IT (Network Systems)** — SAIT, 2010 (GPA 4.0)

### 4.7 Contact

Short CTA section:

> "Open to new opportunities and engineering leadership conversations."

Links: `alaa.azazi@gmail.com` · `LinkedIn` · `GitHub`
Optional: `Download Resume` button (links to Resume.pdf in repo)

---

## 5. Design System

### 5.1 Aesthetic Direction

**Modern & bold.** Strong typographic hierarchy. Intentional use of a single accent color. Confident, spacious layout. The site should feel like it was designed with deliberate craft — not templated.

Reference points: Stripe Docs' clarity, Linear's confidence, Vercel's developer-credibility aesthetic.

### 5.2 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F8F9FA` | Card backgrounds, alternating sections |
| `--color-text-primary` | `#0D0D0D` | Headlines, body |
| `--color-text-secondary` | `#5C5C5C` | Dates, subtitles, meta |
| `--color-accent` | `#2563EB` | CTAs, links, active states, accent rule |
| `--color-accent-subtle` | `#EFF6FF` | Badge backgrounds |
| `--color-border` | `#E5E7EB` | Dividers, card borders |

*Rationale: White base reads as authoritative and professional to hiring-side audiences. Blue accent is a deliberate choice over trendier palettes — it signals trustworthiness at scale (AWS, LinkedIn, GitHub all agree). Single accent = discipline.*

### 5.3 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display (hero name) | Inter | 800 | clamp(3rem, 8vw, 6rem) |
| Heading 1 | Inter | 700 | 2.25rem |
| Heading 2 (section) | Inter | 600 | 1.5rem |
| Body | Inter | 400 | 1rem / 1.625 line-height |
| Label / badge | Inter | 500 | 0.8125rem |
| Mono (tech terms) | JetBrains Mono | 400 | 0.875rem |

Load via Google Fonts: `Inter` (400, 500, 600, 700, 800) + `JetBrains Mono` (400).
Use `font-display: swap` and `<link rel="preconnect">` for performance.

### 5.4 Spacing

8px base unit. Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
Max content width: `960px`, centered.
Section vertical padding: `96px` desktop / `64px` mobile.

### 5.5 Components

**Skill Badge:** rounded pill, `var(--color-accent-subtle)` background, `var(--color-accent)` text, 500 weight.
**Experience Card:** white background, 1px border, 8px border-radius, 32px padding, subtle hover shadow (`box-shadow` on hover, no animation for old-browser compat).
**CTA Button (primary):** `var(--color-accent)` fill, white text, 4px border-radius, 16px/32px padding, hover darkens 10%.
**CTA Button (secondary / outline):** transparent fill, `var(--color-accent)` border + text.
**Nav link:** no underline, `var(--color-text-secondary)` default, `var(--color-text-primary)` on hover/active.

### 5.6 Motion

Minimal. Only two animations:
1. `hero-fade-in`: opacity 0→1, translateY 16px→0, 600ms ease-out, on page load.
2. `section-reveal`: IntersectionObserver triggers opacity 0→1 + translateY 12px→0 for each section as it enters viewport. 400ms ease-out.

No parallax. No carousels. No scroll-triggered animations beyond the above.

---

## 6. Technical Specification

### 6.1 File Structure

```
azazi.github.io/
├── index.html              ← single page, all sections
├── css/
│   └── main.css            ← single stylesheet (custom properties + components)
├── js/
│   └── main.js             ← scroll behavior, mobile nav, section reveal
├── assets/
│   └── resume.pdf          ← resume download link target
├── img/
│   └── (photo, if added)
├── docs/
│   └── SPEC.md             ← this file
└── favicon.ico
```

All old HTML pages (`research.html`, `projects.html`, `publication.html`, `contact.html`, `teaching.html`) are removed. Old `css/` and `js/` directories are removed entirely (all ~20 legacy libraries discarded).

### 6.2 HTML Conventions

- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Each section has a unique `id` matching the nav anchor
- No inline styles; all styling via CSS custom properties
- `lang="en"` on `<html>`
- All external links: `rel="noopener noreferrer" target="_blank"`

### 6.3 CSS Conventions

- Single file, structured in layers: Reset → Custom Properties → Typography → Layout → Components → Sections → Utilities → Media Queries
- No CSS framework (no Bootstrap, no Tailwind)
- CSS custom properties for all design tokens
- Flexbox for nav and card layouts; CSS Grid for skills cluster
- Mobile-first media queries; single breakpoint at `768px` for desktop

### 6.4 JavaScript Conventions

- Vanilla JS, no dependencies, no transpilation
- `defer` attribute on script tag
- Responsibilities: (1) sticky nav scroll behavior, (2) mobile nav toggle, (3) IntersectionObserver for section reveal
- Total JS budget: < 5KB unminified

### 6.5 Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| First Contentful Paint | < 1.2s |
| Total page weight | < 200KB (excl. photo/resume) |
| Web fonts | Subset via Google Fonts `text=` param where possible |
| No render-blocking resources | All CSS in `<head>`, JS deferred |

### 6.6 Accessibility

- WCAG 2.1 AA minimum
- All interactive elements keyboard-navigable
- Skip-to-content link as first focusable element
- Color contrast ratio ≥ 4.5:1 for all text (the blue `#2563EB` on white passes at 5.9:1)
- `aria-label` on icon-only links
- `aria-current="page"` on active nav item (updates on scroll)
- Reduced-motion media query: disables all animations for `prefers-reduced-motion: reduce`

### 6.7 SEO

```html
<meta name="description" content="Alaa Azazi — Principal Software Engineer specializing in distributed systems, cloud infrastructure, and data platforms. Based in Calgary, AB.">
<meta property="og:title" content="Alaa Azazi — Principal Software Engineer">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<link rel="canonical" href="https://azazi.github.io/">
```

Retain existing `google-site-verification` meta tag.

---

## 7. Out-of-Scope / Future Considerations

| Item | Notes |
|------|-------|
| Dark mode toggle | Desirable for v2; CSS custom property structure must support it from day one (light/dark token sets) |
| Blog / writing | The single-page architecture can be extended to a second page without structural changes |
| Photo | Placeholder structure exists; can be added at any time |
| Analytics | Can add Plausible or Fathom (privacy-respecting) via a single `<script>` tag; no tracking in v1 |
| Resume PDF | The existing `Resume.pdf` in the repo can be linked; owner may swap it at any time |

---

## 8. Open Questions — RESOLVED

| # | Question | Resolution |
|---|----------|------------|
| OQ1 | LinkedIn vs resume title discrepancy | **Lead Software Engineer** — used on site |
| OQ2 | Include a professional photo? | **Yes** — B&W headshot provided; saved to `img/profile.jpg` |
| OQ3 | Active GitHub profile? | **Yes** — `github.com/Azazi` confirmed |
| OQ4 | Target role types? | Deduced from resume: Staff/Principal/Distinguished Engineer and engineering leadership (EM/Director) at scale-focused companies. Emphasis on distributed systems architecture, multi-team leadership, and quantified business impact (10B+ records/day, 40–50% infra cost reduction, etc.) |

---

## 9. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Google ranking signal loss from removing old pages | Old pages have no inbound links worth preserving; single-page will consolidate PageRank. Canonical URL is unchanged. |
| Old `github.io` URL may have stale Google cache showing academic content | Will resolve within weeks of republishing; can submit sitemap to Search Console to accelerate |
| Design taste subjectivity | Spec pins specific tokens and references; changes will be in CSS custom properties only, easy to adjust |
