/*
============================================
; Title: wilsonA-assignment-1.4.ts
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 13 July 2019
; Description: transpiled JS code file
;===========================================
*/

// Create a header variable to point to the location of the header file.
const header = require('./header.js');

// Display the header.
console.log(`${header.display("Aaron", "Wilson", "Assignment-1.4")}\n`);

// Create the variables.
var fullName = 'Aaron Wilson';
var myAge = 47;

// Build the function.
function myGreet(fullName, myAge) {
    return 'Hello, my name is ' + fullName + ' and I am ' + myAge + ' years old.';
}
// Produce an output.
console.log(myGreet(fullName, myAge));
