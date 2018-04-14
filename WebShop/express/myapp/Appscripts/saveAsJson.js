const SqliteToJson = require('Sqlite-To-Json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
	client: new sqlite3.Database('./Db/webShopDatabase.db')
})
exporter.save('Accounts', './data/Accounts.json', function (err) {});
exporter.save('Trains', './data/Trains.json', function(err){});
exporter.save('Transactions', './data/Transactions.json', function(err){});