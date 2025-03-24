const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');


// btn.onclick = function() {
//     alert('Click');
// }
const deleter = (e) => {
    e.target.remove();
}

let i = 0;
const deleteElement = (e) => {
    console.log('target:', e.target);
    console.log('currentTarget:', e.currentTarget);

    console.log(e.type);

    i++;
    console.log(i);
    // if (i == 3) {
    //     deleter(e);
    // }
}

btns.forEach(el => el.addEventListener('click', deleteElement, {once: true}));


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
})

console.log();
