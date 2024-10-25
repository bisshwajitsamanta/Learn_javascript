
try {
    console.log(Dummy)
}
catch  {
    console.log("Balle Balle")
}

try {
    setTimeout(()=>{
        // console.log(Idontknow)
        try {
            console.log(Idontknow)
        } catch {
            console.log("error found")
        }
    })
}
catch {
    console.log("errored")
}