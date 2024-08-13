const  express = require('express');
const cors = require('cors');
const userRouter = require('./routes/route')


const app = express();

// db connection 
const dbConnectionHandler = require('./config/dbConnection');
dbConnectionHandler();

// middleware 
app.use(express.json());
app.use('/user',userRouter);


const PORT = 3000 || 4000 ;
app.listen(PORT,()=>{
    console.log(`App is Running On PORT ${PORT} Successfully `)
})