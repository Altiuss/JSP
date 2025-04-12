"use strict"
const birthday = Symbol('birthday');
const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/1993',
    showPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}



console.log(Object.getOwnPropertyDescriptor(user, 'name'))

Object.defineProperty(user, 'name', { writable: false });
Object.defineProperty(user, 'gender', { value: 'male' });
//writable
//enumerable
//configurable

console.log(Object.getOwnPropertyDescriptor(user, 'name'))
console.log(Object.getOwnPropertyDescriptor(user, 'gender'))


Object.defineProperty(user, 'showPublicData', { enumerable: false });

console.log(Object.getOwnPropertyDescriptor(user, birthday))

for (let key in user) console.log(key)

Object.defineProperties(user, {
    name: { wreitable: false },
    surname: { writable: false }
})