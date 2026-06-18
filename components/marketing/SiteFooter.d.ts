import * as React from "react";

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Override the default compliance disclaimer. */
  disclaimer?: React.ReactNode;
  /** Sub-brand descriptor under the company name. Education arm uses "Path from Training to Practice", consulting uses "Path to Cure". */
  brandLine?: React.ReactNode;
  /** Show the "Sponsor inquiries" link. */
  sponsorLink?: boolean;
}

/** Deep-navy footer with brand line + quiet compliance disclaimer. */
export function SiteFooter(props: SiteFooterProps): JSX.Element;
