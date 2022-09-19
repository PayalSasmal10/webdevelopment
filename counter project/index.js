const count = document.querySelector("#counter");

const buttons = document.querySelectorAll("#button").length;
console.log(buttons);
// console.log("test", document.querySelectorAll("#button"));
for(let i= 0; i<buttons; i++){
    
    document.querySelectorAll("#button")[i].addEventListener("click", function(e) {
        e.preventDefault();
        
    })
}