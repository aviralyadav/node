//import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
//const { Schema } = require('mongoose');

//define movie schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    poster: String,
    genre: String,
    days: Array,
    times: Array
});

// export mongoose model

module.exports = mongoose.model('movie', movieSchema);