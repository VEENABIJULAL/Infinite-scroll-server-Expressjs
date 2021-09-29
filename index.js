const express=require('express'); //import express
const app=express();

const cors=require('cors'); //import cors
const db=require('./db');
app.use(cors({
  origin:'http://localhost:4200', //client path 
  credentials:true  //to use cookies
}))

const session=require('express-session');//import session
app.use(session({
  secret:'randomsecurestring',
  resave:false,
  saveUninitialzed:false
}));
app.use(express.json());
const authMiddleware=(req,res,next)=>{
    if(!req.session.currentUser){
      return res.json({
        statusCode:401,
        status:false,
        message:"please login"
      })
    }
    else{
      next();
    }
  }
  app.listen(3000,()=>{
    console.log("server started at port :3000");
})
app.get('/getData',(req,res)=>{
    db.Product.find({}).then((result)=>{
        console.log(result);
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
});