var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Create MongoDB Connection
var configDB = require('../config/db');
var db = configDB();

//Import passport.js into app.js
require('../config/passport');

//Adding Passport Libraries
//Import the main Passport and Express-Session library
const passport = require('passport');
const session = require('express-session');

//Import the secondary "Strategy" library
const LocalStrategy = require('passport-local').Strategy;

//Adding Routers
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var loginRouter = require('../routes/login');
var bclRouter = require('../routes/businesscontactlist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

//Use passport session
app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}));

// init passport on every route call.
app.use(passport.initialize());

// allow passport to use "express-session".
app.use(passport.session());
//define auth strategy
passport.use(new LocalStrategy (authUser));

//Using Created Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/business_contact_list', bclRouter);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
