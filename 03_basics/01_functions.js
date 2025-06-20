function sayMyName(){
    console.log("B");
    console.log("A");
    console.log("L");
    console.log("A");
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    
    let result = number1 + number2 // directly bhi kar sakte he=> return number1 + number2
    return result //return karne ke baad koi bhi aur console print nhi hoga 
}
addTwoNumbers(3, 4)
addTwoNumbers(3, "4");
addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username){        // username = 'sam' kardete to if pe baat hi nhi jaati
    if(username === undefined){                      // username === undefined ki jagah !username bhi likh sakte the
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("bala"));
console.log(loginUserMessage());


//function calculateCartprice(...num1){       // ... isko hi rest operator bolte he aur spread bhi => array me convert kar dega 
 //   return num1
 //}
 //console.log(calculateCartprice(200, 400, 500, 2000));      array  aaega

function calculateCartprice(val1, val2, ...num1){       
    return num1
}

console.log(calculateCartprice(200, 400, 500, 2000));

const user = {
    username: "bala",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)
handleobject{}