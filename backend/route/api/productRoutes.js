const express =require('express')
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryController = require('../../controllers/viewCategoryController')
const viewSubCategoryController = require('../../controllers/viewSubCategoryController')
const addProductController = require('../../controllers/addProductController')
const viewProductController = require('../../controllers/viewProductController')
const _ =express.Router()
const multer  = require('multer')
const addVariantController = require('../../controllers/addVariantController')
const viewSingleCategoryController = require('../../controllers/viewSingleCategoryController')
const addToCartController = require('../../controllers/addToCartController')
const viewAddToCartController = require('../../controllers/viewAddToCartController')
const addDiscountController = require('../../controllers/addDiscountController')
const viewDiscountController = require('../../controllers/viewDiscountController')


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
_.post('/addvariant',upload.single('avatar'),addVariantController)
_.post('/addtocart',addToCartController)
_.post('/adddiscount',addDiscountController)



_.get('/viewcategory',viewCategoryController)
_.get('/viewsubcategory',viewSubCategoryController)
_.get('/viewproduct',viewProductController)
_.get('/viewsinglecategory',viewSingleCategoryController)
_.get('/vieweaddtocart',viewAddToCartController)
_.get('/viewdiscount',viewDiscountController)


module.exports=_