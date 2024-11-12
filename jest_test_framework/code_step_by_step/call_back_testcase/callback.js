"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
function greet(name, callback) {
    var message = "Hello ".concat(name);
    callback(message);
}
greet('Bisshwajit', function (mesg) {
    console.log(mesg);
});
