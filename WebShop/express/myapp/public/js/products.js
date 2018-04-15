
$(document).ready(function () {
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
			if (i < 10) {
				$('.product').append(
					d + h + r[i].Name + nh +
					'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
					p + PiK + r[i].PowerKW + np +
					p + man + r[i].Manufacturer + np +
					p + yoc + r[i].YearOfConstruction + np +
					p + pri + r[i].PriceGRAND + "000" + np +
					b + i + b2 + nd
				);
				console.log(" Product receival succes");
				console.log("Button made" + r[i].Name)
			}
		});
		$(".buybutton").click(function () {
			buymessage(r[this.id].Name)
	});
	});
	$("#more").click(function () {
		$.getJSON("./data/Trains.json", function (r) {
			$.each(r, function (i, field) {
				if (i > 9 & i < 20) {
					$('.moreProduct').append(
						d + h + r[i].Name + nh +
						'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
						p + PiK + r[i].PowerKW + np +
						p + man + r[i].Manufacturer + np +
						p + yoc + r[i].YearOfConstruction + np +
						p + pri + r[i].PriceGRAND +"000" + np +
						b + i + b2 + nd
					);
				};
			});
			$(".buybutton").click(function () {
				buymessage(r[this.id].Name)
	});
		});
		$("#more").remove();
		$("#evenmore").css("display", "block")
	});
	$("#evenmore").click(function () {
		$.getJSON("./data/Trains.json", function (r) {
			$.each(r, function (i, field) {
				if (i > 19) {
					$('.moreProduct').append(
						d + h + r[i].Name + nh +
						'<img class="trainimg" src="images/' + i + '.jpg" alt="product">' +
						p + PiK + r[i].PowerKW + np +
						p + man + r[i].Manufacturer + np +
						p + yoc + r[i].YearOfConstruction + np +
						p + pri + r[i].PriceGRAND +"000" + np +
						b + i + b2 + nd
					);
				};
			});
			$(".buybutton").click(function () {
				buymessage(r[this.id].Name)
	});
		});
		$("#evenmore").remove();
	});
	$("#apply").click(function () {
		$(".product").remove();
		$("#more").remove();
		$(".moreProduct").remove();
		$("#evenmore").remove();
		$(".productsection").append(
			'<div class="product"></div>'
		)
		$.getJSON("./data/Trains.json", function (r) {
			$.each(r, function (i, field) {
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
						p + pri + r[i].PriceGRAND +"000" + np +
						b + i + b2 + nd
					);
				};
			});
			$(".buybutton").click(function () {
				buymessage(r[this.id])
	});
		});
	});
	$("#reset").click(function () {
		location.reload();
	});
});
function buymessage(product) {
	alert("Thanks for buying a "+product + "!")
};