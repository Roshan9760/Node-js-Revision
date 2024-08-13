const express = require("express");
const cors = require("cors");
const  urlRoute  = require("./routes/route");
const dbConnectionHandler = require("./config/dbConnection");

dbConnectionHandler();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/url", urlRoute);


app.listen(3000,()=>{console.log("App Is Running at PORT 3000!")})
