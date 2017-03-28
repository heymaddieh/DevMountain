// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./movies');

// app specific variables
var app = express();
var port = 9090;

// MIDDLEWARE - app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PASSING IN DATA
// pass in data with a get

// Path Params --> req.params

// URL Queries --> req.query

app.get('/movies/:name', function(req, res) {
  console.log(req)
});

app.listen(port, function() {
  console.log('Listening on port', port);
});