function checkFirstPage() {
  const sectionPage = document.querySelector(".section");
  return sectionPage.classList.contains("second-page");
}
let preventScroll_1 = false;
window.addEventListener("wheel", checkFirstScroll);
function checkFirstScroll() {
  if (checkFirstPage() && !preventScroll_2) {
    preventScrollabout_2(2000);
    console.log("first");
  }
}

function preventScrollabout_2(time) {
  preventScroll_2 = true;
  setTimeout(() => {
    preventScroll_2 = false;
  }, time);
}
