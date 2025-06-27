const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
   
}

const prog = ["js", "rb", "py", "java", "cpp"]

for (const key in prog) {
    console.log(key);
     
}

for (const key in prog) {
    console.log(prog[key]);
            
}

// map pe for in loop nhi lagta kyuki vo iterable nhi he

