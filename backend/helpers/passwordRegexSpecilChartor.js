const passwordRegexSpecilChartor =(password)=>{
    if(/(?=.*[@$!%*?&])/.test(password)){
        return true
    }

}
module.exports=passwordRegexSpecilChartor