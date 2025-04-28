'use strict';

/*
Parasta funkcija:
this = window (globālais objekts).

"use strict" režīmā:
Ja parasta funkcija, tad this = undefined (nevis window).

2) Objekta metode:
this = pats objekts, kurš izsauc funkciju.

3) Konstruktors vai klase (new):
this = jaunais objekta eksemplārs, kas tiek izveidots.

Bultfunkcija (=>):
this nemainās, pārmanto this no ārējās vides.

4) call, apply, bind:
this tiek piespiedu kārtā uzstādīts uz norādīto vērtību.

*/


function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this)
        return a + b;
    }
    console.log('sum:', sum());


}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this)
        function shout() {
            console.log('shout:', this)
        }
        shout();
    }
}

obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.hello = function () {
        console.log('Hello!' + this.name);
    }
}

let aigars = new User('Aigars', 23);

function sayName(surname, kikName) {
    console.log('saayName This:', this);
    console.log(this.name + ' ' + surname + ' ' + kikName);
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith', 'kesis');
sayName.apply(user, ['Karaca', 'apends']);

function count(num) {
    return this * num;
}

const double = count.bind(2);

console.log(double(3));

sayName.bind();

const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red'
    console.log('btn:', this)
})

const obj2 = {
    num: 5,
    sayNum: function () {
        const say = () => {
            console.log('say:', this.num);
        };

        say();
    }
}

obj2.sayNum();

const calc = a => a * 2;

console.log(calc(5))
