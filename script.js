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

const cardsMovement = document.querySelector(".cards");

const Allcharacters = {
  "Naruto Uzumaki": [
    "UZUMAKI",
    "https://cdn131.picsart.com/323853150299201.jpg",
  ],
  "Sakura Haruno": [
    "HARUNO",
    "https://th.bing.com/th/id/OIP.U5matykvO_11MY3rf9NgMAAAAA?pid=ImgDet&rs=1",
  ],
  "Sasuke Uchiha": [
    "UCHIHA",
    "https://th.bing.com/th/id/OIP.0lR4ZKTqN64CE8RDrmu1jwHaHa?pid=ImgDet&rs=1",
  ],
  "Kakashi Hatake": [
    "HATAKE",
    "https://th.bing.com/th/id/R.3c0e714d796379ede85d1c202e8237eb?rik=ODn1BQjLEnsA9A&riu=http%3a%2f%2fimg14.deviantart.net%2f603e%2fi%2f2011%2f135%2f9%2ff%2fkakashi_hatake_by_petite_angel-d3ggchu.jpg&ehk=Tl3aDLEaleKwYL7CkNUiwE%2fy1L%2bled6Ex%2fsGnhfCl1I%3d&risl=&pid=ImgRaw&r=0",
  ],
  "Madara Uchiha": [
    "UCHIHA",
    "https://i.pinimg.com/originals/c8/a8/9d/c8a89d6533b67dc8b66075e15347da8c.jpg",
  ],
  "Obiti Uchiha": [
    "UCHIHA",
    "https://i.pinimg.com/originals/f9/53/ad/f953ad1cfd705c47264423d9f9db2cca.jpg",
  ],
  Jiraya: [
    "UNKNOWN",
    "https://i.pinimg.com/originals/f4/f8/00/f4f80093f81200f43a93381ac7070413.jpg",
  ],
  "Itachi Uchiha": [
    "UCHIHA",
    "https://i.pinimg.com/736x/b1/eb/73/b1eb7395e2b74ef0be12be06a885ed39.jpg",
  ],
  "Rock Lee": [
    "UNKNOWN",
    "https://i.pinimg.com/originals/ec/22/d7/ec22d795db51fa624a2a7854eea9e3a6.jpg",
  ],
  "Shikamaru Nara": [
    "NARA",
    "https://i.pinimg.com/originals/b0/bf/59/b0bf5951929b6fa4e58dfa296e42376c.jpg",
  ],
};

let i = "";
for (const [key, value] of Object.entries(Allcharacters)) {
  console.log(key, value);
  const html = `

  <div class="card">

  <span class = cardImage>
  <img
              src="${value[1]}"
              alt="Naruto" />
              </span>
            <h1>${key}</h1>
            <p>${value[0]} CLAN</p>
          </div>
        `;

  cardsMovement.insertAdjacentHTML("beforeend", html);
}
