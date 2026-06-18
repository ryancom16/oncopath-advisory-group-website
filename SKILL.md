---
name: oncopath-design
description: Use this skill to generate well-branded interfaces and assets for OncoPath Advisory Group (a physician-led oncology & hematology education, community, and consulting brand — "Path to Cure"), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — link this one file to get all tokens + fonts. It `@import`s `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `guidelines/*.card.html` — foundation specimens (colors, type, spacing, brand).
- `components/{core,forms,marketing}/` — reusable React components (namespace `window.OncoPathDesignSystem_1b0a1a`).
- `ui_kits/website/` — full click-through recreation of the public site (Home, Fellows, Residents, Consulting, Partner).
- `assets/brand/` — logo lockups; `assets/imagery/` — the private-dining hero photo.

## Non-negotiables
- **OncoPath = Path to Cure**, never pathology.
- Four lanes, four accents: **brass** (Fellows/CTA), **sage** (Residents), **clinical blue** (Consulting/links), **restrained burgundy** (Partner/indices). 1–2 accents per page.
- Display serif **Newsreader** (tight, ~520–540 weight) + body sans **Libre Franklin**. Uppercase lane-colored eyebrows are the signature device.
- Premium editorial medical-hospitality. No SaaS gradients, no purple, no emoji, no cartoon medical illustration. Imagery: private dining / small-group education only — no identifiable people, logos, drug, or patient imagery.
- Enforce the compliance copy guardrails in `readme.md` (the "Do say / Never say" lists). Sponsor/pharma material lives only on the direct-link Partner surface.
