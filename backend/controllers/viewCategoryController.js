const Category=require('../models/categorySchema')


const viewCategoryController=async(req,res)=>{
  let category= await Category.find({})
  res.send(category);
  
      
   
   
    
  
   

}
module.exports=viewCategoryController