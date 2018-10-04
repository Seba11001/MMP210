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
    fill(mouseX)
    rect(50, 50, 480, 480);
    image(img, 50, 50, 480, 480);
} 

