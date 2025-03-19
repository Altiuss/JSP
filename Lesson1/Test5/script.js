"use strict";

const personalPlanPeter1 = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    }
};


//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

//Пример:

//showExperience(personalPlanPeter) => '1 month'

//P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(plan) {

    console.log(plan.skills.exp)
    return plan.skills.exp;


}

// console.log(showExperience(personalPlanPeter));


//2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

//Пример:

//showProgrammingLangs(personalPlanPeter)  =>

//"Язык js изучен на 20% Язык php изучен на 10%"

//Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

//P.S. Для переноса строки используется \n в конце строки.


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month',
    },
    showAgeAndLangs: function (plan) {
        console.log(`Мне ${plan.age} и я владею языками: ${(plan.skills.languages.join(' ').toUpperCase())}`)
    }
};

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);




//{skills: {programmingLangs = {} } = {} } = {}



function showProgrammingLangs(plan) {

    const { skills: { programmingLangs } = {} } = plan || {};

    if (!programmingLangs || Object.keys(programmingLangs).length === 0) {
        return "";
    }
    let rezult = '';
    for (let key in programmingLangs) {

        rezult += `Язык ${key} изучен на ${programmingLangs[key]}\n`

    }


    return rezult;

}

// console.log(showProgrammingLangs(personalPlanPeter));


//1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

//showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

//Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'


const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family1 = [];

function showFamily(arr) {

    console.log(arr.length !== 0 ? `Семья состоит из: ${arr.join(' ')}` : 'Семья пуста');

}
// showFamily(family);

//2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

//Пример:

//standardizeStrings(favoriteCities)  выведет в консоль

//lisbon
//rome
//milan
//dublin
//Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах.
// В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

    let smallarr = arr.map(item => item.toLowerCase());

    return (smallarr.join('\n'));

}

// console.log(standardizeStrings(favoriteCities));

//3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

//ример:

//const someString = 'This is some strange string';
//reverse(someString) => 'gnirts egnarts emos si sihT'

//Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

//Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

//Может показать сложной с первого взгляда, но это совсем не так 🙂


const someString = 'This is some strange string';
const someString1 = 0;

// function reverse(str) {
//     let revstr = "";
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     } else {
//         for (let i = str.length -1; i >= 0; i--) {
//             revstr += str[i];
//         }
//     }
//     return revstr;

// }

function reverse(str) {
return str.split('').reverse().join('');
}



// console.log(reverse(someString));

//4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
//  Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//Вам нужно создать главную функцию банкомата availableCurr,
//  которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу 
// (сейчас представим, что они не могут повторяться), 
// второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
//  Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

//Пример:

//availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
//Вернет строку:

//Доступные валюты:
//UAH
//RUB
//Заметьте:

//- CNY (юань) исчез из списка валют, значит такая валюта закончилась

//- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

//- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = [...baseCurrencies,...additionalCurrencies];
console.log(arr)
const arr1 = [];


function availableCurr(arr,  missingCurr) {
     if (arr.length === 0) { 
        return 'Нет доступных валют';
     } else {
let filteredarr = arr.filter(item => item !== missingCurr);
return (`Доступные валюты:\n${filteredarr.join('\n')}\n`);
}
}

console.log(availableCurr(arr, 'RUB'));