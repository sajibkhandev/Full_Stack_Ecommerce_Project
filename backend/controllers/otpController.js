const userSchema=require('../models/userSchema')

const otpController=async(req,res)=>{
    let {email,otp}=req.body
    console.log(req.body);
   
    
    
    
    let existinguser= await userSchema.findOne({email:email})

    // console.log(existinguser.otp);

    if(!existinguser.emailVerification && existinguser.otp==otp){
        await userSchema.findOneAndUpdate({email:email},{otp:"",emailVerification:true})
        console.log("otp matched");
        res.send({success:"otp matched"})
        
        
        
    }else{
        res.send({error:"otp not matched"})
        console.log("otp not matched");
        // res.send({error:"Otp not match"})
       
        
    }
    
    

}
module.exports=otpController