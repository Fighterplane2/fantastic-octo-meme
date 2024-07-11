let map;
let mapMoon;
let blue;

function preload() {
  map = loadImage("./images/earth1.png");
  mapMoon = loadImage("./images/moon.png");
  blue = loadImage("./images/blue.png")
}

function setup() { 
  createCanvas(1200, 600, WEBGL);

  noStroke();
} 

function draw() { 

  perspective(.5, 2, 100, 30000)

   //This section is the Earth and the texture for the Earth
    background(255,0,0);
    orbitControl();
    smooth();
    push();
    rotateWithFrameCount();
    translate(0, 0, 0);
    texture(map);
    sphere(200);
    pop();

   //This section is the Moon and the texture for the Moon
    push();
    rotateWithFrameCountMoon();
    translate(0, 0, 6000);
    rotate(0);
    texture(mapMoon);
    sphere(50);
    pop();

    push();
    rotateWithFrameCountBlue();
    translate(0, 0, 207);
    rotate(51.6);
    texture(blue);
    sphere(2);
    pop();
}

function rotateWithFrameCount(){
  rotateY(frameCount/120);
}

function rotateWithFrameCountMoon(){
  rotateY(frameCount/3360);
}

function rotateWithFrameCountBlue(){
  rotateY(frameCount/70);
}