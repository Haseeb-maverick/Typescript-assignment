"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Create an array of magician's names
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great to modify the array of magicians
magicians = make_great(magicians);
// Call the function to show the names of magicians
show_magicians(magicians);
