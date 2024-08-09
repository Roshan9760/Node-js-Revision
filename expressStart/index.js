const express = require('express');

const app = express();
const PORT  = 2000 ;

app.get('/',(req,res)=>{
    res.send(`This is Home Page `)
});

app.get('/about',(req,res)=>{
    res.send(`This is About Page  !`+req.query.name)
})

app.listen(PORT ,()=>{
    console.log(`App is Running On ${PORT} !`)
})