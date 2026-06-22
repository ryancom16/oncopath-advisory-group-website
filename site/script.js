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
      fellows: `Thank you, ${name}. Your invite request has been prepared for the OncoPath team.`,
      "fellows-interest": `Thank you, ${name}. Your fellows interest form has been prepared for the OncoPath team.`,
      event: `Thank you, ${name}. Your event request has been prepared for the OncoPath team.`,
      resident: `Thank you, ${name}. Your resident interest form has been prepared for the OncoPath team.`,
      consulting: `Thank you, ${name}. Your consulting inquiry has been prepared for the OncoPath team.`,
      sponsor: `Thank you, ${name}. Your partner inquiry has been prepared for the OncoPath team.`,
    };
    if (status) status.textContent = messages[form.dataset.formKind] || messages.fellows;
  });
});
