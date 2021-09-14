const express = require('express');
const mongoose = require('mongoose');
const User = require('./model');

const app = express();
app.use(express.json());
const url = 'mongodb://127.0.0.1:27017/auth';

const db= async ()=>{
    mongoose.connect(url,{useNewUrlParser:true
    })
    console.log("DB connected");
}

module.exports = db();