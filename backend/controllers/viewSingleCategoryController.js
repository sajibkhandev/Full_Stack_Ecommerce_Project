const Subcategory=require('../models/subCategorySchema')


const viewSingleCategoryController=async(req,res)=>{
    // console.log(req.query.slug);
    
  let singlecategory= await Subcategory.find({categoryId:req.query.slug})
  res.send(singlecategory);
  
      
   
   
    
  
   

}
module.exports=viewSingleCategoryController