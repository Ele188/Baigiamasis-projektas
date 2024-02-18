import express from "express";
import {GET_ALL_QUESTIONS, ADD_QUESTION, GET_QUESTION_BY_USER_ID, DELETE_QUESTION_BY_ID} from "../controllers/question.js";

const router = express.Router();

router.get('/questions', GET_ALL_QUESTIONS);
  
  router.get('/question/:userId', GET_QUESTION_BY_USER_ID);
  
  router.post('/question', ADD_QUESTION);
  
  router.post('/question/:id/like', GET_ALL_QUESTIONS);
  
  router.post('/question/:id/dislike', GET_ALL_QUESTIONS);
  
  router.delete('/question/:id', DELETE_QUESTION_BY_ID);
  

  export default router; 
  


