// Events - operational surface for event lists, inline details, and registration.
function EventsScreen() {
  const { Hero, Button, SignalStrip, PrincipleCard, Field, Select, Textarea } = window.OncoPathDesignSystem_1b0a1a;

  return (
    <div>
      <Hero
        lane="fellows"
        image={HERO_EVENTS}
        imageFallback={HERO_IMG}
        focus="center"
        eyebrow="Upcoming OncoPath events"
        title="Upcoming oncology dinners and gatherings."
        copy="Browse upcoming OncoPath dinners, mentorship sessions, and cancer-care community gatherings by city, date, audience, topic, and seat status."
        actions={<>
          <Button as="a" href="#event-list">View Event List</Button>
          <Button variant="secondary" as="a" href="#event-register">Request a Seat</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Event list", detail: "Each event carries its own city, date, audience, and registration status." },
        { label: "Event details", detail: "Timing, location, and evening flow stay inside each event listing." },
        { label: "Future cities", detail: "Additional cities and formats can be added as separate list entries." },
      ]} />

      <Section bg="white" id="event-list">
        <SectionHeading eyebrow="Event List" lane="fellows" title="Upcoming events by city and date." />
        <EventListRow />
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: 760, margin: "20px 0 0" }}>As additional dates or cities are confirmed, each one should be added here as its own list item with its own date, city, audience, status, and optional agenda outline.</p>
      </Section>

      <Section bg="cream">
        <SectionHeading eyebrow="Future Event Types" lane="fellows" title="More ways to connect across cancer-care training." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {[
            ["01", "Fellow dinners", "Medical, hematologic, surgical, radiation, and pathology-adjacent oncology fellows."],
            ["02", "Resident sessions", "Mentorship and specialty exploration for residents considering oncology or caring for cancer patients."],
            ["03", "Research workshops", "Small sessions on abstracts, manuscripts, mentorship, and building scholarly direction."],
            ["04", "Career roundtables", "Academia, hospital practice, private practice, industry, and hybrid career paths."],
            ["05", "Financial basics", "Practical financial literacy designed for physicians in training and early practice."],
            ["06", "Social gatherings", "Low-pressure events where physicians can find peers, friends, and mentors."],
          ].map(([i, t, d]) => (
            <PrincipleCard key={i} index={i} title={t} tint="white">{d}</PrincipleCard>
          ))}
        </div>
      </Section>

      <Section bg="white" id="event-register">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <SectionHeadingInline eyebrow="Request a Seat" lane="fellows" />
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Request a seat or event updates.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: 0 }}>Choose an event and share a few details so the OncoPath team can confirm fit, send final information, and account for dietary or accessibility needs.</p>
          </div>
          <InquiryForm cta="Request Seat" message={(n) => `Thank you, ${n}. Your event request has been prepared for the OncoPath team.`}>
            <Field label="Full name" name="name" placeholder="Your name" />
            <Field label="Email" type="email" name="email" placeholder="name@example.com" />
            <Field label="Program / institution" name="program" placeholder="Program or institution" />
            <Select label="Event of interest" name="event" options={["Chicago Oncology Fellows Dinner - date to be announced","Future OncoPath event"]} />
            <Select label="Role or training path" name="trainingPath" options={["Hematology-oncology fellow","Medical oncology fellow","Radiation oncology resident or fellow","Surgical oncology resident or fellow","Pathology resident or fellow","Resident physician","Other / not listed"]} />
            <Field label="Specialty focus" name="specialty" placeholder="Disease area, oncology specialty, or interest" />
            <Textarea label="Topics you would value" name="topics" rows={3} placeholder="Research, publishing, career paths, mentorship, financial basics..." />
            <Textarea label="Dietary or accessibility notes" name="note" rows={2} placeholder="Optional" />
          </InquiryForm>
        </div>
      </Section>
    </div>
  );
}

function EventListRow() {
  const { Button } = window.OncoPathDesignSystem_1b0a1a;
  const meta = [
    ["City", "Chicago"],
    ["Date", "To be announced"],
    ["Time", "6:30 PM to 8:30 PM"],
    ["Audience", "Oncology fellows and cancer-care trainees"],
    ["Format", "Dinner and moderated discussion"],
    ["Seats", "Limited"],
  ];
  const agenda = [
    ["6:30-7:00", "Arrival, introductions, networking, and optional cocktails."],
    ["7:00-7:30", "Fellow-led journal club, new research discussion, or clinical topic."],
    ["7:30-8:00", "Practical topic: career paths, publishing, mentorship, finance, or fellowship navigation."],
    ["8:00-8:30", "Dessert and social hour for peer connection and informal conversations."],
  ];

  return (
    <article style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "clamp(24px,5vw,58px)", alignItems: "start", background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,4vw,40px)" }}>
      <div>
        <p style={{ color: "var(--brass-600)", fontSize: "0.78rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", margin: "0 0 12px" }}>Date to be announced</p>
        <h3 style={{ font: "var(--display-3)", fontSize: "clamp(1.7rem,3vw,2.5rem)", margin: "0 0 12px" }}>Chicago Oncology Fellows Dinner</h3>
        <p style={{ color: "var(--text-body)", maxWidth: 720, margin: 0 }}>A limited-seat Chicago dinner for oncology fellows and cancer-care trainees, including hematology-oncology, medical oncology, radiation oncology, surgical oncology, and pathology-adjacent training paths.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 1, marginTop: 28, background: "var(--line)", border: "1px solid var(--line)" }}>
          {meta.map(([label, detail]) => (
            <span key={label} style={{ display: "grid", gap: 6, minHeight: 86, padding: 16, background: "var(--paper)", color: "var(--text-body)" }}>
              <strong style={{ color: "var(--navy-600)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>{label}</strong>
              {detail}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 30, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <h4 style={{ fontSize: "0.78rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", margin: "0 0 14px", color: "var(--navy-600)" }}>Evening flow</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 12 }}>
            {agenda.map(([time, detail]) => (
              <span key={time} style={{ display: "grid", gap: 8, minHeight: 136, padding: 16, background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius)", color: "var(--text-body)" }}>
                <strong style={{ color: "var(--brass-600)", fontSize: "0.86rem" }}>{time}</strong>
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 178, alignItems: "stretch" }}>
        <span style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", minHeight: 34, padding: "7px 12px", borderRadius: "var(--radius-pill)", background: "var(--brass-200)", color: "var(--wine-700)", fontSize: "0.74rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em" }}>Date pending</span>
        <Button as="a" href="#event-register">Request Seat</Button>
      </div>
    </article>
  );
}

Object.assign(window, { EventsScreen, EventListRow });
