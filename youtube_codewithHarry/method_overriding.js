
class Employee {
    constructor(name, empID) {
        this.name = name
        this.empId = empID
    }
    login() {
        console.log(`Employee ${this.name} with Employee ID ${this.empId} has Logged in`)
    }
    logout() {
        console.log(`Employee ${this.name} with Employee ID ${this.empId} has Logged out`)
    }
    leaves(x){
        console.log(`Employee ${this.name} has granted ${x} Leaves having Employee id ${this.empId} - Auto Approved`)
    }
}


class Programmer extends Employee{
    constructor(name,empID) {
        super(name,empID);
        console.log("Programmer Constructor is called")
    }
    // Method Overriding
    requestLeaves(){
        // Super used to call parent class function into this function
        super.leaves(4)
        console.log("One extra day leave granted")
    }
}

let p = new Programmer("Bisshwajit","12345")
p.login()
p.requestLeaves()
p.logout()
