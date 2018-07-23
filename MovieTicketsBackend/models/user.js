//import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
//const { Schema } = require('mongoose');

//define movie schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: Object,
    phone: String,
    website: String,
    company: Object
    
});

// export mongoose model

module.exports = mongoose.model('user', userSchema);