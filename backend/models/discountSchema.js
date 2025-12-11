const mongoose = require('mongoose');
const { Schema } = mongoose;

const discountSchema=new Schema({
   
    discountname:{
        type:String,
        required:true,
        unique:true
    },
    discountamount:{
          type:String,
          required:true,

    },
    discounttype:{
        type:String,
        required:true,

    }
    ,
    discountrang:{
        type:Number,
        required:true,

    }
    

})
module.exports=mongoose.model('Discount', discountSchema)