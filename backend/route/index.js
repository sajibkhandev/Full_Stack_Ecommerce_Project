const express =require('express')
const _ =express.Router()
const Auth=require('./api/registration')

_.use('/api/v1',Auth)

module.exports=_