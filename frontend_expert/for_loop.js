array = [1,2,3,4]

for (let i =0;i<array.length;i++) {
    console.log(array[i]);
}

for (const value of array){
    console.log(value);
}

array.forEach(function (value,index) {
    console.log(value,index)
})

array.forEach(function (value, index) {
    console.log(value, index, this);
}, {name: 'Bisshwajit'})


const mappedArray = array.map(function (value, index) {
    return value + index + this.num;
}, {num: 10})

console.log(mappedArray)


const filteredArray = array.filter(function (value, index) {
    return value > this.num;
},{num:1})

console.log(filteredArray)

console.log("Array values: ",array)

const foundValue = array.find(function (value ,index) {
    return value >this.num; // Returns the fist only value meeting the condition
},{num: 1});

console.log(foundValue)

const allPass = array.every(function (value, index) {
    return value >this.num // Looks for all the value to be greater than this.num
},{num:0});

console.log(allPass)


const somePass = array.some(function (value, index) {
    return value >this.num;
},{num:1});

console.log(somePass)
