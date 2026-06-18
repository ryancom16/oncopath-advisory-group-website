/* @ds-bundle: {"format":3,"namespace":"OncoPathDesignSystem_1b0a1a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SignalStrip","sourcePath":"components/core/SignalStrip.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"LaneCard","sourcePath":"components/marketing/LaneCard.jsx"},{"name":"PrincipleCard","sourcePath":"components/marketing/PrincipleCard.jsx"},{"name":"SiteFooter","sourcePath":"components/marketing/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/marketing/SiteHeader.jsx"},{"name":"TimelineStep","sourcePath":"components/marketing/TimelineStep.jsx"}],"sourceHashes":{"components/core/Button.jsx":"896422e4e546","components/core/Card.jsx":"7e12a2a8ef8e","components/core/Eyebrow.jsx":"d576b2ef0572","components/core/SignalStrip.jsx":"355c7c91a16c","components/core/Tag.jsx":"d08cee2b1aea","components/forms/Field.jsx":"8a5f74e4a16a","components/forms/Select.jsx":"295089e22cea","components/forms/Textarea.jsx":"aefb781330af","components/marketing/Hero.jsx":"958d852f338a","components/marketing/LaneCard.jsx":"3638fd75b6c0","components/marketing/PrincipleCard.jsx":"dfc762d71580","components/marketing/SiteFooter.jsx":"7be76ce7841e","components/marketing/SiteHeader.jsx":"fc64714d1a85","components/marketing/TimelineStep.jsx":"e26d999033c5","site/script.js":"ecaa4275a5de","ui_kits/website/App.jsx":"db74deeb056d","ui_kits/website/ConsultingScreen.jsx":"776d386f59b3","ui_kits/website/FellowsScreen.jsx":"47f41555b6fc","ui_kits/website/HomeScreen.jsx":"c2fe0aa6f5d8","ui_kits/website/PartnerScreen.jsx":"e77b19f62553","ui_kits/website/ResidentsScreen.jsx":"76cc22d1f4d2","ui_kits/website/shared.jsx":"2db2e684246a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OncoPathDesignSystem_1b0a1a = window.OncoPathDesignSystem_1b0a1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OncoPath primary button. 8px radius, 48px min-height, bold sans label.
 * Hover lifts 1px and lightens the fill — never shrinks.
 */
