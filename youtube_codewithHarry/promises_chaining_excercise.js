
const loadScript = (src) =>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script)
        script.onload =() =>{
            resolve("I am loaded !!")
        }
        script.onerror = () =>{
            reject("I am rejected")
        }
    })
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p1.then(value => {
    console.log(value)
}).catch((error)=>{
    console.log("We are sorry unable to resolve the endpoint " + error)
})
