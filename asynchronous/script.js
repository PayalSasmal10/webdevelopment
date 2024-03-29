'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg);

   // Opacity is added to finally method
    countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
/*
const getCountryData = function (country) { 
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();


request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.currencies.USD);
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
});
};

getCountryData('portugal');
getCountryData('usa');*/



// Call back hell example

const renderCountry = function (data, className='') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // Opacity is added to finally method
        countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) { 

    // AJAX Call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    
    
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // REnder country 1
        renderCountry(data);

        // Get neighbour country 2
        const neighbour = data.borders?.[0];

        if(!neighbour) return;

        // AJAX Call neighbour 
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        // call back hell
        request2.addEventListener('load', function () {
            const data1 = JSON.parse(this.responseText);
            console.log(data1);

            renderCountry(data1, 'neighbour');
        });
        
    });
};

// getCountryAndNeighbour('germany');
getCountryAndNeighbour('usa');
*/

const request = fetch('https://restcountries.com/v2/name/germany');
console.log(request);

// without arrow function
/*
const getCountyDataUsingPromise = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`).then(function (response) {
        console.log(response);
        // to read the promises 
        return response.json();
    }).then(function (data) {
        console.log(data);
        renderCountry(data[0])
    });
};
*/

// with arrow function 
/*
const getCountyDataUsingPromise = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`
    ).then(response => {
        console.log(response);
        
        // Manually handeling the status
        if(!response.ok)
            throw new Error(`Country is not found (${response.status})`);
        return response.json();

    }).then(data => { 
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];
        console.log(neighbour);

        if(!neighbour) return;

        // neighbour country 1
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        
    })
    .then(responseNeighbour => responseNeighbour.json())
    .then(data1 => {
        renderCountry(data1, 'neighbour');
        const neighbour = data1.borders?.[0];
        console.log(neighbour);

        if(!neighbour) return;

        // Neighbour country 2
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(responseNeiNei => responseNeiNei.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
        console.error(`${err} 💥 💥`),
        renderError(`Something went wrong 💥 💥 ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
        
    
};
*/

const getJSON = function(url, errMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        console.log(response);
        
        // Manually handeling the status
        if(!response.ok)
            throw new Error(`${errMsg} (${response.status})`);
        return response.json();

    });
};

// with arrow function- remove code repetative
const getCountyDataUsingPromise = function (country) {
    // country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => { 
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];
        console.log(neighbour);

        if(!neighbour) throw new Error("No Neighbour found!");

        // neighbour country 1
        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
        
    })
    .then(data1 => {
        renderCountry(data1, 'neighbour');
        const neighbour = data1.borders?.[0];
        console.log(neighbour);

        if(!neighbour) throw new Error('No Neighbour found!');

        // Neighbour country 2
        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
        console.error(`${err} 💥 💥`),
        renderError(`Something went wrong 💥 💥 ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });

};


btn.addEventListener('click', function () {
    getCountyDataUsingPromise('portugal');
});

// getCountyDataUsingPromise('australia');


///////////////////////////////////////////
// Event loop Examples

/*
console.log('Test Start');
setTimeout(() => console.log('0 set time out'), 0);
Promise.resolve('Resolved promise 1.').then(res => console.log(res));

Promise.resolve('Promise resolve 2').then(res => {
    for(let i = 0; i < 1000000; i++) {}
    console.log(res);
}
    
);
console.log('Test End');
*/

//////////////////////////////////////////////////////
// Promises 

/*
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("Lottery draw is happening....");
    setTimeout(function () {
        if(Math.random() >= 0.5){
            resolve("You win!");
        }else{
            reject( new Error("You lost your money"));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying setTimeOut
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);

    });
    
};

wait(2)
    .then(() => {
        console.log('1 second pass....');
        return wait(1);
    })
    .then(() => {
        console.log('2 seconds pass....');
        return wait(1);
    })
    .then(() => {
        console.log('3 seconds pass....');
        return wait(1);
    })
    .then(() => console.log('4 seconds pass...'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/



///////////////////////////// 
// Async and Await

const whereAmI = async function (country) {
    /* This is same like below await and async
        fetch(`https://restcountries.com/v2/name/${country}`)
        .then(res => res.json())
        .then(data => renderCountry(data[0]));
    */
    
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    

};
whereAmI('portugal');
console.log('FIRST');