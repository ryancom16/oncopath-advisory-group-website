import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background tint. Card grids alternate white / cream / sage. */
  tint?: "white" | "cream" | "sage" | "mist";
  elevated?: boolean;
  children?: React.ReactNode;
}

/** Base surface card — hairline border + soft low shadow. */
export function Card(props: CardProps): JSX.Element;
