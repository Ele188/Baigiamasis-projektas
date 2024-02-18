import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";

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
      const questions = await UserModel.find();
      return res
      .status(200)
      .json({questions: questions});
    } catch (err){
    console.log(err);
    return res.status(500).json({message: "Soemthing went wrong"});
    }
  };



export { SIGN_UP, LOGIN}