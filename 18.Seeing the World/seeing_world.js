"use strict";
//Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ["London", "New York", "Paris", "America", "Tokyo", "Sydney",];
//Print your array in its original order
console.log('Original order : ' + locations);
//Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical order : ' + [...locations].sort());
//Show that your array is still in its original order by printing it.
console.log('Original order : ' + locations);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse alphabetical order : ' + [...locations].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('Original order : ' + locations);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Order has changed : ' + locations.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Original order : ' + locations.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Alphabetical order : ' + locations.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Reverse alphabetical order : ' + locations.sort().reverse());
