
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    navToggle.innerHTML = isOpen
      ? '<i class="ti ti-x" aria-hidden="true"></i>'
      : '<i class="ti ti-menu-2" aria-hidden="true"></i>';
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
      navToggle.innerHTML =
        '<i class="ti ti-menu-2" aria-hidden="true"></i>';
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
      navToggle.innerHTML =
        '<i class="ti ti-menu-2" aria-hidden="true"></i>';
    }
  });
}
