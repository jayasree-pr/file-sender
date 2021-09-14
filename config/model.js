const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name:String,
    email: String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now(),
    },
});
module.exports=User=mongoose.model('user',user);