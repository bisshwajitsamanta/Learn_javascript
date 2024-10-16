const readline = require('readline')
const fs = require('fs')

const fileStream = fs.createReadStream('./for_1.js');
const rl = readline.createInterface({
    input: fileStream,
    output: process.stdout,
    terminal: false
})

rl.on('line',(line)=>{
    console.log(`Line from file: ${line}`);
});
rl.on('close',()=>{
    console.log("Finished Reading the file.");
});