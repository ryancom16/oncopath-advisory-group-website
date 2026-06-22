# OncoPath Website - UI kit

A high-fidelity, click-through recreation of the OncoPath Advisory Group public site, built entirely from the design-system components (`window.OncoPathDesignSystem_1b0a1a`).

## Surfaces

| Screen | File | Lane / temperature | Distinct motif |
| --- | --- | --- | --- |
| Home | `HomeScreen.jsx` | Brass / umbrella | Four lane cards with top accent bars |
| Fellows Exchange | `FellowsScreen.jsx` | Brass / warm, social | Evergreen community model + compact event strip + request form |
| Residents | `ResidentsScreen.jsx` | Sage / exploratory | Connected horizontal pathway + compact event strip |
| Events | `EventsScreen.jsx` | Brass / operational | Scalable event rows with expandable per-event details |
| Consulting | `ConsultingScreen.jsx` | Blue / executive | Quiet services ledger rows + scope checklist |
| Sponsor / Partner | `PartnerScreen.jsx` | Burgundy / operational | Direct-link only, never in main nav |

`shared.jsx` holds the SPA chrome (`KitHeader`, `Section`, `TwoColumn`, `BoundaryPanel`, `InquiryForm`). `App.jsx` wires the router, scroll-aware header, and per-page footer disclaimers.

## Run

Open `index.html`. Loads React 18 UMD + Babel + `_ds_bundle.js`, then the screen scripts. Nav switches screens; forms submit to an in-page confirmation; the burgundy floating button opens the direct-link Partner page.

## Page differentiation principle

Each lane intentionally varies layout, section sequence, density, accent color, and CTA so a visitor immediately senses moving from community to exploration to events to consulting to partner inquiry while staying one coherent OncoPath brand. Events is the source of truth for city/date-specific programming; timing, evening flow, status, compact page strips, and dropdown choices derive from event records rather than standalone schedule sections. Sponsor/compliance material lives only on the Partner surface.
