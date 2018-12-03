

var cat;
var r, g, b;
var x = 360;
var x2 = 360;
var x3 = 360;
var x4 = 360;
var y = 100;
var y2 = 360;
var y3 = 360;
var y4 = 500;
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
    if (frameCount % 10 === 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
	}
    
    fill("scolor")
    ellipse(x, 350, s)
    x += 10;
    s += 0.05;
	if (x > 720) {
		x = 360;
        s = 5;
	}
    if (s > 30) {
        var scolor = 0;
    }
    fill("white")
    
    
    fill("scolor")
    ellipse(x2, 350, s)
    x2 -= 10;
    s += 0.05;
	if (x2 < 0) {
		x2 = 360;
        s2 = 5;
	}
    if (s2 > 30) {
        var scolor = 0;
    }
    fill("white");
    

    fill("scolor")
    ellipse(x3, y2, s)
    x3 -= 10;
    s += 0.05;
    y2 += 10;
	if (x3 < 0) {
		x3 = 360;
        y2 = 350;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    fill("white");
    
    fill("scolor")
    ellipse(x4, y3, s)
    x4 += 10;
    s += 0.05;
    y3 += 10;
	if (x4 < 0) {
		x4 = 360;
        y3 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    fill("white");
} 

