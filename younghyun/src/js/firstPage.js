function checkFirstPage() {
  const sectionPage = document.querySelector(".section");
  return sectionPage.classList.contains("first-page");
}
let preventScroll_1 = false;
window.addEventListener("wheel", checkFirstScroll);

function checkFirstScroll() {
  const firstTitle = document.querySelector(".firstTitle");
  const firstDescription = document.querySelector(".firstDescription");
  const firstButton = document.querySelector(".firstButton");
  if (checkFirstPage() && !preventScroll_1) {
    preventScrollabout_1(2000);
    firstTitle.classList.remove("firstTitle");
    firstDescription.classList.remove("firstDescription");
    firstButton.classList.remove("firstButton");
    setTimeout(() => {
      firstTitle.className = "firstTitle";
      firstDescription.className = "firstDescription";
      firstButton.className = "firstButton";
    }, 100);
  }
}

function preventScrollabout_1(time) {
  preventScroll_1 = true;
  setTimeout(() => {
    preventScroll_1 = false;
  }, time);
}
