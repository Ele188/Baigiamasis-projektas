import express from "express";
import {GET_ALL_QUESTIONS, ADD_QUESTION} from "../controllers/question.js";

const router = express.Router();

router.get('/questions', GET_ALL_QUESTIONS);
  
  router.get('/questions/:userId', GET_ALL_QUESTIONS);
  
  router.post('/question', ADD_QUESTION);
  
  router.post('/question/:id/like', GET_ALL_QUESTIONS);
  
  router.post('/question/:id/dislike', GET_ALL_QUESTIONS);
  
  router.delete('/question/:id', GET_ALL_QUESTIONS);
  

  export default router; 
  


