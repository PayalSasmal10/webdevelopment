
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
