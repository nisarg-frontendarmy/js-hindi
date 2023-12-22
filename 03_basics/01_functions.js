
function sayMyName() {
    console.log("N");
    console.log("i");
    console.log("s");
    console.log("a");
    console.log("r");
    console.log("g");
}

// sayMyName()

// function addToNumbers(numeber1 , number2) {

//     console.log(numeber1 + number2);
// }

function addToNumbers(numeber1 , number2) {

    // let result = numeber1 + number2
    // return result
    return numeber1 + number2
}

const result = addToNumbers(3 , 5)

// console.log("result",result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please Enter Your Username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nisarg"))
// console.log(loginUserMessage("sam"))

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200 , 400 , 500));

const user = {
    username: "Nisarg",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [100 , 200 , 300]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));