var slide = 0;

var stars, hyperspace;

function preload() {
    stars = loadImage("images/stars.jpg");
    hyperspace = loadImage("images/hyperspace.jpg")
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background("lightblue");
    
    if (slide == 0) {
        fill("black")
        text("Final Project Idea", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        fill("black");
        text("Potentiometer", 200, 100);
        
 
        fill("gray")
        ellipse(width/2, 250, 150);
        ellipse(width/2, 250, 50)
    } else if (slide == 2) {
        fill("black")
        text("Theme: Space", 200, 20);
        image(stars, 10, 100, width/2, height/2);
        image(hyperspace, 400, 200, width/2, height/2);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
