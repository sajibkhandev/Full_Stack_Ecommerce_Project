const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema=new Schema({
    username:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

    

})
module.exports=mongoose.model('UserList', userSchema)