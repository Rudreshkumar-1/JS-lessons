const user = {
    username: "bala",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

console.log(this);

function chai(){
    let username = "bala"
    console.log(this.username);
}
chai()

const cos = function () {
    let username = "bala"
    console.log(this.username);
}
cos()

const tan = () => {
    let username = "bala"
    console.log(this);
}
tan()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));

const addThree = (num1, num2) => num1 + num2 // implicit return

const addFour = (num1, num2) => ( num1 + num2) // curly bracket use kiya he to return likhan padega par agar normal bracket use kiya he to nhi likhna padega. (object return karne ke liye brackte use )

console.log(addTwo(3, 4));

