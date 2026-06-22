// OncoPath website UI kit — click-through across all five surfaces.
const { useState, useRef, useEffect } = React;

function App() {
  const [screen, setScreen] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  const go = (key) => {
    setScreen(key);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const onScroll = (e) => setScrolled(e.target.scrollTop > 8);

  const { SiteFooter } = window.OncoPathDesignSystem_1b0a1a;

  const Screen = {
    home: HomeScreen,
    fellows: FellowsScreen,
    residents: ResidentsScreen,
    events: EventsScreen,
    consulting: ConsultingScreen,
    partner: PartnerScreen,
  }[screen];

  const disclaimers = {
    fellows: "Sponsor support, when present, is disclosed. No CME credit is offered unless expressly stated through an accredited provider. Participants should not share identifiable patient information.",
    residents: "Programming is educational and career-oriented. No CME credit is offered unless expressly stated through an accredited provider.",
    events: "Sponsor support, when present, is disclosed. No CME credit is offered unless expressly stated through an accredited provider. Participants should not share identifiable patient information.",
    consulting: "Website inquiries do not establish a physician-patient relationship. Consulting engagements are scoped separately and subject to applicable clinical, legal, and institutional requirements.",
    partner: "Sponsor support, when present, is disclosed. No CME credit is offered unless expressly stated through an accredited provider. Participants should not share identifiable patient information.",
  };

  // Sub-brand taglines: the education arm (fellows + residents) uses
  // "Path from Training to Practice"; the consulting arm uses "Path to Cure".
  const brandLines = {
    home: "Path to Cure: oncology and hematology education, community, and advisory services.",
    fellows: "Path from Training to Practice: physician-led community and education for oncology fellows.",
    residents: "Path from Training to Practice: oncology exploration and mentorship for resident physicians.",
    events: "Path from Training to Practice: upcoming oncology education and community events.",
    consulting: "Path to Cure: board-certified medical oncology and hematology consulting services.",
    partner: "Path to Cure: physician-led oncology education with carefully scoped partner support.",
  };

  return (
    <div ref={scrollRef} onScroll={onScroll} style={{ height: "100vh", overflowY: "auto", background: "var(--paper)" }}>
      <KitHeader screen={screen} go={go} scrolled={scrolled} />
      <main>
        <Screen go={go} />
      </main>
      <SiteFooter sponsorLink={screen !== "consulting" && screen !== "residents"} disclaimer={disclaimers[screen]} brandLine={brandLines[screen]} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
