function drawPointer() {
    const div = document.createElement("div");
    const arrow = document.createElement("img");
    const text = document.createElement("img");

    arrow.src = "../assets/icons/scroll-down-arrow.png";
    text.src = "../assets/icons/scroll-down-text.png";

    div = modifyDivLocation(div);
    arrow = modifyArrowLocation(arrow);
    text = modifyTextLocation(text);

    div.appendChild(arrow);
    div.appendChild(text);

    document.body.appendChild(div);
}

function modifyDivLocation(arrow) {
    return arrow;
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
