// Fellows Exchange - the most human, community-oriented page.
function FellowsScreen({ go }) {
  const { Hero, Button, SignalStrip, PrincipleCard, Field, Select, Textarea, Tag } = window.OncoPathDesignSystem_1b0a1a;
  return (
    <div>
      <Hero
        lane="fellows"
        image={HERO_FELLOWS}
        imageFallback={HERO_IMG}
        focus="84% 80%"
        eyebrow="Oncology fellows community"
        title="OncoPath Fellows Exchange"
        copy="Physician-led small-group community for oncology subspecialty fellows: clinical education, peer connection, mentorship, and practical guidance for the path from fellowship to practice."
        actions={<>
          <Button as="a" href="#interest">Join Interest List</Button>
          <Button variant="secondary" as="button" onClick={() => go("events")}>View Upcoming Events</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Small rooms", detail: "Limited-seat formats for meaningful discussion." },
        { label: "Fellows first", detail: "Built around early-career oncology and cancer-care training." },
        { label: "Beyond networking", detail: "Mentorship, research, career paths, and practical life advice." },
      ]} />

      <Section bg="cream">
        <TwoColumn
          left={<>
            <SectionHeadingInline eyebrow="Fellows Exchange" lane="fellows" />
            <h2 style={{ font: "var(--display-2)", margin: 0 }}>Worth showing up for after a long clinical day.</h2>
          </>}
          right={<div style={{ font: "var(--prose)", color: "var(--text-body)" }}>
            <p style={{ marginTop: 0, marginBottom: 0 }}>OncoPath Fellows Exchange is designed for fellows who want more than another dinner lecture: a smaller room, useful conversation, real peer connection, and practical guidance on research, publishing, career paths, money, mentorship, and life after fellowship.</p>
          </div>}
        />
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="What To Expect" lane="fellows" title="A polished community model without the conference sprawl." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {[
            ["01", "Focused discussion", "A single clinical or professional theme with time for real questions and peer perspective.", "white"],
            ["02", "Physician-led format", "Programming guided by clinicians who understand fellowship training and oncology practice.", "cream"],
            ["03", "Small-group setting", "A professional environment designed for conversation, not a crowded ballroom.", "sage"],
            ["04", "Peer connection", "Meet fellows across programs working through similar clinical and career questions.", "cream"],
            ["05", "Mentorship themes", "Research, publishing, fellowship navigation, employment paths, and financial foundations.", "sage"],
            ["06", "Transparent support", "Any sponsor support is clearly disclosed and kept separate from clinical judgment.", "white"],
          ].map(([i, t, d, tint]) => (
            <PrincipleCard key={i} index={i} title={t} tint={tint}>{d}</PrincipleCard>
          ))}
        </div>
      </Section>

      <Section bg="deep">
        <TwoColumn
          left={<>
            <SectionHeadingInline eyebrow="Program Model" lane="warm" />
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Built as a recurring professional community.</h2>
            <p style={{ color: "var(--text-on-dark-soft)", fontSize: "1.08rem", maxWidth: 540, margin: "0 0 32px" }}>Fellows Exchange can host dinners, journal discussions, mentorship sessions, research conversations, and career-focused gatherings without making one event format define the whole platform.</p>
            <Button as="button" onClick={() => go("events")}>View Upcoming Events</Button>
          </>}
          right={<BoundaryPanel heading="Core programming themes" items={[
            { label: "Clinical education", detail: "Journal club, new research, disease-area updates, and practical clinical perspective." },
            { label: "Research craft", detail: "How to find mentors, shape abstracts, publish papers, and build scholarly momentum." },
            { label: "Career navigation", detail: "Academia, hospital practice, private practice, industry, and hybrid opportunities." },
            { label: "Life logistics", detail: "Financial basics, fellowship navigation, employment decisions, and workplace guidance." },
            { label: "Community", detail: "A durable network of peers and mentors across oncology training programs." },
          ]} />}
        />
      </Section>

      <Section bg="cream" id="interest">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <SectionHeadingInline eyebrow="Fellows Interest" lane="fellows" />
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Join the Fellows Exchange interest list.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: "0 0 18px" }}>Share a few details so the OncoPath team can learn what programming would be valuable and send updates when relevant fellow-facing events open.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Tag lane="fellows">Fellows community</Tag>
              <Tag>Event updates</Tag>
            </div>
          </div>
          <InquiryForm cta="Join Interest List" message={(n) => `Thank you, ${n}. Your fellows interest form has been prepared for the OncoPath team.`}>
            <Field label="Full name" name="name" placeholder="Your name" />
            <Field label="Email" type="email" name="email" placeholder="name@example.com" />
            <Field label="Fellowship program / institution" name="program" placeholder="Program or institution" />
            <Select label="Training year" name="trainingYear" options={["First-year fellow","Second-year fellow","Third-year fellow","Chief fellow","Other / not listed"]} />
            <Field label="Specialty focus" name="specialty" placeholder="Medical, surgical, radiation, hematologic oncology, or interest" />
            <Textarea label="Topics you would value" name="topics" rows={3} placeholder="Research, publishing, career paths, mentorship, financial basics..." />
          </InquiryForm>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { FellowsScreen });
