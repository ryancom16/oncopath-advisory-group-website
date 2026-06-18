// Consulting — restrained, executive, service-oriented. Distinct motif: a quiet
// services ledger (rows, not bouncy cards) and a scope checklist. Blue temperature.
function ConsultingScreen({ go }) {
  const { Hero, Button, SignalStrip, Field, Select, Textarea, Eyebrow, Tag } = window.OncoPathDesignSystem_1b0a1a;

  const services = [
    ["Medical education strategy", "Program design, topic development, speaker preparation, and educational content review."],
    ["Clinical advisory support", "Expert review and guidance for appropriately scoped oncology or hematology questions."],
    ["Advisory boards", "Physician-led structure, moderation, and synthesis for advisory discussions."],
    ["Research & publication support", "Guidance around abstracts, manuscripts, clinical framing, and scholarly communication."],
    ["Program development", "Support for oncology education programs, fellow-facing initiatives, and communities."],
    ["Content review", "Review of oncology and hematology materials for clinical clarity, accuracy, and fit."],
  ];

  return (
    <div>
      <Hero
        lane="consulting"
        image={HERO_CONSULTING}
        imageFallback={HERO_IMG}
        focus="16% 46%"
        eyebrow="Medical oncology and hematology consulting"
        title="Specialist advisory services for complex oncology work."
        copy="Consulting provided by board-certified, licensed medical oncologists and hematologists for organizations that need credible clinical expertise."
        actions={<>
          <Button lane="consulting" as="a" href="#inquiry">Request Consultation</Button>
          <Button variant="secondary" as="a" href="#services">View Services</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Board-certified", detail: "Medical oncology and hematology expertise." },
        { label: "Licensed physicians", detail: "Engagements scoped around clinical and legal requirements." },
        { label: "Practical guidance", detail: "Clinical, educational, research, and advisory support." },
      ]} />

      <Section bg="cream" id="services">
        <TwoColumn
          left={<>
            <Eyebrow lane="consulting">Consulting Services</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: 0 }}>Clinical expertise for education, strategy, and oncology programs.</h2>
          </>}
          right={<div style={{ font: "var(--prose)", color: "var(--text-body)" }}>
            <p style={{ marginTop: 0 }}>OncoPath Advisory Group provides medical oncology and hematology consulting services through board-certified and licensed medical oncologists and hematologists.</p>
            <p style={{ marginBottom: 0 }}>Engagements are scoped case by case so the right physician expertise, confidentiality, compliance, and deliverables are defined before work begins.</p>
          </div>}
        />
      </Section>

      {/* Distinct motif: a quiet services ledger — restrained rows, hairline dividers */}
      <Section bg="white">
        <SectionHeading eyebrow="Service Lines" lane="consulting" title="Specialist support for oncology and hematology needs." />
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map(([t, d], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,0.7fr) minmax(0,1fr)", gap: 24, alignItems: "baseline", padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 900, color: "var(--blue-600)", fontVariantNumeric: "tabular-nums" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ font: "var(--display-3)", fontSize: "1.4rem", color: "var(--navy-600)", margin: 0 }}>{t}</h3>
              <p style={{ font: "var(--body)", color: "var(--text-body)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="deep">
        <TwoColumn
          left={<>
            <Eyebrow lane="warm">Scope And Review</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Consulting should be defined before work begins.</h2>
            <p style={{ color: "var(--text-on-dark-soft)", fontSize: "1.08rem", maxWidth: 540, margin: 0 }}>Each engagement should clarify the clinical question, intended audience, permitted use, confidentiality requirements, deliverables, and whether the request involves patient-specific care or broader advisory work.</p>
          </>}
          right={<BoundaryPanel heading="Scope checkpoints" items={[
            { label: "Clinical scope", detail: "What question is being answered, and for whom?" },
            { label: "Licensure", detail: "Does the work require a specific state or clinical relationship?" },
            { label: "Confidentiality", detail: "What data, documents, or restrictions apply?" },
            { label: "Deliverable", detail: "Call, memo, review, advisory session, or program support." },
            { label: "Compliance", detail: "Institutional, sponsor, and legal requirements reviewed as needed." },
          ]} />}
        />
      </Section>

      <Section bg="white" id="inquiry">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <Eyebrow lane="consulting">Consulting Inquiry</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Start with a scoped conversation.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: "0 0 18px" }}>Share the organization, clinical or educational need, timeline, and desired deliverable so OncoPath can determine whether the request is appropriate.</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", maxWidth: 480, margin: 0 }}>Website inquiries do not establish a physician-patient relationship. Engagements are scoped separately.</p>
          </div>
          <InquiryForm cta="Request Consultation" message={(n) => `Thank you, ${n}. Your consulting inquiry has been prepared for the OncoPath team.`}>
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Work email" type="email" name="email" placeholder="name@organization.com" />
            <Field label="Organization" name="organization" placeholder="Company, institution, or practice" />
            <Select label="Consulting need" name="need" options={["Medical education strategy","Clinical advisory support","Advisory board support","Research / publication support","Content review","Other / not listed"]} />
            <Textarea label="Brief description" name="note" rows={3} placeholder="What do you need help with?" />
          </InquiryForm>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ConsultingScreen });
