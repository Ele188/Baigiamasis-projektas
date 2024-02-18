import QuestionModel from "../models/question.js";


const GET_ALL_QUESTIONS = async (req, res) => {
  try{
    const questions = await QuestionModel.find();
    return res
    .status(200)
    .json({questions: questions});
  } catch (err){
  console.log(err);
  return res.status(500).json({message: "Soemthing went wrong"});
  }
};


const GET_QUESTION_BY_USER_ID = async (req, res) => {  
  try{
    const question = await QuestionModel.findById(req.params.id);
    return res
      .status(200)
      .json({question: question});
  } catch (err){
  console.log(err);
  return res.status(500).json({message: "Soemthing went wrong"});
  }
};



const ADD_QUESTION = async (req, res) => {
  try{
    const question = new QuestionModel({
            questionText: req.body.questionText,
            date: req.body.date,
        });
        const response = await question.save();
    return res
    .status(201)
    .json({message: "Question was added", response: response});
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Soemthing went wrong"});
  }
};


const DELETE_QUESTION_BY_ID = async (req, res) => {  
  try{  
  const question = await QuestionModel.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({message: "Your question has been successfully deleted!", question: question});
  } catch (err){
      console.log(err);
      return res.status(500).json({message: "Soemthing went wrong"});
  }
};






  export { GET_ALL_QUESTIONS, ADD_QUESTION, GET_QUESTION_BY_USER_ID, DELETE_QUESTION_BY_ID}