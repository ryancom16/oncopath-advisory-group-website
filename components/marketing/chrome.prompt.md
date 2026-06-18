Header and footer chrome for OncoPath pages.

```jsx
<SiteHeader active="Fellows" scrolled={false} />
<SiteFooter disclaimer="Sponsor support, when present, is disclosed. No CME credit is offered unless expressly stated through an accredited provider." />
```

- `SiteHeader`: fixed, translucent navy; pass `scrolled` (wire to a scroll listener) to solidify it. `active` brightens the current nav item.
- `SiteFooter`: pass a page-specific `disclaimer`; set `sponsorLink={false}` on resident/consulting pages where the sponsor link isn't wanted.
