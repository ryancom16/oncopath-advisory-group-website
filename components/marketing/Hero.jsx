import React from "react";
import { Eyebrow } from "../core/Eyebrow.jsx";
import { Button } from "../core/Button.jsx";

/**
 * Full-bleed hero with the private-dining photograph behind a left-to-right
 * navy gradient scrim. The lane tints the far edge of the scrim, and `focus`
 * + a lane color-wash give each page a distinct treatment of the same asset.
 */
export function Hero({
  eyebrow,
  title,
  copy,
  lane = "fellows",
  image = "assets/imagery/oncopath-hero.png",
  imageFallback,
  focus = "center",
  actions,
  style,
  ...props
}) {
  const edge = {
    fellows: "rgba(6,23,35,0.26)",
    residents: "rgba(99,121,104,0.34)",
    consulting: "rgba(43,111,136,0.34)",
    partner: "rgba(6,23,35,0.34)",
  }[lane];

  // Lane color-wash layered over the photo so each page's temperature differs.
  const wash = {
    fellows: "linear-gradient(180deg, rgba(184,141,74,0.0) 30%, rgba(184,141,74,0.20) 100%)",
    residents: "linear-gradient(180deg, rgba(99,121,104,0.06) 20%, rgba(99,121,104,0.30) 100%)",
    consulting: "linear-gradient(180deg, rgba(11,30,44,0.30) 0%, rgba(43,111,136,0.22) 100%)",
    partner: "linear-gradient(180deg, rgba(6,23,35,0.30) 0%, rgba(129,62,74,0.22) 100%)",
  }[lane];

  const scrim = `linear-gradient(90deg, rgba(6,23,35,0.98) 0%, rgba(6,23,35,0.82) 34%, ${edge} 72%)`;

  // Layer the requested image over an optional fallback so the hero still shows
  // something if the real photo isn't in place yet.
  const layers = [`url("${image}")`];
  const sizes = ["cover"];
  const positions = [focus];
  if (imageFallback) {
    layers.push(`url("${imageFallback}")`);
    sizes.push("cover");
    positions.push("center");
  }

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "clamp(560px, 78svh, 760px)",
        padding: "120px clamp(22px,6vw,86px) 72px",
        color: "#fff",
        backgroundImage: `${scrim}, ${wash}, ${layers.join(", ")}`,
        backgroundSize: `cover, cover, ${sizes.join(", ")}`,
        backgroundPosition: `center, center, ${positions.join(", ")}`,
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      {...props}
    >
      <div style={{ maxWidth: 780 }}>
        {eyebrow && <Eyebrow lane={lane}>{eyebrow}</Eyebrow>}
        <h1 style={{ font: "var(--display-1)", margin: "0 0 26px", maxWidth: 850 }}>{title}</h1>
        {copy && (
          <p style={{ font: "var(--lead)", color: "var(--text-on-dark-soft)", maxWidth: 670, margin: 0 }}>
            {copy}
          </p>
        )}
        {actions && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>{actions}</div>
        )}
      </div>
    </section>
  );
}
