'use strict';


const beoxesQuery = document.querySelectorAll('.box');
const beoxesGet = document.getElementsByClassName('box');

beoxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box);
})

beoxesQuery[0].remove();
beoxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);

}

console.log(beoxesQuery);
console.log(beoxesGet);
console.log(document.body.children);

console.log(Array.from(beoxesGet));

