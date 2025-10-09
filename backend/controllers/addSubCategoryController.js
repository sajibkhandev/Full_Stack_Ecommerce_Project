const SubCategory=require('../models/subCategorySchema')


const addSubCategoryController=async(req,res)=>{
   let {name,ownerId,categoryId}=req.body
      

      let existingSubCategory=await SubCategory.findOne({name:name})

      if(existingSubCategory){
         res.send({error:"Aready has Sub Category"})
      }else{
         let subcategory=new SubCategory({
            name:name,
            ownerId:ownerId,
            categoryId:categoryId
         })
         subcategory.save()
         res.send({success:"Sub Category has been Created and wait for admin approval"})


      }

}
module.exports=addSubCategoryController