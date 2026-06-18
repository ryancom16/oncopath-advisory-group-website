import React from "react";

/**
 * Small label tag — pill or square. Used for status ("Limited seats"),
 * disclosure ("Sponsor-supported"), or lane markers.
 */
export function Tag({ lane = "neutral", shape = "pill", children, style, ...props }) {
  const palette = {
    fellows: ["var(--brass-200)", "var(--brass-700)"],
    residents: ["var(--sage-100)", "var(--sage-700)"],
    consulting: ["var(--blue-100)", "var(--blue-700)"],
    partner: ["var(--wine-100)", "var(--wine-700)"],
    neutral: ["var(--cream)", "var(--navy-600)"],
  };
  const [bg, fg] = palette[lane] || palette.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: bg,
        color: fg,
        fontFamily: "var(--font-body)",
        fontSize: "0.74rem",
        fontWeight: 700,
        letterSpacing: "0.02em",
        padding: "5px 11px",
        borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-sm)",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
