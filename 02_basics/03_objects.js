// singleton

// object literals   (object ko declare karne ka tarika)
// Object.create (iske andar hi sigleton banta he(baad me baat karenge)) (constructive)

const mySym = Symbol("key1")
 
const JsUser = {
    name: "Bala",
    "full name": " bala kumar", // ise kabhi vo dot wale tarike se access kar hi nhi sakte
    [mySym]: "mykey1",   // always refer a symbol using sq brakets
    age: 18,
    location: "Jaipur",
    email: "bala@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// ham object ko ese access kar sakte he :
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym]) // always access a symbol like this
console.log(typeof JsUser[mySym]) 

JsUser.email = "bala@chatgpt.com"
//Object.freeze(JsUser)
//JsUser.email = "bala@micro.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

// JsUser.greeting()       * ese call kiya jaata hai functions ko




