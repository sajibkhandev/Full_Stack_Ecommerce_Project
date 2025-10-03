const express =require('express')
const _ =express.Router()
const authRoutes =require('./authRoutes')
const productRoute =require('./productRoutes')

_.use('/authentication',authRoutes)
_.use('/product',productRoute)

module.exports=_