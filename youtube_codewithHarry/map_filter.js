
// map method
let arr = [45,23,21]
// Creates a new array

let a = arr.map((value,index,array)=>{
    console.log(value,index,arr)
    return value+index
})
console.log(a)
console.log(arr) // Doesn't change the original Array

// Filter method
let arr2 = [45,23,21,10,8,4,5,6]
let a2 = arr2.filter((value)=>{
    return value<10
})
console.log(a2)

// Reduce Method
let arr3 = [1,2,3]
let newArr = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newArr)