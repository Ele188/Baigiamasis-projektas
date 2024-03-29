import express from "express";
import {
  GET_ALL_QUESTIONS, 
  ADD_QUESTION, 
  GET_ALL_QUESTIONS_BY_USER_ID, 
  DELETE_QUESTION_BY_ID,
  GET_ALL_LIKED_QUESTIONS_BY_USER_ID,
  GET_ALL_DISLAKED_QUESTIONS_BY_USER_ID
} from "../controllers/question.js";

import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/questions', GET_ALL_QUESTIONS);
  
  router.get('/questions/:userId', auth, GET_ALL_QUESTIONS_BY_USER_ID);
  
  router.post('/question',auth, ADD_QUESTION);
  
  router.post('/question/:id/like',auth, GET_ALL_LIKED_QUESTIONS_BY_USER_ID);
  
  router.post('/question/:id/dislike',auth, GET_ALL_DISLAKED_QUESTIONS_BY_USER_ID);
  
  router.delete('/question/:id',auth, DELETE_QUESTION_BY_ID);
  

  export default router; 
  


