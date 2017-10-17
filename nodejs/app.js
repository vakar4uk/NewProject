var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');
var users = require('./routes/users');
var Persons = require('./routes/Persons');
var UserTemps = require('./routes/UserTemps');
var OutPatients = require('./routes/OutPatients');
var Assignments = require('./routes/Assignments');
var Patients = require('./routes/Patients');
var Departments = require('./routes/Departments');
var Doctors = require('./routes/Doctors');
var Rooms = require('./routes/Rooms');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/Persons', Persons);
app.use('/UserTemps', UserTemps);
app.use('/OutPatients', OutPatients);
app.use('/Departments', Departments);
app.use('/Doctors', Doctors);
app.use('/Rooms', Rooms);
app.use('/Patients', Patients);
app.use('/Assigments', Assignments);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
