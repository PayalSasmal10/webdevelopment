
function takeInputFromUser(){
    var yourName = document.getElementById("yourname").value;
    var crushName = document.getElementById("crushname").value;
    var count1 = 0;
    var count2 = 0;
    var matchChar1 = "true";
    var matchChar2 = "love";

    for (var i=0; i<yourName.length; i++){
        if (matchChar1.includes(yourName[i].toLowerCase())){
            count1 += 1;
        }
        
    }

    for (var j=0; j<crushName.length; j++){

        if(matchChar1.includes(crushName[j].toLowerCase())){
            count1 += 1;
        }

    }

    if (count1 === 0){
        count1 = '';
    }

    for (var i=0; i<yourName.length; i++){
        if (matchChar2.includes(yourName[i].toLowerCase())){
            count2 += 1;
        }
        
    }

    for (var j=0; j<crushName.length; j++){

        if(matchChar2.includes(crushName[j].toLowerCase())){
            count2 += 1;
        }

    }

    var result = count1.toString()+count2.toString();

    if (parseInt(result) <= 39){
        document.getElementById("result").innerHTML = result +"% "  + '🤯';
    }
    
    else if(parseInt(result) >= 40 && parseInt(result) <= 70){
        document.getElementById("result").innerHTML = result + "% " + '🥳';
    }

    else if (parseInt(result) >= 71){
        document.getElementById("result").innerHTML = result + "% " + '🔥';
    }
    
    document.getElementById('yourname').value = '';
    document.getElementById('crushname').value = '';
}