$(document).ready(function () {
	$.getJSON("./data/Trains.json", function (result) {
		$.each(result, function (i, field) {
			$('.product').append(
				"<div>" +
				"<h3>" + result[i].Name + "</h3>"
				+ '<img src="../Images/' + i + '.jpg" alt="product">' +
				"<p>" + "Power in KiloWatts: " + result[i].PowerKW + "</p>" +
				"<p>" + "Manufacturer: " + result[i].Manufacturer + "</p>" +
				"<p>" + "Year of Construction: " + result[i].YearOfConstruction + "</p>" +
				"<p>" + "Price: " + result[i].PriceGRAND + "</p>" +
				"<button id=:'" + result[i].Name + "'onclick='buy(" + result[i].Name + ")'>Buy Now!</button"
				+ "</div>"
			);
			console.log(" Product receival succes");
			console.log("Button made"+ result[i].Name)
		});
	});
});

function buy(product){

} 