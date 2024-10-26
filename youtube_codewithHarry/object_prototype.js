let a = {
    name: "Bisshwajit",
    language: "Javascript",
}

console.log(a)

let p = {
    run : () =>{
        console.log("This is a run Method")
    }
}

a.__proto__ = p
a.run()