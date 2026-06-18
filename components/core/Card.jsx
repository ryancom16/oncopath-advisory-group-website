import React from "react";

/**
 * Surface card — white (or tinted), 8px radius, hairline border, soft low shadow.
 * The base container for OncoPath content blocks.
 */
export function Card({ tint = "white", elevated = true, children, style, ...props }) {
  const backgrounds = {
    white: "#fff",
    cream: "#fbf7ef",
    sage: "#f1f6f4",
    mist: "var(--mist)",
  };
  return (
    <div
      style={{
        background: backgrounds[tint] || "#fff",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        boxShadow: elevated ? "var(--shadow-card)" : "none",
        padding: 28,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
