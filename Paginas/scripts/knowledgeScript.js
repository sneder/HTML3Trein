class article {
  constructor(name, content) {
    this.title = name;
    this.content = content;
  }
  createArticle() {
    var makeArticle = document.createElement("article")
    makeArticle.id=this.title;

    var makeTitle = document.createElement("h1");
    var textTitle = document.createTextNode(this.title);
    makeTitle.appendChild(textTitle);

    var makeContent = document.createElement("p");
    var textContent = document.createTextNode(this.content);
    makeContent.appendChild(textContent);

    var b = document.body;
    b.appendChild(makeArticle);
    var a = document.getElementById(this.title);
    a.appendChild(makeTitle);
    a.appendChild(makeContent);
  }
}
class imgArticle extends article {
  constructor(name,content,image){
    this.title = name;
    this.content = content;
    this.image=image
  }
}
class vidArticle extends article {

}

function start() {
  var para = document.createElement("p");
  var node = document.createTextNode("cykablyat");
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);
  let test = new article("Jason is awesome", "Uitleg waarom jason awesome is");
  test.createArticle();
  let test2= new imgArticle("I'm testing", "testing so hard", "probaly an imagelocation of somesort")
  test.createArticle();
}