let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let bookRouter = require('../routes/book');

let app = express();

//Adding MongoDB Connection
let mongoose = require('mongoose');
let Db = require('./db');   //Exported db.js so we can add require here
mongoose.connect(Db.URI);

let mongoDb = mongoose.connection;
mongoDb.on('error',console.error.bind(console,'Mongo Connection Error'));
mongoDb.once('open',() => {
console.log('Mongo Db Connection Success');
})



// view engine setup (For front end implementaion)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');  // Appended because of express -e command

//Activating
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); //Anything inside the public folder automatically will add them into the path
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/booklist',bookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title: 'Error'});
});

module.exports = app;
