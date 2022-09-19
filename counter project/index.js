const count = document.querySelector("#counter");
console.log(count.value);
const buttons = document.querySelectorAll("#button");
console.log(buttons);
// console.log("test", document.querySelectorAll("#button"));
for(let i= 0; i<buttons.length; i++){
    
    document.querySelectorAll("#button")[i].addEventListener("click", function(e) {
        e.preventDefault();
        let counts = parseInt(count.innerHTML);
        if(buttons[i].className === "down"){
            counts -= 1;
            
        }else{
            counts += 1;
        }
        count.innerHTML = counts
    })
}