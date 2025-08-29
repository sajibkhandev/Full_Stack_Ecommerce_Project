const express = require('express')
const cors =require('cors')
const route  = require('./route')
const mongobdConfig = require('./dbConfig/mongobdConfig')

const app = express()
const port = 3000

mongobdConfig()

// Middlewars
app.use(cors())
app.use(express.json())
app.use(route)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
