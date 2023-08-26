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

//Cards
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

const villainCards = document.querySelector(".villainCards");

const villains = {
  "Kaguya Otsutsuki": [
    "OTSUTSUKI",
    "https://66.media.tumblr.com/0bc9c86d2b9bba02ace294162482c313/tumblr_n3ehfwmIfg1slecilo1_500.png",
  ],
  "Madara Uchiha": [
    "UCHIHA",
    "https://i.pinimg.com/originals/c8/a8/9d/c8a89d6533b67dc8b66075e15347da8c.jpg",
  ],
  "Obiti Uchiha": [
    "UCHIHA",
    "https://i.pinimg.com/originals/f9/53/ad/f953ad1cfd705c47264423d9f9db2cca.jpg",
  ],
  Pain: [
    "UZUMAKI",
    "https://s-media-cache-ak0.pinimg.com/736x/a5/15/98/a5159811f17e68257c115790e1b45377.jpg",
  ],
  Zetsu: [
    "UNKNOWN",
    "https://i.pinimg.com/originals/3c/c4/5f/3cc45fa09681b897e13d25d0f58c542f.jpg",
  ],
  Orochimaru: [
    "UNKNOWN",
    "https://i.pinimg.com/736x/a4/4b/ec/a44bec9fc7b90c1990131266b1b66418.jpg",
  ],
  "Kabuto Yakushi": [
    "YAKUSHI",
    "https://i.pinimg.com/736x/dc/e2/8b/dce28b2fe87e4496ce3ac465560d5fd0--paintings-gifts.jpg",
  ],
  "Gaara Sabakuno": [
    "SABAKUNO",
    "https://i.pinimg.com/originals/23/7c/9b/237c9b71437bfd2e6f9f09aa736493e0.jpg",
  ],
  "Zabuza Momochi": [
    "MOMOCHI",
    "https://i.pinimg.com/736x/19/46/d6/1946d67ac3e1d80a689bd7b620d2105e.jpg",
  ],
};

for ([key, value] of Object.entries(villains)) {
  const html = `

  <div class="card card2">

  <span class = cardImage>
  <img
              src="${value[1]}"
              alt="Naruto" />
              </span>
            <h1>${key}</h1>
            <p>${value[0]} CLAN</p>
          </div>
        `;

  villainCards.insertAdjacentHTML("beforeend", html);
}

const beasts = document.querySelector(".tailBeast");

const tailBeasts = {
  SHUKAKU: [
    "ONE TAILED",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/10/Shukaku-Naruto.jpg",
    "GAARA",
  ],
  MATATABI: [
    "TWO TAILED",
    "https://th.bing.com/th/id/R.950f2f0b126c00e7d64b4764e5614398?rik=pOVs4dH86qai3Q&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20130913110251%2fnaruto%2fimages%2fa%2fa7%2fMatatabi.png&ehk=kaNtv0uYdxjp0CqNn2YKz4hGE9e%2bqVnEM1DJSzdZ7vk%3d&risl=&pid=ImgRaw&r=0",
    "YUGITO NII",
  ],
  ISOBU: [
    "THREE TAILED",
    "https://i.pinimg.com/originals/c2/21/1a/c2211ad59e8c9817a96945dae9e72efa.jpg",
    "YAGURA",
  ],

  "SON GOKU": [
    "FORTH TAILED",
    "https://th.bing.com/th/id/OIP.XOyMfI6JY3RxGjjMad-zxQHaG5?pid=ImgDet&rs=1",
    "ROSHI",
  ],

  KOKUO: [
    "FIFTH TAILED",
    "https://i.pinimg.com/originals/f9/8c/72/f98c720667fab706ea821fcca409c640.jpg",
    "HAN",
  ],

  SAIKEN: [
    "SIXTH TAILED",
    "https://th.bing.com/th/id/R.29f5f3b6761fbb6fee1ac8c00a21f2c5?rik=ywxl7trm6%2fJY2Q&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2fnarutofanon%2fimages%2f4%2f4a%2fSix-Tails_Anime.jpg%2frevision%2flatest%3fcb%3d20110711063317&ehk=M2sSA9K%2fTbjbSB1DcwE2mfQhVio%2bBQo48%2bWtbOiTP3U%3d&risl=&pid=ImgRaw&r=0",
    "UTAKATA",
  ],

  CHOMEI: [
    "SEVENTH TAILED",
    "https://i.pinimg.com/originals/c1/d0/13/c1d013abbc7efe17d0adc35d7994c32f.jpg",
    "FU",
  ],

  GYUKI: [
    "EIGTH TAILED",
    "https://th.bing.com/th/id/OIP.fvOywRtdML4Jpu-gThgn0wHaD5?pid=ImgDet&rs=1",
    "KILLER B",
  ],

  KURAMA: [
    "NINTH TAILED",
    "https://animebuddy2.files.wordpress.com/2021/10/kyuubi526251328069668665.jpg",
    "NARUTO",
  ],
};

for ([key, value] of Object.entries(tailBeasts)) {
  const html = `

  <div class="card card2">

  <span class = cardImage>
  <img
              src="${value[1]}"
              alt="Naruto" />
              </span>
            <h1>${key}</h1>
            <p>${value[0]}</p>
            <p>JINCHURIKI - ${value[2]}</p>
          </div>
        `;

  beasts.insertAdjacentHTML("beforeend", html);
}

// UCHIHA TEXT SCROLL
let line1 = document.querySelector(".line-1");
window.onscroll = () => {
  let pos = window.scrollY - 500;
  line1.style.left = `${pos}px`;
};
