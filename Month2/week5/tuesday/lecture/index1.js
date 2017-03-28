var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./movies.js');

var app = express(); 
var port = 9090;


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(function(request, response, next){
//   console.log('i am being used');
//   next();
// })
// app.get('/', function(request, response, next){
//   response.status(200).send('hello');
// })
// app.get('/another',function(request, response, next){
//   response.status(200).send('another hello');
// })

app.get('/movies/:name', function(req,res,next){
  var movieTitle = req.params.title;

  for(var i = 0; i< movies.length; i++){
    if(movies[i].title===movieTitle){
      return res.status(200).send(movies[i]);
    }
  }
})
//ENDPOINTS - MOVIES
//LIST MOVIE
//get MOVIES
//post/add  MOVIES
// delete MOVIES
// update MOVIES

app.p

app.listen(port, function(){
  console.log('listening on port', port);
});

app.get('/movies', function(req, res){
  response.status(200).send(movies);
})