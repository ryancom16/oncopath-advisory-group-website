import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Color of the label. `warm` is brass-tint for dark sections; `neutral` is muted. */
  lane?: "fellows" | "residents" | "consulting" | "partner" | "warm" | "neutral";
  children?: React.ReactNode;
}

/** Uppercase section eyebrow — OncoPath's signature editorial marker. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
