const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

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
          questions.map((name, index)  => {
            console.log(name.answer)
            //отправка без ответа
            name.answer = 0   
          })
          res.send(questions)
          console.log(questions)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured :('
          })
        }
    }
   }

// module.exports = router;