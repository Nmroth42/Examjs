console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

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

app.use('/', serveStatic(path.join(__dirname, '../../build')))
app.use('/quiz', serveStatic(path.join(__dirname, '../../build')))

// app.get('*', function (request, response){
//   response.sendFile(path.join(__dirname, '../../build'))
// })


const port = process.env.PORT || 8080
app.listen(port)



console.log('listening on port: ' +port)
