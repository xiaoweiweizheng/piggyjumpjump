let piggy;

function preload(){
  pImg = loadImage('asset/piggy.png');
}

function setup() {
  createCanvas(800, 400);
  piggy = new Piggy;
}

function keyPressed() {
  if(key == ' '){
    piggy.jump();
  }
}

function draw() {
  background(220);
  piggy.show();
  piggy.move();

}
