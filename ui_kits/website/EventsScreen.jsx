// Events - operational surface for scalable event lists, details, and registration.
const { useState: useEventsState } = React;

const ONCOPATH_EVENTS = [
  {
    id: "chicago-oncology-fellows-dinner",
    dateTag: "Date pending",
    city: "Chicago, IL",
    title: "Chicago Oncology Fellows Dinner",
    blurb:
      "A limited-seat Chicago dinner for oncology fellows and cancer-care trainees across hematology-oncology, medical oncology, radiation oncology, surgical oncology, and pathology-adjacent training paths.",
    audience: "Oncology fellows",
    format: "Dinner + discussion",
    status: "Limited seats",
    lanes: ["fellows"],
    flowTitle: "Evening flow",
    flow: [
      ["6:30", "Arrival, introductions, networking, and optional cocktails."],
      ["7:00", "Fellow-led journal club, new research discussion, or clinical topic."],
      ["7:30", "Career paths, publishing, mentorship, finance, or fellowship navigation."],
      ["8:00", "Dessert and social hour for peer connection and informal conversations."],
    ],
  },
  {
    id: "research-publishing-workshop",
    dateTag: "Planning",
    city: "Chicago, IL",
    title: "Research & Publishing Workshop",
    blurb:
      "A small working session on abstracts, manuscripts, mentorship, and building a scholarly direction during training.",
    audience: "Fellows & residents",
    format: "Workshop",
    status: "Interest list",
    lanes: ["fellows", "residents"],
    flowTitle: "Session flow",
    flow: [
      ["Part 1", "From question to abstract."],
      ["Part 2", "Manuscript framing and submission."],
      ["Part 3", "Mentorship, accountability, and next steps."],
    ],
  },
  {
    id: "resident-specialty-roundtable",
    dateTag: "Planning",
    city: "Chicago, IL",
    title: "Resident Specialty Roundtable",
    blurb:
      "An informal conversation for residents exploring cancer-care specialties, with near-peer and faculty perspective.",
    audience: "Resident physicians",
    format: "Roundtable",
    status: "Interest list",
    lanes: ["residents"],
    flowTitle: "Roundtable flow",
    flow: [
      ["Open", "Introductions and paths into cancer care."],
      ["Middle", "Specialty Q&A with mentors."],
      ["Close", "Fellowship prep and connections."],
    ],
  },
];

const STATUS_STYLE = {
  Open: { background: "var(--sage-100)", color: "var(--sage-600)" },
  "Limited seats": { background: "var(--brass-200)", color: "var(--wine-700)" },
  Waitlist: { background: "var(--wine-100, #efdfe0)", color: "var(--wine-700)" },
  "Interest list": { background: "var(--blue-100)", color: "var(--blue-600)" },
};

