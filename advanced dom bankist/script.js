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
  message.remove();
})