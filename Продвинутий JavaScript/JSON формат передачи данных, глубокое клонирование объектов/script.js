'use strict';



const persone = {
    name: 'Alex',
    tel: '+7444477348',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));  // Izveido jaunu objektu

console.log(JSON.parse(JSON.stringify(persone)));
console.log(JSON.stringify(persone));


clone.parents.mom = 'Ann';
persone.parents.dad ='Feddja';

console.log('persone:',persone);
console.log('clone:',clone);