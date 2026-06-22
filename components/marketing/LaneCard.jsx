import React from "react";

/**
 * Homepage lane card — top accent bar in the lane color, two-digit index,
 * heading, copy, and a quiet text link. Makes the offerings feel
 * related but distinct.
 */
export function LaneCard({ lane = "fellows", index, title, children, link, style, ...props }) {
  const accent = {
    fellows: "var(--brass-600)",
    residents: "var(--sage-600)",
    consulting: "var(--blue-600)",
    events: "var(--wine-600)",
    partner: "var(--wine-600)",
  }[lane];

  const [hover, setHover] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        boxShadow: hover ? "var(--shadow-raised)" : "var(--shadow-card)",
        overflow: "hidden",
        transition: "box-shadow var(--dur) var(--ease), transform var(--dur) var(--ease)",
        transform: hover ? "translateY(-2px)" : "none",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
      {...props}
    >
      <div style={{ height: 6, background: accent }} />
      <div style={{ padding: 30, display: "flex", flexDirection: "column", flex: 1 }}>
        {index != null && (
          <span style={{ fontSize: "0.76rem", fontWeight: 900, color: accent, marginBottom: 32 }}>{index}</span>
        )}
        <h3 style={{ font: "var(--display-3)", fontSize: "1.5rem", color: "var(--navy-600)", margin: "0 0 12px" }}>
          {title}
        </h3>
        <p style={{ font: "var(--body)", color: "var(--text-body)", margin: "0 0 20px", flex: 1 }}>{children}</p>
        {link && (
          <a
            href={link.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: accent,
              fontSize: "0.92rem",
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            {link.label}
          </a>
        )}
      </div>
    </article>
  );
}
