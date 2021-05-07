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
  console.log("remove");
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
  console.log("scroll down");
  currentScroll -= 1;
  preventScrollabout(2000);
  transformBody();
}

function scrollUp() {
  console.log("scroll up");
  currentScroll += 1;
  preventScrollabout(2000);
  transformBody();
}

function preventScrollabout(time) {
  preventScroll = true;
  setTimeout(() => {
    preventScroll = false;
  }, time);
}
function transformBody() {
  document.body.style.transform = `translateY(${currentScroll}00%)`;
}
function init() {
  if (currentScroll === 3) {
  } else {
    drawPointer();
  }
  document.body.style.transition = "transform .7s ease-in-out";
  window.addEventListener("wheel", (e) => e.preventDefault(), {
    passive: false,
  });
  addEventListener("wheel", handleWheelEvent);
}

init();
