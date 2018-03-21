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
  connectArticleTo(articleToConnectTo, articleName){
    var makeLink = document.createElement("a");
    makeLink.href=articleToConnectTo;
    makeLink.title=articleName;
    var c = document.getElementById(this.title);
    c.appendChild(makeLink);
  }
}

//The article with an image class
class imgArticle extends article {
  constructor(name, content, image) {
    super(name, content);
    this.image = image                                  //The image is added as attribute
  }
  createArticle() {
    super.createArticle();                            //Executing the old things
    var makeImage = document.createElement("img");    //Creating the image
    makeImage.src=this.image;
    makeImage.alt = "an image"
    var a = document.getElementById(this.title);      //Adding the Image
    a.appendChild(makeImage)
  }
}

//The article with a video class
class vidArticle extends article {
  constructor(name, content, youtubeUrl) {
    super(content, name);
    var video= "";
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
//This has not been fully completed due to a time-limitation involving illness and a short holiday of our collaborators. These are three example Articles properly implemented useing the classes and their methods above.
//The linking feature does not work with text yet, nor does it work with other articles in this page. The knowledge for adding such a thing is present, but the time is not.
function start() {

  let Article1 = new article("The NS", "Nederlandse Spoorwegen (English: 'Dutch Railways') is the principal passenger railway operator in the Netherlands. NS provides rail services on the Dutch main rail network (hoofdrailnet). The rail infrastructure is maintained by network manager ProRail, which was split off from NS in 2003. Freight services, formerly operated by NS Cargo, merged with the DB Schenker group in 2000. NS runs 4,800 scheduled domestic trains a day, serving 1.1 million passengers.Also, NS provides international rail services from the Netherlands to other European destinations and carries out concessions on some foreign rail markets through its subsidiary Abellio.")
  Article1.createArticle();
  Article1.connectArticleTo("The_NS.html", "Source");
  Article1.connectArticleTo("Trains.html", "Trains")

  let Article2 = new imgArticle("VIRM","Verlengd Inter Regio Materiaal The Enlengthened Inter-Regio Material is a train type that the NS uses as an intercity. VIRM-6 and VIRM-4 are the only ones still currently in use. VIRM-6 is a train with 6 carriages, whereas VIRM-4 is a train with 4 carriages. They can be connected together interchangibaly. For example a VIRM-6 with a VIRM-4 to make a 10 carriage train. Also 3 VIRM-4's or 2 VIRM-6's to make a 12 carriage train. Etc.",  "sources/virm.jpg")
  Article2.createArticle();
  Article2.connectArticleTo("The_NS.html", "Source");
  Article2.connectArticleTo("Trains.html", "Trains")

  let Article3 = new vidArticle("The new Generation sprinter of the NS","The video is in Dutch, because logically the introduction of new Dutch trains doesn't exactly excite a lot of international attention.","https://www.youtube.com/watch?v=GyLhne2B3PU")
  Article3.createArticle();
  Article3.connectArticleTo("clips.html", "Source");
  Article3.connectArticleTo("Trains.html", "Trains")

}