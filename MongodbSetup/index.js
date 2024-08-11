const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// add middleware 
app.use(express.json());
app.use(cors());


// create schema
const userSchema = new mongoose.Schema({

       username:{
          type:String,
          require:true
       },
       email:{
         type:String,
         require:true,
         unique:true,
       }

},{timestamps:true});

// create model
const UserModel = mongoose.model('User',userSchema);

// function  to connect with database 
const MONGO_URL = "mongodb://0.0.0.0:27017/mongoSetupDataBase";
const dbConnection = async ()=>{

     await mongoose.connect(MONGO_URL).then(()=>{console.log("DB connected")})
     .catch(()=>{console.log("Error while Connecting with Database !")})
};

dbConnection();


// create routes 

// route for get and post the user 
app.route("/")
  .get(async (req, res) => {
    
    const users = await UserModel.find({});

    if (!users) {
      return res.json({
        success: true,
        message: "Please Fill Data Properly !",
      });
    }
    return res.json({
      success: true,
      message: "User Created Successfully !",
      data: users,
    });
  })
  .post(async (req, res) => {
    const { username, email } = req.body;

    // create the user
    const newUser = new UserModel({
      username,
      email,
    });

    if (!newUser) {
      return res.json({
        success: true,
        message: "Please Fill Data Properly !",
      });
    }

    // save to db
    await newUser.save();

    return res.json({
      success: true,
      message: "User Created Successfully !",
      data: newUser,
    });
  });







app.listen(3000,()=>{console.log("Server is Running on 3000 PORT ! ")})


