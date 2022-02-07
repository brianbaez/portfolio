const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  console.log("Clicked");
  document.body.classList.toggle("nav__open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav__open");
  });
});
