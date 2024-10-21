
let obj = {
    bisshwajit: 90,
    samanta: 85,
    payelh: 78,
    unknown: 23,
};

// for in loop - Loop through the keys of an object
for (let a in obj){
    // console.log(a)
    console.log("Marks of " + a + " is : " + obj[a])
}

// for of loop - Loop through the values of an iterable object like array, string
for (b of "Bisshwajit"){
    console.log(b)
}