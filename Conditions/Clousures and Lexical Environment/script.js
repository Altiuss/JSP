"use strict";

// let number = 5; 


// function logNumber(num) {
//     let number = 4; 
//     console.log(number);
// }

// number = 6;

// logNumber(number);

function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}


const increment = createCounter(); // clousure(замикание)
const increment1 = createCounter(); // clousure(замикание)
const increment2 = createCounter(); // clousure(замикание)
const increment3 = createCounter(); // clousure(замикание)
const increment4 = createCounter(); // clousure(замикание)
const c1 = increment();
const c2 = increment();
const c3 = increment();
const c5 = increment3();
const c6 = increment4();
const c7 = increment4();
const c8 = increment4();
const c4 = createCounter();


console.log(c1, c2, c3, c4,c5,c6,c7,c8);

const myFunction = function () {
     counter = counter + 1;
    return counter;
}

let counter = 0;

// console.log(myFunction());
// console.log(myFunction());
// console.log(myFunction());