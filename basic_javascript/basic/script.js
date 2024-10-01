
// 5 Falsy values - 0,'',undefined, null, NaN

// Number - Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean('{}'));

const money = 100; // if const money=0, then it is a false value.
if (money){
    console.log("Don't spend it all "); // This gets printed in value 100
}
else{
        console.log("You should get a job"); // This gets printed in value as 0
}

let height
if (height){
    console.log("Yay !! Height is defined ")
}
else {
    console.log("Height is Undefined") // Value of the height is not defined so it is undefined
}

const age = 18;
if (age === 18) // === returns boolean value, 18 === 18 -> True, === strict equality operator, == loose equality operator
    console.log("Congratulations you are adult");

// == does type coercion
// if ( age ==18) console.log('You just become adult')

const favourite = Number(prompt("What is your favourite number?"))
console.log(favourite)
if (favourite == 23)
    console.log('Cool 23 is an amazing number');

