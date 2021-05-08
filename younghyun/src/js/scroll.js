const SCROLL_LENGTH = 4;

function drawPointer() {
  const div = document.createElement("div");
  const arrow = document.createElement("img");
  const text = document.createElement("img");
  arrow.src = "../assets/icons/scroll-down-arrow.png";
  text.src = "../assets/icons/scroll-down-text.png";

  div.className = "footer";
  arrow.className = "arrow";
  text.className = "text";

  div.appendChild(arrow);
  div.appendChild(text);

  document.body.appendChild(div);
}

function hidePointer() {
  const scrollBar = document.querySelector(".footer");
  scrollBar.style.opacity = "0";
}
function showPointer() {
  const scrollBar = document.querySelector(".footer");
  scrollBar.style.opacity = "1";
}

let preventScroll = false;
let currentScroll = 0;
function handleWheelEvent(event) {
  if (event.deltaY > 0) {
    if (currentScroll !== -3 && !preventScroll) scrollDown();
    return;
  }
  if (event.deltaY < 0) {
    if (currentScroll !== 0 && !preventScroll) scrollUp();
    return;
  }
}

function scrollDown() {
  currentScroll -= 1;
  preventScrollabout(1500);
  transformContainer();
  addSectionClass();
  if (currentScroll === -3) hidePointer();
}

function scrollUp() {
  currentScroll += 1;
  preventScrollabout(1500);
  transformContainer();
  addSectionClass();
  if (currentScroll === -2) showPointer();
}

function preventScrollabout(time) {
  preventScroll = true;
  setTimeout(() => {
    preventScroll = false;
  }, time);
}
function transformContainer() {
  document.querySelector(".pageContainer").style.transform = `translateY(${
    currentScroll * 25
  }%)`;
}
function addSectionClass() {
  const pages = document.querySelectorAll("#page");
  pages.forEach((page, i) => {
    if (i === -1 * currentScroll) page.classList.add("section");
    if (i !== -1 * currentScroll) page.classList.remove("section");
  });
}
function init() {
  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };
  window.addEventListener("wheel", (e) => e.preventDefault(), {
    passive: false,
  });
  drawPointer();
  addEventListener("wheel", handleWheelEvent);
}

init();
