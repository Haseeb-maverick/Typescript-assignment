let invite :string[] = ['Muhammad Ali','Nikola Tesla','kanye']
let message :string = `\nHello, i like to invite you at dinner at my house, Mr `
// for (let i = 0; i < invite.length; i++) {
//     console.log(message+invite[i]);
// }
let absent_person:string='Muhammad Ali'
let new_person:string='Thomas Edison'
invite[0]=new_person
console.log("\nAfter knowing there is person absent so updated list is ;")
for (let i = 0; i < invite.length; i++) {
    console.log(message+invite[i]);
}
console.log(`\n${absent_person} can't make it`)

console.log("\nwe have good news that we have now big table soo we invite more people!")

invite.unshift('Albert Einstein')
invite.splice(2,0,'Newton')
invite.push("Sir Zia")

for (let i = 0; i < invite.length; i++) {
    console.log(message+invite[i]);
}