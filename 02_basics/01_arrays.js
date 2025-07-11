const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

// ARRAY METHODS

myArr.push(6)
console.log(myArr);

myArr.pop()            // array ki last value remove kar deta he 
console.log(myArr);


// myArr.unshift(9).      use karna nhi chahiye
myArr.shift()   // sabhi values ko +1 kar deta he phir last value ko hata deta he 
console.log(myArr);
// myArr.unshift(9);     // first value ki jagah given value le aaega 
//console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);