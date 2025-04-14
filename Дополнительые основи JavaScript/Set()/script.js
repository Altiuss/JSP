"use strict";

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];


const set = new Set(arr);

set.add('Ivan');

const uniquArr = [...set];

console.log(arr);
console.log(set);
console.log('values:',set.values());
console.log('keys:',set.keys());
console.log(uniquArr);

for (let value of set) console.log(value);


set.forEach((value, valueAgain, set) => {
console.log(value, valueAgain)
})


function unique(arr) {
    return [...(new Set(arr))];
    //return Array.from(new Set(arr))
}


console.log(unique(arr))