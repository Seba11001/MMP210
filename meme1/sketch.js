/*Self Portrait V.1 by Sebastian
Adding Variables
*/ 

var img;

function preload() {
    img = loadImage("cat2.gif");
}
function setup() {
    
    createCanvas(480, 480);
}
 
function draw ()  {
    fill(255, mouseX - 255, 0);
    rect(50, 50, 480, 480);
    image(img, 50, 50, 480, 480);
    fill("black")
    textSize(17);
    textFont("Arial Black")
    text("When you see your human with another cat", 60, 80);
    if(mouseIsPressed) {
        textSize(50)
        text("MEME", 200, 250);
        
    }
        
   
    
} 

