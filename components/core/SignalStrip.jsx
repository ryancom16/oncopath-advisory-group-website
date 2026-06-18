import React from "react";

/**
 * Three-column positioning strip placed directly under a hero.
 * Cream ground, hairline grid dividers, strong label + supporting line.
 */
export function SignalStrip({ items = [], style, ...props }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${items.length || 3}, 1fr)`,
        gap: 1,
        background: "var(--cream)",
        borderBottom: "1px solid var(--line)",
        ...style,
      }}
      {...props}
    >
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,253,248,0.62)",
            minHeight: 118,
            padding: "28px clamp(18px,4vw,46px)",
          }}
        >
          <strong style={{ display: "block", fontSize: "1.02rem", color: "var(--navy-600)", marginBottom: 8 }}>
            {it.label}
          </strong>
          <span style={{ display: "block", color: "var(--text-body)" }}>{it.detail}</span>
        </div>
      ))}
    </div>
  );
}
