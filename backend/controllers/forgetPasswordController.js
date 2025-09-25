const userSchema=require('../models/userSchema')
const nodemailer = require("nodemailer");

const forgetPasswordController=async(req,res)=>{
    let {email}=req.body
    let existinguser= await userSchema.findOne({email:email})

    // console.log(existinguser.email);
    if(existinguser){
        const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "intesmern2401@gmail.com",
        pass: "oujeayggatxlauav",
      },
    });
    const info = await transporter.sendMail({
        from: 'intesmern2401@gmail.com',
        to: email,
        subject: "Email Reset",
        text: "Hello world?", 
        html: `Please Change Your password <a href=http://localhost:5173/changepassword/${existinguser.email} style="background-color:#00f;padding:10px 20px;border-radius:10px;color:#fff;font-size:20px;font-weight:500;text-decoration:none;margin-bottom:30px;display:inline-block">Reset Here</a>`, 
      });
      res.send({success:"Reset Email sent"})

    }else{
        res.send({error:"User is not exist"})

    }


    
    
  

  
    
    

}
module.exports=forgetPasswordController