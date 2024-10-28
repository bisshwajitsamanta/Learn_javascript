
class Animal {
    constructor(name) {
        this._name = name
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
    fly(){
        console.log("I am Flying !!")
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot")
    }
}

let ani = new Animal("Doggy")
ani.fly()
let chinu = new Rabbit("Chinapam")
console.log(ani.name)
ani.name = "bruno"
console.log(ani.name)
console.log(ani instanceof Animal)
let c = 56
console.log(c instanceof Animal)
console.log(chinu instanceof Animal)