const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".plates");
const items = [];

function addItem(e) {
    e.preventDefault();
    console.log("Hi");
};

addItems.addEventListener('submit', addItem);
