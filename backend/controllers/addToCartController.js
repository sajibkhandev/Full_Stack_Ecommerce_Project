const AddTopCart=require('../models/addToCartSchema')

const addToCartController=async(req,res)=>{
    let {productId,quantity,cartOwnerId}=req.body
    console.log(req.query.type);
    

   let existingProduct= await AddTopCart.find({productId:productId})

//    console.log(existingProduct[0]._id); 

   if(existingProduct.length>0){

      if(req.query.type=="increment"){
          await AddTopCart.findOneAndUpdate({_id:existingProduct[0]._id},{quantity:existingProduct[0].quantity+quantity},{new:true})
          res.send("the Product already has.now added only Quantiy")

      }else if(req.query.type=="decrement"){
         
         if(existingProduct[0].quantity>1){

            await AddTopCart.findOneAndUpdate({_id:existingProduct[0]._id},{quantity:existingProduct[0].quantity-quantity},{new:true})
           res.send("the Product already has.now added only Quantiy")
         }
         
          

      }
   
   }else{
     let cart=new AddTopCart({
        productId:productId,
        quantity:quantity,
        cartOwnerId:cartOwnerId

     })
     cart.save()
     res.send("Cart Created")
   }
   
    
   
   

    
  
   

}
module.exports=addToCartController