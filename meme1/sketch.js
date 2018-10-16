/*Self Portrait V.1 by Sebastian
Adding Variables
*/ 

var cat;

function preload() {
    cat = loadImage("cat2.gif");
    cat2 = loadImage("cat3.gif");
}
function setup() {
    fill("black")
    createCanvas(480, 500);
    
}
 
function draw ()  {
    fill("black")
    rect(50, 50, 480, 480);
   
    fill(255, mouseX - 255, 0);
 
    
    fill("white")
    if (mouseX > width/2 && mouseY > height/2) {
     fill("purple")
     rect(50, 50, 480, 480);
        image(cat2, 50, 50, 480, 480);
       fill("white")
	text("What shall I do??", 245, 130)
	} else if (mouseX < width/2 && mouseY > height/2) {
     fill("orange")
     rect(50, 50, 480, 480);
    image(cat, 50, 50, 480, 480);
    fill("white")
        textSize(20)
    text("I need catnip", 180, 130)
	} else if (mouseX > width/2 && mouseY < height/2) {
    
     image(cat2, 50, 50, 480, 480);
           fill("white")
    text("Someone halp!", 240, 130)
	} else {
         fill("red")
     rect(50, 50, 480, 480);
        fill("white")
	   textSize(40)
        text("Panic!", 180, 130)
        image(cat, 50, 50, 480, 480);
        
	}
    
    fill("white")
    textSize(17);
    textFont("Arial Black")
    text("When you forget your homework at home", 75, 80);
} 

