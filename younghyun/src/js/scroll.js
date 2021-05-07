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

function removePointer() {
  const scrollBar = document.querySelector(".footer");
  scrollBar.remove();
}

let preventScroll = false;
let currentScroll = 0;
function handleWheelEvent(event) {
  if (event.deltaY > 0) {
    if (!preventScroll) scrollDown();
    return;
  }
  if (!preventScroll) scrollUp();
  return;
}

function scrollDown() {
  currentScroll -= 1;
  preventScrollabout(1500);
  transformBody();
  if (currentScroll === -3) removePointer();
}

function scrollUp() {
  console.log("scroll up");
  currentScroll += 1;
  preventScrollabout(1500);
  transformBody();
  if (currentScroll === -2) drawPointer();
}

function preventScrollabout(time) {
  preventScroll = true;
  setTimeout(() => {
    preventScroll = false;
  }, time);
}
function transformBody() {
  document.querySelector(
    ".pageContainer"
  ).style.transform = `translateY(${currentScroll}00%)`;
}

function init() {
  document.querySelector(".pageContainer").style.transition =
    "transform .7s ease-in-out";
  window.addEventListener("wheel", (e) => e.preventDefault(), {
    passive: false,
  });
  drawPointer();
  addEventListener("wheel", handleWheelEvent);
}

init();
