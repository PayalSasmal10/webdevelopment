const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".plates");
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;

    const item = {
        text : text,
        done: false
    }
    console.log(item);
    this.reset();
};

addItems.addEventListener('submit', addItem);
