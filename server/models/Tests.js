const mongoose = require('mongoose');
 
const TestSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number:Number
})

module.exports = User = mongoose.model('Test', TestSchema)