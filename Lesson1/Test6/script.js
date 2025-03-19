"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

//У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; 
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

//Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', 
// если нет - 'Бюджета недостаточно'. И все 🙂

//Но эта задача содержит несколько подзадач внутри:

//- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

//- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

//- определение того, хватает ли бюджета на оплату такого объема;

//- все числа идут без единиц измерения для упрощения, просто цифры и все;

//- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.



function isBudgetEnough(data) {
    const { shops, height, moneyPer1m3, budget } = data;
    let m = 0;

    // const totalArea = shops.reduce((sum, shop) => sum + (shop.width * shop.length), 0);

    shops.forEach(el => { (m += (el.width * el.length)) });

    if (m * height * moneyPer1m3 <= budget) {
        console.log("Бюджета достаточно")
    } else {
        console.log("Бюджета недостаточно")
    }

    // console.log(totalArea * height * moneyPer1m3 <= budget ? "Бюджета достаточно" : "Бюджета недостаточно");

};

// isBudgetEnough(shoppingMallData);



//У вас есть список учеников, которые хотят поиграть в игру:

//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
//Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

//Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
// Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

//Пример:

//sortStudentsByGroups(students)  =>

//[
// [ 'Andrew', 'Ann', 'Bernard' ],
// [ 'Cris', 'Josh', 'Mark' ],
//  [ 'Peter', 'Sam', 'Sandra' ],
//  'Оставшиеся студенты: Takesi'
//]
//Если убрать одно студента из списка, то результат будет:

//[
//[ 'Andrew', 'Ann', 'Bernard' ],
//[ 'Cris', 'Josh', 'Mark' ],
//[ 'Peter', 'Sam', 'Sandra' ],
//'Оставшиеся студенты: -'
//]
//А если добавить одного, то:

//[
// [ 'Andrew', 'Ann', 'Bernard' ],
// [ 'Cris', 'Josh', 'Mark' ],
// [ 'Peter', 'Sam', 'Sandra' ],
// 'Оставшиеся студенты: Takesi, Somebody'
//]
//То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

//Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.


// function sortStudentsByGroups(arr) {
//     let size = 3;
//     let rezult = [];
//     let sortarr = arr.sort();
//     let groups = Math.floor(sortarr.length / size);
//     let remaining = sortarr.slice(groups * size);

//     for (let i = 0; i < groups * size; i += size) {
//         rezult.push(sortarr.slice(i, i + size));
//     }

//     if (remaining.length > 0) {
//         rezult.push(`Оставшиеся студенты: ${remaining.join(", ")}`);
//     } else {
//         rezult.push(`Оставшиеся студенты: -`)
//     }
//     return rezult;
// }


// function sortStudentsByGroups(arr) {
//     const size = 3;
//     let sortarr = arr.sort();
//     let groups = Math.floor(sortarr.length / size);
//     let remaining = sortarr.slice(groups * size);

//     let rezult = sortarr.reduce((acc, _, i) => {
//         if (i % size === 0)
//             acc.push(sortarr.slice(i, i + size));
//         return acc;
//     }, []);

//     if (remaining.length > 0) {
//         rezult.push(`Оставшиеся студенты: ${remaining.join(", ")}`);
//     } else {
//         rezult.push("Оставшиеся студенты: ~");
//     }

//     return rezult;
// }


// console.log(sortStudentsByGroups(students));

// function sortStudentsByGroups(arr) {
//     const size = 3;
//     let sortarr = arr.sort();
//     let groups = Math.floor(sortarr.length / size);
//     let remaining = sortarr.slice(groups * size);

//     let result = sortarr.reduce((acc, _, i) => {
//         if (i % size === 0 && i < groups * size) {
//             acc.push(sortarr.slice(i, i + size));
//         }
//         return acc;
//     }, []);

   
//     if (remaining.length > 0) {
//         result.push(`Оставшиеся студенты: ${remaining.join(", ")}`);
//     } else {
//         result.push("Оставшиеся студенты: -");
//     }

//     return result;
// }
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// console.log(sortStudentsByGroups(students));


function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);

// function chunkArrayReduce(array, size) {
//     return array.reduce((acc, _, i) => {
//         if (i % size === 0) acc.push(array.slice(i, i + size));
//         return acc;
//     }, []);
// }

// // Piemērs
// console.log(chunkArrayReduce(arr, 3));
