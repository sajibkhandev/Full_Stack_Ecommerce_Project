const emailRegex = require("../helpers/emailRegex")
const emailVerification = require("../helpers/emailVerification")
const passwordRegexCaptialLetter = require("../helpers/passwordRegexCaptialLetter")
const passwordRegexDigit = require("../helpers/passwordRegexDigit")
const passwordRegexLength = require("../helpers/passwordRegexLength")
const passwordRegexSmallLetter = require("../helpers/passwordRegexSmallLetter")
const passwordRegexSpecilChartor = require("../helpers/passwordRegexSpecilChartor")
const userSchema =require('../models/userSchema')

const bcrypt = require('bcrypt');

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

    }else if(!passwordRegexSmallLetter(password)){
         res.send({"errors":"please give small letter"})

    }else if(!passwordRegexCaptialLetter(password)){
         res.send({"errors":"please give capital letter"})

    }
    else if(!passwordRegexDigit(password)){
         res.send({"errors":"please give minimum one digit"})

    }
    else if(!passwordRegexSpecilChartor(password)){
         res.send({"errors":"please give special chartor"})

    }
    else if(!passwordRegexLength(password)){
         res.send({"errors":"please give minimum 8 letter"})

    }
    else{
       bcrypt.hash(password, 10, function(err, hash) {
         let data=new userSchema({
            username:username,
            email:email,
            password:hash

        })
        data.save()
        emailVerification(email)


        res.send(req.body)
   
   });
        
    }

}
module.exports=registrationController