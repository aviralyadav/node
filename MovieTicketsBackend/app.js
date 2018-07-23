const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');
var bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/movies');

// Initialize http server
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.use(morgan('combined'));

app.use('/v1', router);
app.use('/users', router);
app.use('/delete', router);
app.use('/update', router);
app.use('/save', router);
app.use('/send', router);
app.use('/get', router);

// Launch the server on port 3000
const server = app.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});