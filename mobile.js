const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".cls");
const menuClose2 = document.querySelector(".close2");
const menuClose3 = document.querySelector(".close3");
const menuClose4 = document.querySelector(".close4");
const overlay = document.querySelector(".overlay");

const overlay1Open = document.querySelector(".open-overlay1");
const overlay1Close = document.querySelector(".cls1");
const overlay1 = document.querySelector(".overlay1");
const overlay2Open = document.querySelector(".open-overlay2");
const overlay2Close = document.querySelector(".cls2");
const overlay2 = document.querySelector(".overlay2");
const overlay3Open = document.querySelector(".open-overlay3");
const overlay3Close = document.querySelector(".cls3");
const overlay3 = document.querySelector(".overlay3");

overlay1Open.addEventListener("click", () => {
  overlay1.classList.add("overlay1--active");
});

overlay1Close.addEventListener("click", () => {
  overlay1.classList.remove("overlay1--active");
});

overlay2Open.addEventListener("click", () => {
  overlay2.classList.add("overlay2--active");
});

overlay2Close.addEventListener("click", () => {
  overlay2.classList.remove("overlay2--active");
});

overlay3Open.addEventListener("click", () => {
  overlay3.classList.add("overlay3--active");
});

overlay3Close.addEventListener("click", () => {
  overlay3.classList.remove("overlay3--active");
});

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  bar.style.top = "-80px";
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  bar.style.top = "0px";
});

menuClose2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClose3.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClose4.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

var lastScrollTop = 0;
bar = document.getElementById("bar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    if (scrollTop > 74) {
      bar.style.top = "-80px";
    }
  } else {
    bar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});

const box = document.querySelector(".overlay1-box");

document.addEventListener("mouseup", function (event) {
  if (event.target.closest(".overlay1-box")) {
    return;
  }
  $("iframe").attr("src", $("iframe").attr("src"));
  overlay1.classList.remove("overlay1--active");
  overlay2.classList.remove("overlay2--active");
  overlay3.classList.remove("overlay3--active");
});
