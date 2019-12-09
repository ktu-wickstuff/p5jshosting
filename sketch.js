var diameter = 400; // diameter of circle
var pointsInside;
var pointsOutside;
var pointsPerFrame = 20; //determines how many dots are plotted per second

function setup() {
  stroke(1);
  createCanvas(500, 500);
  background(100,150,250);
  pointsOutside = 0;
  pointsInside = 0;
  fill(100,200,200);
  rect(width/2-diameter/2,height/2-diameter/2,diameter,diameter);
  fill(100,200,100);
  circle(width/2,height/2,diameter,diameter);
  fill(255);
  textSize(18);
  text('Approximating Pi',180,30)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && pointsPerFrame>0) { //toggle plotting speed
    pointsPerFrame -=10;
  } else if (keyCode === RIGHT_ARROW) {
    pointsPerFrame +=10;
  } else if (keyCode === 67) { // hit C to clear
    setup();
  }
}

function draw() {
  for(var i = 0; i<pointsPerFrame; i++) {
    var x = random(diameter)+width/2-diameter/2;
    var y = random(diameter)+height/2-diameter/2;
    noStroke();
    fill(random(255),random(255),random(255));
    ellipse(x,y,2,2);
    if(dist(x,y,width/2,height/2)<diameter/2) {
      pointsInside++;
    }else {
      pointsOutside++;
    }
  }
  var pi = pointsInside/(pointsInside+pointsOutside)*4;
  fill(100,150,250);
  rect(0,455,width,height);
  fill(255);
  textSize(18);
  text('Pi = ' + pi,150,height-30);
  textSize(10);
  text('Points inside: ' + pointsInside + '    Points outside: ' + pointsOutside + '    Plotting Speed: ' + pointsPerFrame, 110, height-5);
  
}