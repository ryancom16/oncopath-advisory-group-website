// Fellows Exchange — the most human, community-oriented page.
function FellowsScreen({ go }) {
  const { Hero, Button, SignalStrip, PrincipleCard, TimelineStep, Field, Select, Textarea, Tag } = window.OncoPathDesignSystem_1b0a1a;
  return (
    <div>
      <Hero
        lane="fellows"
        image={HERO_FELLOWS}
        imageFallback={HERO_IMG}
        focus="84% 80%"
        eyebrow="Chicago oncology fellows dinner series"
        title="OncoPath Fellows Exchange"
        copy="Physician-led dinner conversations for oncology and hematology fellows: focused clinical education, peer connection, mentorship, and practical guidance for the path from fellowship to practice."
        actions={<>
          <Button as="a" href="#register">Request a Seat</Button>
          <Button variant="secondary" as="a" href="#dinner">View Dinner Details</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Limited seats", detail: "Small-group format for meaningful discussion." },
        { label: "Fellows first", detail: "Built around early-career oncology training." },
        { label: "Beyond networking", detail: "Mentorship, research, career paths, and practical life advice." },
      ]} />

      <Section bg="cream">
        <TwoColumn
          left={<>
            <SectionHeadingInline eyebrow="Fellows Exchange" lane="fellows" />
            <h2 style={{ font: "var(--display-2)", margin: 0 }}>A better room for early-career oncology learning.</h2>
          </>}
          right={<div style={{ font: "var(--prose)", color: "var(--text-body)" }}>
            <p style={{ marginTop: 0 }}>OncoPath Fellows Exchange brings oncology and hematology fellows together for focused, physician-led dinner conversations in Chicago.</p>
            <p style={{ marginBottom: 0 }}>The format is intentionally smaller than a conference: one useful topic, a thoughtful room, strong peer conversation, and practical guidance fellows can carry into research, publishing, career decisions, and the transition to attending life.</p>
          </div>}
        />
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="What To Expect" lane="fellows" title="A polished educational dinner without the conference sprawl." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {[
            ["01", "Focused discussion", "A single clinical or professional theme with time for real questions and peer perspective.", "white"],
            ["02", "Physician-led format", "Programming guided by clinicians who understand fellowship training and oncology practice.", "cream"],
            ["03", "Private-room dinner", "A professional setting designed for conversation, not a crowded ballroom.", "sage"],
            ["04", "Peer connection", "Meet fellows across programs working through similar clinical and career questions.", "cream"],
            ["05", "Mentorship themes", "Research, publishing, fellowship navigation, employment paths, and financial foundations.", "sage"],
            ["06", "Transparent support", "Any sponsor support is clearly disclosed and kept separate from clinical judgment.", "white"],
          ].map(([i, t, d, tint]) => (
            <PrincipleCard key={i} index={i} title={t} tint={tint}>{d}</PrincipleCard>
          ))}
        </div>
      </Section>

      <Section bg="deep" id="dinner">
        <TwoColumn
          left={<>
            <SectionHeadingInline eyebrow="Upcoming Dinner" lane="warm" />
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Chicago fellows dinner details.</h2>
            <p style={{ color: "var(--text-on-dark-soft)", fontSize: "1.08rem", maxWidth: 540, margin: "0 0 32px" }}>OncoPath Fellows Exchange gathers oncology and hematology fellows across the Chicago area for an evening of focused discussion and peer connection. Seats are limited so the room stays useful, conversational, and easy to participate in.</p>
            <Button as="a" href="#register">Request a Seat</Button>
          </>}
          right={<BoundaryPanel heading="Event snapshot" items={[
            { label: "Audience", detail: "Oncology and hematology fellows" },
            { label: "Location", detail: "Chicago private dining room, shared after confirmation" },
            { label: "Time", detail: "6:30 PM to 8:30 PM" },
            { label: "Format", detail: "Dinner, moderated discussion, and peer conversation" },
            { label: "Seats", detail: "Limited to preserve the small-group format" },
          ]} />}
        />
      </Section>

      <Section bg="white">
        <SectionHeading eyebrow="Evening Agenda" lane="fellows" title="A structured dinner with time to actually connect." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          <TimelineStep step="1" title="6:30-7:00">Arrival, introductions, networking, and optional cocktails.</TimelineStep>
          <TimelineStep step="2" title="7:00-7:30">Fellow-led journal club, new research discussion, or clinical topic.</TimelineStep>
          <TimelineStep step="3" title="7:30-8:00">Practical topic: career paths, publishing, mentorship, finance, or fellowship navigation.</TimelineStep>
          <TimelineStep step="4" title="8:00-8:30">Dessert and social hour for peer connection and informal conversations.</TimelineStep>
        </div>
      </Section>

      <Section bg="cream" id="register">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <SectionHeadingInline eyebrow="Request a Seat" lane="fellows" />
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Register interest for the next Chicago dinner.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: "0 0 18px" }}>Share a few details so the OncoPath team can confirm fit, send final event information, and account for dietary or accessibility needs.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Tag lane="fellows">Request to attend</Tag>
              <Tag>Waitlist if full</Tag>
            </div>
          </div>
          <InquiryForm cta="Request Invite" message={(n) => `Thank you, ${n}. Your invite request has been prepared for the OncoPath team.`}>
            <Field label="Full name" name="name" placeholder="Your name" />
            <Field label="Email" type="email" name="email" placeholder="name@example.com" />
            <Field label="Fellowship program / institution" name="program" placeholder="Program or institution" />
            <Select label="Training year" name="trainingYear" options={["First-year fellow","Second-year fellow","Third-year fellow","Chief fellow","Other / not listed"]} />
            <Field label="Specialty focus" name="specialty" placeholder="Oncology, hematology, disease area, or interest" />
            <Textarea label="Topics you would value" name="topics" rows={3} placeholder="Research, publishing, career paths, mentorship, financial basics…" />
            <Textarea label="Dietary or accessibility notes" name="note" rows={2} placeholder="Optional" />
          </InquiryForm>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { FellowsScreen });
