import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. `primary` = brass fill, `secondary` = translucent on dark, `ghost` = outline on light, `quiet` = underlined text link. */
  variant?: "primary" | "secondary" | "ghost" | "quiet";
  size?: "sm" | "md" | "lg";
  /** Tints a primary button with a lane accent instead of brass. */
  lane?: "fellows" | "residents" | "consulting" | "partner";
  /** Render as a different element, e.g. "a". */
  as?: "button" | "a";
  href?: string;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button for OncoPath surfaces.
 * @dsStartingPoint not
 */
export function Button(props: ButtonProps): JSX.Element;
