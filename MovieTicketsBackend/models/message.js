var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: Number,
	message: String
});

module.exports = mongoose.model('message', messageSchema);