
let a1 = [1,2,3]
let b1 = [3,4,5]
let c1 = [2,15,7]
let d1 =a1.concat(b1).concat(c1)
console.log(d1)
console.log(d1.sort())
console.log(d1)


let num = [551,22,3,14,5,6,7,8,3,229]
console.log(num.sort())

// Sorting Ascending
const compare = (a,b)=>{
    return a -b // if result is positive b is placed before a and vice versa
}

// Descending Sorting
const compareDesc = (a,b) =>{
    return b -a
}

// Unique value

let unique2 = new Set(num)
let uniqueNum = [...new Set(num)] // This puts the unique elements ... with an array.

console.log(num.sort(compare))
console.log(num.sort(compareDesc))
console.log(uniqueNum,typeof uniqueNum)
console.log(unique2,typeof unique2)

console.log(num.reverse())

let deletedArrays = num.splice(2,3,"1024","1025","1026")
console.log(num)
console.log(deletedArrays,typeof deletedArrays)


