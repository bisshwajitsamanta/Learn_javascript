
// let arr = [3,5]
// let [a,b] =arr
// console.log(a,b)
// let arr2 = [4,7,3,1,10,23]
// let [x,y,z, ...rest] = arr2
// console.log(x,y,z,rest)
//
// let arr3 = [42,71,31,14,10,23]
// let [aa,bb,cc, ...newRest] = arr3
// console.log(aa,newRest)

// spread operator

const arr4 = [1,2,4]
const obj = {...arr4}
// console.log(obj)

// function
function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr4))

const result = ((s1,s2,s3)=>{
    return s1+s2+s3
})(...arr4)
console.log(result)


// (()=>{
//     const sum = (x1,x2,x3) => x1+x2+x3
//     console.log(sum(...arr4))
// })(...arr4)


let obj2 = {
    name: "bisshwajit",
    company: 'volvo',
    address: 'xyz'
}
console.log({...obj2})
console.log({...obj2,name: 'payelh',company: 'Mercedez'})
// console.log({name:})