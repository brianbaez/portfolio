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
    root.style.setProperty("--clr-secondary", "FFF");

    navDarkMode.classList.replace("fa-sun", "fa-moon");
    darkModeEnabled = false;
  }
});
