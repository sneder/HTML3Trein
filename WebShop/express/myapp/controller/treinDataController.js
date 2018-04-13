module.exports = function(app, db, jsonParser){
 
    var fields = ["TrainID", "Name", "Manufacturer", "YearOfConstruction", "LengthM",
                  "PowerKW", "PriceGRAND"];
 
    console.log("Registering endpoint: /api/treinData");
 
    app.get('/api/treinData', function(req, res){
        console.log("SELECT " + fields.join(", ") + " FROM Trains");
        db.all("SELECT " + fields.join(", ") + " FROM Trains", function(err, rows) {
            res.json(rows);
        });
    });
}