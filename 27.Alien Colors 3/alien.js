"use strict";
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color = 'green';
// If the alien is green, print a message that the player earned 5 points.
if (alien_color === 'green') {
    console.log("Version1 : The player just earned 5 points for shooting the alien.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points for shooting the alien.");
}
else {
    console.log("The player just earned 15 points for shooting the alien.");
}
// If the alien is yellow, print a message that the player earned 10 points.
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("version1 : The player just earned 5 points for shooting the alien.");
}
else if (alien_color === 'yellow') {
    console.log("Version 2 : The player just earned 10 points for shooting the alien.");
}
else {
    console.log("The player just earned 15 points for shooting the alien.");
}
// If the alien is red, print a message that the player earned 15 points.
alien_color = 'red';
if (alien_color === 'red') {
    console.log("version3 : The player just earned 15 points for shooting the alien.");
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points for shooting the alien.");
}
else {
    console.log("The player just earned 5 points for shooting the alien.");
}
