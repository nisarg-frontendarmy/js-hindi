// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abcd"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nisarg",
            lastname: "Patel"
        }
    }
}

// console.log(regularUser.fullname .userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({} , obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const Users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

Users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoogedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Nisarg"
}

const {courseInstructor : Instructor} = course

// console.log(courseInstructor)
console.log(Instructor)

// {
//     "name": "Nisarg",
//     "coursename": "JS in hindi"
//     "price": "free"
// }