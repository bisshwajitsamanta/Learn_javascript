function getFirstElement<T>(array: T[]){
    return array[0]
}

const numbers = [1,2,3]
const firstNumber = getFirstElement<number>(numbers)
console.log(firstNumber)

const strings = ["abc","xyz","sdf"]
const firstStringElement = getFirstElement<string>(strings)
console.log(firstStringElement)