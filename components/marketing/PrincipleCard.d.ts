import * as React from "react";

export interface PrincipleCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Two-digit index, e.g. "01". */
  index?: string;
  title: React.ReactNode;
  /** Supporting copy. */
  children?: React.ReactNode;
  link?: { label: string; href: string };
  tint?: "white" | "cream" | "sage";
}

/** Numbered offering card for 3-column "what to expect" grids. */
export function PrincipleCard(props: PrincipleCardProps): JSX.Element;
