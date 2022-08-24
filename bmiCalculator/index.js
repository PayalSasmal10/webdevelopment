// set the kgs and height values.
let spans = document.querySelectorAll('.span_btn').length;
console.log(document.querySelectorAll('.span_btn'));
for(var i = 0; i<spans; i++){

    document.querySelectorAll('.span_btn')[i].addEventListener("click", function(){
        var spanInnerHtml = this.innerHTML;
        console.log(spanInnerHtml);
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
console.log(document.querySelectorAll(".icon"));
for(var j=0; j<iconColor; j++){
    console.log(j);
    document.querySelectorAll(".icon")[j].addEventListener("click", function(){
        var selectSex = this.classList[4];
        
        chooseSex(selectSex);

    })
}

function chooseSex(key){
    console.log(key);
    const females = document.getElementById("fst_female");
    const males = document.getElementById("fst_male");
    switch(key){
        case "female":
            females.style.color = 'blue'; 
            break;
        case "male":
            males.style.color = 'blue'; 
            break;
    }
}