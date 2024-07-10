let map;
let theShader;

function preload() {
  map = loadImage("./images/jupiter.png");
  theShader = loadShader('shader.vert','shader.frag')
}

function setup() { 
  createCanvas(1200, 600, WEBGL);

  // diagonal = dist(0,0,width,height);
  
  // centerX = width/2;
  // centerY = height/2;
  noStroke();
} 

function draw() { 
  shader(theShader);
  rect(0,0,width,height);
    // background(255,0,0);
    // orbitControl();
    // smooth();
    // push();
    // translate(0, 0);
    // texture(map);
    // ellipsoid();
    // pop();
}

// function draw(shadow){
//     spacingX = width / 70;
//     spacingY = width / 70;

//     for (x=0; x<=width; x += spacingX) {
//         for (y=0; y<=height; y += spacingY) {
          
//           mouseToShape = dist(x, y, mouseX, mouseY);
//           mouseToCenter = dist(centerX, centerY, mouseX, mouseY);
          
//           size = map(mouseToShape, 0, diagonal, 0, 400);
  
        
//           wobble = 0;
//           maxWobble = random(0,50);
  
//         fill(0,0,0,100);
//         circle(x+wobble,y+wobble,size);
//         }
//     }
// }

// function rotateRect(x, y, w, h, rot) {
//     push()
//     translate(x, y)
//     rotate(rot)
//     rect(0, 0, w, h)
//     pop()
//   }