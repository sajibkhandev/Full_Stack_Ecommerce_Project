const express =require('express')
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryController = require('../../controllers/viewCategoryController')
const _ =express.Router()

_.post('/addcategory',addCategoryController)
_.post('/addsubcategory',addSubCategoryController)

_.get('/viewcategory',viewCategoryController)


module.exports=_