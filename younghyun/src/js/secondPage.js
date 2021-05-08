function checkSecondPage() {
  const sectionPage = document.querySelector(".section");
  return sectionPage.classList.contains("second-page");
}
let preventScroll_2 = false;
window.addEventListener("wheel", checkSecondScroll);

function checkSecondScroll() {
  const secondTitleContainer = document.querySelector(".secondTitleContainer");
  const secondMap = document.querySelector(".secondMap");
  const secondTitle = document.querySelector(".secondTitle");
  const secondEffect = document.querySelector(".secondEffect");
  if (checkSecondPage() && !preventScroll_2) {
    preventScrollabout_2(2000);
    secondTitleContainer.classList.remove("secondTitleContainer");
    secondMap.classList.remove("secondMap");
    secondTitle.classList.remove("secondTitle");
    secondEffect.classList.remove("secondEffect");
    setTimeout(() => {
      secondTitleContainer.className = "secondTitleContainer";
      secondMap.className = "secondMap";
      secondTitle.className = "secondTitle";
      secondEffect.className = "secondEffect";
    }, 100);
  }
}

function preventScrollabout_2(time) {
  preventScroll_2 = true;
  setTimeout(() => {
    preventScroll_2 = false;
  }, time);
}
