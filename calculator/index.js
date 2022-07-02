// detecting button press

let numberofButtton = document.querySelectorAll(".btn").length;

let outputInputField = 0;


for (var i =0; i< numberofButtton; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        if (outputInputField != 0 && buttonInnerHTML != '+' && buttonInnerHTML != '-' && buttonInnerHTML != '/' && buttonInnerHTML != '*'){
            outputInputField += buttonInnerHTML;
            document.getElementsByName('text_input')[0].value=parseInt(outputInputField);
            console.log(outputInputField);
        }else if(outputInputField != 0 && buttonInnerHTML === '+'){
            console.log(`checking ${buttonInnerHTML} value`);
            outputInputField += buttonInnerHTML;
            document.getElementsByName('text_input')[0].value=outputInputField;
            // arithmeticExpression(buttonInnerHTML);
        
        }
        else{
            outputInputField = document.getElementsByName('text_input')[0].value=buttonInnerHTML;
        }
           
    });
}


function arithmeticExpression(key){
    switch(key){
        case "+":
            console.log("+ was clicked");
            document.getElementsByName('text_input')[0].value=key;
            break;
    }
}