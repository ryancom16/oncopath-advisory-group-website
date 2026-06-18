# OncoPath Website — UI kit

A high-fidelity, click-through recreation of the OncoPath Advisory Group public site, built entirely from the design-system components (`window.OncoPathDesignSystem_1b0a1a`).

## Surfaces

| Screen | File | Lane / temperature | Distinct motif |
| --- | --- | --- | --- |
| Home | `HomeScreen.jsx` | Brass · umbrella | Three lane cards with top accent bars |
| Fellows Exchange | `FellowsScreen.jsx` | Brass · warm, social | Event snapshot panel + 4-step evening agenda |
| Residents | `ResidentsScreen.jsx` | Sage · exploratory | Connected horizontal **pathway** (not the dinner timeline) |
| Consulting | `ConsultingScreen.jsx` | Blue · executive | Quiet **services ledger** rows + scope checklist |
| Sponsor / Partner | `PartnerScreen.jsx` | Burgundy · operational | Direct-link only (floating affordance, footer link) — never in main nav |

`shared.jsx` holds the SPA chrome (`KitHeader`, `Section`, `TwoColumn`, `BoundaryPanel`, `InquiryForm`). `App.jsx` wires the router, scroll-aware header, and per-page footer disclaimers.

## Run

Open `index.html`. Loads React 18 UMD + Babel + `_ds_bundle.js`, then the screen scripts. Nav switches screens; forms submit to an in-page confirmation; the burgundy floating button opens the direct-link Partner page.

## Page differentiation principle

Each lane intentionally varies layout, section sequence, density, accent color, and CTA so a visitor immediately senses moving from community → exploration → consulting → partner inquiry — while staying one coherent OncoPath brand. Sponsor/compliance material lives only on the Partner surface.
