let video;
let yolo;
let status;
let objects = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
  detect();
}

function draw() {
  image(video, 0, 0, 640, 480);
  for (let i = 0; i < objects.length; i++) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x*width, objects[i].y*height - 5);
    noFill();
    strokeWeight(4);
    stroke(0,255, 0);
    rect(objects[i].x*width, objects[i].y*height, objects[i].w*width, objects[i].h*height);
  }
}

function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  yolo.detect(function(err, results){
    objects = results;
    detect();
  });
}
