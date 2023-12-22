// singleton
// Object.create

// object literals

const mysym = Symbol("Key1")

const JsUser = {
    name: "Nisarg",
    "full name" : "Nisarg Patel",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "nisarg@google.com",
    isLoogedIn : false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);


JsUser.email = "nisarg@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nisarg@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello Js User");
}

JsUser.greetingtwo = function() {
    console.log(`hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());