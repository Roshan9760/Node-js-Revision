const { error } = require('console');
const users = require('./MOCK_DATA.json');
const express = require('express');
const fs = require('fs');

const app = express();


// middleware 
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{

     console.log(`Hi From Middleware 1 `);
     next();
})


app.get('/users',(req,res)=>{

    return res.json(users);
})

app.route("/users/:id")
.get((req,res)=>{

    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
})
.patch((req,res)=>{
      
    // update code
    const userId = Number(req.params.id);
    const updates = req.body;

    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    // Apply updates
    users[userIndex] = { ...users[userIndex], ...updates };

    // Save to mock data file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
      if (error) {
        return res
          .status(500)
          .json({ status: "error", message: "Failed to update the file" });
      }
      return res.json({ status: "success", user: users[userIndex] });
    });
    
})
.delete((req,res)=>{
  const id = Number(req.params.id);

  // delete for the users
  const updateUser = users.filter((num) => num.id !== id);

  if (updateUser.length === users.length) {
    return res.json({ status: "success", message: "No User Found" });
  }

  // add to mock data file also
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(updateUser), (error) => {
    if (error) {
      return res
        .status(500)
        .json({ status: "error", message: "Failed to update the file" });
    }
    return res.json({ status: "success", id: updateUser.length });
  });

})

app.post('/user',(req,res)=>{
    
    const body = req.body;

    // add to user 
    users.push({...body,id:users.length+1});

    // add to mock data file also
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(error,data)=>{
        return res.json({status:"success",id:users.length});
    })
    
})








app.listen(3000,()=>{
    console.log(`App is Running On Port 3000 !`)
})