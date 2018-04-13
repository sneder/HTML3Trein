module.exports = function(app, db, jsonParser){
 
    var fields = ["TransactionID", "Time", "ProductBought", "Buyer"];
 
    console.log("Registering endpoint: /api/transactionData");
 
    app.get('/api/transactionData', function(req, res){
        console.log("SELECT " + fields.join(", ") + " FROM Transactions");
        db.all("SELECT " + fields.join(", ") + " FROM Transactions", function(err, rows) {
            res.json(rows);
        });
    });
}