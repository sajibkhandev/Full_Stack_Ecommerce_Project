const userSchema=require('../models/userSchema')

const otpController=async(req,res)=>{
    let {email,otp}=req.body
    
    let existinguser= await userSchema.findOne({email:email})

    console.log(existinguser.email);
    if(existinguser.email){
        await userSchema.findByIdAndUpdate({otp:""})
        
        
    }else{
        res.send({error:"Otp not match"})
       
        
    }
    
    

}
module.exports=otpController