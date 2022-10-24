const secondHand = document.querySelector('.second-hand');
function setDate() {

    const now = new Date();
    //  for seconds hands
    const seconds = now.getSeconds();
    console.log(seconds);
    const secondDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);