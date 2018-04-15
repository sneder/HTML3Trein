
$(document).ready(function () {
	//some vars to make the data search functions easier to read
	var p = "<p>"
	var yoc = "Year Of Construction: "
	var man = "Manufacturer: "
	var PiK = "Power in KiloWatts: "
	var pri = "Price: "
	var np = "</p>"
	var img1 = '<img class="trainimg" src="../Images/'
	var img2 = '.jpg" alt="product">'
	var d = "<div>"
	var nd = "</div>"
	var h = "<h3>"
	var nh = "</h3>"
	var b = "<button class='buybutton' id="
	var b2 = ">Buy Now!</button>"

	$.getJSON("./data/Trains.json", function (r) {
		$.each(r, function (i, field) {
			//load the first 10 products
			if (i < 10) {
				$('.product').append(
					//the code that gets the product info from the database and puts it on the page.
					d + h + r[i].Name + nh +
					'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
					p + PiK + r[i].PowerKW + np +
					p + man + r[i].Manufacturer + np +
					p + yoc + r[i].YearOfConstruction + np +
					p + pri + r[i].PriceGRAND + "000" + np +
					b + i + b2 + nd
				);
			}
		});
		//pop-up confirming purchase
		$(".buybutton").click(function () {
			buymessage(r[this.id].Name)
		});
	});
	$("#more").click(function () {
		$.getJSON("./data/Trains.json", function (r) {
			$.each(r, function (i, field) {
				//load the next 10 products
				if (i > 9 & i < 20) {
					$('.moreProduct').append(
						d + h + r[i].Name + nh +
						'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
						p + PiK + r[i].PowerKW + np +
						p + man + r[i].Manufacturer + np +
						p + yoc + r[i].YearOfConstruction + np +
						p + pri + r[i].PriceGRAND + "000" + np +
						b + i + b2 + nd
					);
				};
			});
			$(".buybutton").click(function () {
				buymessage(r[this.id].Name)
			});
		});
		//remove the more button
		$("#more").remove();
		//reveal a new button that can be used to load 10 more products
		$("#evenmore").css("display", "block")
	});
	$("#evenmore").click(function () {
		$.getJSON("./data/Trains.json", function (r) {
			$.each(r, function (i, field) {
				//load the last 10 products
				if (i > 19) {
					$('.moreProduct').append(
						d + h + r[i].Name + nh +
						'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
						p + PiK + r[i].PowerKW + np +
						p + man + r[i].Manufacturer + np +
						p + yoc + r[i].YearOfConstruction + np +
						p + pri + r[i].PriceGRAND + "000" + np +
						b + i + b2 + nd
					);
				};
			});
			$(".buybutton").click(function () {
				buymessage(r[this.id].Name)
			});
		});
		//remove the button
		$("#evenmore").remove();
	});
	//the filter function
	$("#apply").click(function () {
		//remove the current products
		$(".product").remove();
		//remove the buttons
		$("#more").remove();
		$("#evenmore").remove();
		//remove the div containing 'more' products
		$(".moreProduct").remove();
		//make a new div which will contain the filtered products
		$(".productsection").append(
			'<div class="product"></div>'
		)
		$.getJSON("./data/Trains.json", function (r) {
			$.each(r, function (i, field) {
				//this checks if either the value in the filter equals the product value or that the filter is empty
				if ((r[i].Manufacturer == $("#Man").val() || $("#Man").val() == "default") &
					(r[i].PowerKW == $("#PKW").val() || $("#PKW").val() == "default") &
					(r[i].YearOfConstruction == $("#YoC").val() || $("#YoC").val() == "") &
					(r[i].PriceGRAND > $("#miPr").val() || $("#miPr").val() == "") &
					(r[i].PriceGRAND < $("#maPr").val() || $("#maPr").val() == "")
				) {
					$('.Product').append(
						d + h + r[i].Name + nh +
						'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
						p + PiK + r[i].PowerKW + np +
						p + man + r[i].Manufacturer + np +
						p + yoc + r[i].YearOfConstruction + np +
						p + pri + r[i].PriceGRAND + "000" + np +
						b + i + b2 + nd
					);
				};
			});
			$(".buybutton").click(function () {
				buymessage(r[this.id])
			});
		});
	});
	//refresh the page and reset any filters
	$("#reset").click(function () {
		location.reload();
	});
});

//buy pop-up
function buymessage(product) {
	if (confirm("Are you sure you want to buy a " + product + "?")) {
		alert("Thanks for buying a " + product + "!")
		//And execute actually buying the product. Entering it into the SQL table called "Transactions"

		var d = new Date(); 
		d.getHours(); 
		d.getMinutes();
		d.getSeconds();
		
		//This is where we would want to execute this statement into our database,but have -after many attempts(even php god forbid)- failed to do so.
		var sql = "INSERT INTO Transactions ('TransactionID ', 'Time', 'ProductBought', 'Buyer') VALUES('','"+d+",'"+product+""+sessionStorage.user;
	}
};