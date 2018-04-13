module.exports = function(app, db, jsonParser){
 
    var fields = ["UserName", "Password", "Name", "PostalCode", "Email",
                  "Birthdate", "Gender"];
 
    console.log("Registering endpoint: /api/accountData");
 
    app.get('/api/accountData', function(req, res){
        console.log("SELECT " + fields.join(", ") + " FROM Accounts");
        db.all("SELECT " + fields.join(", ") + " FROM Accounts", function(err, rows) {
            res.json(rows);
        });
    });
}