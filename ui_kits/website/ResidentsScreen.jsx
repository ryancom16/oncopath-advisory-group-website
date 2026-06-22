// Residents — exploratory, developmental pathway page. Distinct rhythm: a
// vertical "pathway" list instead of the dinner timeline, sage temperature.
function ResidentsScreen({ go }) {
  const { Hero, Button, SignalStrip, PrincipleCard, Field, Select, Textarea, Eyebrow } = window.OncoPathDesignSystem_1b0a1a;

  const pathway = [
    ["Notice the pull", "You meet oncology through consults, clinic rotations, research, or personal curiosity."],
    ["Build literacy", "Develop confidence around cancer-care decisions, language, and the patient journey."],
    ["Find mentors", "Talk with fellows, attendings, and near-peers who know the real training landscape."],
    ["Prepare to apply", "Understand how research, mentorship, applications, and interviews fit together."],
  ];

  return (
    <div>
      <Hero
        lane="residents"
        image={HERO_RESIDENTS}
        imageFallback={HERO_IMG}
        focus="58% 20%"
        eyebrow="Resident physician pathways"
        title="Explore the path into oncology."
        copy="Mentorship and educational programming for residents exploring cancer-care careers, including hematology-oncology, radiation oncology, surgical oncology, pathology, and other specialties involved in oncology care."
        actions={<>
          <Button lane="residents" as="a" href="#interest">Join Interest List</Button>
          <Button variant="secondary" as="a" href="#programs">View Program Areas</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Career clarity", detail: "Understand the training path and real practice options." },
        { label: "Oncology literacy", detail: "Build confidence around cancer care across specialties." },
        { label: "Mentor access", detail: "Learn from physicians who know the fellowship landscape." },
      ]} />

      <Section bg="cream" id="programs">
        <TwoColumn
          left={<>
            <Eyebrow lane="residents">Residents</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: 0 }}>For residents finding their place in cancer care.</h2>
          </>}
          right={<div style={{ font: "var(--prose)", color: "var(--text-body)" }}>
            <p style={{ marginTop: 0 }}>Residents often encounter oncology through inpatient consults, clinic rotations, research experiences, or personal curiosity before they know whether hematology-oncology is the right long-term path.</p>
            <p style={{ marginBottom: 0 }}>OncoPath Resident Pathways is designed to make that exploration clearer, more practical, and more connected to real mentorship.</p>
          </div>}
        />
      </Section>

      {/* Distinct motif: a horizontal connected pathway (not the dinner timeline) */}
      <Section bg="white">
        <SectionHeading eyebrow="The Pathway" lane="residents" title="A developmental path, not a single dinner." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}>
          {pathway.map(([t, d], i) => (
            <div key={i} style={{ position: "relative", paddingRight: 22 }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "var(--radius-pill)", background: "var(--sage-600)", color: "#fff", fontWeight: 900, flexShrink: 0, zIndex: 1 }}>{i + 1}</span>
                {i < pathway.length - 1 && <span style={{ flex: 1, height: 2, background: "var(--sage-100)" }} />}
              </div>
              <h3 style={{ font: "var(--heading-card)", color: "var(--navy-600)", margin: "0 0 8px" }}>{t}</h3>
              <p style={{ font: "var(--body)", color: "var(--text-body)", margin: 0, paddingRight: 8 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="cream">
        <SectionHeading eyebrow="Program Areas" lane="residents" title="Support before fellowship decisions are final." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {[
            ["01", "Specialty exploration", "Understand hematology-oncology training, clinical work, lifestyle, and long-term paths."],
            ["02", "Fellowship preparation", "Learn how research, mentorship, applications, and interviews fit together."],
            ["03", "Research orientation", "Find practical routes into abstracts, manuscripts, mentorship, and scholarly work."],
            ["04", "Cross-specialty oncology", "For residents in other specialties who need stronger cancer-care fluency."],
            ["05", "Mentorship events", "Small group conversations with fellows, attendings, and near-peer physicians."],
            ["06", "Career perspective", "Academia, hospital practice, private practice, industry, and hybrid paths."],
          ].map(([i, t, d]) => (
            <PrincipleCard key={i} index={i} title={t} tint="white">{d}</PrincipleCard>
          ))}
        </div>
      </Section>

      <Section bg="white" id="interest">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <Eyebrow lane="residents">Resident Interest</Eyebrow>
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Request a spot at an upcoming event.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: "0 0 18px" }}>Choose an event and share a few details so the OncoPath team can confirm fit and send final information. See all upcoming events.</p>
            <EventCompactList lane="residents" />
          </div>
          <InquiryForm cta="Request a Spot" message={(n) => `Thank you, ${n}. Your request has been prepared for the OncoPath team.`}>
            <Field label="Full name" name="name" placeholder="Your name" />
            <Field label="Email" type="email" name="email" placeholder="name@example.com" />
            <Select label="Event of interest" name="event" options={eventOptionsForLane("residents")} />
            <Field label="Residency program / institution" name="program" placeholder="Program or institution" />
            <Select label="Training year" name="trainingYear" options={["PGY-1","PGY-2","PGY-3","PGY-4+","Other / not listed"]} />
            <Field label="Current specialty or interest" name="specialty" placeholder="Internal medicine, surgery, radiation oncology…" />
            <Textarea label="Topics you would value" name="topics" rows={3} placeholder="Fellowship applications, research, clinical exposure, mentorship…" />
          </InquiryForm>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ResidentsScreen });
