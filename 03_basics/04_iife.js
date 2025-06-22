// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();          // ek iify end karne ke liye ; ye lagana zaroori he nhi to koi aur nhi chalega

//()() // first bracket jaha ham function likhne wale he aur second se execute hoga
// global scope ke pollution se bhi bachata he

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('bala')

