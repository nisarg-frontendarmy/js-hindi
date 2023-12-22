// # Primitive

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 123456789101112121213n

// # Reference (Non primitive)

//  Array , Objects , Functions

const heros = ["Nisarg" , "Pranay" , "Kishan"]
let myobj = {
    name: "nisarg",
    age : 25,
}

const  myfunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);