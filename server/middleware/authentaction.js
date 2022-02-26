const jwt=require('jsonwebtoken')
const User=require('../models/user.model')

const Authentaction = async(req,res,next) => {
  try{
             const token=req.cookies.jwt;
             const verifiyToken=jwt.verify(token,process.env.SECRET_KEY);
             const rootUser=await User.findOne({_id:verifiyToken._id,"tokens.token":token})
  
  if(!rootUser){
      throw new Error("user not found")
  }
  req.token=token;
  req.rootUser=rootUser;
  
  next();
            }
  catch(err) {
      res.status(401).send('Unautherization user')
      console.log(err)
  }
}

module.exports = Authentaction
