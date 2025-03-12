"use strict";

const obj = new Object();

const options = {
    name: "test",
    width: +1024,
    height: -1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test')
    },
}

console.log(options);

const {border, bg} = options.colors;

console.log(border);



// console.log(options.width, options.name, options.height);

// // delete options.width;

// console.log(options.width, options.name, options.height);

// let counter = 0;

// for (let key in options) {
//     if ((typeof (options[key]) === 'object')) {
//         for (let i in options[key]) {
//             console.log(`The property ${key} property ${i} has the value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`The property ${key} has the value ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

// console.log(Object.keys(options))
// console.log(Object.keys(options).length)

