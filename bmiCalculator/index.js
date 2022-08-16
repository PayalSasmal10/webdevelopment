let plusbtn = document.getElementById("pluss");
let minusbtn = document.getElementById("minuss");


console.log(minusbtn);
console.log(plusbtn);
let val = parseInt(document.querySelector('input').value);
function btn_click(){
    if (document.getElementById('pluss').clicked === true){
        console.log('minus'+ minusbtn.textContent);
        val = val - 1;
        document.querySelector("input").value = val;
    }
    else if (plusbtn.textContent === '+' ) {
        console.log('plus'+ plusbtn.textContent);
        val += 1;
        document.querySelector("input").value = val;
    }
    
    
    
}


