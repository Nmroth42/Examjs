const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Tests = require("../models/Tests");
const Questions = require("../models/Questions");

// const q1 = new Questions({
//   _id: new mongoose.Types.ObjectId(),
//   text: "Текст задания2",
//   var1: "Вариант1",
//   var2: "вариант2",
//   var3: "Вариант3",
//   idTest: "5d071c672950cd2cf162df9c",
//   answer: 2
// });
//   console.log('eee')
//   q1.save();
//   console.log('sss')
module.exports = {
  //отправляет заголовки тестов
  async AllTestTitles(req, res) {
    try {
      Tests.find({}, function(err, docs) {
        if (!err) {
          res.send(docs);
          // process.exit();
        } else {
          throw err;
        }
      });
    } catch (err) {
      res.status(500).send({
        error: "An error has occured :("
      });
    }
  },
  //оправляет заголовки(описание) одного
  async oneTestTitle(req, res) {
    try {
      const test = await Tests.find({ _id: req.params.testId });
      res.send(test);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured :("
      });
    }
  },
  //отправляет содержимое теста
  async testContent(req, res) {
    try {
      const questions = await Questions.find({ idTest: req.params.testId });
      // const test = await Tests.find({ _id: req.params.testId });
      questions.map((name, index) => {
        console.log(name.answer);
        //отправка без ответа
        name.answer = 0;
      });
      res.send(questions);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured :("
      });
    }
  },
  async resultTest(req, res) {
    try {
      const answers = req.body;
      const questions = [];
      const wideResult = [];
      var countRigthAnsw = 0;
      var countTasks = 0;
      try {
        for (let index = 0; index < answers.length; ++index) {
          if ((q = await Questions.find({ _id: answers[index].idTask }))) {
            questions.push(q);
          }
        }

        for (let index = 0; index < answers.length; ++index) {
          if (answers[index].varAnswer == questions[index][0].answer) {
            countRigthAnsw++;
          }
          wideResult.push({
            text: questions[index][0].text,
            var1: questions[index][0].var1,
            var2: questions[index][0].var2,
            var3: questions[index][0].var3,
            chosenAnsw: answers[index].varAnswer,
            rightAnsw: questions[index][0].answer,
            number: answers[index].number,
            explanation: questions[index][0].explanation
          });

          countTasks++;
          // console.log(answers[index].varAnswer + "вариант ответа");
          // //0 чтобы дойти до обьекта
          // console.log(questions[index][0] + "праивльный ответ");
          //0 чтобы дойти до обьекта

          // }
        }
      } catch (err) {
        res.status(500).send({
          error: "An error has occured with answer id :("
        });
      }

      const result = {
        arrayAnsw: wideResult,
        countRigthAnsw: countRigthAnsw,
        countTasks: countTasks
      };

      res.send(result);
    } catch (err) {
      res.status(500).send({
        error: "An error has occured :("
      });
    }
  }
};

// module.exports = router;
