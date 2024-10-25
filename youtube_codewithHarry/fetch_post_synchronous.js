
let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'Bisshwajit',
        body: 'Samanta',
        userId: 600,
    }),
}

fetch("https://jsonplaceholder.typicode.com/posts",options)
.then((response)=>{
    return response.json()
}).then((value)=>{
    console.log(value)
})