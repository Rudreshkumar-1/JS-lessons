const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach( function (item) {                        // callback function me naam nhi hota he
    console.log(item);
    
})                                            
    
coding.forEach( (item) => {
    console.log(item);
    
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
} )

const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    }
]

myCoding.forEach( (item) => {
    
    console.log(item.langName);
    
} )