const Category=require('../models/categorySchema')


const viewCategoryController=async(req,res)=>{
  let category= await Category.find({}).populate("ownerId")
  res.send(category);
  
      
   
   
    
  
   

}
module.exports=viewCategoryController