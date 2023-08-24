const loader = document.querySelector(".loading");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const menuOption = document.querySelector(".menuOption");

openMenu.addEventListener("click", function () {
  menuOption.classList.remove("hidden");
});
closeMenu.addEventListener("click", function () {
  menuOption.classList.add("hidden");
});
