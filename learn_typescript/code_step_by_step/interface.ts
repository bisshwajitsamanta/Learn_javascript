
interface IsUsers {
    name: string,
    age: number,
    greet: ()=>{},
}

let users:IsUsers = {
    name: 'Bisshwajit',
    age: 35,
    greet: function () {
        return 'Hello' + " " +this.name
    }
}

console.log(users)
console.log(users.greet())
