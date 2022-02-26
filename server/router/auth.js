const express = require('express');
// const app = express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// jwt having two method 1.sign 2.verify       
const Authentaction=require('../middleware/authentaction')
const router=express.Router();
require("../db/conn")

const User=require('../models/user.model')
// app.use(express.json());

router.get('/homes',(req,res)=>{
   
})
router.get('/register',async(req,res)=>{
   const user=await User.find();
    return res.send(user)
    // console.log(user);
   
})
// using async     
router.post('/register',async(req,res)=>{

    const {firstname,lastname,email,password}=req.body;
    
    if(!firstname || !lastname || !email || !password){
        return res.status(422).json({error:"plz fill the field properly"})
    }
    try{
        const userExist= await User.findOne({email:email})
        if(userExist){
        
            return res.status(422).json({error:"email allready exist"})
        }

        const user=new User({firstname,lastname,email,password})

        const data=await user.save();
        if(data){
            return res.status(201).json({error:"registration is successful"})
            
        }else{
            return res.status(422).json({error:"failed to registration"})

        }
 }catch(err){
    console.log(err)
}

})

// login user         
router.post('/login',async(req,res)=>{
   
    try{
        let token;
                const {email,password}=req.body;
                // console.log('password:', password)
                // console.log('email:', email)
                
           if(!email || !password){
               return res.status(400).json({error:"please fill the data"})
           }

           const LoginData=await User.findOne({email:email})
            // console.log(LoginData);

           if(LoginData){
                const isMatch=await bcrypt.compare(password,LoginData.password);

                token=await LoginData.generateAuthToken();
                  console.log('token:', token)
                  
                  res.cookie('jwtoken','dilip',{
                      expires: new Date(Date.now()+25892000000),
                      httpOnly:true,
                  })

                  if(isMatch){
                      res.status(200).json({mess:"user login successfully"})
                    }
               else{
                   res.status(404).json({error:"user invalid"})
                }
                  }
            else{
                res.status(404).json({error:"user invalid"})
               }

    }catch(err){
              console.log({err:"error h"})
    }
})

// authentaction  

 router.get("/about",Authentaction, (req, res) =>{
    //  res.send(`hello dilip about`)
 console.log("hello dilip")
 res.send(req.rootUser)
 })



// using promiss              
// router.post('/register',(req,res)=>{
//     const {firstname,lastname,email,password}=req.body;
    
//     if(!firstname || !lastname || !email || !password){
//         return res.status(422).json({error:"plz fill the field properly"})
//     }
    
    // user allready exist or not   
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//                   return res.status(422).json({error:"email allready exist"})

//               }

//               const user=new User({firstname,lastname,email,password})
//               console.log(user)
//               user.save().then(()=>{
//             res.status(201).json({mess:"user registered successfull"})
//             }).catch((err)=>res.status(500).json({err:'error'}));

//         }).catch(err=>{console.log(err);});

// })


module.exports =router;