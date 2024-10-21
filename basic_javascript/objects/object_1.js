const inquirer = require('inquirer');
const bisshwajit = {
    firstName: 'Bisshwajit',
    lastName: 'Samanta',
    age: 2037 -1989,
    job: 'SRE',
    friends: ['Hari','Guru','srimaan'],
};
console.log(bisshwajit);
console.log(bisshwajit.lastName);
console.log(bisshwajit['lastName']);
const nameKey = 'Name';
console.log(bisshwajit['first'+nameKey]);
console.log(bisshwajit['last'+nameKey]);

const questions = [
    {
        type: 'list',
        name: 'info',
        message: 'What you want to know about Bisshwajit ?',
        choices: ['firstName','lastName','age','job','friends'],
    },
];

inquirer.prompt(questions).then((answers) =>{
    const info = answers.info;
    console.log(`Bisshwajit's ${info}:`,bisshwajit[info])
})

