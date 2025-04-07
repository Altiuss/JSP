'use strict';

// let id = Symbol("id");

// const obj = {
//     'name': 'Test',
//     [id]: 123,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol("id");

// // obj[id] = 1;

// console.log(obj.getId());

// console.log(obj);

// for (let value in obj) 
//     console.log(value);



const awesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
}

awesomeDB.id = '454435';

console.log(awesomeDB)
console.log(awesomeDB[Symbol.for("id")])
