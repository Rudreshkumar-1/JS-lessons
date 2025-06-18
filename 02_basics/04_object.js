// const tinderUser = new Object() // singleton sbject   
const tinderUser = {} // non singleton object


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bala",
            lastname: "kumar",
        }
    }
}

console.log(regularUser.fullname.userfullname);  // ese hi dot lagake nesting kholte jaiye

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2} // ese nhi jodna objects ko
const obj4 = Object.assign({}, obj1, obj2) // {} ise target bolte he aur bakki ko source . ise isliye use kyuki ves bhi sari values obj1 me hi jaa rhi thi to isse acha ek alag set me jae
console.log(obj3); 

const obj5 = {...obj1, ...obj2}
console.log(obj4);   
console.log(obj5);

const users = [
    {
        id: 1,
        email: "luna@gmail.com"
    },
    {
        id: 1,
        email: "luna@gmail.com"
    },
    {
        id: 1,
        email: "luna@gmail.com"
    },
    
]
 
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // datatype array aaega
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser));   // har key value ko array me bana deta he

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

