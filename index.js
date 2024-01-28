// const express=require("express");
// const zod= require("zod");
// const jwt =require("jsonwebtoken");
// const jwtPass="123456";
// const app=express();
// const port=3000;

// const schema=zod.array(zod.number());

// app.use(express.json());

// const all_users=[
//     {
//     username:"vaibhav",
//     email:"vashumaurya121@gmail.com",
//     password:"1234"
//     },
//     {
//         username:"baibhav",
//         email:"Bashumaurya121@gmail.com",
//         password:"12345"
//     },
//     {
//          username:"aibhav",
//          email:"ashumaurya121@gmail.com",
//          password:"123456"
//     },
// ]


// use of middleware



// // function userAuth(req,res,next){
// //     const username=req.headers.username;
// //     const password=req.headers.password;
// //     if(username!="vaibhav" || password!="pass"){
// //         res.status(403).json({
// //             msg: "something is wrong with inputs"
// //         })
// //     } 
// //     else
// //     next();
// // }

// // function inputAuth(req,res,next){
// //     const kidneyId=req.query.n;

// //     if(kidneyId!=1 && kidneyId!=2){
// //         res.status(403).json({
// //             msg: "something is wrong with inputs"
// //         })
// //     } 
// //     else 
// //     next();
// // }

// // app.post('/',(req,res)=>{
// //     const kidneyId=req.body.n;
// //     response=schema.safeParse(kidneyId);
// //     if(!response.success){
// //         res.status(401).json({
// //             msg: "wrong input"
// //         })
// //     }

// //     else{
// //         res.send({
// //             response
// //         })
// //     }
// //     res.send("hi there");
// // })


// // json web token authentication 





// function userExists(username, password){
//     let userExist=false;
//     for(let i=0;i<all_users.length;i++){
//         if(all_users[i].username==username && all_users[i].password==password){
//             userExist=true;
//         }
//     }
//     return userExist;
// }


// app.post('/signin', (req,res)=>{
//     const username=req.body.username;
//     const password=req.body.password;

//     if(!userExists(username,password)){
//         return res.status(403).json({
//             msg: "user not found in db"
//         });
//     }

//     var token=jwt.sign({username:username}, jwtPass);
//     return res.send({
//         token,
//     });
// });

// app.get('/users', (req,res)=>{
//     const token=req.headers.authentication;
//     const decode=jwt.verify(token,jwtPass);
//     const username = decode.username;
    
//     res.json({
//         users : all_users.filter(function(value){
//         if(value.username==username){
//         return false
//         }
//         else{
//         return true;
//         }
//     })
//   })
// });

// app.listen(port,()=>{
//     console.log(`app is listening to port number ${port}`);
// })








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
 
const User=mongoose.model('Users', {name : String, email: String, password: String })

const app=express();
app.use(express.json());

const user=new User({
    name:"vaibhav",
    email:"vashumauera121@gmail.com",
    password:"jsncsjajc"
});

user.save();


// app.post("/signup", async(req,res)=>{
//     const username=req.body.username;
//     const name=req.body.name;
//     const password=req.body.password;

//     const existingUser= await User.findOne({email: username}).exec();

//     if(existingUser){
//       return  res.status(400).send("already available");
//     }

//     const user=new User({
//         name:name,
//         email:username,
//         password:password
//     });

//     user.save();
//     res.json({
//         "msg":"user created successfully"
//     })
// })