let map;
let mapMoon;
let ISS;

function preload() {
  //Texture for Earth
  map = loadImage("./images/earth1.png");
  //Texture for the Moon
  mapMoon = loadImage("./images/moon.png");
  //Texture highlight for the ISS
  ISS = loadImage("./images/yellow.jpg")
  
}

function setup() { 
  createCanvas(1200, 600, WEBGL);
  noStroke();
} 

function draw() { 
  // Debug mode allows a grid to be displayed inside the canvas
  // debugMode(800, 6, 0, 0, 0, 800, 0, 0, 0)
  perspective(.5, 2, 10, 60000);

   //This section is the Earth
    background(0);
    orbitControl();
    smooth();
    push();
    rotateWithFrameCount();
    translate(0, 0, 0);
    texture(map);
    sphere(200);
    pop();

    //This section is the Moon
    push();
    rotateWithFrameCountMoon();
    translate(0, 0, 6000);
    rotate(0);
    texture(mapMoon);
    sphere(50);
    pop();

    //This section is the code for the ISS
    push();
    rotateWithFrameCountBlue();
    translate(0, 0, 207);
    rotate(51.6);
    texture(ISS);
    sphere(2);
    pop();
}

//Below is the code for the orbit paths and rotation of the modeled items
function rotateWithFrameCount(){
  rotateY(frameCount/120);
}

function rotateWithFrameCountMoon(){
  rotateY(frameCount/3360);
}

function rotateWithFrameCountBlue(){
  rotate(45);
  rotateY(frameCount/7)
}