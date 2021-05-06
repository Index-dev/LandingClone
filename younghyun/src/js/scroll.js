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

// function init() {
// To Do : check last page
// if (checkLastPage) {
// To Do: check exist Pointer => remove
// return
// }
//
// To Do: check exist Pointer => draw
drawPointer();
//
// }
