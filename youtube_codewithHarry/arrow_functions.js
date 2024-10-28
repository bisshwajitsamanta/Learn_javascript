
// const sayHello = (name, greeting) => console.log(greeting + " " + name + " !!")
//
// sayHello("Bisshwajit","Evening")

const x = {
    name: "Bisshwajit",
    role: "Javascript Developer",
    exp: 30,
    show: function (){
        console.log(this.name)
        setTimeout(()=>{
            console.log(`The Name is ${this.name}`)
        })
    }
}
console.log(x.name,x.role)
x.show()