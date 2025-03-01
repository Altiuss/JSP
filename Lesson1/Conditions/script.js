"use strict";


// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

// if (0) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

const num = 501;

if (num < 50) {
    console.log("error");
} else if (num > 50) {
    console.log("toBig");
} else {
    console.log("50");
}

(num === 50) ? console.log("50") : console.log("error");


console.log("------------------------------------------")
switch (true) {
    case (num < 50):
        console.log("error");
        break;
    case (num < 50):
        console.log("toBig");
        break;
    case (num == 50):
        console.log("50");
        break;
        default:
            console.log("invalid input")
}