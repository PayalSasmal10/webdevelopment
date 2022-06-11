
var tweet = prompt("compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters left.");

// slice operator


var tweet = prompt("compose your tweet:");
var tweetCount = tweet.slice(0,140);
alert(tweetCount);

