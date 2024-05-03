
canvasWidth = 50;
canvasHight = 50;

let col;
let frameRateDraw = 10; //per second
let slider;

function setup() {
  createCanvas(canvasWidth, canvasHight);
  frameRate(frameRateDraw);
  background(139, 69, 19);
  col = color(0, 255, 0);

  slider = createSlider(0.5,15,1,0.1);
  slider.position(10, 100);
  slider.size(120);
}

let PixArr = [
  [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0]
];

// console.log(PixArr[0].length);
// console.log(PixArr[i][j]);
function draw() {
  updateGrass(PixArr,col);
  cubeAppear (canvasWidth,canvasHight);
  speedUpd();
}

function updateGrass(PixArr, col) {
  let i = 0; let j = 0;
  for (i = 0; i < PixArr.length; i++) {
    for (j = 0; j < PixArr[i].length; j++) {
      if (PixArr[i][j] == 1) {
        set(j, i, col);
      }
    }
  }
  updatePixels();
}
function cubeAppear (canvasWidth,canvasHight){
  noStroke();
  fill(100, random(180,200), 238,200);
  rect(random(canvasWidth-4,canvasWidth-2), random(canvasHight-4,canvasHight-2), 2, 2);
}
function speedUpd(){
  frameRateDraw = slider.value();
  frameRate(frameRateDraw);
}
