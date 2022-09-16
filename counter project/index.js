const count = document.querySelector("#counter");

const buttons = document.querySelectorAll("#button").length;
console.log(buttons);

for(let i= 0; i<buttons; i++){
    console.log(i);
    document.querySelectorAll("#button")[i].addEventListener("click", function(){
        console.log(count);
    })
}