const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, cur) {
    console.log(`acc: ${acc} and cur: ${cur}`);
    
    return acc + cur
}, 0)                             // 0 is the initial value jo sabse pehle accumulatopr me jaegi

console.log(myTotal);

const num1 = myNums.reduce( (acc, cur) => acc + cur, 0)
console.log(num1);

const shoppingCard = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "mobile development",
        price: 12999
    },

    {
        itemName: "data science",
        price: 5999
    }
]

const shop = shoppingCard.reduce( (acc, item ) => acc + item.price, 0)
console.log(shop);


