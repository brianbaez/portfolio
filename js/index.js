// Variables
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link");
const navDarkMode = document.querySelector(".nav__dark-mode");
const root = document.querySelector(":root");

var darkModeEnabled = false;

navToggle.addEventListener("click", () => {
  console.log("Clicked");
  document.body.classList.toggle("nav__open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav__open");
  });
});

navDarkMode.addEventListener("click", () => {
  if(!darkModeEnabled) {
    root.style.setProperty("--clr-primary", "#FFF");
    root.style.setProperty("--clr-secondary", "#102734");

    navDarkMode.classList.replace("fa-moon", "fa-sun");
    darkModeEnabled = true;
  }
  else {
    root.style.setProperty("--clr-primary", "#102734");
    root.style.setProperty("--clr-secondary", "#FFF");

    navDarkMode.classList.replace("fa-sun", "fa-moon");
    darkModeEnabled = false;
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations
gsap.timeline()
  .from(".hero__intro", {opacity: 0, duration: 0.5, y: 75})
  .from(".hero__social-media", {opacity: 0, duration: 0.5})
  .from(".nav", {opacity: 0, duration: 0.25, y: -50})
  .from(".arrow", {opacity: 0, duration: 0.25}, "-=0.25");
