

var cat;
var r, g, b;
var x = 360;
var x2 = 360;
var x3 = 360;
var x4 = 360;
var x5 = 360;
var x6 = 360;
var y = 360;
var y2 = 360;
var y3 = 360;
var y4 = 360;
var y5 = 360;
var s = 5;
var scolor = "yellow";
var s2 = 350;
function preload() {

}
function setup() {
    fill("black")
    createCanvas(720, 720);
    r = random(0,255);
	g = random(0,255);
	b = random(0,255);
    noStroke();
}



 
function draw ()  {
    background("black");
   
    
    fill("white")
    ellipse(x, 350, s)
    x += 10;
    s += 0.05;
	if (x > 720) {
		x = random(340, 380);
        s = 5;
	}
    if (s > 30) {
        var scolor = 0;
    }
    
    ellipse(x2, 350, s)
    x2 -= 10;
    s += 0.05;
	if (x2 < 0) {
		x2 = random(340, 380);
        s2 = 5;
	}
    if (s2 > 30) {
        var scolor = 0;
    }
   
    ellipse(x3, y, s)
    x3 -= 10;
    s += 0.05;
    y += 10;
	if (x3 < 0) {
		x3 = random(340, 380);
        y = 350;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x4, y2, s)
    x4 += 10;
    s += 0.05;
    y2 -= 10;
	if (x4 > 720) {
		x4 = random(340, 380);
        y2 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x5, y3, s)
    x5 += 10;
    s += 0.05;
    y3 += 10;
	if (x5 > 720) {
		x5 = random(340, 380);
        y3 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    ellipse(x6, y5, s)
    x6 -= 10;
    s += 0.05;
    y5 -= 10;
	if (x6 < 0) {
		x6 = random(340, 380);
        y5 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
} 

