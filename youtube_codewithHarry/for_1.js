// Sum first n natural numbers
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the number you choose: ",(input) =>{
    const n = parseInt(input)
    let sum = 0
    for (let i =0;i<n;i++){
        sum +=(i+1)
    }
    console.log(`The sum of numbers from 1 to ${n} is :${sum}`);
    rl.close()
})