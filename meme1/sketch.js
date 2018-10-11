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
    if(mouseIsPressed) {
        fill("red")
        rect(50, 50, 480, 480);
        fill("white")
        textSize(40)
        text("Panic!", 180, 130)
        textSize(30)
        text("Oh no", 55, 450)
    } else {
        fill("black")
        rect(50, 50, 480, 480);
    }
    fill(255, mouseX - 255, 0);
 
    image(cat, 50, 50, 480, 480);
    fill("white")
    textSize(17);
    textFont("Arial Black")
    text("When you forget your homework at home", 75, 80);
} 

