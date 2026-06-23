import * as React from "react";

export interface TimelineStepProps extends React.HTMLAttributes<HTMLElement> {
  /** Number shown in the sage dot. */
  step: React.ReactNode;
  /** Time range or step label, e.g. "6:30-7:00" or "Request". */
  title: React.ReactNode;
  children?: React.ReactNode;
}

/** Numbered agenda / request-flow step for a 4-column timeline. */
export function TimelineStep(props: TimelineStepProps): JSX.Element;
