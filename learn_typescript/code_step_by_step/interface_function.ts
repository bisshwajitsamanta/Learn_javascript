
interface IsSum {
    sum: (a:number,b:number)=>number
    greet: (name: string, greet: string) => string
    anotherOptionalSum: (x:number,y?:number) =>number
}

const result: IsSum["sum"] =(a:number,b:number) =>{
    return a+b
}

const greets: IsSum['greet'] = (name: string, greet: string) => {
    return "Hello " + name + " " + greet + " !!"
}

console.log(result(20,20))
console.log(greets("Bisshwajit","Evening"))

const value: IsSum['anotherOptionalSum'] = (x:number,y?:number) =>{
    return y?x +y:x
}

function optionalSum(a:number,b?:number):number{
    return b?a+b:a
}

console.log(optionalSum(100))
console.log(value(200))