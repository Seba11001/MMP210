function setup() {
    createCanvas(640, 480);
}
function draw() {
    background(50);
    noStroke;
    fill("lightblue");
    var size = 100 / 5;
    ellipse(350, 320, size);

    fill("black");
    ellipse(450, 250, 50);
    ellipse(100, 100, 50);
    ellipse(100, 100, 100);

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("Monaco");
    text("Nice work!", 65, 110);
}