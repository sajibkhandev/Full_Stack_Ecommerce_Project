const express =require('express')
const _ =express.Router()
const authRoutes=require('./authRoutes')

_.use('/authentication',authRoutes)

module.exports=_