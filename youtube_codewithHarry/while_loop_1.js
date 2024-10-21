
let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);

let i =0;

// While Loop first checks the condition then runs.
while(i<n){
    console.log(i)
    i++
}
// let i = 10
// Assume i =10 and n =2 so 10 is greater than 2 but do-while loop will still print the value 10 as console.log(i)
do {
    console.log(i);
    i++;
}while (i<n);
