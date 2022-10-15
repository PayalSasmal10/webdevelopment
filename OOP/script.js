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

const arr = [3, 2, 5, 10, 8, 1, 5, 3, 10, 8];

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function(){
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x+1);

// Coding challenge for prototype.....
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} car is going at ${this.speed} km/h`);
};

Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`${this.make} car is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 125);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.break();

mercedes.accelerate();
mercedes.break();

// ES6 Class

// class expression
// const PersonCI = class {};

// class declaration
class PersonCl {
    constructor(fullName, birthday){
        this.fullName = fullName;
        this.birthday = birthday;
    }
    // Instance methods
    // Methods will be added to .prototype property 
    calAge() {
        console.log(2022 - this.birthday);
    }

    // 2nd way
    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    // getter 
    get age(){
        return 2022- this.birthday;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name.`);
    }
    get fullName(){
        return this._fullName;
    }

    // static method
    static hey(){
        console.log("Hey there!");
        console.log(this);
    }
}


const oli = new PersonCl('Oli Sasmal', 1994);
console.log(oli);
oli.calAge();

console.log(oli.__proto__ === PersonCl.prototype);

console.log(oli.age);


// can't call like oli.hey() as static method can't be instansciated.
PersonCl.hey()



// 1st way
// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }

oli.greet();

// 1. classes are NOT hoisted
// 2. classes are first-class citizes
// 3. classes are executed in stric mode


const walter = new PersonCl('Walter w', 1994);

// Setter and Getter

const account = {
    owner : 'Puja',
    movements : [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        return this.movements.push(mov);
    }
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);


// object.create

const PersonProto = {
    calCAge() {
        console.log(2022 - this.birthday);
    },

    init(firstName, birthday){
        this.firstName = firstName;
        this.birthday = birthday;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthday = 1996;
steven.calCAge();

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1995);
sarah.calCAge();
