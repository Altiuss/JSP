'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');




// const width = box.clientWidth;
// const hight = box.clientHeight;


const width = box.scrollWidth;
const height = box.scrollHeight;


console.log(width, height);

btn.addEventListener('click', (e) => {
    console.log(box.scrollTop);
    // box.style.height = box.scrollHeight + 'px';
})



console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);