function Button({
  variant = "primary",
  size = "md",
  lane,
  as = "button",
  children,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const laneFill = {
    fellows: "var(--brass-600)",
    residents: "var(--sage-600)",
    consulting: "var(--blue-600)",
    partner: "var(--wine-600)"
  };
  const laneHover = {
    fellows: "var(--brass-500)",
    residents: "var(--sage-700)",
    consulting: "var(--blue-500)",
    partner: "var(--wine-700)"
  };
  const sizes = {
    sm: {
      minHeight: 40,
      padding: "10px 16px",
      fontSize: "0.86rem"
    },
    md: {
      minHeight: "var(--control-min-h)",
      padding: "13px 20px",
      fontSize: "0.94rem"
    },
    lg: {
      minHeight: 56,
      padding: "16px 28px",
      fontSize: "1rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    border: "1px solid transparent",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease)",
    transform: hover ? "translateY(-1px)" : "translateY(0)",
    ...sizes[size]
  };
  const fill = lane ? laneFill[lane] : "var(--brass-600)";
  const fillHover = lane ? laneHover[lane] : "var(--brass-500)";
  const variants = {
    primary: {
      background: hover ? fillHover : fill,
      color: lane === "partner" || lane === "consulting" || lane === "residents" ? "#fff" : "#1b1710"
    },
    secondary: {
      background: hover ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)",
      borderColor: "rgba(255,255,255,0.3)",
      color: "#fff"
    },
    ghost: {
      background: hover ? "var(--cream)" : "transparent",
      borderColor: "var(--line-strong)",
      color: "var(--navy-600)"
    },
    quiet: {
      background: "transparent",
      color: "var(--blue-600)",
      padding: 0,
      minHeight: "auto",
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card — white (or tinted), 8px radius, hairline border, soft low shadow.
 * The base container for OncoPath content blocks.
 */
function Card({
  tint = "white",
  elevated = true,
  children,
  style,
  ...props
}) {
  const backgrounds = {
    white: "#fff",
    cream: "#fbf7ef",
    sage: "#f1f6f4",
    mist: "var(--mist)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: backgrounds[tint] || "#fff",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      boxShadow: elevated ? "var(--shadow-card)" : "none",
      padding: 28,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Uppercase eyebrow label — the signature OncoPath section marker.
 * Colored by lane; sits above display headings.
 */
function Eyebrow({
  lane = "fellows",
  children,
  style,
  ...props
}) {
  const color = {
    fellows: "var(--brass-600)",
    residents: "var(--sage-600)",
    consulting: "var(--blue-600)",
    partner: "var(--wine-600)",
    warm: "var(--brass-200)",
    neutral: "var(--text-muted)"
  }[lane] || "var(--brass-600)";
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      font: "var(--eyebrow)",
      letterSpacing: "var(--eyebrow-tracking)",
      textTransform: "uppercase",
      color,
      margin: "0 0 16px",
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SignalStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Three-column positioning strip placed directly under a hero.
 * Cream ground, hairline grid dividers, strong label + supporting line.
 */
function SignalStrip({
  items = [],
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${items.length || 3}, 1fr)`,
      gap: 1,
      background: "var(--cream)",
      borderBottom: "1px solid var(--line)",
      ...style
    }
  }, props), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,253,248,0.62)",
      minHeight: 118,
      padding: "28px clamp(18px,4vw,46px)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: "1.02rem",
      color: "var(--navy-600)",
      marginBottom: 8
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-body)"
    }
  }, it.detail))));
}
Object.assign(__ds_scope, { SignalStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SignalStrip.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label tag — pill or square. Used for status ("Limited seats"),
 * disclosure ("Sponsor-supported"), or lane markers.
 */
function Tag({
  lane = "neutral",
  shape = "pill",
  children,
  style,
  ...props
}) {
  const palette = {
    fellows: ["var(--brass-200)", "var(--brass-700)"],
    residents: ["var(--sage-100)", "var(--sage-700)"],
    consulting: ["var(--blue-100)", "var(--blue-700)"],
    partner: ["var(--wine-100)", "var(--wine-700)"],
    neutral: ["var(--cream)", "var(--navy-600)"]
  };
  const [bg, fg] = palette[lane] || palette.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled text input. Label is bold sans above the field.
 * Focus shows a 3px translucent blue ring + blue border.
 */
function Field({
  label,
  type = "text",
  hint,
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 8,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.86rem",
      fontWeight: 800,
      color: "rgba(19,43,53,0.82)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--body)",
      background: "var(--paper)",
      color: "var(--navy-600)",
      border: `1px solid ${focus ? "var(--blue-600)" : "rgba(19,43,53,0.18)"}`,
      borderRadius: "var(--radius)",
      minHeight: "var(--field-min-h)",
      padding: "12px 13px",
      width: "100%",
      outline: focus ? "3px solid rgba(43,111,136,0.15)" : "none",
      ...style
    }
  }, props)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.78rem",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled select. Matches Field styling. */
function Select({
  label,
  options = [],
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 8,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.86rem",
      fontWeight: 800,
      color: "rgba(19,43,53,0.82)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--body)",
      background: "var(--paper)",
      color: "var(--navy-600)",
      border: `1px solid ${focus ? "var(--blue-600)" : "rgba(19,43,53,0.18)"}`,
      borderRadius: "var(--radius)",
      minHeight: "var(--field-min-h)",
      padding: "12px 13px",
      width: "100%",
      outline: focus ? "3px solid rgba(43,111,136,0.15)" : "none",
      ...style
    }
  }, props), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled multiline textarea. Matches Field styling. */
function Textarea({
  label,
  rows = 4,
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 8,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.86rem",
      fontWeight: 800,
      color: "rgba(19,43,53,0.82)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, props)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-bleed hero with the private-dining photograph behind a left-to-right
 * navy gradient scrim. The lane tints the far edge of the scrim, and `focus`
 * + a lane color-wash give each page a distinct treatment of the same asset.
 */
function Hero({
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
    partner: "rgba(6,23,35,0.34)"
  }[lane];

  // Lane color-wash layered over the photo so each page's temperature differs.
  const wash = {
    fellows: "linear-gradient(180deg, rgba(184,141,74,0.0) 30%, rgba(184,141,74,0.20) 100%)",
    residents: "linear-gradient(180deg, rgba(99,121,104,0.06) 20%, rgba(99,121,104,0.30) 100%)",
    consulting: "linear-gradient(180deg, rgba(11,30,44,0.30) 0%, rgba(43,111,136,0.22) 100%)",
    partner: "linear-gradient(180deg, rgba(6,23,35,0.30) 0%, rgba(129,62,74,0.22) 100%)"
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
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      minHeight: "clamp(560px, 78svh, 760px)",
      padding: "120px clamp(22px,6vw,86px) 72px",
      color: "#fff",
      backgroundImage: `${scrim}, ${wash}, ${layers.join(", ")}`,
      backgroundSize: `cover, cover, ${sizes.join(", ")}`,
      backgroundPosition: `center, center, ${positions.join(", ")}`,
      backgroundRepeat: "no-repeat",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    lane: lane
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--display-1)",
      margin: "0 0 26px",
      maxWidth: 850
    }
  }, title), copy && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--lead)",
      color: "var(--text-on-dark-soft)",
      maxWidth: 670,
      margin: 0
    }
  }, copy), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 36
    }
  }, actions)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LaneCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Homepage lane card — top accent bar in the lane color, two-digit index,
 * heading, copy, and a quiet text link. Makes the three offerings feel
 * related but distinct.
 */
function LaneCard({
  lane = "fellows",
  index,
  title,
  children,
  link,
  style,
  ...props
}) {
  const accent = {
    fellows: "var(--brass-600)",
    residents: "var(--sage-600)",
    consulting: "var(--blue-600)",
    partner: "var(--wine-600)"
  }[lane];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      boxShadow: hover ? "var(--shadow-raised)" : "var(--shadow-card)",
      overflow: "hidden",
      transition: "box-shadow var(--dur) var(--ease), transform var(--dur) var(--ease)",
      transform: hover ? "translateY(-2px)" : "none",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 900,
      color: accent,
      marginBottom: 32
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--display-3)",
      fontSize: "1.5rem",
      color: "var(--navy-600)",
      margin: "0 0 12px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body)",
      color: "var(--text-body)",
      margin: "0 0 20px",
      flex: 1
    }
  }, children), link && /*#__PURE__*/React.createElement("a", {
    href: link.href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: accent,
      fontSize: "0.92rem",
      fontWeight: 800,
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, link.label)));
}
Object.assign(__ds_scope, { LaneCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LaneCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PrincipleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered principle / offering card for a 3-column grid.
 * Two-digit burgundy index, sans heading, supporting copy, optional link.
 */
function PrincipleCard({
  index,
  title,
  children,
  link,
  tint = "white",
  style,
  ...props
}) {
  const backgrounds = {
    white: "#fff",
    cream: "#fbf7ef",
    sage: "#f1f6f4"
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      background: backgrounds[tint] || "#fff",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-card)",
      padding: 28,
      minHeight: 210,
      ...style
    }
  }, props), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.76rem",
      fontWeight: 900,
      color: "var(--wine-600)",
      marginBottom: 42
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--heading-card)",
      color: "var(--navy-600)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, children), link && /*#__PURE__*/React.createElement("a", {
    href: link.href,
    style: {
      display: "inline-flex",
      color: "var(--blue-600)",
      fontSize: "0.92rem",
      fontWeight: 900,
      marginTop: 14,
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, link.label));
}
Object.assign(__ds_scope, { PrincipleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PrincipleCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Deep-navy site footer — brand line, optional sponsor link, and a quiet
 * compliance disclaimer.
 */
function SiteFooter({
  disclaimer,
  brandLine,
  sponsorLink = true,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      alignItems: "center",
      justifyContent: "space-between",
      background: "var(--navy-800)",
      color: "#fff",
      padding: "34px clamp(22px,6vw,86px)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: "1rem"
    }
  }, "OncoPath Advisory Group"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-on-dark-muted)",
      marginTop: 4
    }
  }, brandLine || "Path to Cure: oncology and hematology education, community, and advisory services."), sponsorLink && /*#__PURE__*/React.createElement("a", {
    href: "./sponsor.html",
    style: {
      display: "inline-block",
      marginTop: 10,
      color: "var(--text-on-dark-muted)",
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, "Sponsor inquiries")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 700,
      color: "var(--text-on-dark-muted)",
      fontSize: "0.92rem"
    }
  }, disclaimer || "No CME credit is offered unless expressly stated through an accredited provider. Consulting engagements are scoped separately and subject to applicable clinical, legal, and institutional requirements."));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fixed translucent navy site header with brand lockup + nav.
 * Solidifies and gains a shadow on scroll.
 */
function SiteHeader({
  active,
  links,
  scrolled = false,
  style,
  ...props
}) {
  const nav = links || [{
    label: "Fellows",
    href: "./fellows.html"
  }, {
    label: "Residents",
    href: "./residents.html"
  }, {
    label: "Consulting",
    href: "./consulting.html"
  }];
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
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
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      color: "#fff",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      background: "var(--paper)",
      color: "var(--navy-900)",
      fontWeight: 800,
      fontSize: "0.78rem"
    }
  }, "OP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "0.98rem",
      fontFamily: "var(--font-body)"
    }
  }, "OncoPath Advisory Group")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(18px,3vw,34px)",
      fontSize: "0.9rem",
      fontWeight: 700,
      fontFamily: "var(--font-body)"
    }
  }, nav.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      color: "#fff",
      textDecoration: "none",
      opacity: active === l.label ? 1 : 0.86
    }
  }, l.label))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TimelineStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Agenda / registration timeline step — numbered sage dot, time/label heading, copy.
 * Use in a 4-column grid for the evening agenda or registration flow.
 */
function TimelineStep({
  step,
  title,
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      background: "var(--paper)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      padding: 26,
      minHeight: 260,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-pill)",
      background: "var(--sage-600)",
      color: "#fff",
      fontWeight: 900,
      marginBottom: 44
    }
  }, step), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--heading-card)",
      color: "var(--navy-600)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { TimelineStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TimelineStep.jsx", error: String((e && e.message) || e) }); }

// site/script.js
try { (() => {
// OncoPath static site — header scroll state, mobile nav, form confirmation.
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const setHeaderState = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
setHeaderState();
window.addEventListener("scroll", setHeaderState, {
  passive: true
});
if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}
document.querySelectorAll("[data-contact-form]").forEach(form => {
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = new FormData(form).get("name") || "there";
    const messages = {
      fellows: `Thank you, ${name}. Your invite request has been prepared for the OncoPath team.`,
      resident: `Thank you, ${name}. Your resident interest form has been prepared for the OncoPath team.`,
      consulting: `Thank you, ${name}. Your consulting inquiry has been prepared for the OncoPath team.`,
      sponsor: `Thank you, ${name}. Your partner inquiry has been prepared for the OncoPath team.`
    };
    if (status) status.textContent = messages[form.dataset.formKind] || messages.fellows;
  });
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/script.js", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// OncoPath website UI kit — click-through across all five surfaces.
const {
  useState,
  useRef,
  useEffect
} = React;
function App() {
  const [screen, setScreen] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);
  const go = key => {
    setScreen(key);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  const onScroll = e => setScrolled(e.target.scrollTop > 8);
  const {
    SiteFooter
  } = window.OncoPathDesignSystem_1b0a1a;
  const Screen = {
    home: HomeScreen,
    fellows: FellowsScreen,
    residents: ResidentsScreen,
    consulting: ConsultingScreen,
    partner: PartnerScreen
  }[screen];
  const disclaimers = {
    fellows: "Sponsor support, when present, is disclosed. No CME credit is offered unless expressly stated through an accredited provider. Participants should not share identifiable patient information.",
    residents: "Programming is educational and career-oriented. No CME credit is offered unless expressly stated through an accredited provider.",
    consulting: "Website inquiries do not establish a physician-patient relationship. Consulting engagements are scoped separately and subject to applicable clinical, legal, and institutional requirements.",
    partner: "Sponsor support, when present, is disclosed. No CME credit is offered unless expressly stated through an accredited provider. Participants should not share identifiable patient information."
  };

  // Sub-brand taglines: the education arm (fellows + residents) uses
  // "Path from Training to Practice"; the consulting arm uses "Path to Cure".
  const brandLines = {
    home: "Path to Cure: oncology and hematology education, community, and advisory services.",
    fellows: "Path from Training to Practice: physician-led community and education for oncology fellows.",
    residents: "Path from Training to Practice: oncology exploration and mentorship for resident physicians.",
    consulting: "Path to Cure: board-certified medical oncology and hematology consulting services.",
    partner: "Path to Cure: physician-led oncology education with carefully scoped partner support."
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    onScroll: onScroll,
    style: {
      height: "100vh",
      overflowY: "auto",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(KitHeader, {
    screen: screen,
    go: go,
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Screen, {
    go: go
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    sponsorLink: screen !== "consulting" && screen !== "residents",
    disclaimer: disclaimers[screen],
    brandLine: brandLines[screen]
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ConsultingScreen.jsx
try { (() => {
// Consulting — restrained, executive, service-oriented. Distinct motif: a quiet
// services ledger (rows, not bouncy cards) and a scope checklist. Blue temperature.
function ConsultingScreen({
  go
}) {
  const {
    Hero,
    Button,
    SignalStrip,
    Field,
    Select,
    Textarea,
    Eyebrow,
    Tag
  } = window.OncoPathDesignSystem_1b0a1a;
  const services = [["Medical education strategy", "Program design, topic development, speaker preparation, and educational content review."], ["Clinical advisory support", "Expert review and guidance for appropriately scoped oncology or hematology questions."], ["Advisory boards", "Physician-led structure, moderation, and synthesis for advisory discussions."], ["Research & publication support", "Guidance around abstracts, manuscripts, clinical framing, and scholarly communication."], ["Program development", "Support for oncology education programs, fellow-facing initiatives, and communities."], ["Content review", "Review of oncology and hematology materials for clinical clarity, accuracy, and fit."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    lane: "consulting",
    image: HERO_CONSULTING,
    imageFallback: HERO_IMG,
    focus: "16% 46%",
    eyebrow: "Medical oncology and hematology consulting",
    title: "Specialist advisory services for complex oncology work.",
    copy: "Consulting provided by board-certified, licensed medical oncologists and hematologists for organizations that need credible clinical expertise.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      lane: "consulting",
      as: "a",
      href: "#inquiry"
    }, "Request Consultation"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "a",
      href: "#services"
    }, "View Services"))
  }), /*#__PURE__*/React.createElement(SignalStrip, {
    items: [{
      label: "Board-certified",
      detail: "Medical oncology and hematology expertise."
    }, {
      label: "Licensed physicians",
      detail: "Engagements scoped around clinical and legal requirements."
    }, {
      label: "Practical guidance",
      detail: "Clinical, educational, research, and advisory support."
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "cream",
    id: "services"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
      lane: "consulting"
    }, "Consulting Services"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: 0
      }
    }, "Clinical expertise for education, strategy, and oncology programs.")),
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--prose)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0
      }
    }, "OncoPath Advisory Group provides medical oncology and hematology consulting services through board-certified and licensed medical oncologists and hematologists."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 0
      }
    }, "Engagements are scoped case by case so the right physician expertise, confidentiality, compliance, and deliverables are defined before work begins."))
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Service Lines",
    lane: "consulting",
    title: "Specialist support for oncology and hematology needs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, services.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "48px minmax(0,0.7fr) minmax(0,1fr)",
      gap: 24,
      alignItems: "baseline",
      padding: "26px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.78rem",
      fontWeight: 900,
      color: "var(--blue-600)",
      fontVariantNumeric: "tabular-nums"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--display-3)",
      fontSize: "1.4rem",
      color: "var(--navy-600)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    bg: "deep"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
      lane: "warm"
    }, "Scope And Review"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: "0 0 24px"
      }
    }, "Consulting should be defined before work begins."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-on-dark-soft)",
        fontSize: "1.08rem",
        maxWidth: 540,
        margin: 0
      }
    }, "Each engagement should clarify the clinical question, intended audience, permitted use, confidentiality requirements, deliverables, and whether the request involves patient-specific care or broader advisory work.")),
    right: /*#__PURE__*/React.createElement(BoundaryPanel, {
      heading: "Scope checkpoints",
      items: [{
        label: "Clinical scope",
        detail: "What question is being answered, and for whom?"
      }, {
        label: "Licensure",
        detail: "Does the work require a specific state or clinical relationship?"
      }, {
        label: "Confidentiality",
        detail: "What data, documents, or restrictions apply?"
      }, {
        label: "Deliverable",
        detail: "Call, memo, review, advisory session, or program support."
      }, {
        label: "Compliance",
        detail: "Institutional, sponsor, and legal requirements reviewed as needed."
      }]
    })
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white",
    id: "inquiry"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "clamp(36px,7vw,90px)",
      gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    lane: "consulting"
  }, "Consulting Inquiry"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-2)",
      margin: "0 0 24px"
    }
  }, "Start with a scoped conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: "1.08rem",
      maxWidth: 480,
      margin: "0 0 18px"
    }
  }, "Share the organization, clinical or educational need, timeline, and desired deliverable so OncoPath can determine whether the request is appropriate."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "0.86rem",
      maxWidth: 480,
      margin: 0
    }
  }, "Website inquiries do not establish a physician-patient relationship. Engagements are scoped separately.")), /*#__PURE__*/React.createElement(InquiryForm, {
    cta: "Request Consultation",
    message: n => `Thank you, ${n}. Your consulting inquiry has been prepared for the OncoPath team.`
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    name: "name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    type: "email",
    name: "email",
    placeholder: "name@organization.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Organization",
    name: "organization",
    placeholder: "Company, institution, or practice"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Consulting need",
    name: "need",
    options: ["Medical education strategy", "Clinical advisory support", "Advisory board support", "Research / publication support", "Content review", "Other / not listed"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Brief description",
    name: "note",
    rows: 3,
    placeholder: "What do you need help with?"
  })))));
}
Object.assign(window, {
  ConsultingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConsultingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FellowsScreen.jsx
try { (() => {
// Fellows Exchange — the most human, community-oriented page.
function FellowsScreen({
  go
}) {
  const {
    Hero,
    Button,
    SignalStrip,
    PrincipleCard,
    TimelineStep,
    Field,
    Select,
    Textarea,
    Tag
  } = window.OncoPathDesignSystem_1b0a1a;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    lane: "fellows",
    image: HERO_FELLOWS,
    imageFallback: HERO_IMG,
    focus: "84% 80%",
    eyebrow: "Chicago oncology fellows dinner series",
    title: "OncoPath Fellows Exchange",
    copy: "Physician-led dinner conversations for oncology and hematology fellows: focused clinical education, peer connection, mentorship, and practical guidance for the path from fellowship to practice.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#register"
    }, "Request a Seat"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "a",
      href: "#dinner"
    }, "View Dinner Details"))
  }), /*#__PURE__*/React.createElement(SignalStrip, {
    items: [{
      label: "Limited seats",
      detail: "Small-group format for meaningful discussion."
    }, {
      label: "Fellows first",
      detail: "Built around early-career oncology training."
    }, {
      label: "Beyond networking",
      detail: "Mentorship, research, career paths, and practical life advice."
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "cream"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeadingInline, {
      eyebrow: "Fellows Exchange",
      lane: "fellows"
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: 0
      }
    }, "A better room for early-career oncology learning.")),
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--prose)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0
      }
    }, "OncoPath Fellows Exchange brings oncology and hematology fellows together for focused, physician-led dinner conversations in Chicago."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 0
      }
    }, "The format is intentionally smaller than a conference: one useful topic, a thoughtful room, strong peer conversation, and practical guidance fellows can carry into research, publishing, career decisions, and the transition to attending life."))
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What To Expect",
    lane: "fellows",
    title: "A polished educational dinner without the conference sprawl."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, [["01", "Focused discussion", "A single clinical or professional theme with time for real questions and peer perspective.", "white"], ["02", "Physician-led format", "Programming guided by clinicians who understand fellowship training and oncology practice.", "cream"], ["03", "Private-room dinner", "A professional setting designed for conversation, not a crowded ballroom.", "sage"], ["04", "Peer connection", "Meet fellows across programs working through similar clinical and career questions.", "cream"], ["05", "Mentorship themes", "Research, publishing, fellowship navigation, employment paths, and financial foundations.", "sage"], ["06", "Transparent support", "Any sponsor support is clearly disclosed and kept separate from clinical judgment.", "white"]].map(([i, t, d, tint]) => /*#__PURE__*/React.createElement(PrincipleCard, {
    key: i,
    index: i,
    title: t,
    tint: tint
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    bg: "deep",
    id: "dinner"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeadingInline, {
      eyebrow: "Upcoming Dinner",
      lane: "warm"
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: "0 0 24px"
      }
    }, "Chicago fellows dinner details."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-on-dark-soft)",
        fontSize: "1.08rem",
        maxWidth: 540,
        margin: "0 0 32px"
      }
    }, "OncoPath Fellows Exchange gathers oncology and hematology fellows across the Chicago area for an evening of focused discussion and peer connection. Seats are limited so the room stays useful, conversational, and easy to participate in."), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#register"
    }, "Request a Seat")),
    right: /*#__PURE__*/React.createElement(BoundaryPanel, {
      heading: "Event snapshot",
      items: [{
        label: "Audience",
        detail: "Oncology and hematology fellows"
      }, {
        label: "Location",
        detail: "Chicago private dining room, shared after confirmation"
      }, {
        label: "Time",
        detail: "6:30 PM to 8:30 PM"
      }, {
        label: "Format",
        detail: "Dinner, moderated discussion, and peer conversation"
      }, {
        label: "Seats",
        detail: "Limited to preserve the small-group format"
      }]
    })
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Evening Agenda",
    lane: "fellows",
    title: "A structured dinner with time to actually connect."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(TimelineStep, {
    step: "1",
    title: "6:30-7:00"
  }, "Arrival, introductions, networking, and optional cocktails."), /*#__PURE__*/React.createElement(TimelineStep, {
    step: "2",
    title: "7:00-7:30"
  }, "Fellow-led journal club, new research discussion, or clinical topic."), /*#__PURE__*/React.createElement(TimelineStep, {
    step: "3",
    title: "7:30-8:00"
  }, "Practical topic: career paths, publishing, mentorship, finance, or fellowship navigation."), /*#__PURE__*/React.createElement(TimelineStep, {
    step: "4",
    title: "8:00-8:30"
  }, "Dessert and social hour for peer connection and informal conversations."))), /*#__PURE__*/React.createElement(Section, {
    bg: "cream",
    id: "register"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "clamp(36px,7vw,90px)",
      gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeadingInline, {
    eyebrow: "Request a Seat",
    lane: "fellows"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-2)",
      margin: "0 0 24px"
    }
  }, "Register interest for the next Chicago dinner."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: "1.08rem",
      maxWidth: 480,
      margin: "0 0 18px"
    }
  }, "Share a few details so the OncoPath team can confirm fit, send final event information, and account for dietary or accessibility needs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    lane: "fellows"
  }, "Request to attend"), /*#__PURE__*/React.createElement(Tag, null, "Waitlist if full"))), /*#__PURE__*/React.createElement(InquiryForm, {
    cta: "Request Invite",
    message: n => `Thank you, ${n}. Your invite request has been prepared for the OncoPath team.`
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    name: "name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "name@example.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Fellowship program / institution",
    name: "program",
    placeholder: "Program or institution"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Training year",
    name: "trainingYear",
    options: ["First-year fellow", "Second-year fellow", "Third-year fellow", "Chief fellow", "Other / not listed"]
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Specialty focus",
    name: "specialty",
    placeholder: "Oncology, hematology, disease area, or interest"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Topics you would value",
    name: "topics",
    rows: 3,
    placeholder: "Research, publishing, career paths, mentorship, financial basics\u2026"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Dietary or accessibility notes",
    name: "note",
    rows: 2,
    placeholder: "Optional"
  })))));
}
Object.assign(window, {
  FellowsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FellowsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Homepage — umbrella brand architecture, three lanes.
function HomeScreen({
  go
}) {
  const {
    Hero,
    Button,
    SignalStrip,
    LaneCard
  } = window.OncoPathDesignSystem_1b0a1a;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    lane: "fellows",
    image: HERO_IMG,
    focus: "center",
    title: "OncoPath Advisory Group",
    copy: "Physician-led oncology and hematology education, community, and advisory services for the path from training to practice and from diagnosis to cure.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      as: "button",
      onClick: () => go("fellows")
    }, "Fellows Exchange"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "button",
      onClick: () => go("consulting")
    }, "Consulting Services"))
  }), /*#__PURE__*/React.createElement(SignalStrip, {
    items: [{
      label: "Path to Cure",
      detail: "OncoPath is about the path toward better cancer care."
    }, {
      label: "Path to Independent Practice",
      detail: "Support for fellows, residents, and early-career physicians."
    }, {
      label: "Board-Certified Expertise",
      detail: "Consulting led by licensed oncology and hematology specialists."
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Practice Areas",
    lane: "fellows",
    title: "Three lanes under one physician-led advisory group."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(LaneCard, {
    lane: "fellows",
    index: "01",
    title: "Oncology Subspecialty Fellows",
    link: {
      label: "Explore Fellows Exchange →",
      href: "#"
    },
    onClick: () => go("fellows"),
    style: {
      cursor: "pointer"
    }
  }, "Dinner series, peer community, mentorship, research and publishing guidance, and career navigation for fellows across the oncologic subspecialties \u2014 medical, surgical, radiation, and hematologic oncology."), /*#__PURE__*/React.createElement(LaneCard, {
    lane: "residents",
    index: "02",
    title: "Resident Physicians",
    link: {
      label: "Explore Resident Pathways →",
      href: "#"
    },
    onClick: () => go("residents"),
    style: {
      cursor: "pointer"
    }
  }, "Programming for residents considering hematology-oncology and exploring the path into the cancer-care subspecialties."), /*#__PURE__*/React.createElement(LaneCard, {
    lane: "consulting",
    index: "03",
    title: "Consulting Services",
    link: {
      label: "View Consulting Services →",
      href: "#"
    },
    onClick: () => go("consulting"),
    style: {
      cursor: "pointer"
    }
  }, "Medical oncology and hematology consulting provided by board-certified, licensed medical oncologists and hematologists."))));
}

// Eyebrow-only heading helper (when the h2 is set separately).
function SectionHeadingInline({
  eyebrow,
  lane
}) {
  const {
    Eyebrow
  } = window.OncoPathDesignSystem_1b0a1a;
  return /*#__PURE__*/React.createElement(Eyebrow, {
    lane: lane
  }, eyebrow);
}
Object.assign(window, {
  HomeScreen,
  SectionHeadingInline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PartnerScreen.jsx
try { (() => {
// Sponsor / Partner — direct-link, compliance-conscious, operational. Burgundy
// temperature. Reached via the footer link, not the main trainee-facing nav.
function PartnerScreen({
  go
}) {
  const {
    Hero,
    Button,
    SignalStrip,
    Field,
    Textarea,
    Eyebrow,
    Tag
  } = window.OncoPathDesignSystem_1b0a1a;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    lane: "partner",
    image: HERO_IMG,
    focus: "94% 84%",
    eyebrow: "Sponsor and partner inquiry overview",
    title: "Support physician-led oncology education and career connection.",
    copy: "OncoPath Fellows Exchange creates professional, small-group educational dinners for oncology and hematology fellows in Chicago, with carefully structured sponsor and career-partner roles.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      lane: "partner",
      as: "a",
      href: "#inquiry"
    }, "Request a Conversation"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "button",
      onClick: () => go("fellows")
    }, "View Fellows Site"))
  }), /*#__PURE__*/React.createElement(SignalStrip, {
    items: [{
      label: "Physician-led",
      detail: "Programming shaped by clinical and training relevance."
    }, {
      label: "Appropriate support",
      detail: "Sponsor participation structured around educational objectives."
    }, {
      label: "Clear operations",
      detail: "Registration, reminders, check-in, and post-event feedback."
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "cream"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
      lane: "partner"
    }, "Program Model"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: 0
      }
    }, "A focused alternative to conference-scale engagement.")),
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--prose)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0
      }
    }, "The Fellows Exchange format is intentionally compact: a private-room dinner, one educational theme, physician-led moderation, and a carefully invited fellow audience."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 0
      }
    }, "The goal is a credible learning environment for fellows and a professionally managed sponsorship channel for organizations that support oncology education."))
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "External Support",
    lane: "partner",
    title: "What a partner conversation can cover."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, [["01", "Educational theme", "Discuss the disease area, learning objective, and appropriate educational scope."], ["02", "Audience fit", "Confirm whether the fellow audience and program mix fit the sponsor's education goals."], ["03", "Event operations", "Coordinate invitation flow, confirmation, dietary notes, check-in, and reporting."], ["04", "Disclosures", "Clarify sponsor support, role, and any required attendee-facing notices before launch."], ["05", "Feedback summary", "Provide aggregate feedback on educational themes, satisfaction, and topic interest."], ["06", "Review path", "Align early with applicable sponsor policy, legal, and compliance review requirements."]].map(([i, t, d]) => /*#__PURE__*/React.createElement(PartnerLedgerRow, {
    key: i,
    index: i,
    title: t,
    detail: d
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "deep"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
      lane: "warm"
    }, "Guardrails"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: "0 0 24px"
      }
    }, "Built to preserve trust with fellows and institutions."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-on-dark-soft)",
        fontSize: "1.08rem",
        maxWidth: 540,
        margin: 0
      }
    }, "Partner conversations should define the educational objective, permitted role, disclosure language, hospitality expectations, and reporting format before an event is opened for registration.")),
    right: /*#__PURE__*/React.createElement(BoundaryPanel, {
      heading: "Review topics",
      items: [{
        label: "Clinical independence",
        detail: "No promises tied to prescribing behavior."
      }, {
        label: "Privacy",
        detail: "No identifiable patient information or private attendee lists."
      }, {
        label: "Representative role",
        detail: "Observer or participant status defined in advance."
      }, {
        label: "Recruiting role",
        detail: "Career-opportunity tables kept separate from education."
      }, {
        label: "CME",
        detail: "No CME claim unless an accredited provider is involved."
      }, {
        label: "Reporting",
        detail: "Aggregate event feedback, not individual prescribing insight."
      }]
    })
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white",
    id: "inquiry"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "clamp(36px,7vw,90px)",
      gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    lane: "partner"
  }, "Partner Inquiry"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-2)",
      margin: "0 0 24px"
    }
  }, "Start with a short discovery conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: "1.08rem",
      maxWidth: 480,
      margin: "0 0 14px"
    }
  }, "Share your organization, therapeutic area or career focus, and review requirements so the OncoPath team can determine whether a future dinner is an appropriate fit.")), /*#__PURE__*/React.createElement(InquiryForm, {
    cta: "Request Conversation",
    message: n => `Thank you, ${n}. Your partner inquiry has been prepared for the OncoPath team.`
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    name: "name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    type: "email",
    name: "email",
    placeholder: "name@company.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Organization",
    name: "organization",
    placeholder: "Company or organization"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Area of interest",
    name: "interest",
    placeholder: "Disease area, program type, or question"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Notes",
    name: "note",
    rows: 3,
    placeholder: "Optional"
  })))));
}

// Partner uses a small burgundy-indexed card to differ from blue/sage lanes.
function PartnerLedgerRow({
  index,
  title,
  detail
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-card)",
      padding: 26,
      minHeight: 180
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.76rem",
      fontWeight: 900,
      color: "var(--wine-600)",
      marginBottom: 34
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--heading-card)",
      color: "var(--navy-600)",
      margin: "0 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, detail));
}
Object.assign(window, {
  PartnerScreen,
  PartnerLedgerRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PartnerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResidentsScreen.jsx
try { (() => {
// Residents — exploratory, developmental pathway page. Distinct rhythm: a
// vertical "pathway" list instead of the dinner timeline, sage temperature.
function ResidentsScreen({
  go
}) {
  const {
    Hero,
    Button,
    SignalStrip,
    PrincipleCard,
    Field,
    Select,
    Textarea,
    Eyebrow
  } = window.OncoPathDesignSystem_1b0a1a;
  const pathway = [["Notice the pull", "You meet oncology through consults, clinic rotations, research, or personal curiosity."], ["Build literacy", "Develop confidence around cancer-care decisions, language, and the patient journey."], ["Find mentors", "Talk with fellows, attendings, and near-peers who know the real training landscape."], ["Prepare to apply", "Understand how research, mentorship, applications, and interviews fit together."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    lane: "residents",
    image: HERO_RESIDENTS,
    imageFallback: HERO_IMG,
    focus: "58% 20%",
    eyebrow: "Resident physician pathways",
    title: "Explore the path into oncology.",
    copy: "Educational and mentorship programming for resident physicians considering hematology-oncology, plus residents in other specialties who want stronger oncology perspective.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      lane: "residents",
      as: "a",
      href: "#interest"
    }, "Join Interest List"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      as: "a",
      href: "#programs"
    }, "View Program Areas"))
  }), /*#__PURE__*/React.createElement(SignalStrip, {
    items: [{
      label: "Career clarity",
      detail: "Understand the training path and real practice options."
    }, {
      label: "Oncology literacy",
      detail: "Build confidence around cancer care across specialties."
    }, {
      label: "Mentor access",
      detail: "Learn from physicians who know the fellowship landscape."
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "cream",
    id: "programs"
  }, /*#__PURE__*/React.createElement(TwoColumn, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
      lane: "residents"
    }, "Residents"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--display-2)",
        margin: 0
      }
    }, "For residents considering what oncology could become.")),
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--prose)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0
      }
    }, "Residents often encounter oncology through inpatient consults, clinic rotations, research experiences, or personal curiosity before they know whether hematology-oncology is the right long-term path."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 0
      }
    }, "OncoPath Resident Pathways is designed to make that exploration clearer, more practical, and more connected to real mentorship."))
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Pathway",
    lane: "residents",
    title: "A developmental path, not a single dinner."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0,
      position: "relative"
    }
  }, pathway.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      paddingRight: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--sage-600)",
      color: "#fff",
      fontWeight: 900,
      flexShrink: 0,
      zIndex: 1
    }
  }, i + 1), i < pathway.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      background: "var(--sage-100)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--heading-card)",
      color: "var(--navy-600)",
      margin: "0 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body)",
      color: "var(--text-body)",
      margin: 0,
      paddingRight: 8
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    bg: "cream"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Program Areas",
    lane: "residents",
    title: "Support before fellowship decisions are final."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, [["01", "Specialty exploration", "Understand hematology-oncology training, clinical work, lifestyle, and long-term paths."], ["02", "Fellowship preparation", "Learn how research, mentorship, applications, and interviews fit together."], ["03", "Research orientation", "Find practical routes into abstracts, manuscripts, mentorship, and scholarly work."], ["04", "Cross-specialty oncology", "For residents in other specialties who need stronger cancer-care fluency."], ["05", "Mentorship events", "Small group conversations with fellows, attendings, and near-peer physicians."], ["06", "Career perspective", "Academia, hospital practice, private practice, industry, and hybrid paths."]].map(([i, t, d]) => /*#__PURE__*/React.createElement(PrincipleCard, {
    key: i,
    index: i,
    title: t,
    tint: "white"
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    bg: "white",
    id: "interest"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "clamp(36px,7vw,90px)",
      gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    lane: "residents"
  }, "Resident Interest"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-2)",
      margin: "0 0 24px"
    }
  }, "Tell us what would help you explore oncology."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: "1.08rem",
      maxWidth: 480,
      margin: 0
    }
  }, "Join the resident interest list for future programming, mentorship events, and educational sessions.")), /*#__PURE__*/React.createElement(InquiryForm, {
    cta: "Join Interest List",
    message: n => `Thank you, ${n}. Your resident interest form has been prepared for the OncoPath team.`
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    name: "name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "name@example.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Residency program / institution",
    name: "program",
    placeholder: "Program or institution"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Training year",
    name: "trainingYear",
    options: ["PGY-1", "PGY-2", "PGY-3", "PGY-4+", "Other / not listed"]
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Current specialty or interest",
    name: "specialty",
    placeholder: "Internal medicine, surgery, radiation oncology\u2026"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Topics you would value",
    name: "topics",
    rows: 3,
    placeholder: "Fellowship applications, research, clinical exposure, mentorship\u2026"
  })))));
}
Object.assign(window, {
  ResidentsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResidentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
// Shared chrome + section helpers for the OncoPath website UI kit.
// Recreates the real multi-page site as a click-through SPA.
const {
  useState,
  useEffect
} = React;
const NAV = [{
  key: "home",
  label: "Home"
}, {
  key: "fellows",
  label: "Fellows"
}, {
  key: "residents",
  label: "Residents"
}, {
  key: "consulting",
  label: "Consulting"
}];
const HERO_IMG = "../../assets/imagery/oncopath-hero.png";
// Page-specific hero photos — drop these files in to override the shared photo.
const HERO_FELLOWS = "../../assets/imagery/hero-fellows.png";
const HERO_RESIDENTS = "../../assets/imagery/hero-residents.png";
const HERO_CONSULTING = "../../assets/imagery/hero-consulting.png";

// SPA header — visually identical to SiteHeader but switches screens on click.
function KitHeader({
  screen,
  go,
  scrolled
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 72,
      padding: "14px clamp(18px,5vw,48px)",
      background: scrolled ? "rgba(6,23,35,0.96)" : "rgba(6,23,35,0.9)",
      boxShadow: scrolled ? "var(--shadow-header)" : "none",
      backdropFilter: "saturate(120%) blur(2px)",
      color: "#fff",
      transition: "background var(--dur) var(--ease), box-shadow var(--dur) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      background: "var(--paper)",
      color: "var(--navy-900)",
      fontWeight: 800,
      fontSize: "0.78rem"
    }
  }, "OP"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "0.98rem",
      fontFamily: "var(--font-body)"
    }
  }, "OncoPath Advisory Group")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(18px,3vw,32px)",
      fontSize: "0.9rem",
      fontWeight: 700
    }
  }, NAV.filter(n => n.key !== "home").map(n => /*#__PURE__*/React.createElement("button", {
    key: n.key,
    onClick: () => go(n.key),
    style: {
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      opacity: screen === n.key ? 1 : 0.86,
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      fontSize: "0.9rem",
      padding: "4px 0",
      borderBottom: screen === n.key ? "2px solid var(--brass-600)" : "2px solid transparent"
    }
  }, n.label))));
}

// Section wrapper with the brand's fluid padding + container.
function Section({
  bg = "white",
  children,
  id
}) {
  const grounds = {
    white: "var(--paper)",
    cream: "var(--cream)",
    deep: "var(--navy-900)"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: grounds[bg],
      color: bg === "deep" ? "#fff" : "var(--navy-600)",
      padding: "var(--section-pad-y) var(--section-pad-x)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--container-max)"
    }
  }, children));
}
function SectionHeading({
  eyebrow,
  lane,
  title,
  children,
  max = 790
}) {
  const {
    Eyebrow
  } = window.OncoPathDesignSystem_1b0a1a;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max,
      marginBottom: "clamp(34px,5vw,58px)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    lane: lane
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-2)",
      margin: 0
    }
  }, title), children);
}

// Two-column asymmetric split (0.95fr / 1fr).
function TwoColumn({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "clamp(36px,7vw,90px)",
      gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, left), /*#__PURE__*/React.createElement("div", null, right));
}

// Translucent boundary panel for deep-navy sections.
function BoundaryPanel({
  heading,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid var(--line-on-dark)",
      borderRadius: "var(--radius)",
      padding: "clamp(26px,4vw,42px)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "var(--brass-200)",
      margin: "0 0 22px",
      font: "var(--heading-card)"
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: 16,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderBottom: i < items.length - 1 ? "1px solid var(--line-on-dark)" : "none",
      paddingBottom: i < items.length - 1 ? 16 : 0,
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--brass-200)",
      fontSize: "0.82rem",
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-on-dark-soft)"
    }
  }, it.detail)))));
}

// Submit-to-confirm form shell used by every lane.
function InquiryForm({
  children,
  cta,
  message
}) {
  const {
    Button
  } = window.OncoPathDesignSystem_1b0a1a;
  const [status, setStatus] = useState("");
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      const name = new FormData(e.target).get("name") || "there";
      setStatus(message(name));
    },
    style: {
      background: "var(--cream)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-raised)",
      display: "grid",
      gap: 18,
      padding: "clamp(24px,4vw,34px)"
    }
  }, children, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, cta), /*#__PURE__*/React.createElement("p", {
    role: "status",
    "aria-live": "polite",
    style: {
      color: "var(--text-body)",
      fontSize: "0.92rem",
      margin: 0,
      minHeight: 22
    }
  }, status));
}
Object.assign(window, {
  NAV,
  HERO_IMG,
  HERO_FELLOWS,
  HERO_RESIDENTS,
  HERO_CONSULTING,
  KitHeader,
  Section,
  SectionHeading,
  TwoColumn,
  BoundaryPanel,
  InquiryForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SignalStrip = __ds_scope.SignalStrip;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LaneCard = __ds_scope.LaneCard;

__ds_ns.PrincipleCard = __ds_scope.PrincipleCard;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TimelineStep = __ds_scope.TimelineStep;

})();
