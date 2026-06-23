// OncoPath events - single source of truth for public event listings.
// Add or edit an event here once; it renders on the Events page, compact
// Fellows/Residents strips, and the event request dropdown.
(function () {
  const EVENTS = [
    {
      id: "chicago-oncology-fellows-dinner",
      dateTag: "Date pending",
      city: "Chicago, IL",
      title: "Chicago Founding Fellows Dinner",
      blurb:
        "A 10-person founding pilot dinner for oncology fellows and cancer-care trainees across hematology-oncology, medical oncology, radiation oncology, surgical oncology, and pathology-adjacent training paths.",
      audience: "Oncology fellows",
      format: "Dinner + discussion",
      status: "Founding pilot",
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

  const STATUS_CLASS = {
    "Limited seats": "event-chip--limited",
    "Founding pilot": "event-chip--limited",
    "Interest list": "event-chip--interest",
    Open: "event-chip--open",
    Waitlist: "event-chip--waitlist",
  };

  const ctaLabel = (event) =>
    event.status === "Limited seats" || event.status === "Founding pilot" ? "Request a seat" : "Express interest";

  const registrationHref = (event) => `./registration.html?event=${encodeURIComponent(event.id)}`;

  const esc = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function fullRow(event) {
    const flow = event.flow
      .map(
        ([time, label]) =>
          `<li><span class="flow-time">${esc(time)}</span><span class="flow-label">${esc(label)}</span></li>`
      )
      .join("");

    return `
      <details class="event-row" role="listitem">
        <summary>
          <span class="event-when">
            <span class="event-when-tag">${esc(event.dateTag)}</span>
            <span class="event-when-city">${esc(event.city)}</span>
          </span>
          <span class="event-headline">
            <span class="event-title">${esc(event.title)}</span>
            <span class="event-chips">
              <span class="event-chip">${esc(event.audience)}</span>
              <span class="event-chip">${esc(event.format)}</span>
              <span class="event-chip ${STATUS_CLASS[event.status] || ""}">${esc(event.status)}</span>
            </span>
          </span>
          <span class="event-cta">
            <span class="event-disclose">Details<span class="chev" aria-hidden="true">&#9662;</span></span>
          </span>
        </summary>
        <div class="event-detail">
          <p>${esc(event.blurb)}</p>
          <h4>${esc(event.flowTitle)}</h4>
          <ol class="flow-rail">${flow}</ol>
          <a class="button button-primary" href="${esc(registrationHref(event))}">${esc(
            ctaLabel(event)
          )}</a>
        </div>
      </details>`;
  }

  function compactCard(event) {
    return `
      <a class="event-compact" href="./events.html#event-list">
        <span class="event-compact-when">
          <span class="event-compact-tag">${esc(event.dateTag)}</span>
          <span class="event-compact-city">${esc(event.city)}</span>
        </span>
        <span class="event-compact-title">${esc(event.title)}</span>
        <span class="event-chip ${STATUS_CLASS[event.status] || ""}">${esc(event.status)}</span>
      </a>`;
  }

  function render() {
    document.querySelectorAll("[data-events-full]").forEach((element) => {
      element.innerHTML = EVENTS.map(fullRow).join("");
    });

    document.querySelectorAll("[data-events-compact]").forEach((element) => {
      const lane = element.getAttribute("data-events-compact");
      const list = EVENTS.filter((event) => event.lanes.includes(lane));
      element.innerHTML = list.length
        ? list.map(compactCard).join("")
        : '<p class="event-note" style="margin:0">New events are being planned. Check back soon.</p>';
    });

    document.querySelectorAll("select[data-events-options]").forEach((select) => {
      const lane = select.getAttribute("data-events-options");
      const list = lane ? EVENTS.filter((event) => event.lanes.includes(lane)) : EVENTS;
      select.innerHTML =
        list.map((event) => `<option>${esc(event.title)}</option>`).join("") +
        '<option>A future OncoPath event</option>';
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  window.OncoPathEvents = EVENTS;
})();
