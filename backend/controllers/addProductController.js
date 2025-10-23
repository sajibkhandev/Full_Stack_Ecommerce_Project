const Product=require('../models/productSchema')

const addProductController=async(req,res)=>{
   let {name,des,avatar,sellprice,regularprice,slug}=req.body
  
   
   // console.log(`/uploads/${req.file.filename}`);
   

   let product = await Product.findOne({name:name})

   if(product){
      res.send({error:"Product existied"})
   }else{
      let product=new Product({
         name:name,
         des:des,
         image:`/uploads/${req.file.filename}`,
         regularprice:regularprice,
         sellprice:sellprice,
         slug:slug

      })
      product.save()
      res.send({success:"Product has been created"})
   }
    
  
   

}
module.exports=addProductController