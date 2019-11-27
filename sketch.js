'use strict';
let w = 800;
let h = 400;
let state = 'title';
let piggy;
let carts = [];
let pImg, cImg;

function preload(){
  pImg = loadImage('asset/piggy.png');
  cImg = loadImage('asset/cart.png');
}

function setup() {
  createCanvas(w, h);
}


function draw() {

  switch(state){
    case 'title':
      title();
      break;
    case 'levelOne':
      levelOne();
      break;
    case 'gameOver':
      gameOver();
      break;
    case 'youWin':
      youWin();
      break;
  }

}

function keyPressed() {

  switch(state){
    case 'title':
      titleKeypressed();
      break;
    case 'levelOne':
      levelOneKeypressed();
      break;
    case 'gameOver':
      gameOverKeypressed();
      break;
    case 'youWin':
      youWin();
      break;
  }

}

function title() {
  background(200);
  textFont();
  textAlign(CENTER);
  textSize(60);
  text('piggyJumpJump', w/2, h/2);
}

function titleKeypressed(){
  if (key == ' ') {
      state = 'levelOne';
      piggy = new Piggy();
    }
}

function levelOneKeypressed() {
  if (key == ' ') {
    piggy.jump();
  }
}

function levelOne() {

  background(255);

  if(random(1) < 0.015) { //number of the cart
    carts.push(new Cart());
  }

  for(let c of carts) {
    c.move();
    c.show();

    if(piggy.hits(c)) {
      console.log('game over');
      gameOver();
      noLoop();
    }
  }

  piggy.show();
  piggy.move();

}

function gameOver() {
  background(0);
  fill(255);
  textSize(60);
  text('gameOver', w/2, h/2)
}

function gameOverKeypressed() {
  if (key == ' ') {
      state = 'levelOne';
      piggy = new Piggy();
    }
}

function youWin() {

}
