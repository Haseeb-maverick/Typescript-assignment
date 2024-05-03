let alien_color: string = 'green';

// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

//  If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {console.log("The player just earned 10 points.")}
// Write one version of this program that runs the if block and another that runs the else block.
 alien_color = 'red';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

