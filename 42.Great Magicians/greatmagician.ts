function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    } 
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Create an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great to modify the array of magicians
magicians = make_great(magicians);

// Call the function to show the names of magicians
show_magicians(magicians);
