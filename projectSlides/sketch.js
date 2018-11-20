var slide = 0;

var bird, fish;

function preload() {
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        text("Final Project Idea", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("Potentiometer", 200, 100);
        
 
        
        ellipse(width/2, 250, 150);
        ellipse(width/2, 250, 50)
    } else if (slide == 2) {
        text("Theme: Space", 200, 20);
        image(bird, 200, 100);
        image(fish, 400, 100);
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
