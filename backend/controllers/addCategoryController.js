const Category=require('../models/categorySchema')


const addCategoryController=async(req,res)=>{
   let {name,ownerId}=req.body
      // console.log(name);
      // console.log(ownerId);

      let existingCategory=await Category.findOne({name:name})
      if(existingCategory){
         res.send({error:"Aready has Category"})
      }else{
         let category=new Category({
            name:name,
            ownerId:ownerId,
         })
         category.save()
         res.send({success:"Category Created"})


      }
      
   
   
    
  
   

}
module.exports=addCategoryController