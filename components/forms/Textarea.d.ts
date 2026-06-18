import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

/** Labeled multiline textarea. */
export function Textarea(props: TextareaProps): JSX.Element;
