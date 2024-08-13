const User = require('../models/userModel');


const addUserController = async (req, res) => {
 
   const {username,email} = req.body;

   const user = new User({
     username,
     email
   })

  if (!user) {
    return res.json({
      message: "No User Found ",
      success: true,
    });
  }

  await user.save();

  return res.json({
    message: "User Are Successfully Get ! ",
    success: true,
    data: user,
  });
};


const getUserController  = async(req,res)=>{

      const user = await User.find({});

      if(!user){
        return  res.json({
            message:"No User Found ",
            success:true 
         })
      }

      return res.json({
        message: "User Are Successfully Get ! ",
        success: true,
        data:user
      });
}



module.exports = { getUserController, addUserController };