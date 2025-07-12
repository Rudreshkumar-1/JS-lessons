//var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 30 // var nhi bhi likhenge to bhi chalega
    console.log("INNER: ", a );
}


console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "bala"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);           error dega kyoki scope ke andar access kar hi nhi sakte

    two()
}
one()

if (true) {
    const userName = "bala"
    if (userName === "bala") {
        const website = " youtube"
        console.log(userName + website);
    }
    //console.log(website);         error
}
// agar return karna he kuch to pehle ise function me band karna padega.
// console.log(userName);            error


//**********************INTERRESTING **********************************


function addPo(num){
    return num + 1
}
console.log(addPo(5));

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)); // but agar isko upar karnege to error aaega

