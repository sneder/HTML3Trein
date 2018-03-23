// JavaScript source code
var product = class {
    constructor(name, price, description) {
        this.name = title;
        this.description = description;
        this.price = price;
        
    }
};
createProduct() {
    var makeProduct = document.createElement("article")
    makeProduct.id = this.name;

    var makeTitle = document.createElement("h3");
    var textTitle = document.createTextNode(this.name);
    makeTitle.appendChild(textTitle);

    var makeDescription = document.createElement("p");
    var textDescription = document.createTextNode(this.description);
    makeDescription.appendChild(textDescription);

    var makePrice = document.createElement("p");
    var textPrice = document.createTextNode(this.price);
    makePrice.appendChild(textPrice);

    var b = document.body;
    b.appendChild(makeProduct);
    var a = document.getElementById(this.name);
    a.appendChild(makeTitle);
    a.appendChild(makeDescription);
    a.appendChild(makePrice);
};