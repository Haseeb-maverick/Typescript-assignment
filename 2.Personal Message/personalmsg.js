"use strict";
let personName = '';
personName = prompt('What is your Name?') || ''; //taking name as input
if (personName !== null && personName !== '') { // making if statement for name 
    alert(`Hello! ${personName},would you like to learn some Python today?`);
}
else { // if name is not given
    alert('Please write your name! ');
}
