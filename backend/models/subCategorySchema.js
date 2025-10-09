const mongoose = require('mongoose');
const { Schema } = mongoose;

const subCategorySchema=new Schema({
   
    name:{
        type:String,
        required:true,
        unique:true
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserList"

    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"

    },
    status:{
        type:String,
        emum:["waitting","rejected","approval"],
        default:"waitting"
    }

})
module.exports=mongoose.model('SubCategory', subCategorySchema)