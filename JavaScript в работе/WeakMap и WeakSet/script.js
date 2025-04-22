'use strict';

let user = {name: 'Ivan'};



let map = new WeakMap();
map.set(user, 'data');

user = null;

//Nav iespējams redzēt, kas atrodas WeakSet.

//Nav iespējams izmantot forEach() vai for...of.

//Tikai objekti — ne string, number u.c.

let set = new WeakSet();


console.log(map)