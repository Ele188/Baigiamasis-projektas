import QuestionModel from "../models/question.js";


const GET_ALL_QUESTIONS = async (req, res) => {
    const questions = await QuestionModel.find();
    return res
    .status(200)
    .json({questions: questions});
  };

const ADD_QUESTION = async (req, res) => {
    console.log(req.body);

    const question = new QuestionModel({
            questionText: req.body.questionText,
            date: req.body.date,
        });

        const response = await question.save();

    return res
    .status(201)
    .json({message: "Question was added", response: response});
  };


  export { GET_ALL_QUESTIONS, ADD_QUESTION }