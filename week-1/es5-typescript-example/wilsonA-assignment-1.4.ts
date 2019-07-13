/*
============================================
; Title: wilsonA-assignment-1.4.ts
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 13 July 2019
; Description: Working with and creating
; functions and variables in TypeScript
;===========================================
*/

// Create the variables.
let fullName: string = 'Aaron Wilson';
let myAge: number = 47;

// Build the function.
function myGreet(fullName: string, myAge: number): string {
    return 'Hello, my name is ' + fullName + ' and I am ' + myAge + ' years old.';
}

// Produce an output.
console.log(myGreet(fullName, myAge));

