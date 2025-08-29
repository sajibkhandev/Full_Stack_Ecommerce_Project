const passwordRegexCaptialLetter =(password)=>{
    if(/(?=.*[A-Z])/.test(password)){
        return true
    }

}
module.exports=passwordRegexCaptialLetter