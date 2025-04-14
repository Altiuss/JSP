"use strict";

const bigint = 123879234293876234923487734242n;

const samebigint =BigInt(87324289034628903747283472030875);

console.log(bigint);
console.log(samebigint);
console.log(typeof(samebigint));
console.log(5n / 2n);
console.log(5n < 2);

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number))
console.log(Number(bigInt) + number)