const http = require('http');
const os = require('os');
const fs = require("fs");
const { error } = require('console');


const myServer = http.createServer((req,res)=>{
     
    const date =new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Format the time
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Use 12-hour time format with AM/PM
    });

    const log = `${formattedDate} at ${formattedTime} from route ${req.url}  : New Request Recieved\n `;
    fs.appendFile('./logfile.txt',log,(error,result)=>{
        console.log(result);


        switch(req.url){
            case "/":
                res.end("This is Home Page !")
                break;
            case "/about":
                 res.end("Hello , My Self Roshan How Can I Help You ! ");
                 break;
            default:
                res.end("404 Not Found")
        }
    });
    
  
});


myServer.listen(3000,()=>{
    console.log("Server is Started ! ")
});