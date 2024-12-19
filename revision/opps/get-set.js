class Animal {

    constructor(name) {
        this._name = name
    }

    fly() {
        console.log('udta hi firu')
        console.log('in hawao me mai')
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating carrot")
    }
}

let a = new Rabbit('bruno')
a.fly()
console.log(a.name)

a.name = "jack";
console.log(a.name)
let c = 56;

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)