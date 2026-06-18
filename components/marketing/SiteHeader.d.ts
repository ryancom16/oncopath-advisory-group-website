import * as React from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Label of the active nav item (brightened). */
  active?: string;
  links?: NavLink[];
  /** Solidify background + add shadow (set true past ~8px scroll). */
  scrolled?: boolean;
}

/** Fixed translucent navy site header with brand lockup + nav. */
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
