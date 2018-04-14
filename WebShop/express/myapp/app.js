var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false})

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./Db/webShopDatabase.db');
require('./Appscripts/treinDataController')(app, db, jsonParser);
require('./Appscripts/accountDataController')(app, db, jsonParser);
require('./Appscripts/transactionDataController')(app, db, jsonParser);

//saves the database data
require('./Appscripts/saveAsJson.js')

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);