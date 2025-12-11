const Discount=require('../models/discountSchema')

const addDiscountController=async(req,res)=>{
    let {discountname,discountamount,discounttype,discountrang}=req.body
    
    

    let exisitDiscount=await Discount.find({discountname:discountname})

    if(exisitDiscount.length>0){
        res.send({error:"Discount Name Exisited"})

    }else if(discountamount>100){
         if(discounttype=="percentage"){
            res.send({error:"Discount Invalid"})
         }
    }else if(discountamount>50){
        if(discounttype=="deliverycharge"){
            res.send({error:"Discount Invalid"})

        }
    }else{

        let discount=new Discount({
            discountname,
            discountamount,
            discounttype,
            discountrang

        })
        discount.save()
        res.send({success:"Discount Created"})
    }
   

}
module.exports=addDiscountController