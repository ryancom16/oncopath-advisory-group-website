import React from "react";

/**
 * Numbered principle / offering card for a 3-column grid.
 * Two-digit burgundy index, sans heading, supporting copy, optional link.
 */
export function PrincipleCard({ index, title, children, link, tint = "white", style, ...props }) {
  const backgrounds = { white: "#fff", cream: "#fbf7ef", sage: "#f1f6f4" };
  return (
    <article
      style={{
        background: backgrounds[tint] || "#fff",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow-card)",
        padding: 28,
        minHeight: 210,
        ...style,
      }}
      {...props}
    >
      {index != null && (
        <span style={{ display: "block", fontSize: "0.76rem", fontWeight: 900, color: "var(--wine-600)", marginBottom: 42 }}>
          {index}
        </span>
      )}
      <h3 style={{ font: "var(--heading-card)", color: "var(--navy-600)", margin: "0 0 10px" }}>{title}</h3>
      <p style={{ font: "var(--body)", color: "var(--text-body)", margin: 0 }}>{children}</p>
      {link && (
        <a
          href={link.href}
          style={{
            display: "inline-flex",
            color: "var(--blue-600)",
            fontSize: "0.92rem",
            fontWeight: 900,
            marginTop: 14,
            textDecoration: "underline",
            textUnderlineOffset: 4,
          }}
        >
          {link.label}
        </a>
      )}
    </article>
  );
}
