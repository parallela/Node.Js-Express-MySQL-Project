var express = require('express');
var app = express();

// Defining all the routes
var index = require('./routes/index');
var notes = require('./routes/notes');

// Linking all the routes
app.use('/', index);
app.use('/notes', notes);

module.exports = app;
