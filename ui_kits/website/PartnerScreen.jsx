// Sponsor / Partner — direct-link, compliance-conscious, operational. Burgundy
// temperature. Reached via the footer link, not the main trainee-facing nav.
function PartnerScreen({ go }) {
  const { Hero, Button, SignalStrip, Field, Textarea, Eyebrow, Tag } = window.OncoPathDesignSystem_1b0a1a;
  return (
    <div>
      <Hero
        lane="partner"
        image={HERO_IMG}
        focus="94% 84%"
        eyebrow="Sponsor and partner inquiry overview"
        title="Support physician-led oncology education and career connection."
        copy="OncoPath creates physician-led, small-group oncology education and community events, beginning in Chicago, with carefully structured roles for sponsors, recruiters, and career partners."
        actions={<>
          <Button lane="partner" as="a" href="#inquiry">Request a Conversation</Button>
          <Button variant="secondary" as="button" onClick={() => go("fellows")}>View Fellows Site</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Physician-led", detail: "Programming shaped by clinical and training relevance." },
        { label: "Appropriate support", detail: "Sponsor participation structured around educational objectives." },
        { label: "Clear operations", detail: "Registration, reminders, check-in, and post-event feedback." },
      ]} />

      <Section bg="cream">
        <TwoColumn
          left={<>
            <Eyebrow lane="partner">Program Model</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: 0 }}>A focused alternative to conference-scale engagement.</h2>
          </>}
          right={<div style={{ font: "var(--prose)", color: "var(--text-body)" }}>
            <p style={{ marginTop: 0 }}>The Fellows Exchange format is intentionally compact: a private-room dinner, one educational theme, physician-led moderation, and a carefully invited fellow audience.</p>
            <p style={{ marginBottom: 0 }}>The goal is a credible learning environment for fellows and a professionally managed sponsorship channel for organizations that support oncology education.</p>
          </div>}
        />
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="External Support" lane="partner" title="What a partner conversation can cover." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {[
            ["01", "Educational theme", "Discuss the disease area, learning objective, and appropriate educational scope."],
            ["02", "Audience fit", "Confirm whether the fellow audience and program mix fit the sponsor's education goals."],
            ["03", "Event operations", "Coordinate invitation flow, confirmation, dietary notes, check-in, and reporting."],
            ["04", "Disclosures", "Clarify sponsor support, role, and any required attendee-facing notices before launch."],
            ["05", "Feedback summary", "Provide aggregate feedback on educational themes, satisfaction, and topic interest."],
            ["06", "Review path", "Align early with applicable sponsor policy, legal, and compliance review requirements."],
          ].map(([i, t, d]) => (
            <PartnerLedgerRow key={i} index={i} title={t} detail={d} />
          ))}
        </div>
      </Section>

      <Section bg="deep">
        <TwoColumn
          left={<>
            <Eyebrow lane="warm">Guardrails</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Built to preserve trust with fellows and institutions.</h2>
            <p style={{ color: "var(--text-on-dark-soft)", fontSize: "1.08rem", maxWidth: 540, margin: 0 }}>Partner conversations should define the educational objective, permitted role, disclosure language, hospitality expectations, and reporting format before an event is opened for registration.</p>
          </>}
          right={<BoundaryPanel heading="Review topics" items={[
            { label: "Clinical independence", detail: "No promises tied to prescribing behavior." },
            { label: "Privacy", detail: "No identifiable patient information or private attendee lists." },
            { label: "Representative role", detail: "Observer or participant status defined in advance." },
            { label: "Recruiting role", detail: "Career-opportunity tables kept separate from education." },
            { label: "CME", detail: "No CME claim unless an accredited provider is involved." },
            { label: "Reporting", detail: "Aggregate event feedback, not individual prescribing insight." },
          ]} />}
        />
      </Section>

      <Section bg="white" id="inquiry">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <Eyebrow lane="partner">Partner Inquiry</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Start with a short discovery conversation.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: "0 0 14px" }}>Share your organization, therapeutic area or career focus, and review requirements so the OncoPath team can determine whether a future dinner is an appropriate fit.</p>
          </div>
          <InquiryForm cta="Request Conversation" message={(n) => `Thank you, ${n}. Your partner inquiry has been prepared for the OncoPath team.`}>
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Work email" type="email" name="email" placeholder="name@company.com" />
            <Field label="Organization" name="organization" placeholder="Company or organization" />
            <Field label="Area of interest" name="interest" placeholder="Disease area, program type, or question" />
            <Textarea label="Notes" name="note" rows={3} placeholder="Optional" />
          </InquiryForm>
        </div>
      </Section>
    </div>
  );
}

// Partner uses a small burgundy-indexed card to differ from blue/sage lanes.
function PartnerLedgerRow({ index, title, detail }) {
  return (
    <article style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-card)", padding: 26, minHeight: 180 }}>
      <span style={{ display: "block", fontSize: "0.76rem", fontWeight: 900, color: "var(--wine-600)", marginBottom: 34 }}>{index}</span>
      <h3 style={{ font: "var(--heading-card)", color: "var(--navy-600)", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ font: "var(--body)", color: "var(--text-body)", margin: 0 }}>{detail}</p>
    </article>
  );
}

Object.assign(window, { PartnerScreen, PartnerLedgerRow });
