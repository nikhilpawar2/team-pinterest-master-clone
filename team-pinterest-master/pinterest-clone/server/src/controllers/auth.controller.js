require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require('../models/user.model')

const newToken =(user) =>{
    return jwt.sign({user:user},process.env.JWY_ACCESS_KEY)
}
const register = async (req,res)=>{
    try{
    //check if email exist or not
        let user = await User.findOne({email: req.params.email}).lean().exec()
    //if there throw an error
        if(user) 
         return res.status(400).json({status:"failed",message:"Please provide diffrent email address"});
    //else create user and  we will hash the password // we do hashing in user.model file
        user = await User.create(req.body);
       // console.log(user)

    //we will create the token 
        const token =newToken(user);

    //return the user and the token 
    
    res.status(201).json({user,token});

    }
    catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }
};

const login = async (req,res)=>{
try {
//check if email exist or not
// console.log(req.params.email)
let user = await User.findOne({ email: req.body.email });
// console.log(user)
//if not present throw an error
if(!user) 
return res.status(400).json({status:"failed",message:"Please provide valid email address1"});

//else we match the password 
const match = await user.checkPassword(req.body.password)

// if not matched throw an error 
if(!match) 
return res.status(400).json({status:"failed",message:"Please provide valid email address"});
//if it is matched create the token   

const token = newToken(user)
//return the user and token

res.status(201).json({user,token});
}catch(e) {
    return res.status(500).json({status:"failed",message:e.message});
}
}
// const data1 = async (req,res)=>{
//     try{ 
//         const data = await User.find().lean().exec();
//         return res.status(200).json(data);
//       }catch(e){
//         return res.status(500).json({message: e.message});
//       } 
// }

module.exports ={register,login};