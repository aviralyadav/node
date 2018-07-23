var User = require('../models/user');
const mongoose = require('mongoose');
var express = require('express');

exports.index = (req, res, next) => {
  // Find all movies and return json response
  User.find({}, (err, users) => res.json(users));
};
exports.deleteUser = (req, res) => {
	var id = String(req.params.id);
	
	User.remove({_id:mongoose.Types.ObjectId(id)}, (err1, doc1) => { // doc here is actually err
        // handle err1
        res.json(doc1);
      })
};
exports.updateUser = (req, res) => {
	var id = String(req.params.id);
	var obj = String(req.params.obj);
	console.log(id, obj);
	User.update({_id: mongoose.Types.ObjectId(id)}, {name: obj}, {upsert: true}, (err,doc) => {
		res.json(doc);
	})
};


exports.saveUser = (req, res) => {
	
	var user= new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.username = req.body.username;
	user.address = req.body.address;
	user.phone = req.body.phone;
	user.website = req.body.website;
	//var User = new User(obj1);
	user.save((err,doc) => {
		res.json(doc);
	})
};
//module.exports = index;