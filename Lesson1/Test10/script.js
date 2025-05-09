"use strict";
/*
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

deepCount([1, 5, 3]) => 3

deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

deepCount([1, 2, [3, 4, [5]]]) => 7

deepCount([]) => 0

deepCount([[[[[[[[[]]]]]]]]]) => 8
*/
let a = [1, 5, 3];

let b = ["1", 5, "3", ["10"]];

let c = [1, 2, [3, 4, [5]]];
let d = [];
let f = [[[[[[[[[]]]]]]]]];



function deepCount(a) {

    let sum = 0;
    if (Array.isArray(a)) {
        for (let item of a) {

            if (Array.isArray(item)) {
                sum += deepCount(item)
                sum += 1;
            } else {
                sum += 1;
            }

        }
    } else {
        sum += 1;
    }

    return sum;
}

// Вариант с циклом
function deepCount(a) {
    let count = a.length;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i]))
            count += deepCount(a[i]);
    }
    return count;
}

// Вариант с методом reduce
function deepCount(a) {
    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}

console.log('a: 3 =>', deepCount(a));
console.log('b: => 5:', deepCount(b));
console.log('c: => 7:', deepCount(c));
console.log('d: => 0:', deepCount(d));
console.log('f: => 8:', deepCount(f));