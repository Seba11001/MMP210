/*Self Portrait V.1 by Sebastian
Adding Variables
*/ 

function setup() {
    createCanvas(640, 360);
}

function draw ()  {
    background(100);
    
    var x = 5;
    
    var faceSize = 300;
    var eyeSize = 50;
    var eyecolorSize = 35;
    var pupilSize = 15;
    var lefteyex = 200;
    var eyeY = 150;
    var righteyex = 380;
    var hairColor = "yellow";
    var skinColor = "tan";
    var headx = 300;
    var heady = 180;
    var hairx = 300;
    var hairy = 150;
    var eyeballcolor = "white";
    var eyecolor = "green";
    var pupilcolor = "black";
    var mouthcolor = "red";
    var mouthx = 250;
    var mouthy = 230;
    var mouthlength = 70;
    var mouthwidth = 20;
    var mouthcurve = 10;
    var nosex = 280;
    var nosey = 180;
    var noselength = 10;
    var nosewidth = 20;
    
    
    //hair
    fill(hairColor);
    ellipse(hairx + x, hairy, faceSize);    
    
    //head
    fill(skinColor);
    ellipse(headx + x, heady, faceSize);
    
    //eyes
    fill(eyeballcolor);
    ellipse(lefteyex + x, eyeY, eyeSize);
    ellipse(righteyex + x, eyeY, eyeSize);
    fill(eyecolor)
    ellipse(lefteyex + x, eyeY, eyecolorSize);
    ellipse(righteyex + x, eyeY, eyecolorSize);
    fill(pupilcolor);
    ellipse(lefteyex + x, eyeY, pupilSize);
    ellipse(righteyex + x, eyeY, pupilSize);
    
    //mouth
    fill(mouthcolor)
    rect(mouthx + x, mouthy, mouthlength, mouthwidth, mouthcurve);
    
    //nose
    fill(skinColor)
    rect(nosex + x, nosey, noselength, nosewidth);
} 