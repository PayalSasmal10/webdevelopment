'use strict';

const Person =  function(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

console.log(new Person('Payal', 1994));

// What happended when we create a contructure using- new Person()
// 1. New {} (empty) object created.
// 2. function is called, then this keyword set to be newly created empty object {}, i.e this = {}
// 3. {} object linked to prototype
// 4. function automatically returned to {} object (this time object it is not empty).

const prince = new Person('Prince', 1996);

console.log(prince);