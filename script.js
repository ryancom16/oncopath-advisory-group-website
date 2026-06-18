const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get("name") || "New contact";
    const kind = contactForm.dataset.formKind;
    const messages = {
      sponsor: `Thank you, ${name}. Your sponsor inquiry has been prepared for the OncoPath team.`,
      resident: `Thank you, ${name}. Your resident interest form has been prepared for the OncoPath team.`,
      consulting: `Thank you, ${name}. Your consulting inquiry has been prepared for the OncoPath team.`,
      default: `Thank you, ${name}. Your invite request has been prepared for the OncoPath team.`,
    };
    formStatus.textContent = messages[kind] || messages.default;
  });
}
