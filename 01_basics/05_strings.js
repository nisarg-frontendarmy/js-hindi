const name = "Nisarg"
const repoCount = 50


// console.log(name + repoCount + "Value"); 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('nisarg-pa-com')

console.log(gamename[0]);
console.log(gamename.__proto__);



console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('s'));


const newString = gamename.substring(0 , 4)
console.log((newString));


const anotherString = gamename.slice(-8 , 4)
console.log(anotherString);

const newString1 = "   Nisarg   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://nisarg.com/nisarg%20patel"

console.log(url.replace('%20', '-'))

console.log(url.includes('Nisarg'))
console.log(url.includes('nisarg'))

console.log(gamename.split('-'));

