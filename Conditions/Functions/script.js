"use strict";

console.log(ret());
function showFirstMessage(a) {
    console.log(a);
    let num = 20;
    return num;
}

let result = showFirstMessage("Hallo Aigars!");
console.log(result);

function calc(a, b) {
    return a + b;
}

console.log(calc(33, 55))

function ret() {
    let num = 50;
    return num;
}

const ret1 = function() {
    console.log(55)
};

ret1();

const calc1 = (a, b) =>  a + b;

console.log(calc1(4, 7))