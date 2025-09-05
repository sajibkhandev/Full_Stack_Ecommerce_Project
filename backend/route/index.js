const express =require('express')
const _ =express.Router()
const Auth=require('./api')
let Api=process.env.API_BASE_URL

_.use(Api,Auth)

module.exports=_