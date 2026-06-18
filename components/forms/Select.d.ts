import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

/** Labeled select dropdown. */
export function Select(props: SelectProps): JSX.Element;
