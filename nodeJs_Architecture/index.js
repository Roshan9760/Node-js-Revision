const { error } = require('console');
const fs = require('fs');


// // blocking code  -> "This is a Blocking code means we need to solve it fisrt to go next line  "
// console.log("Before the Block Element ");
// fs.readFileSync('./text.txt');
// console.log("After the Block Element ")


// Non - blocking code  -> "This is a we execute the next line if previous line take time to execute   "
// console.log("Before the Non - Block Element ");
// fs.readFile('./text.txt','utf-8',(error,result)=>{
//     if(error) console.log(error);
//     else console.log(result)
// });
// console.log("After the Non Block Element 1")
// console.log("After the Non Block Element 2");


const os = require('os');
console.log(os.cpus().length)