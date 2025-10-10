const SubCategory=require('../models/subCategorySchema')


const viewSubCategoryController=async(req,res)=>{
  let subcategory= await SubCategory.find({})
  res.send(subcategory);
  
      
   
   
    
  
   

}
module.exports=viewSubCategoryController