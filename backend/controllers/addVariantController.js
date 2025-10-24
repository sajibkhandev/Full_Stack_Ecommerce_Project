const Variant=require('../models/variantSchema')

const addVariantController=async(req,res)=>{
   let {name,avatar,sellprice,regularprice,productid}=req.body
   
   // console.log(`/uploads/${req.file.filename}`);
   let variant = await Variant.findOne({name:name})

   if(variant){
      res.send({error:"Variant existied"})
   }else{
      let variant=new Variant({
         name:name,
         image:`/uploads/${req.file.filename}`,
         regularprice:regularprice,
         sellprice:sellprice,
         productid:productid

      })
      variant.save()
      res.send({success:"Variant has been created"})
   }
    
  
   

}
module.exports=addVariantController