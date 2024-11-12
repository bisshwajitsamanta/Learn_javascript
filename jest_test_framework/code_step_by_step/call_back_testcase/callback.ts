export function greet(name: string, callback: (message: string) => void) {
    const message = `Hello ${name}`
    callback(message)
}

greet('Bisshwajit',(msg:string)=>{
    console.log(msg)
})