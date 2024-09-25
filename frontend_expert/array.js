
function test(){
    const array = [1,2,3];
    array.push(5,6,7,8);
    console.log(array);
    console.log(array.length);
    console.log(array[2]);
    console.log("Returns Boolean Value: ",array.includes(3));
    console.log("Returns the index element: ",array.indexOf(3));
    console.log(array.lastIndexOf(3));
    console.log("Shifts from Right Side: ",array.pop());
    console.log("Shifts from Left Side: ",array.shift());
    console.log("Looking for Array :", Array.isArray(array));
    console.log("Deleted Elements from Array:", array.splice(1,2));
    console.log("Replacing Elements in Array: ",array.splice(1,2,'Hello','World'));
    console.log(array)
    const newArray = array.concat("Hey","Bisshwajit")
    console.log(newArray)
    console.log(newArray.reverse())
    console.log(newArray.join(" | "))
}
test()