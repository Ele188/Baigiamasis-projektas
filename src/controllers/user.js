import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken"

const SIGN_UP = async (req, res) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
 
  try{
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });
    const response = await user.save();

 return res.status(201).json({message: "New user was created", user: response});
  
} catch (err){
  console.log(err);
  return res.status(500).json({message: "Soemthing went wrong"});
  }
};

const LOGIN = async (req, res) => {
 try{
   console.log(req.body.password)

   const user = await UserModel.findOne({email:req.body.email});

   if(!user){
    return res.status(401).json({message: "Invalid login data"});
   }

   const isPasswordMatch = bcrypt.compareSync(
    req.body.password, 
    user.password
    );

    if(!isPasswordMatch){
     return res.status(401).json({message: "Invalid login data"});
    }

    const token = jwt.sign(
    { 
     email: user.email, 
     id: user._id
    }, 
     process.env.JWT_SECRET, 
    {
     expiresIn: "96h"
    });

 return res.status(201).json({ jwt: token });
    } catch (err){
    console.log(err);
    return res.status(500).json({message: "Soemthing went wrong"});
    }
  };



export { SIGN_UP, LOGIN}