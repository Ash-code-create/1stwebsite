/*global createCanvas, background, rect, fill, noStroke, width, ellipse, line, stroke, strokeWeight*/

var position;

function setup() {
  createCanvas(800, 500);
  background(200, 200, 200);
  position = 0;
}

function draw() {
  background(147, 225, 245);
  noStroke();
  fill(11, 132, 163);
  rect(0, 250, width, 250);
  //rect(x top L, y top L, width, height)
  fill(11, 132, 163);
  rect(0, 400, width, 350);

  stroke(11, 132, 163);
  strokeWeight(5);
  line(0, 375, 50, 375);
  //line(x1, y2, x2, y2)
  line(100, 375, 150, 375);
  line(200, 375, 250, 375);
  line(300, 375, 350, 375);
  line(400, 375, 450, 375);
  line(500, 375, 550, 375);
  line(600, 375, 650, 375);
  line(700, 375, 750, 375);
  line(800, 375, 850, 375);

  strokeWeight(2);
  stroke(255, 255, 0);
  fill(11, 132, 163);

  rect(110 + position, 285, 80, 50);
  fill(191, 255, 41);

  ellipse(110 + position, 340, 30);
  ellipse(190 + position, 340, 30);

  //elipse(x center, y center, diameter)
  if (keyIsPressed && keyCode == LEFT_ARROW) position--;
  if (keyIsPressed && keyCode == RIGHT_ARROW) position++;

  fill(255);
  triangle(100 - position, 70, 50, 50);
  triangle(120 - position, 40, 50, 50);
  triangle(150 - position, 50, 50, 50);
  triangle(140 - position, 60, 50, 50);
  
  stroke(255)

  ellipse(400 - position, 160, 50, 50);
  ellipse(440 - position, 140, 50, 50);
  ellipse(470 - position, 170, 50, 50);
  ellipse(430 - position, 180, 50, 50);
  
  ellipse(700 - position, 60, 50, 50);
  ellipse(740 - position, 40, 50, 50);
  ellipse(770 - position, 70, 50, 50);
  ellipse(730 - position, 80, 50, 50);
}

