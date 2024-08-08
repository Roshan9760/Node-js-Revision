
const { error } = require('console');
const fs = require('fs');

// // synchronus 
// fs.writeFileSync('./text.txt',"This is new File of Text ");

// // asynchronus 
// fs.writeFile("./text1.txt", "This is Asyc File  ", (error) => {
//   if (error) {
//     console.error("Error writing asynchronously:", error);
//   } else {
//     console.log("Asynchronous write completed.");
//   }
// });


// // Asynchronous write
// fs.writeFile("./text1.txt", "This is an async file", (error) => {
//   if (error) {
//     console.error("Error writing asynchronously:", error);
//   } else {
//     console.log("Asynchronous write completed.");
//   }
// });


// 2. Read file 

// sync will return the result 
//  const result = fs.readFileSync('./text.txt','utf-8')
//  console.log(result)

// //  async 
// fs.readFile('./text1.txt',"utf-8",(error,result)=>{

//      if(error) {
//         console.log(error)
//      }
//      else {
//         console.log(result)
//      }
// })

// 3. Append File 

// fs.appendFileSync('./text.txt',"This is new add one\n ")
// fs.appendFileSync("./text.txt",new Date().getDate().toLocaleString());

// 4.copy file 
// fs.copyFileSync('./text.txt','./copy.txt');

// delete file 
fs.unlinkSync('./text1.txt');
