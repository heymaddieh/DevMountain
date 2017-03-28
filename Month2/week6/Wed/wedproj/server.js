var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = express();
  app.use(bodyParser.json());

var port = 3636;

var conn = massive.connectSync({
  connectionString : "postgres://postgres:paramads4@localhost/massive_demo"
});

app.set('db', conn); 
  

var controller = require('./productsCtrl.js');


app.listen(port, function() {
  console.log("Started server on port", port);
});