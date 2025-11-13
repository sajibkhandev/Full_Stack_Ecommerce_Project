require('dotenv').config()
const express = require('express')
const cors =require('cors')
const route  = require('./route')
const mongobdConfig = require('./dbConfig/mongobdConfig')

const app = express()
const port = 8000
const path =require('path')

mongobdConfig()

// Middlewars
app.use(cors())
app.use(express.json())
app.use(route)

app.use('/uploads',express.static(path.join(__dirname,"uploads")))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
