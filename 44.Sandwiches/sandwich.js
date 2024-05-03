"use strict";
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("\nEnjoy your sandwich!");
}
// Call the function with different number of arguments each time
make_sandwich("ham", "cheese", "lettuce", "cucumber");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly");
