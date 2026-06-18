import React from "react";

/**
 * OncoPath primary button. 8px radius, 48px min-height, bold sans label.
 * Hover lifts 1px and lightens the fill — never shrinks.
 */
export function Button({
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
    partner: "var(--wine-600)",
  };
  const laneHover = {
    fellows: "var(--brass-500)",
    residents: "var(--sage-700)",
    consulting: "var(--blue-500)",
    partner: "var(--wine-700)",
  };

  const sizes = {
    sm: { minHeight: 40, padding: "10px 16px", fontSize: "0.86rem" },
    md: { minHeight: "var(--control-min-h)", padding: "13px 20px", fontSize: "0.94rem" },
    lg: { minHeight: 56, padding: "16px 28px", fontSize: "1rem" },
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
    ...sizes[size],
  };

  const fill = lane ? laneFill[lane] : "var(--brass-600)";
  const fillHover = lane ? laneHover[lane] : "var(--brass-500)";

  const variants = {
    primary: {
      background: hover ? fillHover : fill,
      color: lane === "partner" || lane === "consulting" || lane === "residents" ? "#fff" : "#1b1710",
    },
    secondary: {
      background: hover ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)",
      borderColor: "rgba(255,255,255,0.3)",
      color: "#fff",
    },
    ghost: {
      background: hover ? "var(--cream)" : "transparent",
      borderColor: "var(--line-strong)",
      color: "var(--navy-600)",
    },
    quiet: {
      background: "transparent",
      color: "var(--blue-600)",
      padding: 0,
      minHeight: "auto",
      textDecoration: "underline",
      textUnderlineOffset: 4,
    },
  };

  const Tag = as;
  return (
    <Tag
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
    </Tag>
  );
}
