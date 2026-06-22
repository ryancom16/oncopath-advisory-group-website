// OncoPath static site — header scroll state, mobile nav, form confirmation.
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

const setHeaderState = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = new FormData(form).get("name") || "there";
    const messages = {
      signup: `Thank you, ${name}. Your request has been prepared for the OncoPath team.`,
      consulting: `Thank you, ${name}. Your consulting inquiry has been prepared for the OncoPath team.`,
      sponsor: `Thank you, ${name}. Your partner inquiry has been prepared for the OncoPath team.`,
    };
    if (status) status.textContent = messages[form.dataset.formKind] || messages.signup;
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event-select]");
  if (!button) return;
  const target = button.getAttribute("data-event-select");
  const select = document.querySelector('#event-register select[name="event"]');
  if (!select) return;
  const match = [...select.options].find((option) => option.value === target || option.text === target);
  if (match) select.value = match.value;
});
