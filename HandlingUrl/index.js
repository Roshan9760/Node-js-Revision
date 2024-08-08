const http = require("http");
const url = require("url")


const myServer = http.createServer((req, res) => {
    
    const myUrl = url.parse(req.url,true);
    console.log(myUrl.query);
    switch (myUrl.pathname) {
      case "/":
        res.end("This is Home Page !");
        break;
      case "/about":
        const name= myUrl.query.name;
        res.end(`Hello , My Self ${name} How Can I Help You ! `);
        break;
      default:
        res.end("404 Not Found");
    }

});

myServer.listen(3000, () => {
  console.log("Server is Started ! ");
});
