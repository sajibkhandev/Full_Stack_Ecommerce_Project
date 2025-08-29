const passwordRegexSmallLetter =(password)=>{
    if(/^(?=.*[a-z])/.test(password)){
        return true
    }

}
module.exports=passwordRegexSmallLetter