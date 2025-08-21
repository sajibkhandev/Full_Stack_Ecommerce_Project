const express = require('express')
const cors =require('cors')
const route  = require('./route')

const app = express()
const port = 3000


app.use(route)
app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