function EventsScreen() {
  const { Hero, Button, SignalStrip, Field, Select, Textarea } = window.OncoPathDesignSystem_1b0a1a;

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
          <Button variant="secondary" as="a" href="#event-register">Join the Interest List</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "One list", detail: "Every OncoPath dinner, workshop, and roundtable in a single place." },
        { label: "Scannable", detail: "Date, city, audience, and seat status at a glance for each event." },
        { label: "Details on demand", detail: "Open an event for its own logistics and evening flow." },
      ]} />

      <Section bg="white" id="event-list">
        <SectionHeading eyebrow="Event List" lane="fellows" title="Upcoming events.">
          <p style={{ font: "var(--prose)", color: "var(--text-body)", margin: "18px 0 0", maxWidth: 620 }}>
            Each event carries its own date, city, audience, and seat status. Open <strong style={{ fontWeight: 700, color: "var(--navy-600)" }}>Details</strong> for that event's specific evening flow.
          </p>
        </SectionHeading>

        <div style={{ display: "grid", gap: 14 }}>
          {ONCOPATH_EVENTS.map((event) => <EventRow key={event.id} event={event} />)}
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: 680, margin: "26px 0 0" }}>
          OncoPath is currently piloting in Chicago. More dates and cities are planned, and new events appear here as they are confirmed.
        </p>
      </Section>

      <Section bg="white" id="event-register">
        <div style={{ display: "grid", gap: "clamp(36px,7vw,90px)", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)", alignItems: "start" }}>
          <div>
            <SectionHeadingInline eyebrow="Event Interest" lane="fellows" />
            <h2 style={{ font: "var(--display-2)", margin: "0 0 24px" }}>Register for an event.</h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.08rem", maxWidth: 480, margin: 0 }}>Choose an event and share a few details. The OncoPath team will confirm fit, send final information, and note any dietary or accessibility needs.</p>
          </div>
          <InquiryForm cta="Submit Request" message={(name) => `Thank you, ${name}. Your request has been prepared for the OncoPath team.`}>
            <Field label="Full name" name="name" placeholder="Your name" />
            <Field label="Email" type="email" name="email" placeholder="name@example.com" />
            <Field label="Program / institution" name="program" placeholder="Program or institution" />
            <Select label="Event of interest" name="event" options={ONCOPATH_EVENTS.map((event) => event.title).concat(["A future OncoPath event"])} />
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

function EventRow({ event }) {
  const { Button } = window.OncoPathDesignSystem_1b0a1a;
  const [open, setOpen] = useEventsState(false);
  const status = STATUS_STYLE[event.status] || STATUS_STYLE.Open;

  const chip = (label) => (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "4px 10px", borderRadius: "var(--radius-pill)", background: "var(--cream)", color: "var(--navy-600)", fontSize: "0.74rem", fontWeight: 700, border: "1px solid var(--line)", whiteSpace: "nowrap" }}>{label}</span>
  );

  return (
    <article style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr) auto", gap: "clamp(16px,3vw,32px)", alignItems: "center", padding: "clamp(18px,2.4vw,26px) clamp(20px,3vw,30px)" }}>
        <div style={{ display: "grid", gap: 4 }}>
          <span style={{ color: "var(--brass-600)", fontSize: "0.72rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em" }}>{event.dateTag}</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 600 }}>{event.city}</span>
        </div>

        <div style={{ minWidth: 0 }}>
          <h3 style={{ font: "var(--heading-card)", fontSize: "1.18rem", color: "var(--navy-600)", margin: "0 0 8px" }}>{event.title}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {chip(event.audience)}
            {chip(event.format)}
            <span style={{ display: "inline-flex", alignItems: "center", padding: "4px 10px", borderRadius: "var(--radius-pill)", fontSize: "0.74rem", fontWeight: 800, whiteSpace: "nowrap", ...status }}>{event.status}</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={() => setOpen((openState) => !openState)}
            aria-expanded={open}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "1px solid var(--line-strong)", borderRadius: "var(--radius)", color: "var(--navy-600)", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "0.86rem", minHeight: 44, padding: "0 16px", cursor: "pointer" }}
          >
            Details
            <span style={{ display: "inline-block", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur) var(--ease)", fontSize: "0.7rem" }}>v</span>
          </button>
          <Button as="a" href="#event-register" size="sm">{event.status === "Limited seats" ? "Request seat" : "Express interest"}</Button>
        </div>
      </div>

      {open && (
        <div style={{ borderTop: "1px solid var(--line)", background: "var(--paper)", padding: "clamp(20px,2.6vw,28px) clamp(20px,3vw,30px)" }}>
          <p style={{ color: "var(--text-body)", margin: "0 0 20px", maxWidth: 760 }}>{event.blurb}</p>
          <h4 style={{ fontSize: "0.74rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--navy-600)", margin: "0 0 14px" }}>{event.flowTitle}</h4>
          <EventFlowRail flow={event.flow} />
        </div>
      )}
    </article>
  );
}

function EventFlowRail({ flow }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${flow.length}, minmax(0,1fr))` }}>
      {flow.map(([time, label], index) => (
        <div key={time} style={{ position: "relative", paddingTop: 26, paddingRight: 14 }}>
          <span style={{ position: "absolute", top: 9, left: 0, right: index === flow.length - 1 ? "50%" : 0, height: 2, background: "var(--brass-200)" }} />
          {index > 0 && <span style={{ position: "absolute", top: 9, left: 0, width: "50%", height: 2, background: "var(--brass-200)" }} />}
          <span style={{ position: "absolute", top: 3, left: 0, width: 14, height: 14, borderRadius: "var(--radius-pill)", background: "var(--brass-600)", border: "3px solid var(--paper)", boxShadow: "0 0 0 1px var(--brass-200)" }} />
          <div style={{ color: "var(--brass-600)", fontSize: "0.82rem", fontWeight: 900, marginBottom: 4 }}>{time}</div>
          <div style={{ color: "var(--text-body)", fontSize: "0.92rem", lineHeight: 1.35 }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { EventsScreen, EventRow, EventFlowRail, ONCOPATH_EVENTS });
