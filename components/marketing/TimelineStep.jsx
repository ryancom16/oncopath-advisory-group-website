import React from "react";

/**
 * Agenda / request timeline step — numbered sage dot, time/label heading, copy.
 * Use in a 4-column grid for the evening agenda or request flow.
 */
export function TimelineStep({ step, title, children, style, ...props }) {
  return (
    <article
      style={{
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        padding: 26,
        minHeight: 260,
        ...style,
      }}
      {...props}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "var(--radius-pill)",
          background: "var(--sage-600)",
          color: "#fff",
          fontWeight: 900,
          marginBottom: 44,
        }}
      >
        {step}
      </span>
      <h3 style={{ font: "var(--heading-card)", color: "var(--navy-600)", margin: "0 0 10px" }}>{title}</h3>
      <p style={{ font: "var(--body)", color: "var(--text-body)", margin: 0 }}>{children}</p>
    </article>
  );
}
