const express =require('express')
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryController = require('../../controllers/viewCategoryController')
const viewSubCategoryController = require('../../controllers/viewSubCategoryController')
const addProductController = require('../../controllers/addProductController')
const viewProductController = require('../../controllers/viewProductController')
const _ =express.Router()
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' +  file.originalname )
    
    
  }
})

const upload = multer({ storage: storage })


_.post('/addcategory',addCategoryController)
_.post('/addsubcategory',addSubCategoryController)
_.post('/addproduct',upload.single('avatar'),addProductController)



_.get('/viewcategory',viewCategoryController)
_.get('/viewsubcategory',viewSubCategoryController)
_.get('/viewproduct',viewProductController)


module.exports=_