const Product=require('../models/productSchema')


const viewProductController=async(req,res)=>{
  let product= await Product.find({})
  res.send(product);
  
      
   
   
    
  
   

}
module.exports=viewProductController