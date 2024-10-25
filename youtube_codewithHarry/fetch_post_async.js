
const createTodo = async () =>{
    try {
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
        let p = await fetch("https://jsonplaceholder.typicode.com/posts",options)
        return await p.json()
    }
    catch (e) {
        console.log("Check the endpoint: \n" + e)
        throw new Error("Thrown New Error" + e)

    }

}


const mainFunc = async ()=>{
    let todo = await createTodo()
    console.log(todo)
}
mainFunc()