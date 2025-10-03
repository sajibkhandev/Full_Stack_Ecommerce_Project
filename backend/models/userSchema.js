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
    },
    role:{
        type:String,
        enum:["user","merchant","admin"],
        default:"user"
    },
    emailVerification:{
        type:Boolean,
        default:false
    },
    otp:String

})
module.exports=mongoose.model('UserList', userSchema)