const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Tests = require('../../models/Tests') 

const t1 = new Tests({
    _id: new mongoose.Types.ObjectId(),
    number: 1,
});

// t1.save();

// Tests.collection.drop();
router.get('/', (req,res) => {
    Tests.find({}, function(err, docs) {
        if (!err){ 
            res.send(docs)
            // process.exit();
        } else {throw err;}
    });
   });

module.exports = router;