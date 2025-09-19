const userSchema=require('../models/userSchema')
const bcrypt = require('bcrypt');

const changePasswordController=async(req,res)=>{
    let {email,password}=req.body
    // console.log(email);
    // console.log(password);
    
    let existinguser= await userSchema.findOne({email:email})

    // console.log(existinguser.password);
    bcrypt.hash(password, 10, async function(err, hash) {
     if(existinguser){
        await userSchema.findOneAndUpdate({email:email},{password:hash})
        res.send({success:"Password Chnaged"})
    }else{
        res.send({error:"Cradiantial Invaild"})

    }
});
   

}
module.exports=changePasswordController