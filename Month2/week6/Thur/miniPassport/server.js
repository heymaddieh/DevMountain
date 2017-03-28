var express = require('express');
var expressSession = require('express-session');
var passport = require('passport');
var auth0Strategy = require('passport-auth0').Strategy;

var app = express();
var port = 7659;

//MIDDLEWARE
app.use(expressSession({secret: 'cakeballs'}))

app.use(passport.initialize())
app.use(passport.session());

passport.use(new auth0Strategy({
  domain: 'heymaddieh.auth0.com',
  clientID: 'v9DRGo6ow6CJdhfsYXm9jbm1pU1L0p6M',
  clientSecret: '38SqG5iGHLZJvzivkI7SUvxvcGZL7rvi5NvU1XZKWKEVyR37VZ6XZ-6fQWaK23kN',
  callbackURL: '/auth/callback'
}, function(aToken, refreshToken, params, profile, done) {
  return done(null, profile);
}));

//ENDPOINTS

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: "/"}));

app.get('/me', function(req, res){
  res.send(req.user);
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


app.listen(port, function(){
  console.log('running on port ' + port );
})
