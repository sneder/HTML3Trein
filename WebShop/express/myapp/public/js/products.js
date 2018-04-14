$(document).ready(function(){
        $.getJSON("./data/Trains.json", function(result){
            $.each(result, function(i, field){
                $('.product').append(
              		"<div>" +
                	"<h3>"+ result[i].Name + "</h3>" 
                	+ '<img src="../Images/' + i + '.jpg" alt="product">' +
                	"<p>" +"Power in KiloWatts: " + result[i].PowerKW + "</p>" +
                	"<p>" +"Manufacturer: " + result[i].Manufacturer + "</p>" +
                	"<p>" +"Year of Construction: " + result[i].YearOfConstruction + "</p>" +
                	"<p>" +"Price: " + result[i].PriceGRAND + "</p>" +
                	"<button>Buy Now!</button"
                	+ "</div>"
                	);
                //alert("succes");
            });
        });
    });