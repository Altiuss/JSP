"use strict";

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    console.log(curr * amount)
  return  curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

convert(500, usdCurr);
convert(500, eurCurr);

const res = convert(500, usdCurr);
promotion(res);
promotion(convert(500, eurCurr));

function test() {
    for (let i = 0; i <5; i++) {
        console.log(i);
        if (i === 6) return;
    }
    console.log('done!')
}

test();

function doNothing() {};
console.log(doNothing())