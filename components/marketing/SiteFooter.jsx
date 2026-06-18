import React from "react";

/**
 * Deep-navy site footer — brand line, optional sponsor link, and a quiet
 * compliance disclaimer.
 */
export function SiteFooter({ disclaimer, brandLine, sponsorLink = true, style, ...props }) {
  return (
    <footer
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 28,
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--navy-800)",
        color: "#fff",
        padding: "34px clamp(22px,6vw,86px)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
      {...props}
    >
      <div>
        <strong style={{ display: "block", fontSize: "1rem" }}>OncoPath Advisory Group</strong>
        <span style={{ display: "block", color: "var(--text-on-dark-muted)", marginTop: 4 }}>
          {brandLine || "Path to Cure: oncology and hematology education, community, and advisory services."}
        </span>
        {sponsorLink && (
          <a
            href="./sponsor.html"
            style={{ display: "inline-block", marginTop: 10, color: "var(--text-on-dark-muted)", textDecoration: "underline", textUnderlineOffset: 4 }}
          >
            Sponsor inquiries
          </a>
        )}
      </div>
      <p style={{ margin: 0, maxWidth: 700, color: "var(--text-on-dark-muted)", fontSize: "0.92rem" }}>
        {disclaimer ||
          "No CME credit is offered unless expressly stated through an accredited provider. Consulting engagements are scoped separately and subject to applicable clinical, legal, and institutional requirements."}
      </p>
    </footer>
  );
}
