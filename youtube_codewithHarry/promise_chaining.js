
let p1 = new Promise((resolve, _)=>{
    setTimeout(()=>{
        resolve("I am resolved after 2 seconds !!")
    },2000)
})

p1.then(value => {
    console.log(value)
    return new Promise((resolve, _) => {
        resolve("Promise 2 resolved !!")
    }).then((value)=>{
        console.log("We are done** " + value)
        return ("Success Status: 200")
    }).then((value)=>{
        console.log("We are finally done!! " + value)
    })
})