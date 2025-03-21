"use strict";

let str = "some";

let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));
console.log(str);
console.log(strObj);

console.dir([1, 2, 3]);
console.dir(str);
console.dir(strObj);

const solder = {
    health: 400,
    armor: 100, 
    sayHello: function() {
        console.log("Hallo!")
    }
};

const jonh = Object.create(solder);

// const jonh = {
//     health: 100,
// };



console.log(jonh.sayHello);

// jonh.__proto__ = solder;
Object.setPrototypeOf(jonh, solder);

jonh.sayHello();