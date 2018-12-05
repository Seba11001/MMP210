var x = 320;
var x2 = 330;
var x3 = 340;
var x4 = 350;
var x5 = 360;
var x6 = 370;
var x7 = 360;
var x8 = 360;
var x9 = 350;
var x10 = 250;
var x11 = 450;
var x12 = 450;
var x13 = 400;
var y = 360;
var y2 = 360;
var y3 = 360;
var y4 = 360;
var y5 = 360;
var y6 = 360;
var y7 = 360;
var y8 = 360;
var y9 = 250;
var y10 = 250;
var y11 = 450;
var y12 = 360;
var s = 5;
var marsSize = 0;
var moonSize = 0;
var bcolor = "black";
var scolor = "yellow";
var s2 = 350;
var speedX = 2;
var speedY = 2;

var l = 100, k = 100, w = 200, h = 100;

function preload() {

}
function setup() {
    fill(bcolor);
    createCanvas(720, 720);
    noStroke();
}

//KeyboardControls
function keyTyped() {
    if (key === "z") {
        speedX += 2;
        speedY += 2;
        marsSize = 0;
        moonSize = 0;
    } else if (key === "x") {
        speedX -= 1;
        speedY -= 1;
        marsSize = 0;
        moonSize = 0
    }  
}

 
function draw ()  {
    background(bcolor);

    if (speedX < 5) {
       s = 5;
   }
   
    //star1
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
    
    //star2
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
   
    //star3
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
    
    //star4
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
    
    //star5
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
    
    //star6
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
    
    //star 7
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
    
    //star 8
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
    
    //star 9
    ellipse(x10, y9, s)
    x10 -= speedX;
    s += 0.05;
    y9 -= speedY;
	if (x10 < 0) {
		x10 = random(200, 250);
        y9 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    //star 10
    ellipse(x11, y10, s)
    x11 += speedX;
    s += 0.05;
    y10 -= speedY;
	if (x11 > 720) {
		x11 = random(400, 450);
        y10 = 250;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
    }
    
    //star 11
    ellipse(x12, y11, s)
    x12 += speedX;
    s += 0.05;
    y11 += speedY;
	if (x12 > 720) {
		x12 = random(400, 450);
        y11 = 450;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
          
    }
    
    //star 12
    ellipse(x13, y12, s)
    x13 -= speedX;
    s += 0.05;
    y12 += speedY;
	if (x13 < 0) {
		x13 = random(350, 400);
        y12 = 360;
        s = 5;
	}
      if (s2 > 30) {
        var scolor = 0;
      }
    
    
    if (speedX < 0) {
        speedX = 0;
    } else if (speedY < 0) {
        speedY = 0;
    }
    
    //Mars
    fill("red")
        ellipse(360, 360, marsSize);
     if (key === "m") {
        marsSize += speedX;
         moonSize = 0;
    } if (marsSize > 350) {
        marsSize = 350;
        speedX = 0;
        speedY = 0;
    }
    
    //Moon
    fill("gray")
        ellipse(360, 360, moonSize);
     if (key === "l") {
        moonSize += speedX;
         marsSize = 0;
    } if (moonSize > 350) {
        moonSize = 350;
        speedX = 0;
        speedY = 0;
    }
}





function mousePressed() {
	if ( mouseX > l && mouseX < l + w && mouseY > k && mouseY < k + h ) {
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
		fill(r, g, b);
		ellipse(random(width), random(height), random(20, 100));
	}
}
