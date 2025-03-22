'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
const btn2 = document.getElementsByTagName('button')[1];

const cirkles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => console.log('elements', item))

const oneHeart = document.querySelector('.heart');

console.log(btns);
console.log(btns[2]);
console.log(btn2);
console.log(cirkles);
console.log(hearts);
console.log(oneHeart);