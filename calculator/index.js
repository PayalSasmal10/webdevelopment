// detecting button press

let numberofButtton = document.querySelectorAll(".btn").length;

console.log(numberofButtton);

for (var i =0; i< numberofButtton; i++){
    let dom = document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        document.getElementsByName('text_input')[0].value = buttonInnerHTML;
        
    });
    // console.log(dom);
}


function makeCalculate(key){
    switch(key) {
        case 1:


    }

}
