try {
    let age = prompt("What is your age ?")
    if (age>150){
        throw new Error("The age is probably not True")
    }
    age = Number.parseInt(age)
    console.log(age)
}
catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("The script is still running !!")