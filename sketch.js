
//Space-time Loop 1: Webcam Generative Dances
//bottom-up 
//Concept and programming by Marlon barrios Solano

var video;
var button;
var snapShots = [];
var counter = 0;
var total = 131;
var song;


function setup() {
  createCanvas(800, 600);
  song = loadSound("canon-in-d.mp3", loaded)
 
  video = createCapture(VIDEO, ready);
  image(video, 0,0);
  button = createButton("Play  Pachebel Cannon in D");
  button.mousePressed(togglePlaying);
  background(0);
  video.size(320, 240);
 
 
}

function togglePlaying(){
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
  

    button.html('Stop')
  } else {
    song.stop();
    button.html('Start Again')
  }
}

function loaded() {
  console.log('loaded')
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
      if (counter == 131) {
        counter = 0;
      }
    }
  }
  
  let videoRecorder;


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
