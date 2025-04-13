"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));
console.log(userMap)
console.log(typeof(userMap))

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject)
console.log(typeof(newUserObject))

// console.log(user)

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000]

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i])
}),

// map.set(shops[0], 5000);
// map.set(shops[1], 3567);
// map.set(shops[2], 234);
// map.set(shops[3], 8000);

console.log(map);
console.log(map.get(shops[1]));
console.log(map.has(shops[1]));
console.log(map.size);
console.log(map.keys());


for (let shop of map.keys()) {
    console.log(shop)
}


const goods = [];

for (let shop of map.keys()) {
    goods.push(Object.keys(shop));
}

console.log(goods)


for (let price of map.values()) {
    console.log(price)
}

for (let [shop, price]of map.entries()) {
    console.log([ price, shop])
}


map.forEach((value, key, map) => {
    console.log(key, value)
})

