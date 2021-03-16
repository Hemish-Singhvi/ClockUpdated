var h, m, s;
var hrAngle, mnAngle, scAngle;
var hr;
var clockFace, clockFaceImg;

function preload(){
  clockFaceImg = loadImage("Images/Clock Face.png");
}

function setup() {
  createCanvas(400,400);
  clockFace = createSprite(1, 0, 200, 200);
  clockFace.addImage(clockFaceImg);
  clockFace.scale = 0.80;
}

function draw() {
  background(0);
  angleMode(DEGREES);
  let tfhr = hour();
  let mn = minute();
  let sc = second();
  if (tfhr > 12){
    hr = tfhr - 12;
  }
  else {
    hr = tfhr;
  }
  scAngle = sc*6;
  mnAngle = mn*6;
  hrAngle = hr*30;
  strokeWeight(7);
  stroke("green");
  noFill();
  arc(200, 200, 250, 250, 270, scAngle-90);
  stroke("red");
  if (mn !== 0){
    arc(200, 200, 230, 230, 270, mnAngle-90);
    stroke("blue");
  }
  arc(200, 200, 210, 210, 270, hrAngle-90);

  translate(200,200);
  
  rotate(-90);

  push();
  strokeWeight(3);
  stroke("white");
  rotate(scAngle);
  line(0,0,90,0);
  pop();

  push();
  strokeWeight(5);
  stroke("white");
  rotate(mnAngle);
  line(0,0,75,0);
  pop();

  push();
  noFill();
  strokeWeight(7);
  stroke("white");
  rotate(hrAngle);
  line(0,0,60,0);
  pop();
  
  drawSprites();
}