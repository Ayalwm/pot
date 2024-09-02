const toggleMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const navMenu = document.getElementById(navId);

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
};

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((currentSection) => {
    const sectionTop = currentSection.offsetTop - 58;
    const sectionHeight = currentSection.offsetHeight;
    const sectionId = currentSection.getAttribute("id");

    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (!sectionsClass) return;

    const isActive =
      scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight;

    toggleClass(sectionsClass, "active-link", isActive);
  });
};

function toggleClass(element, className, isActive) {
  if (!element || typeof className !== "string") return;

  if (isActive) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

sr.reveal(".home_section, .about__img, .Bio__text", {});
sr.reveal(".profile_img, .about__subtitle, .about__text, .Bio__img", {
  delay: 300,
});
sr.reveal(".social_links-icon", { interval: 200 });
sr.reveal(".Bio__data, .background__details", {
  interval: 200,
});
const scrollToTopButton = document.getElementById("scroll-to-top");
const showScrollButton = 100;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > showScrollButton) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
