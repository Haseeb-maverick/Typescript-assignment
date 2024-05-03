"use strict";
let invite = ['Muhammad Ali', 'Nikola Tesla', 'kanye'];
let message = `\nHello, i like to invite you at dinner at my house, Mr `;
for (let i = 0; i < invite.length; i++) {
    console.log(message + invite[i]);
}
let absent_person = 'Muhammad Ali';
let new_person = 'Thomas Edison';
invite[0] = new_person;
console.log("\nAfter knowing there is person absent so updated list is ;");
for (let i = 0; i < invite.length; i++) {
    console.log(message + invite[i]);
}
console.log(`${absent_person} can't make it`);
