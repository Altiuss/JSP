const btns = document.querySelectorAll('button');

const wrapper = document.querySelector('.btn-block');


console.log(wrapper);


// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList);
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList);
// console.log(btns[0].classList.toggle('blue'));
// console.log(btns[1].classList.toggle('red'));
// console.log(btns[0].classList);

// if(btns[1].classList.contains('red')) {
//     console.log('red')
// }

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

btns[0].addEventListener('click', () => {
    // if(!btns[0].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('blue')
    // }
    btns[1].classList.toggle('red');
})

console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {

        // const btn = document.createElement('button');
        // btn.classList.add('red');
        // wrapper.append(btn);
        console.log('Hallo!')
    }
    console.log(event.target);
})

btns.forEach(btn =>{
    btn.addEventListener('click',  () => {
console.log('Halo Aigars!')
    })
})

