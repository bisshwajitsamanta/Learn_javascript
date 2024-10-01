const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your favourite number ?',(answer) => {
    console.log(`Your favourite number is ${answer}`)
})
rl.close()