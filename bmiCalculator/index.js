
let spans = document.querySelectorAll('.span_btn').length;

for(var i = 0; i<spans; i++){
    document.querySelectorAll('.span_btn')[i].addEventListener("click", function(){
        var spanInnerHtml = this.innerHTML;
        pressSpanBtn(spanInnerHtml);
    } );
}

function pressSpanBtn(key){
    let val = parseInt(document.querySelector('input').value);
    switch(key){
        case "-":
            val -= 1;
            document.querySelector("input").value = val;
            break;
        case "+":
            val += 1;
            document.querySelector("input").value = val;
    }
}

