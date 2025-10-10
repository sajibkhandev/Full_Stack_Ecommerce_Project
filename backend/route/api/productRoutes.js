const express =require('express')
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryController = require('../../controllers/viewCategoryController')
const viewSubCategoryController = require('../../controllers/viewSubCategoryController')
const _ =express.Router()

_.post('/addcategory',addCategoryController)
_.post('/addsubcategory',addSubCategoryController)



_.get('/viewcategory',viewCategoryController)
_.get('/viewsubcategory',viewSubCategoryController)


module.exports=_