
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

const dbUrl = 'mongodb://localhost:27017/emp_appraisal';
mongoose.connect(dbUrl, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
  console.log('Connected to emp_appraisal MongoDB database.');
});

mongoose.connection.on('error', function() {
  console.log('Failed database connection. Please ensure that MongoDB is up and running.');
});

// Express code for handling Web Server related tasks
var app = express();

// call use() on the Express application to add the Router to the middleware handling path. 
// The two routes will then be accessible
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/api'));

// Start server
var port = 8080, ip = "127.0.0.1";
app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
