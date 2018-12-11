var serial;
var portName = "COM12";
var sensorValue;

function setup() {
	createCanvas(640, 360);

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
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}

function draw() {
	var c = map(sensorValue, 0, 1023, 0, 180);

	// sky
	background("black");
    fill("white")
    rect(100, 200, 5, 5)
    rect(400, 100, 5, 5)
    rect(300, 200, 5, 5)
    rect(500, 300, 5, 5)
    rect(100, 50, 5, 5)
    rect(600, 50, 5, 5)
    rect(200, 300, 5, 5)
    rect(200, 75, 5, 5)
    fill("grey")
    ellipse(-150, 150, 500)
	// sun
	var x = map(sensorValue, 0, 1023, height, 0);
	fill('red');
	noStroke();
	rect(x, 150, 100,  10);
    fill("white")
    rect(x, 160, 150, 10)
    fill('red');
	noStroke();
	rect(x, 170, 100,  10);
    fill('orange')
    rect(x-30, 160, 30, 10)
    
   
}


