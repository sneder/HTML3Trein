const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./Trein.db.db');
 
let sql = `SELECT DISTINCT Name name FROM train
           ORDER BY name`;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});
 
// close the database connection
db.close();