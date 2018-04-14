const SqliteToJson = require('Sqlite-To-Json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
	client: new sqlite3.Database('./Db/webShopDatabase.db')
})
exporter.save('Accounts', './data/Accounts.txt', function (err) {});
exporter.save('Trains', './data/Trains.txt', function(err){});
exporter.save('Transactions', './data/Transactions.txt', function(err){});