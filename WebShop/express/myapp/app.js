var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false})
module.exports = app;

//saves the database data
require('./Appscripts/saveAsJson.js')

app.use(express.static(path.join(__dirname, 'public')));