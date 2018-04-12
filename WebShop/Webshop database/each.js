const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./webShopDatabase.db');
 
let sql = `SELECT Name Name,
                  PowerKW PowerKW,
                  YearOfConstruction YearOfConstruction
            FROM trains
            WHERE Manufacturer  = ?
            ORDER BY Name`;
 console.log('Name  PowerKW YearOfConstruction')
db.each(sql, ['Bombardier Transportation'], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.Name} ${row.PowerKW} - ${row.YearOfConstruction}`);
});
 
// close the database connection
db.close();