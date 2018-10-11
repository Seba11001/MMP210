/*Self Portrait V.1 by Sebastian
Adding Variables
*/ 

var cat;

function preload() {
    cat = loadImage("cat2.gif");
}
function setup() {
    
    createCanvas(480, 500);
}
 
function draw ()  {
    fill("black")
    rect(50, 50, 480, 480);
   
    fill(255, mouseX - 255, 0);
 
    
    fill("white")
    if (mouseX > width/2 && mouseY > height/2) {
	fill("red")
	} else if (mouseX < width/2 && mouseY > height/2) {
    textSize(50)
    text("oh no!", 50, 450)
	} else if (mouseX > width/2 && mouseY < height/2) {
        fill("red")
         rect(50, 50, 480, 480);
	} else {
	   textSize(40)
        text("Panic!", 180, 130)
        
	}
    image(cat, 50, 50, 480, 480);
    fill("white")
    textSize(17);
    textFont("Arial Black")
    text("When you forget your homework at home", 75, 80);
} 

