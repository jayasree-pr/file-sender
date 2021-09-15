const express = require('express');

const mongoose = require('mongoose');
const User = require('./config/db');
const User = require('./router/files');

const app = express();

app.use('/api/files',require('./router/files'));

app.listen(4000,()=>{
    console.log('at 4000');
})