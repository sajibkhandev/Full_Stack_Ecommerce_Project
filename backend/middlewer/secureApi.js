const secureApi=(req,res,next)=>{
    
    if(req.headers.authorization==process.env.MIDDLEWER_PASS){
        next()

    }else{
        res.send({"error":"Authorization Failed"})

    }
    
    
}
module.exports=secureApi