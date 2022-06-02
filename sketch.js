
//Space-time Loop 1: Webcam Generative Dances
//bottom-up wave
//Concept and programming by Marlon barrios Solano

var video;
var button;
var snapShots = [];
var counter = 0;
total = 131;

function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO, ready);
  image(video, 0,0);
  background(0);
  video.size(320, 240);
  
}

var go = false;

function ready() {
  go = true;
}

function draw() {

  if (go) {
    snapShots[counter] = video.get();
    counter++;
    if (counter == total) {
      counter = 0;
      if (counter == 43) {
        counter = 0;
      }
    }
  }
  
  var  w = 80;
  var  h = 60;
  var  x = 0;
  var  y= 0;
  for ( var i = 0; i < snapShots.length; i++) {
 
    var index = (i + frameCount) % snapShots.length;

    image(snapShots[index], x,y,w,h);
    x = x + w;
    if ( x > width) {
      x = 0;
      y = y + h;
    }
  }
}



