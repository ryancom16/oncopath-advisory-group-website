Brass-filled primary action; use for "Join Interest List", "Request a Seat", "Request Consultation", and lane CTAs.

```jsx
<Button as="a" href="#interest">Join Interest List</Button>
<Button lane="residents" as="a" href="#interest">Join Interest List</Button>
<Button variant="secondary">View Upcoming Events</Button>
<Button variant="ghost" size="sm">View Services</Button>
<Button variant="quiet">Explore Fellows Exchange</Button>
```

- `variant`: `primary` (brass, default) · `secondary` (translucent white, for dark heroes) · `ghost` (outline on light) · `quiet` (underlined blue text link).
- `lane`: tints a primary button with the lane accent — `fellows` (brass), `residents` (sage), `consulting`/`partner`.
- Hover lifts 1px + lightens fill. Never put more than one primary per action cluster.
