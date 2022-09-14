const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["#D800A6", "#1CD6CE", "#8758FF", "#BFACE0", "#D9CB50"];


button.addEventListener("click", btn_click);

function btn_click(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}

