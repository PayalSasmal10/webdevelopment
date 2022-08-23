// set the kgs and height values.
let spans = document.querySelectorAll('.span_btn').length;

for(var i = 0; i<spans; i++){

    document.querySelectorAll('.span_btn')[i].addEventListener("click", function(){
        var spanInnerHtml = this.innerHTML;
        console.log("inside 1", i);
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
let iconColor = document.querySelectorAll(".icon").length;
// console.log(iconColor);
for(var j=0; j<iconColor; j++){
    console.log(j);
    document.querySelectorAll(".icon")[j].addEventListener("click", function(){
        var selectSex = this.innerHTML;
        console.log("inside", j);
        // document.body.style.color = 'blue';
        console.log(document.querySelectorAll(".icon")[0]);
        chooseSex(selectSex);

    })
}

function chooseSex(key){
    // console.log(key);
}