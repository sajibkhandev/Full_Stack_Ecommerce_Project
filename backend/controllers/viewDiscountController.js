const Discount=require('../models/discountSchema')


const viewDiscountController=async(req,res)=>{
  let discount= await Discount.find({})
  res.send(discount);
  
      
   
   
    
  
   

}
module.exports=viewDiscountController