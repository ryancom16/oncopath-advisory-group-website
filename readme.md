# OncoPath Advisory Group — Design System

A premium, compliance-conscious brand system for **OncoPath Advisory Group**, a physician-led oncology and hematology education, community, and consulting brand.

> **OncoPath means _Path to Cure_** — not pathology. The name points toward progress in cancer care: education, mentorship, clinical judgment, research, and better paths through oncology and hematology.

This project IS the design system. An automated compiler reads it and ships a token library + React components to consuming projects. Use it to build any OncoPath surface — websites, one-pagers, decks, registration flows — on-brand.

---

## 1. Company & product context

OncoPath Advisory Group is an umbrella, physician-led advisory group with **three public lanes** plus one direct-link partner surface:

| Lane | Audience | Emotional temperature | Identity color |
| --- | --- | --- | --- |
| **Fellows Exchange** | Heme-onc fellows | Warm, social, energizing — "a curated room after a long clinical day" | Brass |
| **Resident Pathways** | Residents considering heme-onc / seeking oncology literacy | Exploratory, developmental, mentorship-forward | Sage |
| **Consulting Services** | Healthcare orgs, med-ed teams, advisory-board planners | Restrained, executive, trust-signalled | Clinical blue |
| **Sponsor / Partner** (direct-link) | Pharma/biotech sponsors, recruiters, compliance counsel | Operational, compliance-conscious, not marketing | Burgundy |

The first live product is the **OncoPath Fellows Exchange**, a Chicago pilot dinner series (6:30–8:30 PM) for focused clinical discussion, peer connection, mentorship, practical career learning, and carefully scoped sponsor-supported education.

**Critical principle: pages must feel distinct.** Each lane should differ in layout, section sequence, density, imagery, iconography, CTAs, and visual motif — while staying one coherent OncoPath brand. A visitor should immediately sense when they have moved from community → exploration → consulting → partner inquiry. Do not reuse the same hero + two-column + card-grid + timeline + form rhythm on every page.

**Sponsor/pharma material lives only on the direct-link partner page.** Internal operating instructions and compliance playbooks never appear on trainee-facing pages.

### Quad cancer-care specialty framework (future flexibility)

Long-term, OncoPath is built to span the full **quad** of cancer-care specialties — the brand, lane architecture, and copy should stay flexible enough to add these without rework:

1. Medical oncology / hematology
2. Radiation oncology
3. Surgical oncology
4. Oncology-focused pathology / diagnostics

**The MVP does NOT broaden the first event.** The first OncoPath Fellows Exchange remains a Chicago **hematology-oncology fellows** dinner — keep it narrow, simple, and credible. Use the subspecialty-generic framing only at the umbrella level (e.g. the homepage Fellows lane describes the broader subspecialty community); event-specific pages stay heme-onc. Do not imply a multi-specialty program exists before it does, and do not promise national rollout.

### Hero imagery treatment

Each page should have a **distinct hero** — ideally its own photograph (Home: umbrella advisory; Fellows: warm dinner/community; Residents: mentorship/training; Consulting: executive advisory/clinical review; Partner: operational resource-table feel). The current build ships ONE source photo (`assets/imagery/oncopath-hero.png`) and differentiates pages via the `Hero` component's `focus` (crop) + lane color-wash. **This is interim — replace with real distinct photography per page when available.** Imagery rules still hold: no identifiable people, logos, drug, or patient imagery.

## 2. Sources

This system was derived from a first-build website and product docs (read-only, mounted locally — reader may not have access):

- `oncopath-advisory-group-site/` — local first-build codebase (5 HTML pages + `styles.css` + `script.js`)
  - `index.html`, `fellows.html`, `residents.html`, `consulting.html`, `sponsor.html`
  - `assets/oncopath-hero.png` — editorial private-dining-room hero photograph
  - `docs/VISION_AND_MVP.md` — founder vision, MVP scope, agenda, compliance architecture
  - `claude-design-brief.md` — the brand & page-differentiation brief
