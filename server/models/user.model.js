const mongoose = require('mongoose');
const Bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema =new mongoose.Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    tokens:[
        {
            token:{type: String, required: true}
        }
    ]
}) ;

// password hasing here           
userSchema.pre("save",async function(next){
    console.log("hi go")
    if(this.isModified('password')){
             this.password=await Bcrypt.hash(this.password,12);
    }
    next();
})


// we are genterating token    

userSchema.methods.generateAuthToken=async function(){
    try{

   let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
   
   this.tokens=this.tokens.concat({token:token})
   await this.save();
   return token;

    }catch(err){
  console.log(err)
    }
}


const User=mongoose.model("USER",userSchema);
module.exports =User;