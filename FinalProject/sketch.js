var serial;
var portName = "COM13";
var sensorValue;

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
var marsX = 350;
var marsY = 350;
var moonSize = 0;
var moonX = 350;
var moonY = 350;
var bcolor = "black";
var scolor = "yellow";
var s2 = 350;
var speedX = 2;
var speedY = 2;


var l = 100, k = 100, w = 200, h = 100;

function preload() {
    ship = loadImage("ship.gif")
}

function setup() {
    fill(bcolor);
    createCanvas(720, 720);
    noStroke();
    serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
}

function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}
    
function serialError() {
    console.log("error");
}

function serialEvent() {
	var currentString = serial.readLine();
	trim(currentString)
	if (!currentString) {
		return; 
	}
	sensorValue = currentString; 
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

    
   //Arduino Potentiometer Controls
    if (sensorValue > 300) {
       speedX = 5;
        speedY = 5;
   } if (sensorValue > 400) {
       speedX = 7;
        speedY = 7;
   } if (sensorValue > 500) {
       speedX = 9;
        speedY = 9;
   } if (sensorValue > 600) {
       speedX = 10;
        speedY = 10;
   } if (sensorValue > 700) {
       speedX = 15;
        speedY = 15;
   } if (sensorValue > 800) {
       speedX = 20;
        speedY = 20;
   } if (sensorValue > 900) {
       speedX = 30;
       speedY = 30;
   } if (sensorValue < 100) {
       speedX = 2;
        speedY = 2;
   } if (sensorValue < 10) {
       speedX = 0;
        speedY = 0;
   }
    
    if (speedX < 5) {
       s = 5;
   }
   
    //star1
    fill("white")
    
    ellipse(x, 350, s)
    x += speedX ;
	if (x > 720) {
		x = random(320, 400);
        s = 5;
	}
    if (s2 > 30) {
        var scolor = 0;
    }
    
    //star2
    ellipse(x2, 350, s)
    x2 -= speedX;
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
    fill("#b22e20")
        ellipse(marsX, marsY, marsSize);
     if (key === "m") {
        marsSize += speedX;
         moonSize = 0;
    } if (marsSize > 350) {
        marsSize = 350;
    }
    
    //Moon
    fill("gray")
        ellipse(moonX, moonY, moonSize);
     if (key === "l") {
        moonSize += speedX;
         marsSize = 0;
         
    } if (moonSize > 350) {
        moonSize = 350;
    }
    
    if (speedX > 30) {
        speedX = 30;
        speedY = 30;
    }
    
    image(ship, 0, 175, 720, 720);
    fill("white")
    textSize(20);
    textFont("Arial Black")
    text("Location:", 270, 700);
    if (moonSize > 300) {
        text("Moon", 375, 700);
    } else if (marsSize > 300) {
        text("Mars", 375, 700);
    } else {
        text("Space", 375, 700);
    }
    text("Speed:", 270, 670);
    text(speedX, 350, 670)
    
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
