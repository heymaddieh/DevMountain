var app = require('./server.js');
var db = app.get('db');

module.exports = {
  
  create: app.post('/products/create', function(req, res){
                var params = [
                    req.body.name,
                    req.body.description,
                    req.body.price,
                    req.body.imageUrl
                ]
                  db.create_product(params,function(err, response){
                    if(!err){
                      res.send("yay");
                    }
                })
              }),
              
  getOne: app.get('/products', function(req, res){
                var params = [
                  req.body.id
                ]
                db.read_products(params, function(err, response){
                  if(!err){
                    res.send("YAY")
                  }
                });
              }),
  
  getAll: app.get('/products/alldata', function(req, res){
                var params = [
                  req.body.id
                ]
                db.read_product(params, function(err, response){
                  if(!err){
                    res.send("YAY")
                  }
                });
              }),
  
  update: app.put('/products', function(req, res){
                var params = [
                  req.body.id,
                  req.body.description
                ]
                db.update_product(params, function(err, response){
                  if(!err){
                    res.send("YAY")
                  }
                });
              }),

  delete: app.get('/products/delete', function(req, res){
                var params = [
                  req.body.id
                ]
                db.delete_product(params, function(err, response){
                  if(!err){
                    res.send("YAY")
                  }
                });
              })

};