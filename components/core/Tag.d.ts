import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  lane?: "fellows" | "residents" | "consulting" | "partner" | "neutral";
  shape?: "pill" | "square";
  children?: React.ReactNode;
}

/** Small tint label tag for status, disclosure, or lane markers. */
export function Tag(props: TagProps): JSX.Element;
