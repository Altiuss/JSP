

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

   

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
    }
    }


btn.addEventListener('click', myAnimation);

// function logger () {
//     if (i === 3) {
//         console.log('Timer stopt');
//         clearInterval(timerId);
//     } else {
//         console.log('text');
//     i++;
//     }
    
// }

// let id = setTimeout(function log() {
//     console.log('Salom!');
//     id= setTimeout(log, 500);
// }, 500);