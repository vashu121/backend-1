const mongoose=require("mongoose");
const express=require("express");

const url="mongodb+srv://<username>:<password>@cluster0.hlzf3zu.mongodb.net/"

mongoose.connect(url)
.then(()=>{
    console.log("connected to the database");
})
.catch((err)=>{
    console.error(`error connection to the database.${err}`);
});
 
const User=mongoose.model('Users', {name : string, email: string, password: string })

const app=express();
app.use(express.json());

app.post('/signup', async (req,res)=>{
    const username=req.body.username;
    const name=req.body.name;
    const passsword=req.body.password;

    const existingUser=await user.findOne({email: username});
    if(existingUser){
      return  res.status(403).send("already available");
    }

    const user=new User({
        name:name,
        email:username,
        password:password
    });

    user.save();
    res.json({
        msg:"user created successfully"
    })
})