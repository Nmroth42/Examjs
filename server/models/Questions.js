const mongoose = require('mongoose');
 
const questionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    var1: String,
    var2: String,
    var3: String,
    idTest:String,
    answer:Number
})

module.exports = User = mongoose.model('Question', questionSchema)