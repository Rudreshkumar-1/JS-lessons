const name  = "rudresh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bala-ji') // new nhi lagate to bhi chalta .. isse object ban jaata he typeof karke check karlo
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());        
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.group(anotherString);

const newString1 = "    bala    "
console.log(newString1);
console.log(newString1.trim());       // .trimStart() and .trimEnd()

const url = "https://bala.com/bala%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('bala'));
console.log(url.includes('hello'));

console.log(gameName.split('-'));