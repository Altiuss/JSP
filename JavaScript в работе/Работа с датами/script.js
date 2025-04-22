"use strict";



const now = new Date();



console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());
console.log('getTime:',now.getTime());

let start  = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 2;
}


let end = new Date();


console.log(`Cikls nostradaja par ${end - start} milisekundem`)