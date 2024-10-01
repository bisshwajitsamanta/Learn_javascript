
// Function Declaration
function calAge1(birthYear){
    return 2037- birthYear
}

const age1 = calAge1(1990)
console.log(age1)

const calAge2 = function (birthYear){
    return 2037- birthYear
}
const age2 = calAge2(1991)
console.log(age2)

// This is called Function Expression
const calAge3 = (birthYear) => {
    return 2037 -birthYear
}
console.log(calAge3(1989))

const calAge4 = birthYear => 2037 - birthYear
console.log(calAge4(1991))