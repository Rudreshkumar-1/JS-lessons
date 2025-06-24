// if
const isUserLoggedIn = true
const temp = 41

if (temp < 50){
    console.log("less than 50");
} else {
    console.log("temp is greater than 50");
}


// comparison operators
// >, <, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`);      error

const balance = 1000

// shorthand 
//if (balance > 500) console.log("test"),
//console.log("test2");                   // implicit scope           (par is tarah se karna nhi he)

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2==2) {           // agar ek bhi false hogya to ham function  ke   andr jaate hi nhi he
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}