import * as React from "react";

/**
 * Homepage lane card with top accent bar for each public lane.
 * @startingPoint section="Marketing" subtitle="Offering card" viewport="380x320"
 */
export interface LaneCardProps extends React.HTMLAttributes<HTMLElement> {
  lane: "fellows" | "residents" | "consulting" | "events" | "partner";
  index?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  link?: { label: string; href: string };
}

export function LaneCard(props: LaneCardProps): JSX.Element;
