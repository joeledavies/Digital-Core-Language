function setup() {
  resizeCanvas(500, 500);
  background(0);
}

function mouseDragged() {
  drawPlanet(mouseX, mouseY);
  drawRings(mouseX, mouseY);
}

function drawPlanet(x, y) {
  var radius = random(50);
  fill(random(100), random(255), 200);
  stroke(0, 200, 0);
  strokeWeight(1);
  ellipse(x, y, radius, 50);
  ellipse(x, y, 70, radius);
}

function drawRings(x, y) {
  fill(245, random(200), random(100));
  stroke(0, 200, 0);
  strokeWeight(1);
  ellipse(x, y, 70, 20);
}