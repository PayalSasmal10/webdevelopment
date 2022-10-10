'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements

const header = document.querySelector(".header");

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'we use cookied for improved functionality and analytics. <button class="btn btn--class-cookie">Got it</button>';

// header.prepend(message);
// header.append(message);
// header.before(message);
header.after(message);

// Deleting element
document.querySelector(".btn--class-cookie").addEventListener("click", function(){
  // message.remove();
  message.parentElement.removeChild(message);
})

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);


console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10 )+ 21 + 'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-Standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

console.log(logo.src); // Absolute
console.log(logo.getAttribute('src')); // Relative

console.log(logo.src); // Absolute
console.log(logo.getAttribute('src')); // Relative

const link = document.querySelector('.nav__link--btn');

console.log(link.href); // Absolute
console.log(link.getAttribute('href')); // Relative

const twitter_link = document.querySelector('.twitter-link');

console.log(twitter_link.href); // Absolute
console.log(twitter_link.getAttribute('href')); // absolute


// DATASET
console.log(logo.dataset.versionSet);

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('j');
logo.classList.contains('j');




