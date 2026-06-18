import React from "react";

/**
 * Fixed translucent navy site header with brand lockup + nav.
 * Solidifies and gains a shadow on scroll.
 */
export function SiteHeader({ active, links, scrolled = false, style, ...props }) {
  const nav = links || [
    { label: "Fellows", href: "./fellows.html" },
    { label: "Residents", href: "./residents.html" },
    { label: "Consulting", href: "./consulting.html" },
  ];
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 72,
        padding: "14px clamp(18px,5vw,64px)",
        background: scrolled ? "rgba(6,23,35,0.96)" : "rgba(6,23,35,0.9)",
        boxShadow: scrolled ? "var(--shadow-header)" : "none",
        color: "#fff",
        transition: "background var(--dur) var(--ease), box-shadow var(--dur) var(--ease)",
        ...style,
      }}
      {...props}
    >
      <a href="./index.html" style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#fff", textDecoration: "none" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            background: "var(--paper)",
            color: "var(--navy-900)",
            fontWeight: 800,
            fontSize: "0.78rem",
          }}
        >
          OP
        </span>
        <span style={{ fontWeight: 700, fontSize: "0.98rem", fontFamily: "var(--font-body)" }}>OncoPath Advisory Group</span>
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "clamp(18px,3vw,34px)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "var(--font-body)" }}>
        {nav.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ color: "#fff", textDecoration: "none", opacity: active === l.label ? 1 : 0.86 }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
