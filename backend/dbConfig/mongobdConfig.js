// intesmern2401
// 1eXajOHT5pJOLza2
// test
const mongoose = require('mongoose');

const mongobdConfig =()=>{
    mongoose.connect('mongodb+srv://intesmern2401:1eXajOHT5pJOLza2@cluster0.hegojkr.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

}

module.exports=mongobdConfig