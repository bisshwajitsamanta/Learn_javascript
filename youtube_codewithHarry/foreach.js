
let num = [3,5,1,2,6]

num.forEach((element) => {
    console.log(element * element)
})

for (let i =0;i<num.length;i++){
    console.log(num[i]*num[i])
}

// Array.form creates from string to Array
let name = "Bisshwajit"
let arr = Array.from(name)
console.log(arr)

for (i of num){
    console.log(i)
}

for (item in num){
    console.log(item)
    console.log(num[item])
}