const secureApi=(req,res,next)=>{
    
    if(req.headers.authorization=="dfsdfsdfsdfsd"){
        next()

    }else{
        res.send({"error":"Authorization Failed"})

    }
    
    
}
module.exports=secureApi