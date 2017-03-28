//Require Modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
//adding js is optional
var FoodController = require('./food_controller.js');

//Initialize Express
var app = express();
// Declare Port
var port = 3030;

//Middleware
//Regular users vs admin users
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
  secret: "akldfjalk10298e98uaefajdhfwr_lecture",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}));

//Endpoints
// app.get('/', function(req, res){
//   //request from client
//   //response to client from server
//   res.status(200).send("HI");
// });

//app.get('/foods', FoodController.getAll);

app.get('/foods', function(req, res){
  console.log('got request --> session', req.session.id);

});
//note: this will not work without bodyParser
// app.post('/', function(req, res){
//   console.log('body', req.body);
// })

//Listen
app.listen(port, function(){
  console.log('listening on port', port)
});