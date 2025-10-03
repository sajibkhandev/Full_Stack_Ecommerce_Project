const express =require('express')
const addCategoryController = require('../../controllers/addCategoryController')
const _ =express.Router()

_.post('/addcategory',addCategoryController)


module.exports=_