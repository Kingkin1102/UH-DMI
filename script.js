var typed = new Typed(".textx", {
  strings: [
    "Photographer",
    "Student",
    "Junior Programmer",
    "Human:)... Maybe...",
    ":V",
    "♉",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 400,
});

ScrollReveal().reveal(" .hamburger-icon,", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(" .logo", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".about-containers div", {
  delay: 500,
  origin: "top",
  interval: 100,
});
ScrollReveal().reveal(".contact-info-upper-container", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".contact-info-upper-container div", {
  delay: 500,
  origin: "top",
  interval: 300,
});
ScrollReveal().reveal(" .hamburger-icon", {
  delay: 600,
  origin: "top",
});
ScrollReveal().reveal(".nav-links li, #socials-container i", {
  delay: 600,
  origin: "top",
  interval: 300,
});
ScrollReveal().reveal(".round, .about-pic", {
  delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(".section__text__p1", {
  delay: 300,
  origin: "left",
});
ScrollReveal().reveal(".section__text__p2, .text-container", {
  delay: 400,
  origin: "left",
});
ScrollReveal().reveal(".title", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".btn-animation", {
  delay: 500,
  origin: "bottom",
  interval: 300,
});
ScrollReveal().reveal("#closing", {
  delay: 500,
  origin: "bottom",
});
