"use strict";

// Заполните массив цифрами от 5 до 10 включительно. Помните,
//  что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]




// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]





// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) == "number") {
//         data[i] = data[i] * 2;
//     } else {
//         data[i] = data[i] + " - done";
//     }
// }


// console.log(data)

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const result = [];
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = data.length -1 ; i >= 0; i--) {
//     result.push(data[i]);
// }



// console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
const lines = 5;
let result = "";

for (let i = lines; i >= 0; i--) {
    result += " ".repeat(i) + "*".repeat(1 + (lines - i) * 2 ) +"\n";
   
}


console.log(result);



for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)