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
let iconColor = document.querySelectorAll(".icon").length;
for(var j=0; j<iconColor; j++){
    document.querySelectorAll(".icon")[j].addEventListener("click", function(){
        var selectSex = this.classList[4];
        
        chooseSex(selectSex);

    })
}

function chooseSex(key){
    const females = document.getElementById("fst_female");
    const males = document.getElementById("fst_male");
    switch(key){
        case "female":
            females.style.color = '#717fe0'; 
            males.style.color = 'black'; 
            break;
        case "male":
            males.style.color = '#717fe0'; 
            females.style.color = 'black'; 
            break;
    }
}


// move the arrow function.
document.querySelector(".btn-bmi").addEventListener("click", function(){
    console.log("I am clicked");
});