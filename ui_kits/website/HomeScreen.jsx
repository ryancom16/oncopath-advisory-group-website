// Homepage — umbrella brand architecture, four lanes.
function HomeScreen({ go }) {
  const { Hero, Button, SignalStrip, LaneCard } = window.OncoPathDesignSystem_1b0a1a;
  return (
    <div>
      <Hero
        lane="fellows"
        image={HERO_IMG}
        focus="center"
        title="OncoPath Advisory Group"
        copy="Physician-led oncology community, education, and advisory services for clinicians moving from training to practice, and for organizations working along the path to better cancer care."
        actions={<>
          <Button as="button" onClick={() => go("events")}>Upcoming Events</Button>
          <Button variant="secondary" as="button" onClick={() => go("fellows")}>Fellows Exchange</Button>
          <Button variant="secondary" as="button" onClick={() => go("consulting")}>Consulting Services</Button>
        </>}
      />

      <SignalStrip items={[
        { label: "Path to Cure", detail: "OncoPath is about the path toward better cancer care." },
        { label: "Path to Independent Practice", detail: "Support for fellows, residents, and early-career physicians." },
        { label: "Board-Certified Expertise", detail: "Consulting led by licensed oncology and hematology specialists." },
      ]} />

      <Section bg="white">
        <SectionHeading eyebrow="Practice Areas" lane="fellows" title="Four lanes under one physician-led advisory group." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18 }}>
          <LaneCard lane="fellows" index="01" title="Oncology Subspecialty Fellows" link={{ label: "Explore Fellows Exchange →", href: "#" }} onClick={() => go("fellows")} style={{ cursor: "pointer" }}>
            Dinner series, peer community, mentorship, research and publishing guidance, and career navigation for fellows across the oncologic subspecialties — medical, surgical, radiation, and hematologic oncology.
          </LaneCard>
          <LaneCard lane="residents" index="02" title="Resident Physicians" link={{ label: "Explore Resident Pathways →", href: "#" }} onClick={() => go("residents")} style={{ cursor: "pointer" }}>
            Programming for residents considering hematology-oncology and exploring the path into the cancer-care subspecialties.
          </LaneCard>
          <LaneCard lane="consulting" index="03" title="Consulting Services" link={{ label: "View Consulting Services →", href: "#" }} onClick={() => go("consulting")} style={{ cursor: "pointer" }}>
            Medical oncology and hematology consulting provided by board-certified, licensed medical oncologists and hematologists.
          </LaneCard>
          <LaneCard lane="events" index="04" title="Upcoming Events" link={{ label: "View Upcoming Events →", href: "#" }} onClick={() => go("events")} style={{ cursor: "pointer" }}>
            Small-group dinners, mentorship sessions, and oncology community gatherings by city, date, audience, and registration status.
          </LaneCard>
        </div>
      </Section>
    </div>
  );
}

// Eyebrow-only heading helper (when the h2 is set separately).
function SectionHeadingInline({ eyebrow, lane }) {
  const { Eyebrow } = window.OncoPathDesignSystem_1b0a1a;
  return <Eyebrow lane={lane}>{eyebrow}</Eyebrow>;
}

Object.assign(window, { HomeScreen, SectionHeadingInline });
