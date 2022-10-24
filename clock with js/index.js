const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {

    const now = new Date();
    //  for seconds hands
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // Mins hand
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Hour hand
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

setInterval(setDate, 1000);