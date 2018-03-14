//The parent class to make (simple) articles
class article {
  constructor(name, content) {
    this.title = name;
    this.content = content;
  }
  createArticle() {
    var makeArticle = document.createElement("article") //Create the article
    makeArticle.id = this.title;

    var makeTitle = document.createElement("h1");       //Create the Header
    var textTitle = document.createTextNode(this.title);
    makeTitle.appendChild(textTitle);

    var makeContent = document.createElement("p");      //Create the text
    var textContent = document.createTextNode(this.content);
    makeContent.appendChild(textContent);

    var b = document.body;                              //Add them to the DOM
    b.appendChild(makeArticle);
    var a = document.getElementById(this.title);
    a.appendChild(makeTitle);
    a.appendChild(makeContent);
  }
}

//The article with an image class
class imgArticle extends article {
  constructor(name, content, image) {
    super(content, name);
    this.image = image                                  //The image is added as attribute
  }
  createArticle() {
    super.createArticle();                            //Executing the old things
    var makeImage = document.createElement("img");    //Creating the image
    makeImage.alt = "an image"
    var a = document.getElementById(this.title);      //Adding the Image
    a.appendChild(makeImage)
  }
}

//The article with a video class
class vidArticle extends article {
  constructor(name, content, youtubeUrl) {
    super(content, name);
    var video;
    var i;
    for (i = youtubeUrl.length-1; youtubeUrl[i] != "="; i = i - 1) {
      video =  youtubeUrl[i]+ video;
    };
    video = "https://www.youtube.com/embed/" + video;
    this.video = video                           //The youtube url is added as attribute
  }
  createArticle() {
    super.createArticle();                            //Executing the old things
    var makeVideo = document.createElement("iframe");    //Creating the video
    makeVideo.width = "420";
    makeVideo.height = "315";
    makeVideo.src = this.video;
    var a = document.getElementById(this.title);      //Adding the video
    a.appendChild(makeVideo)
  }
}

//The eventstarter
function start() {
  let test = new article("Jason is awesome", "Uitleg waarom jason awesome is");
  test.createArticle();
  let test2 = new imgArticle("I'm testing", "testing so hard", "probaly an imagelocation of somesort")
  test2.createArticle();
  let test3 = new vidArticle("Sicke Skills", "JASON NOSCOPE EM", "https://www.youtube.com/watch?v=lahiGrNxqU4")
  test3.createArticle();
}