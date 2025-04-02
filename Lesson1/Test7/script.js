"use strict";

//Напишите функцию, которая вычисляет факториал.

//Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

//Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.

//Сам же факториал с примерами выглядит вот так:

//n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула

//Примеры значений для разных n:

//1! = 1
//2! = 2 * 1 = 2
//3! = 3 * 2 * 1 = 6
//4! = 4 * 3 * 2 * 1 = 24
//5! = 5 * 4 * 3 * 2 * 1 = 120
//То есть, вызов нашей функции factorial(5) возвращает число 120

//factorial(4) => 24



function factorial(n) {
    if (n % 1 !== 0) {
        return console.log('error');
    } else if (n <= 0 ) {
        return 1;
    } else if (n > 1) {
        return n * factorial(n - 1);



    } else { return n; }



}



console.log(factorial(0.5));