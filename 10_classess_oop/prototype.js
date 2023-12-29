// let myName = "Nisarg     "
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spidermane: "sling",


    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`);
    }
}

Object.prototype.nisarg = function(){
    console.log(`nisarg is present in all objects`);
}

Array.prototype.heyNisarg = function(){
    console.log(`Nisarg says hello`);
}

// heroPower.nisarg()
myHeros.nisarg()
myHeros.heyNisarg()
// heroPower.heyNisarg()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    inAvailble: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "chaiorcode    "

String.prototype.trueLength = function(){
    console.log((`${this}`));
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"nisarg".trueLength()
"iceTea".trueLength()