"use strict";
let personName = '';
personName = prompt('What is your Name?') || ''; //taking name as input
let lowercase = personName.toLowerCase(); //converting to lower case 
let uppercase = personName.toUpperCase(); //converting to upper case
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '); //converting to title case
if (personName !== null && personName !== '') {
    alert(`Lowercase: ${lowercase}`);
    alert(`Uppercase: ${uppercase}`);
    alert(`Titlecase: ${titlecase}`);
}
else {
    alert('Please enter a valid name');
}
