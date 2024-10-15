async function Bisshwajit(){
    let delhiWeather = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("27 degree celcius");
        },3000)
    })

    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 degree celcius")
        },5000)
    })

    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather:"+ delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather:"+ bangaloreW)
    return "Hi my job is done !!"
}

const samanta = async ()=>console.log("This is from Samanta Function!!")

console.log("Welcome to Weather Control Room !!")
// let a = Bisshwajit()
// let b = samanta()
// a.then((value) => {
//     console.log(value)
// })

const mainProgram = async ()=>{
    let a = await Bisshwajit()
    let b = await samanta()
}
mainProgram()
