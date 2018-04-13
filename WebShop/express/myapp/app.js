var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false})

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./Db/webShopDatabase.db');
require('./controller/treinDataController')(app, db, jsonParser);
require('./controller/accountDataController')(app, db, jsonParser);
require('./controller/transactionDataController')(app, db, jsonParser);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);