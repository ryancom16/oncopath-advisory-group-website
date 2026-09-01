# OncoPath — production static site

A clean, portable, multi-page static website. No build step, no framework — just HTML + one CSS file + a small JS file. Easy to host anywhere and to port to Framer or Webflow.

## Pages
- `index.html` — umbrella homepage (served at `/site/`)
- `fellows/` — evergreen Fellows Exchange community + compact event preview + link to Events requests
- `residents/` — Resident Pathways + compact event preview + link to Events requests
- `events/` — data-driven event list with expandable details and event-specific request form
- `consulting/` — Consulting services + inquiry form
- `partners/` — Sponsorship overview and partner support page
- `sponsor-inquiry/` — sponsor-specific intake handoff

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

Home and Partners use the shared `assets/imagery/oncopath-hero.png`. To re-crop any
hero, edit its `background-position` in the `.hero--<page>` rule in `styles.css`.

**Imagery rules:** editorial medical-hospitality only — no identifiable people,
logos, drug imagery, or patient imagery.

## Forms
Event and general inquiry forms are routed through `form-destinations.js`. The
sponsor lane has its own destination so sponsor submissions can be managed
separately from consulting inquiries. Public navigation uses clean directory
URLs; the legacy `.html` pages remain as backwards-compatible copies. Do not
collect patient-identifying information through any public form.
