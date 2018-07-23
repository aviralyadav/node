var express = require('express');
// Import index action from movies controller
var index = require('./controllers/movies');
var userIndex = require('./controllers/users');
var message = require('./controllers/messages');

// Initialize the router
var router = express.Router();

// Handle /movies.json route with index action from movies controller
router.route('/movies.json')
  .get(index);
 router.route('/').get(userIndex.index);
 router.route('/user/:id').get(userIndex.deleteUser);
 router.route('/userid/:id/:obj').get(userIndex.updateUser);
 router.route('/userdata').post(userIndex.saveUser);
 router.route('/message').post(message.postMessage);
 router.route('/messages').get(message.getMessage);

module.exports = router;