'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo  = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function(e){
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, s1coords.top+window.pageYOffset
  // );
  
  // old school method
  /*window.scrollTo({
    left: s1coords.left + window.pageXOffset, 
    top: s1coords.top+window.pageYOffset,
    behavior: "smooth",
});*/

// This is support only in modern browser.
section1.scrollIntoView({ behavior : "smooth"});

});

///////////////////////////////////////
// Page Navigation

/*document.querySelectorAll('.nav__link').forEach(function (el) {
  
  el.addEventListener('click', function (e) {
    
      e.preventDefault();
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior : "smooth"});
  });
});*/

/// Page navigation using event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  
  // Matching strategy - can be use to ignore click which is not clicked on the links
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior : "smooth"});

  }

});



///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  
  const clicked = e.target.closest('.operations__tab');

  // guard closer
  if(!clicked) return;

  // remove the activated tab before add
  tabs.forEach(t=> t.classList.remove('operations__tab--active'))

  //  activate the tab
  clicked.classList.add('operations__tab--active');


  // activating content
  console.log(clicked.dataset.tab);
  
  // remove the activated content before add
  tabsContent.forEach(tc=> tc.classList.remove('operations__content--active'));

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

///////////////////////////////////////
// Menu fade animation
// Handler function
const handleHover = function(e) {
  if (e.target.classList.contains('nav__link')) {
    
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');
    // console.log(logo);

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
// passing an "arguments" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


///////////////////////////////////////
// sticky navigation

// 1st way 
/*const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function() {
  console.log(window.scrollY);

  if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

});*/

// 2nd way
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerOvserver = new IntersectionObserver(
  stickyNav, {
    root : null,
    threshold : 0,
    rootMargin : `-${navHeight}px`,
  
});

headerOvserver.observe(header)

///////////////////////////////////////
// Reveal Section

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

}

const sectionObserver = new IntersectionObserver(
  revealSection, {
    root : null,
    threshold : 0.15,
  });

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');

});

///////////////////////////////////////
// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;

  // Replace src with data-src img
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function () {
    entry.target.classList.remove('lazy-img');
  });

  entry.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg,{
  root : null,
  threshold : 0,
  rootMargin : '-200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider - did not implemented









// // Selecting elements

// const header = document.querySelector(".header");

// // creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'we use cookied for improved functionality and analytics. <button class="btn btn--class-cookie">Got it</button>';

// // header.prepend(message);
// // header.append(message);
// // header.before(message);
// header.after(message);

// // Deleting element
// document.querySelector(".btn--class-cookie").addEventListener("click", function(){
//   // message.remove();
//   message.parentElement.removeChild(message);
// })

// // styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);


// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10 )+ 21 + 'px';

// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attribute
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo";

// // Non-Standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'bankist');

// console.log(logo.src); // Absolute
// console.log(logo.getAttribute('src')); // Relative

// console.log(logo.src); // Absolute
// console.log(logo.getAttribute('src')); // Relative

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href); // Absolute
// console.log(link.getAttribute('href')); // Relative

// const twitter_link = document.querySelector('.twitter-link');

// console.log(twitter_link.href); // Absolute
// console.log(twitter_link.getAttribute('href')); // absolute


// // DATASET
// console.log(logo.dataset.versionSet);

// // classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('j');
// logo.classList.contains('j');





