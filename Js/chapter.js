// Know more option

const main1 = document.querySelector(".first");
const main2 = document.querySelector(".second");
const knowMoreBtn = document.querySelector(".narutoKnowMore");

const closeMenuSecond = document.querySelector(".closeMenuSecond");
const main3 = document.querySelector(".third");

knowMoreBtn.addEventListener("click", function () {
  main1.classList.add("hidden");
  main2.classList.add("hidden");
  main3.classList.remove("hidden");
});

closeMenuSecond.addEventListener("click", function () {
  main3.classList.add("hidden");
  main1.classList.remove("hidden");
  main2.classList.remove("hidden");
});

// Repeating years and content

const chapter = document.querySelector(".chapter1");

const chapters = {
  1999: ["01", "naruto begins!", "1"],
  2000: ["02", "mission in the land of waves!", "2"],
  2001: ["03", "the chunnin exam", "3"],
  2002: ["04", "the destruction of the hidden leaf village", "4"],
  2003: ["05", "invasion of the akatsuki!"],
  2003: ["06", "clash! the legendary sanin"],
  2003: ["07", "mission: bring back sasuke"],
  2005: ["08", "kakashi's cronicles: a boy's life on the battlefield"],
  2005: ["09", "growth"],
  2006: ["10", "orochimaru vs sasuke"],
};

for (const [key, value] of Object.entries(chapters)) {
  const html = `
    <div class="chp1Content">
          <div class="chp1LeftContent">
            <h1>${key}</h1>
          </div>
          <div class="chp1RightContent">
            <h1>
              ${value[0]}.
              <h2>${value[1]}</h2>
            </h1>
          </div>
        </div>
        <img class="bgNaruto" src="images/chapter${value[2]}.webp" alt="" />
        `;
  chapter.insertAdjacentHTML("beforebegin", html);
}