- The compliance guardrails and copy do/don't lists below are distilled from the brief + vision doc.

## 3. Content fundamentals (voice & copy)

**Voice:** calm, credible, physician-led, editorial. Reads like a thoughtful academic-medicine invitation, never like SaaS marketing or a sales dinner.

- **Person:** Mostly third-person about the brand ("OncoPath Advisory Group exists to…", "The format is intentionally smaller…"). Shifts to gentle second person in CTAs and forms ("Tell us what would help you explore oncology", "Share a few details"). Never "we crush it" hype.
- **Casing:** Sentence case for headlines and body. **Eyebrows are the exception** — short uppercase labels ("MISSION", "WHAT TO EXPECT", "SERVICE LINES"). Headlines often end in a period, like editorial decks ("A better room for early-career oncology learning.").
- **Tone:** Warm but restrained. Concrete over abstract — "one useful topic, a thoughtful room, strong peer conversation" beats "world-class networking." Hospitality warmth on Fellows; developmental encouragement on Residents; quiet authority on Consulting; precise operational language on Partner.
- **Emoji:** Never. No exclamation hype. Unicode/em-dashes and periods only.
- **Numbers/indices:** Card grids use two-digit indices (`01`, `02`, …) in burgundy — a recurring editorial device, not decorative stats. Avoid invented metrics/data slop.
- **Sentence length:** Medium. One idea per sentence. Lists are parallel and scannable.

**Example phrases (on-voice):**
> "A better room for early-career oncology learning."
> "Programming guided by clinicians who understand fellowship training and oncology practice."
> "Each engagement should clarify the clinical question, intended audience, permitted use, confidentiality requirements, and deliverables."

### Copy guardrails (COMPLIANCE — always enforce)

**Do say:** OncoPath means Path to Cure · physician-led · educational · transparent · compliance-conscious · sponsor-supported learning where appropriate · board-certified and licensed medical oncologists and hematologists · aggregated and anonymized feedback · subject to legal, clinical, institutional, and compliance review where appropriate.

**Never say:** OncoPath means pathology · pharma gets access to fellows · sponsors influence prescribing · attendees will prescribe more · CME credit is available (unless an accredited CME provider is explicitly partnered) · patient or prescribing data will be shared · website inquiries create a physician-patient relationship · national rollout is guaranteed.

