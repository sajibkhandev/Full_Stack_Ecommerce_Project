
const mongoose = require('mongoose');

const mongobdConfig =()=>{
    mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hegojkr.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));

}

module.exports=mongobdConfig