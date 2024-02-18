import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
questionText: {type: String, required: true, min: 3},
date: {type: String, required: true, min: 3},
});

export default mongoose.model("Question", questionSchema)