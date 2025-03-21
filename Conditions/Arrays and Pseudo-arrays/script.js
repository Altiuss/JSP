"use strict";


const arr =[1, 2, 3, 6, 8];

arr[99] = 0;

console.log(arr);

arr.pop();

console.log(arr);

arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++)
console.log(arr[i])

for (let value of arr) {
    console.log(value);
}
console.log("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")

arr.forEach(function(item, i, arr)  {
    console.log(`${i}: ${typeof(item )} in the array ${arr}`)});

    // const str = prompt("", "");
    // const products = str.split(",");

    // console.log(products);

    // console.log(products.length);

    // console.log(products.join("; "));
    console.log(arr.sort((a, b) => a-b));
    console.log(arr.sort((a, b) => b-a));