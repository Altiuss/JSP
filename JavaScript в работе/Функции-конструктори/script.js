const num = new Number(3);

console.log(num);


function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}!`);
    }
}

User.prototype.exit = function(name) {
    console.log(`User ${this.name} has gone away`);
}

const aigars = new User('Aigars', 49);
const nadja = new User('Nadja', 52);


console.log(aigars.hello(), nadja.hello());

aigars.hello();
nadja.hello();
aigars.exit();