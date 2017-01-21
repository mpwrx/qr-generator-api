const qr = require('qr-image') // use qr-image
const express = require('express') // use express
const bodyParser= require('body-parser') // use bodyParser


var app = express() // assign app to express ()
app.use(bodyParser.urlencoded({extended: true})) // enable urlencoded

app.listen(3000) // run server

app.get('', (req, res) => {
    res.send(new Date())
}) // index timestamp

app.get('/getCode/:tag', (req, res) => {  
  var code = qr.image(req.params.tag.toString(), { type: 'svg' })
  res.type('svg')
  code.pipe(res)
}) // method get tag generator

