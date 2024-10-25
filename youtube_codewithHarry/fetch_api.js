
let p = fetch("https://goweather.herokuapp.com/weather/ny")
p.then((response)=>{
    console.log(response.status)
    console.log(response.headers)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)
})