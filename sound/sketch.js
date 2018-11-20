/*Self Portrait V.1 by Sebastian
Adding Variables
*/ 

var cat;
var r, g, b;
var x = 100;
var x2 = 100;
var x3 = 700;
var x4 = 700;
var y = 100;
var y2 = 100;
var y3 = 500;
var y4 = 500;
var alarm;

function preload() {
    cat = loadImage("cat2.gif");
    cat2 = loadImage("cat3.gif");
    alarm = loadSound("alarm.wav");
}
function setup() {
    fill("black")
    createCanvas(1000, 500);
    r = random(0,255);
	g = random(0,255);
	b = random(0,255);
    noStroke();
    alarm.play();
}
 
function draw ()  {
    
    
    
    fill("black")
    if (frameCount % 10 === 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
	}
    fill(r, g, b);
    rect(50, 50, 700, 480);
    fill(255, mouseX - 255, 0);
 
    
    fill("white")
    
	   textSize(40)
        text("Panic!", 300, 130)
        
	
    image(cat, 175, 50, 480, 480);
    fill("white")
    textSize(17);
    textFont("Arial Black")
    text("When you forget your homework at home", 200, 80);
    

    textSize(50)
    text("!", x, 180)
    x += 5;
	if (x > 720) {
		x = 50;
	}
    
     textSize(40)
    text("!", x2, 250)
    x2 += 10;
	if (x2 > 720) {
		x2 = 50;
	}
    
     textSize(50)
    text("!", x3, 250)
    x3 -= 10;
	if (x3 < 50) {
		x3 = 700;
	}
    
      textSize(50)
    text("!", x4, 400)
    x4 -= 7;
	if (x4 < 50) {
		x4 = 700;
	}
    
    textSize(70)
    text("!", 100, y)
    y += 5;
	if (y > 720) {
		y = 100;
	}
    
      textSize(70)
    text("!", 600, y2)
    y2 += 7;
	if (y2 > 720) {
		y2 = 100;
	}
    
     textSize(70)
    text("!", 300, y3)
    y3 -= 7;
	if (y3 < 100) {
		y3 = 500;
	}
    
     textSize(70)
    text("!", 500, y4)
    y4 -= 10;
	if (y4 < 100) {
		y4 = 500;
	}
    
    translate(width/2, height/2);
	var ro = frameCount / 70 * PI;
	rotate(ro);
    textSize(40);
	text("!", 20, 20);
    text("!", 40, 40);
    
   
	var ro = frameCount / 70 * PI;
	rotate(ro);
    textSize(40);
	text("!", 100, 20);
    text("!", 100, 40);
    
    
} 

