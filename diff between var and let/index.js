// console.log(x);
// Type 1
'use strict'
// xabs = 78;
// console.log(typeof xabs);


// Type 2 var
// i. hoisting
// ii. globally accessable
// iii. functional scope
// iv. re-declaration is allowed

function varExample() {
    console.log(abc);
    for ( var i = 0; i< 3; i++){
        var abc = i;
    };
};
// varExample();
// output undefined

// ii globally accesssable
var abc
function varExample() {
    console.log("First check", abc);
    for ( var i = 0; i< 3; i++){
        abc = i;
    };
    
};
// varExample();

/// iii functional scope
function varExample1() {
    
    for ( var i = 0; i< 3; i++){
        var x = i;
    };
    console.log(x);
};
varExample1();

// iv. re-dclaration allowed

function varExample2() {
    var x = 10;
    var x = 19;
    console.log(x);
    x= 60;
    console.log(x);
};
varExample2();


// Type 3 - let
// Not  Hoisting
// globally accessable
// block scope
// re-declaration is not allow in same block

// 1. 

function varExample3() {
    console.log(c);
    for ( var i = 0; i< 3; i++){
        let c = i;
    };
};
// varExample3();

// 2
let c;
function varExample4() {
    console.log(c);
    for ( var i = 0; i< 3; i++){
        c = i;
    };
    console.log(c);
};
varExample4();

// 3
function varExample5() {
    
    for ( let i = 0; i< 3; i++){
        let x = i;
    };
    console.log(x);
};
// varExample5();

// iv
function varExample6() {
    let t = 10;
    // let t = 19;
    console.log(t);
    t = 60;
    console.log(t);
};
varExample6();

// Type 4- const
// Not  Hoisting
// globally accessable
// block scope
// re-declaration is not allow in same block
const st = 8
function varExample7() {
    const st = 11;
    console.log(st);
    
};
console.log(st);
varExample7();