
class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " of color" + " " +this.color +  " is running !!")

    }
    shout() {
        console.log(this.name + " of color" + " " + " is shouting !!")
    }
}

class Monkey extends Animal{
    eatBanana() {
        console.log(this.name + " eats Banana !!")
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

let dog = new Animal("Bruno","Brown")
let chimpu = new Monkey("Chinu","Orange")

dog.shout()
chimpu.eatBanana()
chimpu.run()
chimpu.shout()
chimpu.hide()