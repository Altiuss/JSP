"use strict";


//1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций).
//  Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

//Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

//НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

//римеры:

//calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

//calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

//alculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

//alculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

//calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'


function calculateVolumeAndArea(length) {
    let volume;
    let area;
    if (typeof (length) != 'number' || length <= 0 || length % 1 != 0) {
        return console.log("При вычислении произошла ошибка");
    } else {
        volume = length * length * length;
        area = length * length * 6;
        return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`)
    }
}

// calculateVolumeAndArea(15.5);

//2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

//Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



//Функция принимает только целое число от 1 до 36.

//Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

//"Ошибка. Проверьте правильность введенного номера места"

//Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

//Пример:

//getCoupeNumber(33)  => 9

//getCoupeNumber(7)  => 2

//getCoupeNumber(300)  => "Таких мест в вагоне не существует"

//getCoupeNumber(0)  => "Таких мест в вагоне не существует"

//getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

//getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

//getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

//Такая функция вполне реальна и может использоваться для формирования билетов, 
// в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.

// function getCoupeNumber(number) {
//     let compartmentNumber;
//     if (number < 0 || typeof(number) != 'number' || number%1 != 0) {
//         return console.log("Ошибка. Проверьте правильность введенного номера места")
//     } else if (number < 1 || number > 36) {
//         return console.log("Таких мест в вагоне не существует");
//     } else {
//         compartmentNumber = parseInt((number + 3) / 4);
//                            = Math.ceil(number / 4);
//         console.log(compartmentNumber)
//     }
// }

//  getCoupeNumber(7);


//  function getCoupeNumber(number) {
//     if (typeof number !== 'number' || number < 1 || !Number.isInteger(number)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (number > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.floor((number - 1) / 4) + 1;
// }

// for (let i = 1; i <= 36; i++){
// console.log(getCoupeNumber(i));    
// }

//(**) Задача с собеседований на числа Фибоначчи
//Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, 
// где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.
//  И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.

//Сразу скажу, что есть варианты решения через прием,
//  называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. 
// Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. 
// Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂

//Задача:

//Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
//  Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
// Причем, их количество должно быть равно переданному аргументу.

//Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

//Пример:

//fib(4) => ''0 1 1 2"

//fib(7) => ''0 1 1 2 3 5 8"

//fib('7') => ''"

//fib(1) => "0"

//fib(0) => ''"

//Задача непростая для новичков, так что с первого раза может не получится.



function fib(number) {
    let first = 0;                    
    let second = 1;                     
    let third = 0;
    let result = "";
  
 if(typeof(number) === 'string' || number === 0 || number%1 != 0) {
    return "";
 }else {

    for (let i = 1; i <= number +2; i++) {
        result = result + ` ${first}`;  
        first = second ;        // a = 0 + 1
         second = third;  
         third= first + second;
        }
        }
    return result.slice(4);
}

console.log(fib(9));

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5)


// let a = 0;     
// let b = 1; 
//let c = 0;
// let str = "";
// for (let i = 1; i <= number; i++) {
//     str = str + ` ${a}`;            Ierakstam 0
//     a 1 = b 1 + c 0;  
//   c = a;                             summ = 1
//                       

                          
// }
// let a = 1;     
// let b = 1;                               nule tagad ir 1
//let c = 1;
// let str = "0";
// for (let i = 1; i <= number; i++) {
//     0 = str + ` ${a}`;              ierakstam 1 musu stringa  rez = 0 1
//    a = b1 + c1;                             partaisam 1 atkal par vieniieku 
 //   c = b 1;                             
// }

// let a = 2;     
// let b = 1; 
//let c = 1;
// let str = "0 1";
// for (let i = 1; i <= number; i++) {
//     0 1  = str + ` ${ a 2}`;               pieliekam musu stringam vel vienu vieninieku rez 0 1 1
//     c = b; 
                          
// }
// let num = 1;     
// let numOld = 0; 
// let str = "";
// for (let i = 1; i <= number; i++) {
//     str = str + ` ${numOld}`;            
//     numOld = num; 
                          
// }

function fib(number) {
    let first = 0;                    
    let second = 1;                     
    let result = "";

    if (typeof number !== 'number' || number < 1 || number % 1 !== 0) {
        return "";
    }

    for (let i = 0; i < number; i++) {
        result += (i === 0) ? `${first}` : ` ${first}`;
        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

// Testēšana:
console.log(fib(7));  // "0 1 1 2"
// console.log(fib(7));  // "0 1 1 2 3 5 8"
// console.log(fib("7"));  // ""
// console.log(fib(1));  // "0"
// console.log(fib(0));  // ""

function fib(n) {
    if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
        return "";
    }

    let fibArray = [];
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibArray.push(0);
        } else if (i === 1) {
            fibArray.push(1);
        } else {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }

    return fibArray.join(" ");
}

// // Testēšana:
// console.log(fib(4));  // "0 1 1 2"
// console.log(fib(7));  // "0 1 1 2 3 5 8"
// console.log(fib("7"));  // ""
// console.log(fib(1));  // "0"
// console.log(fib(0));  // ""