Footers carry quiet disclaimers (no CME unless accredited; inquiries don't create a physician-patient relationship; engagements scoped separately). Keep them small and factual.

## 4. Visual foundations

**Overall feel:** premium editorial medical-hospitality. Think a private dining room, candlelight, warm wood, deep navy walls — credible and human, never flashy.

- **Color:** Deep navy (`--navy-900 #061723`) anchors. Warm ivory/cream paper (`--paper #fffdf8`, `--cream #f7f1e7`) for light sections. Four accents, each owning a lane: **brass** (fellows/CTA), **sage** (residents), **clinical blue** (consulting/links), **restrained burgundy** (partner/indices). Use 1–2 accents per page max so lanes stay legible. No purple, no SaaS gradients.
- **Type:** Display serif **Newsreader** set tight (line-height 0.95–1.08), weight ~520–540 — large, editorial, confident. Body/UI sans **Libre Franklin**. Eyebrows are uppercase bold Libre Franklin in the lane color. Strong serif/sans contrast is the core typographic motif.
- **Backgrounds:** Mostly flat warm/ivory or flat navy. **One signature image** — the private-dining hero — used full-bleed behind a left-to-right navy gradient scrim (`linear-gradient(90deg, navy 0.98 → navy 0.26)`) so white text stays legible. No repeating patterns, no textures, no decorative gradients elsewhere.
- **Layout:** Centered container (`--container-max 1180px`), fluid section padding (`clamp(68px,9vw,128px)`). Fixed translucent navy header (`rgba(6,23,35,0.9)`) that solidifies + gains shadow on scroll. Asymmetric two-column splits (`0.95fr / 1fr`). A three-column **signal strip** under heroes with hairline dividers.
- **Cards:** White (or faintly tinted `#fbf7ef` / `#f1f6f4` on alternating children), `--radius 8px`, 1px hairline border, soft low shadow (`0 14px 40px rgba(19,43,53,0.06)`). Generous padding (~28px). Restrained — never neon, never rounded-pill, never left-accent-border-only.
- **Corner radius:** Tight and consistent — 8px on cards/buttons/fields/panels; 999px reserved only for small numbered timeline dots and tags.
- **Shadows:** Soft, low, warm/navy-tinted. Cards barely lift; the header and floating forms lift more. No hard or colored glows.
- **Borders:** Hairlines everywhere (`rgba(19,43,53,0.14)` on light; `rgba(255,255,255,0.14)` on dark). Dividers, card outlines, and section tops use them.
- **Buttons:** 8px radius, 48px min height, bold (`800`) sans label. Primary = brass on near-black text; secondary = translucent white with hairline border on dark. Hover lifts 1px and lightens the fill — never shrinks.
- **Animation:** Minimal and tasteful. 160–180ms ease transitions on color/transform/opacity. Header background fade on scroll; button 1px lift; nav opacity. No bounces, no infinite loops, no parallax.
- **Hover/press:** Hover lightens fills (brass `#b88d4a → #cba15d`), raises opacity (nav links `.86 → 1`), or lifts 1px. Links: clinical blue, underline with 4px offset. Focus: 3px translucent blue ring + blue border on fields.
- **Imagery rules:** Editorial medical-hospitality only — private professional dining room, small-group education. **No identifiable people, no logos, no drug imagery, no patient imagery, no cartoon medical illustration.** Warm, dim, candlelit color temperature with deep navy shadow.
- **Transparency/blur:** Used on the navy hero scrims and the header. Translucent white panels (`rgba(255,255,255,0.06)`) on deep navy sections for "boundary"/detail panels.

## 5. Iconography

See the **ICONOGRAPHY** section below.

## 6. Index / manifest

**Root**
- `styles.css` — global entry (import-only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
- `assets/imagery/` — `oncopath-hero.png` (private-dining hero)
- `assets/brand/` — logo lockups & wordmark
- `SKILL.md` — Agent-Skill entry for downloadable use

**Foundation specimen cards** (Design System tab): `guidelines/*.card.html` — colors, type, spacing, brand.

**Components** (`components/`, namespace `window.OncoPathDesignSystem_1b0a1a`):
- `core/` — `Button`, `Eyebrow`, `Card`, `Tag`, `SignalStrip`
- `forms/` — `Field`, `Select`, `Textarea`
- `marketing/` — `Hero`, `PrincipleCard`, `TimelineStep`, `LaneCard`, `SiteHeader`, `SiteFooter`

**UI kit** (`ui_kits/website/`) — high-fidelity click-through recreation of the four public lanes + partner page.

### ICONOGRAPHY

The first build used **no icon set at all** — its visual language is type-led: uppercase eyebrows, two-digit numeric indices (`01`–`07`), and numbered circular timeline dots. That restraint is itself the brand's iconographic stance: **prefer numerals, labels, and typographic markers over pictographic icons.** No emoji. No decorative SVG illustration.

Where a small functional icon is genuinely needed (nav toggle, form affordances, list checks, directional arrows), use **[Lucide](https://lucide.dev)** via CDN — a thin (1.5–2px) line set whose restrained, clinical weight matches the brand. Keep them small, monochrome (inherit `currentColor`), and sparse — never fill a grid with decorative icons. Lane accent color may tint a single meaningful icon. The numbered-index and timeline-dot devices remain the primary "iconography" and should be reached for first.

> CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or inline `<i data-lucide="arrow-right"></i>`.
