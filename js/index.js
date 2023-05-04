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

// Contact Form
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
  });
}

form.addEventListener("submit", handleSubmit);

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
// gsap.timeline()
//   .from(".hero__intro", {opacity: 0, duration: 0.5, y: 75})
//   .from(".hero__social-media", {opacity: 0, duration: 0.5})
//   .from(".nav__logo", {opacity: 0, duration: 0.25, y: -50})
//   .from(".nav__list", {opacity: 0, duration: 0.25, y: -50}, "-=0.25")
//   .from(".nav__toggle", {opacity: 0, duration: 0.25, y: -50}, "-=0.25")
//   .from(".arrow", {opacity: 0, duration: 0.25}, "-=0.25");
