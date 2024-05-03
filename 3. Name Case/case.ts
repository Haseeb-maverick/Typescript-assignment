let personName :string  =''
personName=prompt('What is your Name?') ||'' //taking name as input

let lowercase:string=personName.toLowerCase() //converting to lower case 
let uppercase:string=personName.toUpperCase() //converting to upper case
let titlecase:string=personName.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ') //converting to title case
if (personName!==null && personName!==''){
alert(`Lowercase: ${lowercase}`)
alert(`Uppercase: ${uppercase}`)
alert(`Titlecase: ${titlecase}`) }
else{
    alert('Please enter a valid name')
}