const ham = document.getElementById("hamburger");
const list = document.getElementById("list");
const body = document.querySelector("body");
const listItem = document.querySelectorAll(".list-item");
console.log(listItem);
// const toggleNav = function () {
//   list.classList.toggle("toggler");
//   body.classList.toggle("overflow");
// };
ham.addEventListener("click", function () {
  list.classList.toggle("toggler");
  body.classList.toggle("overflow");
});

listItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth > 795) {
      return;
    } else {
      list.classList.toggle("toggler");
      body.classList.toggle("overflow");
    }
  });
});

// ///// //// //// /// /// //

// slider

new Splide(".splide", {
  type: "slide",
  perPage: 1,
  autoPlay: true,
  speed: (number = 1000),
  rewind: true,
  rewindSpeed: number,
  width: "100vw",
  height: "60vh",
  interval: 1000,
  pauseOnhover: true,
  drag: true,
  cover: true,
}).mount();
