var Message = require('../models/message');

exports.postMessage = function (req, res) {
	var message = new Message();
	message.name = req.body.name;
	message.email = req.body.email;
	message.phone = req.body.phone;
	message.message = req.body.message;
	//console.log(message);
	message.save(function(err, doc){
		res.json(doc);
	})
};

exports.getMessage = function(req, res) {
	Message.find(function(err, doc){
		//console.log(doc);
		res.json(doc);
	})
};

//module.exports = saveMessage;