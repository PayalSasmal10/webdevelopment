'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg);

   // Opacity is added to finally method
    // countriesContainer.style.opacity = 1;
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
        // countriesContainer.style.opacity = 1;
}
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
const getCountyDataUsingPromise = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`
    ).then(response => {
        console.log(response);
        
        // Manually handeling the status
        if(!response.ok){
            throw new Error(`Country is not found (${response.status})`);
        }
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



btn.addEventListener('click', function () {
    getCountyDataUsingPromise('portugal');
});

getCountyDataUsingPromise('kajsjss');

