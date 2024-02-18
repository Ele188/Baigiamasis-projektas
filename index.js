import express from 'express';
import mongoose from "mongoose";
import questionRouter from "./src/routes/question.js";

const app = express();


app.use(express.json());

mongoose
.connect("mongodb+srv://elenajankauskaite5:elenajankauskaite5@elena555.ysncalf.mongodb.net/questions-api"
)
.then(() => console.log("Conected to DB!"))
.catch((err) => {
    console.log(err);
});

app.use(questionRouter);


app.listen(3000)