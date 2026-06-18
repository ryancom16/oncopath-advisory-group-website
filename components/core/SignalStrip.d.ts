import * as React from "react";

export interface SignalItem {
  label: string;
  detail: string;
}

export interface SignalStripProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Usually three positioning statements shown directly under a hero. */
  items: SignalItem[];
}

/** Three-column positioning strip with hairline dividers, under heroes. */
export function SignalStrip(props: SignalStripProps): JSX.Element;
