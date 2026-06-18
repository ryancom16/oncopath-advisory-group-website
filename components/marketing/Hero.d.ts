import * as React from "react";

/**
 * Full-bleed photographic hero with navy gradient scrim.
 * @startingPoint section="Marketing" subtitle="Photographic hero with navy scrim" viewport="1180x620"
 */
export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
  /** Lane tints the eyebrow and the far edge of the navy scrim. */
  lane?: "fellows" | "residents" | "consulting" | "partner";
  /** Background image path, relative to the consuming page. */
  image?: string;
  /** Optional fallback photo layered beneath `image` (shows if `image` is missing). */
  imageFallback?: string;
  /** Focal point / crop of the photo (CSS background-position), e.g. "75% 70%". Lets each page treat the same asset distinctly. */
  focus?: string;
  /** Button cluster (pass <Button> elements). */
  actions?: React.ReactNode;
}

export function Hero(props: HeroProps): JSX.Element;
