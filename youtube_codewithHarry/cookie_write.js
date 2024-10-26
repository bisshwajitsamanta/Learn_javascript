
console.log(document.cookie)
document.cookie =("FirstName=Bisshwajit");
document.cookie= ("LastName=Samanta")
console.log(document.cookie)

let key = prompt("Enter the key name ?")
let value = prompt("Enter the value name ?")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
console.log(`${decodeURIComponent(key)}`,`${decodeURIComponent(value)}`)