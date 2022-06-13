
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