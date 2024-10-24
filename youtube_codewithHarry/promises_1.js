
let p1 = new Promise((resolve,reject)=>{
    console.log("Promise P1 is Pending")
    setTimeout(()=>{
        // console.log("I am a P1 promise and i got resolved!!")
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise P2 is Pending")
    setTimeout(()=>{
        // console.log("I am a P2 promise and i got rejected!!")
        reject(new Error("I am an error"))
    },5000)
})

p1.then(value => {
    console.log("P1 value: " +value)
})

// p2.catch((error) =>{
//     console.log("some error occurred " + error)
// })

p2.then(value => {
    console.log("P2 value: " + value)
},(error)=>{
    console.log("Some Error occurred " + error)
})

console.log(p1,p2)
// console.log(p1)