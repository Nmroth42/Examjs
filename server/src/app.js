console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const serveStatic = require('serve-static')
const path = require('path')
const connectDB = require('../config/db')
const mongoose = require('mongoose')

// const {doIt} = require('../seed/sd')

const TestController = require('../routes/api/questions')


connectDB();


const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors());

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
//
// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//
//    console.log("Example app listening at http://%s:%s", host, port)
// })
require('./routes')(app)
app.use('/', serveStatic(path.join(__dirname, '../../build')))
// app.use('/quiz', serveStatic(path.join(__dirname, '../../build')))
// app.use('/api/questions/:testId', require('../routes/api/questions'))

// app.get('*', function (request, response){
//   response.sendFile(path.join(__dirname, '../../build'))
// })
// app.use('/api/tests', require('../routes/api/tests'))
// app.get('/api/questions/:testId', TestController.show)
// app.post('/api/answers', TestController.answers)





const port = process.env.PORT || 8080
app.listen(port)



console.log('listening on port: ' + port)
