# Learn_javascript

* Prompt() in Node js
  * npm install inquirer
  * ```gotemplate
    const inquirer = require('inquirer');
    
    inquirer.prompt([
    {
    type: 'input',
    name: 'username',
    message: 'What is your name?',
    },
    ]).then(answers => {
    console.log(`Hello, ${answers.username}!`);
    });

```