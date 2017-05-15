function setup() {
  createCanvas(960, 540);
 
}

function mouseDragged() {
  ellipse(mouseX,mouseY,100,100);
}

function draw() {
  background(0);
  
  push();
  //Bezier Nike Curves
   translate(960/2, 540/2-150);
  // translate(-150, -100);
  scale(-0.8*sin(frameCount/80), 1);
  // translate(960/2, 540/2);
  beginShape();
  vertex(119.747, 124);
  bezierVertex(119.747, 124, 89.065, 154.651, 111.659, 164.032);
  bezierVertex(111.659, 164.032, 118.991, 167.442, 134.455, 160.607);
  bezierVertex(134.455, 160.607, 216.843, 124.11, 216.843, 124.11);
  bezierVertex(216.843, 124.11, 134.447, 146.518, 134.447, 146.518);
  bezierVertex(134.447, 146.518, 106.167, 153.867, 119.747, 124);
  endShape();
  pop();
  

}