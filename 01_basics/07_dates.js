let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23,);
console.log(myCreatedDate.toDateString());

let myNewDate = new Date(2023, 0, 23, 5, 3);
console.log(myNewDate.toLocaleString());

let myGoodDate = new Date("2023-14-01");
console.log(myGoodDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()); // 0 se count karna hai, agar normal chahiye to + 1 karna he

newDate.toLocaleString('default', {
   weekday: "long" 
});


