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
    super(content, name);
    this.image=image
  }
  createArticle(){
    
  }
}
class vidArticle extends article {

}

function start() {
  let test = new article("Jason is awesome", "Uitleg waarom jason awesome is");
  test.createArticle();
  let test2= new imgArticle("I'm testing", "testing so hard", "probaly an imagelocation of somesort")
  test.createArticle();
}