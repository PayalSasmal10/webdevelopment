const plus = document.getElementById("pluss");
console.log(plus);
let val = parseInt(document.querySelector('input').value);
function btn_click(){
    val += 1;
    document.querySelector("input").value = val;
    
}


