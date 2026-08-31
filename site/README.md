# OncoPath — production static site

A clean, portable, multi-page static website. No build step, no framework — just HTML + one CSS file + a small JS file. Easy to host anywhere and to port to Framer or Webflow.

## Pages
- `index.html` — umbrella homepage (Fellows / Residents / Events / Consulting lanes)
- `fellows.html` — evergreen Fellows Exchange community + compact event preview + link to Events requests
- `residents.html` — Resident Pathways + compact event preview + link to Events requests
- `events.html` — data-driven event list with expandable details and event-specific request form
- `consulting.html` — Consulting services + inquiry form
- `sponsor.html` — direct-link Sponsorship overview (not in the main nav)
- `sponsor-inquiry.html` — sponsor-specific intake handoff (not in the main nav)

## Files
- `styles.css` — self-contained styles (tokens + components mirror the design system)
- `script.js` — header scroll state, mobile nav, form confirmation messages
- `events-data.js` — single source of truth for public event rows, compact event previews, and event dropdowns

## Hero images — add these before launch
Each page's hero references a page-specific photo and falls back to the shared
dining photo until you add the real file. Drop these into `../assets/imagery/`:

| Page | Expected file | Suggested subject |
| --- | --- | --- |
| Fellows | `assets/imagery/hero-fellows.png` | warm private-dining / community |
| Events | `assets/imagery/hero-events.png` | overhead private-dining / event requests |
| Residents | `assets/imagery/hero-residents.png` | mentorship / study / exploration |
| Consulting | `assets/imagery/hero-consulting.png` | executive advisory / clinical review |

Home and Sponsor use the shared `assets/imagery/oncopath-hero.png`. To re-crop any
hero, edit its `background-position` in the `.hero--<page>` rule in `styles.css`.

**Imagery rules:** editorial medical-hospitality only — no identifiable people,
logos, drug imagery, or patient imagery.

## Forms
Event and general inquiry forms are routed through `form-destinations.js`. The
sponsor lane has its own destination so sponsor submissions can be managed
separately from consulting inquiries. Do not collect patient-identifying
information through any public form.
