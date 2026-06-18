import React from "react";

/**
 * Labeled text input. Label is bold sans above the field.
 * Focus shows a 3px translucent blue ring + blue border.
 */
export function Field({ label, type = "text", hint, style, ...props }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "grid", gap: 8, fontFamily: "var(--font-body)" }}>
      <span style={{ fontSize: "0.86rem", fontWeight: 800, color: "rgba(19,43,53,0.82)" }}>{label}</span>
      <input
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: "var(--body)",
          background: "var(--paper)",
          color: "var(--navy-600)",
          border: `1px solid ${focus ? "var(--blue-600)" : "rgba(19,43,53,0.18)"}`,
          borderRadius: "var(--radius)",
          minHeight: "var(--field-min-h)",
          padding: "12px 13px",
          width: "100%",
          outline: focus ? "3px solid rgba(43,111,136,0.15)" : "none",
          ...style,
        }}
        {...props}
      />
      {hint && <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{hint}</span>}
    </label>
  );
}
