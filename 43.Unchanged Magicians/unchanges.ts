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

// Make a copy of the array and call make_great with the copy
let great_magicians: string[] = make_great([...magicians]);

// Call the function to show the names of magicians before modification
console.log("Original Magicians:");
show_magicians(magicians);

// Call the function to show the names of magicians after modification
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
