import * as React from "react";

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

/** Labeled text input with focus ring. */
export function Field(props: FieldProps): JSX.Element;
