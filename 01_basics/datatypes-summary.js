// datatypes: method of storing and accessing data. -> Two types

// 1)primitive datatypes
// 7 categories: String, number, boolean, null, undefined, symbol, BigInt

// javascript is dynamically typed language                                      

// symbol example
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);          // defines uniqueness

// BigInt example
const bigNumber = 232323232322323223232n

// 2) reference(non-primitive)
// array, object, functions

// array example
const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "bala",                   // exmaple of objects
    age: "18",
}

// function example
const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber);
console.log(typeof myFunction);


// **************************************************************************

// Memory -> two types
// Stack (primitive)[change in copy value ],  Heap (non-primitive)[change in original value that is reference]

let myYoutubename = "rudreshkumar"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "bala@google.com",
    upi: "user@123"
}

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);