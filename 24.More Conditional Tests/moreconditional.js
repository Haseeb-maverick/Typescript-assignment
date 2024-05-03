"use strict";
//Tests for equality and inequality with strings
// equality
console.log("Equality test : ", "Blue" === "Blue");
// inequality
console.log("Inequality test : ", "Blue" !== "Red");
//   Tests using the lower case function
console.log("Lower case test : ", "Blue".toLowerCase() === "blue");
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//numerical test
console.log("Numerical test : ", 5 === 5);
//inequality
console.log("Numerical test : ", 5 !== 4);
//greater than
console.log("Equality test of greater than : ", 5 > 4);
//greater than or equal to
console.log("Equality test of greater than or equal to : ", 5 >= 5);
//less than  
console.log("Equality test of less than : ", 5 < 8);
//less than or equal to
console.log("Equality test of less than or equal to : ", 5 <= 5);
// Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log("Using 'and' operator : ", (x < y) && (y < z));
console.log("Using 'or' operator : ", (x < y) || (x > z));
// Test whether an item is in a array
let fruits = ["Apple", "Orange", "Banana"];
console.log("Whether an item is in a array : ", fruits.includes("Apple"));
// Test whether an item is not in a array
console.log("whether an item is not in a array : ", fruits.includes("Mango"));
