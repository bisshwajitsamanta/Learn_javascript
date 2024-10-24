

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1 resolved!!")
    },3000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("Value 2 Resolved")
        reject(new Error("Error occured in Resolving 2nd Promise"))
    },10000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3 Resolved")
    },2000)
})

// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
let promise_all = Promise.any([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})