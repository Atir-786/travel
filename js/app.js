const ham = document.getElementById("hamburger");
const list = document.getElementById("list");
const body = document.querySelector("body");
const listItem = document.querySelectorAll(".list-item");
// console.log(listItem);
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

var splide1 = new Splide(".splide1", {
  type: "slide",
  perPage: 1,
  speed: (number = 5000),
  rewind: true,
  pagination: true,
  rewindSpeed: number,
  width: "100vw",
  height: "70vh",
  interval: 1000,
  pauseOnhover: true,
  drag: true,
  cover: true,
  autoplay: true,
  arrows: window.innerWidth > 770 ? "slider" : false,
}).mount();
// /// // // // ///
var splide2 = new Splide(".splide2", {
  type: "loop",
  perPage:
    window.innerWidth > 900
      ? 3
      : window.innerWidth < 900 && window.innerWidth > 500
      ? 2
      : 1,
  perMove: 1,
  trimSpace: false,
  padding: { left: "1rem", right: "2rem" },
  // speed: (number = 6000),
  // rewind: true,
  // rewindSpeed: number,
  arrows: false,

  pagination: true,
  fixedWidth: "20rem",
  fixedHeight: "17rem",

  gap: "2rem",
  // interval: 1000,
  // pauseOnhover: true,
  drag: true,
  cover: true,
  // autoplay: true,
}).mount();
// const splide2 = new Splide(".splide2");

// splide2.on("pagination:mounted", function (data) {
//   // You can add your class to the UL element
//   data.list.classList.add("splide__pagination--custom");

//   // `items` contains all dot items
//   data.items.forEach(function (item) {
//     item.button.textContent = String(item.page + 1);
//   });
// });

// splide2.mount();

// var width =
//   window.innerWidth > 900
//     ? 3
//     : window.innerWidth < 900 && window.innerWidth > 500
//     ? 2
//     : 1;
// console.log(width);
