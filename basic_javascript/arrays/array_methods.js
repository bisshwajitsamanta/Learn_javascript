
const friends = ['Bisshwajit','Samanta','Payelh']
console.log("Actual Array:",friends)


const newFriends =friends.push('Sinchan')
console.log("Array length:",newFriends) // Prints out the length

friends.unshift('Random') // Adds the particular item in the first even if gets repeated.
console.log("Full Array Now:",friends)

friends.pop();
console.log("Popped:",friends)

const removed =friends.shift(); // Remove first element from the array
console.log('Removed "%s" First Element from the array \nNew Array:',removed,friends)

console.log("Index of the value: ",friends.indexOf('Samanta'))

console.log("ES6 Method to check if element is present: ",friends.includes('Bisshwajit')) // Use strict equality check

if (friends.includes('Bisshwajit')) { // Returns True and false for conditional statements
    console.log('You have a friend called "Bisshwajit !!"')
}
