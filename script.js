const loader = document.querySelector(".loading");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});
// Menu Bar
const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const menuOption = document.querySelector(".menuOption");

openMenu.addEventListener("click", function () {
  menuOption.classList.remove("hidden");
});
closeMenu.addEventListener("click", function () {
  menuOption.classList.add("hidden");
});

//Contact Form
const openContactForm = document.querySelector(".contactUs");
const closeContactMenu = document.querySelector(".closeContactMenu");
const contactForm = document.querySelector(".contactForm");

openContactForm.addEventListener("click", function () {
  contactForm.classList.remove("hidden");
});
closeContactMenu.addEventListener("click", function () {
  contactForm.classList.add("hidden");
});

// Fade In
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
