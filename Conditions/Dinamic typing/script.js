"use strict";


// To String

//1)
console.log(typeof(String(null)));
console.log(String(null));
console.log(String(100));


//2)
console.log(typeof(null + ''));



const num = 5;

const fontSize = 26 + "px" + 23;

console.log(fontSize);


//To number


//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(Number(+'4')));

//3)

console.log(typeof(parseInt(fontSize, 10)));
console.log(parseInt(fontSize, 10));


//To boolean

// 1)

0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log('working...')
}

switcher = 1;

if (switcher) {
    console.log('working...')
}

// 2)


console.log(typeof(Boolean('4')));

// 3)
console.log('typof3:', typeof(!!"45"));