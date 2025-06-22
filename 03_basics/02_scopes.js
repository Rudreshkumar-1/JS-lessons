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

// console.log(userName);            error


//**********************INTERRESTING **********************************


console.log(addPo(5));
function addPo(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}

addTwo(5) // but agar isko upar karnege to error aaega

