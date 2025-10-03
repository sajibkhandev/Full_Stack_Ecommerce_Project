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

    }

})
module.exports=mongoose.model('Category', categorySchema)