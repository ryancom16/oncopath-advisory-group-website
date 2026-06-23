// Shared chrome + section helpers for the OncoPath website UI kit.
// Recreates the real multi-page site as a click-through SPA.
const { useState, useEffect } = React;

const NAV = [
  { key: "home", label: "Home" },
  { key: "fellows", label: "Fellows" },
  { key: "residents", label: "Residents" },
  { key: "events", label: "Events" },
  { key: "consulting", label: "Consulting" },
];

const HERO_IMG = "../../assets/imagery/oncopath-hero.png";
// Page-specific hero photos — drop these files in to override the shared photo.
const HERO_FELLOWS = "../../assets/imagery/hero-fellows.png";
const HERO_EVENTS = "../../assets/imagery/hero-events.png";
const HERO_RESIDENTS = "../../assets/imagery/hero-residents.png";
const HERO_CONSULTING = "../../assets/imagery/hero-consulting.png";

// SPA header — visually identical to SiteHeader but switches screens on click.
function KitHeader({ screen, go, scrolled }) {
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 20,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        minHeight: 72, padding: "14px clamp(18px,5vw,48px)",
        background: scrolled ? "rgba(6,23,35,0.96)" : "rgba(6,23,35,0.9)",
        boxShadow: scrolled ? "var(--shadow-header)" : "none",
        backdropFilter: "saturate(120%) blur(2px)",
        color: "#fff",
        transition: "background var(--dur) var(--ease), box-shadow var(--dur) var(--ease)",
      }}
    >
      <button onClick={() => go("home")} style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 0 }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, background: "var(--paper)", color: "var(--navy-900)", fontWeight: 800, fontSize: "0.78rem" }}>OP</span>
        <span style={{ fontWeight: 700, fontSize: "0.98rem", fontFamily: "var(--font-body)" }}>OncoPath Advisory Group</span>
      </button>
      <nav style={{ display: "flex", alignItems: "center", gap: "clamp(18px,3vw,32px)", fontSize: "0.9rem", fontWeight: 700 }}>
        {NAV.map((n) => (
          <button key={n.key} onClick={() => go(n.key)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", opacity: screen === n.key ? 1 : 0.86, fontWeight: 700, fontFamily: "var(--font-body)", fontSize: "0.9rem", padding: "4px 0", borderBottom: screen === n.key ? "2px solid var(--brass-600)" : "2px solid transparent" }}>
            {n.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

// Section wrapper with the brand's fluid padding + container.
function Section({ bg = "white", children, id }) {
  const grounds = { white: "var(--paper)", cream: "var(--cream)", deep: "var(--navy-900)" };
  return (
    <section id={id} style={{ background: grounds[bg], color: bg === "deep" ? "#fff" : "var(--navy-600)", padding: "var(--section-pad-y) var(--section-pad-x)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--container-max)" }}>{children}</div>
    </section>
  );
}

function SectionHeading({ eyebrow, lane, title, children, max = 790 }) {
  const { Eyebrow } = window.OncoPathDesignSystem_1b0a1a;
  return (
    <div style={{ maxWidth: max, marginBottom: "clamp(34px,5vw,58px)" }}>
      {eyebrow && <Eyebrow lane={lane}>{eyebrow}</Eyebrow>}
      <h2 style={{ font: "var(--display-2)", margin: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

// Two-column asymmetric split (0.95fr / 1fr).
function TwoColumn({ left, right }) {
  return (
    <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

// Translucent boundary panel for deep-navy sections.
function BoundaryPanel({ heading, items }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--line-on-dark)", borderRadius: "var(--radius)", padding: "clamp(26px,4vw,42px)" }}>
      <h3 style={{ color: "var(--brass-200)", margin: "0 0 22px", font: "var(--heading-card)" }}>{heading}</h3>
      <ul style={{ display: "grid", gap: 16, listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ borderBottom: i < items.length - 1 ? "1px solid var(--line-on-dark)" : "none", paddingBottom: i < items.length - 1 ? 16 : 0, display: "grid", gap: 6 }}>
            <strong style={{ color: "var(--brass-200)", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>{it.label}</strong>
            <span style={{ color: "var(--text-on-dark-soft)" }}>{it.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Submit-to-confirm form shell used by every lane.
function InquiryForm({ children, cta, message }) {
  const { Button } = window.OncoPathDesignSystem_1b0a1a;
  const [status, setStatus] = useState("");
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); const name = new FormData(e.target).get("name") || "there"; setStatus(message(name)); }}
      style={{ background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-raised)", display: "grid", gap: 18, padding: "clamp(24px,4vw,34px)" }}
    >
      {children}
      <Button type="submit">{cta}</Button>
      <p role="status" aria-live="polite" style={{ color: "var(--text-body)", fontSize: "0.92rem", margin: 0, minHeight: 22 }}>{status}</p>
    </form>
  );
}

function eventOptionsForLane(lane) {
  const events = window.ONCOPATH_EVENTS || [];
  const list = events.filter((event) => !lane || event.lanes?.includes(lane));
  return list.map((event) => event.title).concat(["A future OncoPath event"]);
}

function EventCompactList({ lane, flush = false }) {
  const events = (window.ONCOPATH_EVENTS || []).filter((event) => event.lanes?.includes(lane));
  if (!events.length) {
    return <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>New events are being planned. Check back soon.</p>;
  }

  return (
    <div style={{ display: "grid", gap: 10, marginTop: flush ? 0 : 22 }}>
      {events.map((event) => (
        <button
          key={event.id}
          type="button"
          onClick={() => window.location.hash = "events"}
          style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, alignItems: "center", textAlign: "left", background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-card)", padding: "14px 18px", cursor: "pointer", font: "inherit" }}
        >
          <span style={{ display: "grid", gap: 2, minWidth: 96 }}>
            <span style={{ color: "var(--brass-600)", fontSize: "0.68rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em" }}>{event.dateTag}</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.76rem", fontWeight: 600 }}>{event.city}</span>
          </span>
          <span style={{ color: "var(--navy-600)", fontWeight: 700, fontSize: "0.98rem", minWidth: 0 }}>{event.title}</span>
          <span style={{ display: "inline-flex", alignItems: "center", padding: "4px 10px", borderRadius: "var(--radius-pill)", background: event.status === "Limited seats" ? "var(--brass-200)" : "var(--blue-100)", color: event.status === "Limited seats" ? "var(--wine-700)" : "var(--blue-600)", fontSize: "0.74rem", fontWeight: 800, whiteSpace: "nowrap" }}>{event.status}</span>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { NAV, HERO_IMG, HERO_FELLOWS, HERO_EVENTS, HERO_RESIDENTS, HERO_CONSULTING, KitHeader, Section, SectionHeading, TwoColumn, BoundaryPanel, InquiryForm, eventOptionsForLane, EventCompactList });
