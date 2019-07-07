const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Tests = require("../models/Tests");
const Questions = require("../models/Questions");
const path = require('path')
const fs = require('fs');
// mongoose.connect(db);
// const connectDB = require('../config/db')
// connectDB();



const connectDB =  () => {
    try {
        mongoose.connect("mongodb+srv://Mannoroth42:admin@devconnector-qatly.mongodb.net/test?retryWrites=true", {
            useNewUrlParser: true 
        })
        console.log('mongo connected')
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}

connectDB();

// const q1 = new Questions({
//   _id: new mongoose.Types.ObjectId(),
//   text: "Текст задания2",
//   var1: "Вариант1",
//   var2: "вариант2",
//   var3: "Вариант3",
//   idTest: "5d071c672950cd2cf162df9c",
//   answer: 2
// });



var obj = fs.readFileSync("react_questions.json");
var jsonContent = JSON.parse(obj);
// console.log(jsonContent.react_questions[0])
// console.log(jsonContent.react_questions.length)
// console.log('eee')
Questions.collection.drop();
for (let index = 0; index < jsonContent.react_questions.length; ++index) {

    const q1 = new Questions({
          _id: new mongoose.Types.ObjectId(),
          text: jsonContent.react_questions[index].text,
          var1: jsonContent.react_questions[index].var1,
          var2: jsonContent.react_questions[index].var2,
          var3: jsonContent.react_questions[index].var3,
          idTest: "5d072394cde617346b715e4a",
          answer: jsonContent.react_questions[index].answer,
          explanation: jsonContent.react_questions[index].explanation
        });
        console.log('eee')
        q1.save();
    
}
// Questions.collection.drop();
// const q1 = new Questions({
//   _id: new mongoose.Types.ObjectId(),
//   text: "Текст 8666",
//   var1: "Вариант1",
//   var2: "вариант2",
//   var3: "Вариант3",
//   idTest: "5d072394cde617346b715e4a",
//   answer: 2
// });
//   console.log('eee')
//   q1.save();
//   console.log('sss')
 