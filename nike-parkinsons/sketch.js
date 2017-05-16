var futuraNike;
function preload() {
  futuraNike = loadFont("Futura-CondensedExtraBold.ttf")
}

function setup() {
  resizeCanvas(960,540);
  background(0);
  fill(255);
  textSize(36);
  textFont(futuraNike);
  text("DRAW AROUND THE SWOOSH.", 240, 440);
  translate(width/2-300, height/2-340);
  beginShape();
  fill(255);
  stroke(255, 10);
  vertex(239.494, 248);
  bezierVertex(239.494, 248, 178.13, 309.302, 223.318, 328.064);
  bezierVertex(223.318, 328.064, 237.982, 334.884, 268.91, 321.214);
  bezierVertex(268.91, 321.214, 433.686, 248.22, 433.686, 248.22);
  bezierVertex(433.686, 248.22, 268.894, 293.036, 268.894, 293.036);
  bezierVertex(268.894, 293.036, 212.334, 307.734, 239.494, 248);
  endShape();
  
}

var pX, pY = 0;
function mouseDragged() {
  
  color(255);
  stroke(255);
  var x = mouseX + random(-2, 6);
  var y = mouseY + random(-1, 1);
  line(pX,pY,x,y);
  pX = x;
  pY = y;
  
  
  fill(0);
  noStroke();
  rect(0,350,960,540);
  
}

var showText = false;

function draw() {
  if(showText) {
    fill(255, 10);
    textSize(26);
    text("EVERY HOUR, SOMEONE IN THE UK IS TOLD THEY HAVE PARKINSON'S.", 100, 385);
    fill(255,10);
    textSize(26);
    text("HELP US BEAT THIS DISEASE. DONATE AN EXTRA 5% TO PARKINSON'S UK.", 82, 425);
    fill(255,140,0, 10);
    rect(400,450,150,50,10)
    fill(0);
    textSize(26);
    text("JUST DO IT.", 414, 484);
    
  }  
  
 }


function mouseReleased() {
  showText = true;
  
}
