var x = 320;
var x2 = 330;
var x3 = 340;
var x4 = 350;
var x5 = 360;
var x6 = 370;
var x7 = 360;
var x8 = 360;
var x9 = 350;
var y = 360;
var y2 = 360;
var y3 = 360;
var y4 = 360;
var y5 = 360;
var y6 = 360;
var y7 = 360;
var y8 = 360;
var s = 5;
var scolor = "yellow";
var s2 = 350;
var speedX = 5;
var speedY = 5;


function preload() {

}
function setup() {
    fill("black")
    createCanvas(720, 720);
    noStroke();
}

function keyPressed() {
    if (key = "z") {
        speedX += 2;
        speedY += 2;
    } else if (key = "m") {
        speedX -= 2;
        speedY -= 2;
    }
}

 
function draw ()  {
    background("black");
   
    
    fill("white")
    ellipse(x, 350, s)
    x += speedX;
    s += 0.05;
	if (x > 720) {
		x = random(320, 400);
        s = 5;
	}
    if (s > 30) {
        var scolor = 0;
    }
    
    ellipse(x2, 350, s)
    x2 -= speedX;
    s += 0.05;
	if (x2 < 0) {
		x2 = random(320, 400);
        s2 = 5;
	}
    if (s2 > 30) {
        var scolor = 0;
    }
   
    ellipse(x3, y, s)
    x3 -= speedX;
    s += 0.05;
    y += speedY;
	if (x3 < 0) {
		x3 = random(320, 400);
        y = 350;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x4, y2, s)
    x4 += speedX;
    s += 0.05;
    y2 -= speedY;
	if (x4 > 720) {
		x4 = random(320, 400);
        y2 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x5, y3, s)
    x5 += speedX;
    s += 0.05;
    y3 += speedY;
	if (x5 > 720) {
		x5 = random(320, 400);
        y3 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x6, y5, s)
    x6 -= speedX;
    s += 0.05;
    y5 -= speedY;
	if (x6 < 0) {
		x6 = random(320, 400);
        y5 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x7, y6, s)
    s += 0.05;
    y6 -= speedY;
	if (y6 < 0) {
		x7 = random(320, 400);
        y6 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x8, y7, s)
    s += 0.05;
    y7 += speedY;
	if (y7 > 720) {
		x8 = random(320, 400);
        y7 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
} 


