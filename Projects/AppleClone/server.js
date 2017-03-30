var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');

var app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static('./'));

var port = 3030;

app.listen(port, function(){
  console.log('listening on port' + port)
  
})