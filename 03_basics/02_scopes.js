// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:" , a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Nisarg"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true) {
    const username = "Nisarg"
    if(username === "Nisarg") {
        const website = " Youtube "
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++ interesting ++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5) // Not declare
const addTwo = function(num) {
    return num + 2
}
