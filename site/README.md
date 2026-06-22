# OncoPath — production static site

A clean, portable, multi-page static website. No build step, no framework — just HTML + one CSS file + a small JS file. Easy to host anywhere and to port to Framer or Webflow.

## Pages
- `index.html` — umbrella homepage (Fellows / Residents / Events / Consulting lanes)
- `fellows.html` — evergreen Fellows Exchange community + interest form
- `residents.html` — Resident Pathways + interest form
- `events.html` — event list by city/date with inline event details and event-specific registration
- `consulting.html` — Consulting services + inquiry form
- `sponsor.html` — direct-link Sponsor / Partner inquiry (not in the main nav)

## Files
- `styles.css` — self-contained styles (tokens + components mirror the design system)
- `script.js` — header scroll state, mobile nav, form confirmation messages

## Hero images — add these before launch
Each page's hero references a page-specific photo and falls back to the shared
dining photo until you add the real file. Drop these into `../assets/imagery/`:

| Page | Expected file | Suggested subject |
| --- | --- | --- |
| Fellows | `assets/imagery/hero-fellows.png` | warm private-dining / community |
| Residents | `assets/imagery/hero-residents.png` | mentorship / study / exploration |
| Consulting | `assets/imagery/hero-consulting.png` | executive advisory / clinical review |

Home and Sponsor use the shared `assets/imagery/oncopath-hero.png`. To re-crop any
hero, edit its `background-position` in the `.hero--<page>` rule in `styles.css`.

**Imagery rules:** editorial medical-hospitality only — no identifiable people,
logos, drug imagery, or patient imagery.

## Forms
Forms are front-end only (they show a confirmation message). Wire them to Luma,
Fillout, Airtable, or Framer for real capture — each `<form>` carries a
`data-form-kind` attribute you can route on.
