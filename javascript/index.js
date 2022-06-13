
var tweet = prompt("compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters left.");

// slice operator


var tweet = prompt("compose your tweet:");
var tweetCount = tweet.slice(0,140);
alert(tweetCount);


// changing case Text

var myName = "Payal";
myName.toUpperCase();

var name = prompt("what is your name");

var first_ch = name.slice(0,1);

var remain_ch = name.slice(1);

alert("Hello, " + first_ch.toUpperCase() + remain_ch.toLowerCase())


// bmi calculator

function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    console.log(bmi)
    var interpretation = "";
    if (bmi < 18.5) {
        // alert("Your BMI is " + interpretation + ", so you are underweight.")
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
        console.log("interpretation :" + interpretation)
    }
    else if(bmi > 18.5 && bmi < 24.9) {
        // alert("Your BMI is " + interpretation + ", so you a normal weight.")
        interpretation = "Your BMI is " + bmi + ", so you a normal weight.";
    }
    else {
        // alert("Your BMI is " + interpretation + ", so you are overweight.")
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

var bmiMessage = bmiCalculator(60,2)
console.log(bmiMessage)

// Array started


var guestList = ["Payal", "Jack", "Pam", "Lara", "Jason"];

var guestName = prompt("what is your name?");

if (guestList.includes(guestName)){
    alert("Your name is present in guestList");
}
else{
    alert("Your name is NOT present in guestList");
}

/* Write a program from 1 to 100 and print "Fizz" if it is multiples of 3 or "Buzz" if it is multiples of 5
find the number which are multiples of both
*/


function arrayFind(num) {
    if (num % 3 === 0) {
        alert("Fizz");
    }
    else if (num % 5 === 0) {
        alert("Buzz");
    }

    else if ( (num % 3 ===0) && (num % 5 ===0)){
        alert("FizzBuzz");
    }
    
}

for (i = 1; i <=100; i++){
    arrayFind(i)
}
