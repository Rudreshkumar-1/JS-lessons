// while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ["apple", "orange", "grapes"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// do while loop
let score = 1 //agar score 11 kar denge to result aaega score is 11.first do and then check conditon

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);