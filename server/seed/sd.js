const express = require("express");
// const router = express.Router();
const mongoose = require("mongoose");
// const Tests = require("../models/Tests");
const Questions = require("../models/Questions");
// const path = require("path");
const fs = require("fs");
// mongoose.connect(db);
// const connectDB = require('../config/db')
// connectDB();

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://Mannoroth42:admin@devconnector-qatly.mongodb.net/test?retryWrites=true",
      {
        useNewUrlParser: true
      }
    );
    console.log("mongo connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

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

var obj = fs.readFileSync("javascript_questions.json");
var obj2 = fs.readFileSync("react_questions.json");
var jsonContent = JSON.parse(obj);
var jsonContent2 = JSON.parse(obj2);
// console.log(jsonContent.javascript_questions[0])
// console.log(jsonContent.javascript_questions.length)
// console.log('eee')
Questions.collection.drop();
for (let index = 0; index < jsonContent.javascript_questions.length; ++index) {
  const q1 = new Questions({
    _id: new mongoose.Types.ObjectId(),
    text: jsonContent.javascript_questions[index].text,
    var1: jsonContent.javascript_questions[index].var1,
    var2: jsonContent.javascript_questions[index].var2,
    var3: jsonContent.javascript_questions[index].var3,
    idTest: "5d072394cde617346b715e4a",
    answer: jsonContent.javascript_questions[index].answer,
    explanation: jsonContent.javascript_questions[index].explanation
  });
  console.log("eee");
  q1.save();
}
for (let index = 0; index < jsonContent2.react_questions.length; ++index) {
  const q1 = new Questions({
    _id: new mongoose.Types.ObjectId(),
    text: jsonContent2.react_questions[index].text,
    var1: jsonContent2.react_questions[index].var1,
    var2: jsonContent2.react_questions[index].var2,
    var3: jsonContent2.react_questions[index].var3,
    idTest: "5d07241f1c9d440000bc07d6",
    answer: jsonContent2.react_questions[index].answer,
    explanation: jsonContent2.react_questions[index].explanation
  });
  console.log("eee");
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
