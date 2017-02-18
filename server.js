var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;


var User = require('./models/user.js');

var route=require('./routes/theaterRoute');
var route1=require('./routes/movieRoute');
var route2=require('./routes/mappingRoute');
var route3=require('./routes/bookingRoute');
var route4=require('./routes/ratingRoute');
var route5=require('./routes/auth');


app.use(express.static(__dirname  +'/public'));
app.use(bodyParser.json());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/theaterapi',route);
app.use('/movieapi',route1);
app.use('/mappingapi',route2);
app.use('/bookingapi',route3);
app.use('/ratingapi',route4);
app.use('/user',route5);






// Only load this in minddle ware in dev mode
if(app.get('env')==='development'){
var webpackMiddleware=require("webpack-dev-middleware");
var webpack=require('webpack');
var config=require('./webpack.config');
app.use(webpackMiddleware(webpack(config),{
  publicPath:"/build",
  headers:{"X-Custom-Webpack-Header":"yes"},
  stats:{colors:true}
}));
}
var server =app.listen(7000,function(){
  console.log('listening on port 7000');
});
