let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let marks = "33abc"
let valueNumber = Number(marks)
console.log(valueNumber);

let temp = null
let valueTemp = Number(temp)
console.log(valueTemp);

let some = undefined
let valueSome = Number(some)
console.log(valueSome);

let boolean = true
let valueBoolean = Number(boolean)
console.log(valueBoolean);

let name = "bala"
let valueName= Number(name)
console.log(valueName);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLogged = ""
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged);

let loggedIn = "lala"
let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "lala" => true

let someNumber = 43
let stringNumber = String(someNumber)
console.log(typeof(stringNumber));

// ******************* Operations **************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);  // in power
console.log(2/2);   
console.log(2%2);   // remainder

let str1 = "hello"
let str2 = " bala"
let str3 = str1 + str2
console.log(str3);

