"use strict";

// for (let i = 1; i < 4; i++) {
//     console.log(i);
//     console.log("--------------")
//     for (let j = 10; j < 100; j+=10) {
//         console.log('XXXXXXXXXXXXXXX')
//         console.log(j)
//     }

// }

// let a = "*";

// for (let i = 0; i < 6; i++) {
//     console.log(a);
//     a += "*";
// }

// for (let i = 6; i > 0; i--) {

//     a = a.slice(1);
//     console.log(a)
// }


// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += `\n`;
// }
// console.log(result)


first: for (let i = 0; i < 3; i++) {
    console.log(`%cFirst level: ${i}`, "color:red");
    for (let j = 0; j < 3; j++) {
        console.log(`%cSecond level: ${j}`,"color:blue");
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`%cThird level: ${k}`, "color: green");
    
        }
    }
}