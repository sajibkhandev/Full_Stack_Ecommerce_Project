const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema=new Schema({
   
    name:{
        type:String,
        required:true,
        unique:true
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserList"

    },
    status:{
        type:String,
        emum:["waitting","rejected","approval"],
        default:"waitting"
    },
    subcategorylist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubCategory"

        }
    ]

})
module.exports=mongoose.model('Category', categorySchema)