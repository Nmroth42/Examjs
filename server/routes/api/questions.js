const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Tests = require('../../models/Tests') 
const Questions = require('../../models/Questions') 

const q1 = new Questions({
    _id: new mongoose.Types.ObjectId(),
    text: "Текст задания2",
    var1: "Вариант1",
    var2: "вариант2",
    var3: "Вариант3",
    idTest:"5d071c672950cd2cf162df9c",
    answer:2
});

// q1.save();
// Questions.collection.drop();
// router.get('/', (req,res) => res.status(201).json({
//     message:"hadle",
//     createdQuestion: q1
// }));

// Questions.collection.drop();

// router.get('/', (req, res) => {
//     console.log('workkk')
//     Questions.find({}, function(err, docs) {
//         if (!err){ 
//             res.send(docs)
//             // process.exit();
//         } else {throw err;}
//     });
//    });
   module.exports = {

    async show (req, res) {
        try {
          const questions = await Questions.find({idTest: req.params.testId})
          const test = await Tests.find({_id: req.params.testId})
          questions.map((name, index)  => {
            console.log(name.answer)
            //отправка без ответа
            name.answer = 0   
          })
          const result = {
            questions:questions,
            test:test
          }
          res.send(result)
          console.log(questions) 
          // console.log(questions)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured :('
          })
        }
    },
    async answers (req, res) {
      try {
        const answers = req.body
        const questions = []
        const wideResult = []
        //использовать редюсер?
        var countRigthAnsw = 0
        var countTasks = 0
        try {  
         for (let index = 0; index < answers.length ; ++index) {
            if (q = await Questions.find({_id: answers[index].idTask})) {
            questions.push(q)
            }
          }
          for (let index = 0; index < answers.length ; ++index) {
            // if (answers[index].answer = questions[index].answer) {
                if (answers[index].varAnswer == questions[index][0].answer) {
                  countRigthAnsw++
                }
                  wideResult.push({
                    text: questions[index][0].text,
                    var1: questions[index][0].var1,
                    var2:  questions[index][0].var2,
                    var3:  questions[index][0].var3,
                    chosenAnsw: answers[index].varAnswer,
                    rightAnsw: questions[index][0].answer,
                    number: answers[index].number
                  })
                
                  console.log('rrrr')
                // }
                countTasks++
                console.log(answers[index].varAnswer + 'вариант ответа')
                //0 чтобы дойти до обьекта
                console.log(questions[index][0] + 'праивльный ответ')
                //0 чтобы дойти до обьекта
            
              
            // }

          }
          // console.log(questions)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured with answer id :('})
        }
        // console.log(answers[0].idTask)
        // // for (let index = 0; index < answers.length ; ++index) {
        // //   console.log(answers[index].idTask)
        // //   // if (Questions.find({idtask: answers[index].idTask})) {
        // //   // questions = Questions.find({_id: answers[index].idTask})
        // //   // console.log(questions)
         
        // //   // }
        // // }
        // res.send(questions.toJSON())
        // console.log(req.body)
        // console.log(questions)
        // const jsonArrayQuestions= JSON.parse(JSON.stringify(questions))
        const result = {
          arrayAnsw: wideResult,
          countRigthAnsw: countRigthAnsw,
          countTasks:countTasks
        }
        // res.send(jsonArrayQuestions)
         console.log(countRigthAnsw)
         console.log(countTasks)
        res.send(result)
      } catch (err) {
        res.status(500).send({
          error: 'An error has occured :('
        })
  }
    }
   }

// module.exports = router;