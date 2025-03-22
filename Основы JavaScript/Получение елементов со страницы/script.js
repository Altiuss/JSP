'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const btn2 = document.getElementsByTagName('button')[1];
const cirkles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
hearts.forEach(item => console.log('elements', item))


box.style.backgroundColor = 'blue';
box.style.width = 'auto';
box.style.cssText = 'background-color: grey; width: auto'

btns[1].style.borderRadius = '100%'
cirkles[1].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}

hearts.forEach(item => {item.style.backgroundColor = 'yellow'})
hearts.forEach(item => {item.style.color = 'green'})

const div = document.createElement('div');
const text = document.createTextNode('Ich bin here');

div.classList.add('black');

// wrapper.prepend(div);
// wrapper.prepend(div);
hearts[1].after(div)

btns[3].remove();
hearts[1].replaceWith(cirkles[0]);

div.innerHTML = '<h3>Hallo Aigars</h3>'

// div.textContent = 'Hallo Aigars';
div.insertAdjacentHTML("beforeend", '<h2>Mucaco</h2>');
// 


