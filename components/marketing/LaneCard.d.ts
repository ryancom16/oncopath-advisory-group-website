import * as React from "react";

/**
 * Homepage lane card with top accent bar — Fellows / Residents / Consulting.
 * @startingPoint section="Marketing" subtitle="Three-lane offering card" viewport="380x320"
 */
export interface LaneCardProps extends React.HTMLAttributes<HTMLElement> {
  lane: "fellows" | "residents" | "consulting" | "partner";
  index?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  link?: { label: string; href: string };
}

export function LaneCard(props: LaneCardProps): JSX.Element;
