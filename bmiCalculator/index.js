// set the kgs and height values.
let spans = document.querySelectorAll('.span_btn').length;

for(var i = 0; i<spans; i++){
    document.querySelectorAll('.span_btn')[i].addEventListener("click", function(){
        var spanInnerHtml = this.innerHTML;
        pressSpanBtn(spanInnerHtml);
    } );
}

function pressSpanBtn(key){
    let val = parseInt(document.querySelector('.count').value);
    switch(key){
        case "-":
            val -= 1;
            document.querySelector(".count").value = val;
            break;
        case "+":
            val += 1;
            document.querySelector(".count").value = val;
            break;
    }
}

// change the icon color
// let icons = document.querySelectorAll('.icon').length;
// console.log(icons);
// for(var i = 0; i< icons; i++){
//     document.querySelectorAll('.icon')[i].addEventListener("click", function(){
//         var iconHtml = this.innerHTML;
//         console.log(iconHtml);
//     })
// }
const iconColor = document.querySelectorAll("icon");
console.log(iconColor);
// iconColor.addEventListener("click", function onClick(){
//     iconColor.style.color = 'blue';
// })
