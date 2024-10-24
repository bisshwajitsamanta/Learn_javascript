

let p1 = new Promise((resolve,reject)=>{
    console.log("I am not resolved !!")
    setTimeout(()=>{
        resolve("True")
    },2000)
})

// Attaching Multiple Handlers
p1.then((value)=>{
    console.log("Congratulations , the promise is now resolved: " + value)
})

// Attaching Multiple Handlers
p1.then(()=>{
    console.log("Hurray")
})

// Attaching Multiple Handlers
p1.then(()=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log("This is another request")
          resolve(1)
      })
  }).then((value)=>{ // Chaining of Promises
      console.log(value)
  })
})