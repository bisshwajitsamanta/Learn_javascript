
class Animal{
    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk(){
        console.log(`Animal ${this.name} is walking in the street !!`)
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substring(1,name.length)
    }
}

j = new Animal("dRAMA")
j.walk()