"use strict";

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {

    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
       x: 7,
       y: 4 
    }
}

const newNumbers = copy(numbers);

console.log(newNumbers);
console.log(numbers);

newNumbers.a = 10;
newNumbers.c.x = 11;


console.log(newNumbers);
console.log(numbers);


const add = {
     d: 17,
     e: 20
}

console.log(Object.assign(numbers, add));
console.log(Object.assign({}, add));

const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();

console.log(newArray);
console.log(oldArray);

newArray[1] = 'assa';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs];


      console.log(internet)

      function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
      }

      const num = [2, 5, 7];

      log(...num);

      const array = ['a', 'b'];

      const newAarray = [...array];

      const q = {
        one: 1,
        two: 2
      }

      const newObj = {...q};

