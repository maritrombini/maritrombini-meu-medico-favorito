const express = require('express')
const app = express()

//ROUTES
const index = require('./routes/index')
const doctors = require('./routes/doctors')

app.use(express.json())

//require('./models/Doctor.js')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-Width, Content-Type, Accept'
  )

  next()
})

app.use('/', index)
app.use('/doctors', doctors)

app.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers')
  res.header(
    'Access-Control-Allow-Methods',
    'PUT,POST,GET,DELETE,OPTIONS,PATCH'
  )
  res.send('send some thing whatever')
})

module.exports = { app }
