import React from "react";

/**
 * Uppercase eyebrow label — the signature OncoPath section marker.
 * Colored by lane; sits above display headings.
 */
export function Eyebrow({ lane = "fellows", children, style, ...props }) {
  const color = {
    fellows: "var(--brass-600)",
    residents: "var(--sage-600)",
    consulting: "var(--blue-600)",
    partner: "var(--wine-600)",
    warm: "var(--brass-200)",
    neutral: "var(--text-muted)",
  }[lane] || "var(--brass-600)";

  return (
    <p
      style={{
        font: "var(--eyebrow)",
        letterSpacing: "var(--eyebrow-tracking)",
        textTransform: "uppercase",
        color,
        margin: "0 0 16px",
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
