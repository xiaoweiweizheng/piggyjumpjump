'use strict';

let piggy;
let carts = [];

function preload(){
  pImg = loadImage('asset/piggy.png');
  cImg = loadImage('asset/cart.png');
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

  if(random(1) < 0.015) { //number of the cart
    carts.push(new Cart())k;
  }

  background(220)

  for(let c of carts) {
    c.move();
    c.show();

    if(piggy.hits(c)) {
      console.log('game over');
      noLoop();
    }
  }

  piggy.show();
  piggy.move();


}
