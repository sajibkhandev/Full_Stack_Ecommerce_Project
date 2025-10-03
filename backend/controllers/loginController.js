const userSchema=require('../models/userSchema')
const bcrypt = require('bcrypt');

const loginController=async(req,res)=>{
    let {email,password}=req.body 
    
    
    
    
    let existingUser= await userSchema.findOne({email:email})
    // console.log(existingUser.password);

   if(existingUser){
    bcrypt.compare(password, existingUser.password, function(err, result) {
    // result == true
    console.log(result);
    if(result){
        res.send({
            id:existingUser._id,
            username:existingUser.username,
            email:existingUser.email,
            role:existingUser.role,
            emailVerification:existingUser.emailVerification

        })

    }else{
        res.send({error:"Creadintial User"})
    }
});
     
    
   }else{
    res.send({error:"Creadintial User"})
    
   }
   
    


}
module.exports=loginController