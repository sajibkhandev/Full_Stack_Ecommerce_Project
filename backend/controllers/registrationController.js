const emailRegex = require("../helpers/emailRegex")

const registrationController=(req,res)=>{
    let {username,email,password}=req.body
    if(!username){
        res.send({"errors":"Give a Username"})
    }else if(!email){
          res.send({"errors":"Give a Email"})

    }else if(!emailRegex(email)){
        res.send({"errors":"Give a Vaild Email"})
    }
    
    else if(!password){
        res.send({"errors":"Give a Password"})

    }
    else{
        console.log("Everything is ok");
        
    }
   
    

}
module.exports=registrationController