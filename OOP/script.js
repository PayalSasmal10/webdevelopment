'use strict';

// Contructure
const Person =  function(firstName, age) {
    this.firstName = firstName;
    this.age = age;
};

console.log(new Person('Payal', 1994));
const payal = new Person('Payal', 1994);
// What happended when we create a contructure using- new Person()
// 1. New {} (empty) object created.
// 2. function is called, then this keyword set to be newly created empty object {}, i.e this = {}
// 3. {} object linked to prototype
// 4. function automatically returned to {} object (this time object it is not empty).

const prince = new Person('Prince', 1996);

console.log(prince);
console.log(prince instanceof Person);


// Prototypes
Person.prototype.calcAge = function(){
    console.log(2022 - this.age);
};

prince.calcAge();
payal.calcAge();

console.log(payal.__proto__);
console.log(payal.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(payal));
console.log(Person.prototype.isPrototypeOf(prince));
console.log(Person.prototype.isPrototypeOf(Person));

// .LinkedObjectOfProtytpe

Person.prototype.specices = 'Human';

console.log(payal);
console.log(prince);
console.log(payal.hasOwnProperty('species'));
console.log(payal.hasOwnProperty('age'));

console.log(payal.__proto__);
// object prototype (top of prototype chain)
console.log(payal.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 2, 5, 10, 8, 1, 5];

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);
