import React from "react";

/** Labeled multiline textarea. Matches Field styling. */
export function Textarea({ label, rows = 4, style, ...props }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "grid", gap: 8, fontFamily: "var(--font-body)" }}>
      <span style={{ fontSize: "0.86rem", fontWeight: 800, color: "rgba(19,43,53,0.82)" }}>{label}</span>
      <textarea
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: "var(--body)",
          background: "var(--paper)",
          color: "var(--navy-600)",
          border: `1px solid ${focus ? "var(--blue-600)" : "rgba(19,43,53,0.18)"}`,
          borderRadius: "var(--radius)",
          minHeight: 120,
          padding: "12px 13px",
          width: "100%",
          resize: "vertical",
          outline: focus ? "3px solid rgba(43,111,136,0.15)" : "none",
          ...style,
        }}
        {...props}
      />
    </label>
  );
}
