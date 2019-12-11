'use strict';
let cnv;
let w = 800;
let h = 400;
let state = 'title';
let piggy;
let carts = [];
let jumpBeginnTime = performance.now();

let score = 0;

let pImg, cImg;

function preload() {
  pImg = loadImage('asset/piggy.png');
  cImg = loadImage('asset/cart.png');
}

function setup() {
  cnv = createCanvas(w, h);
  cnv.parent('#p5Canvas');
}

function draw() {
  console.log('state is : ' + state);
  switch (state) {
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

  switch (state) {
    case 'title':
      titleKeyPressed();
      break;
    case 'levelOne':
      levelOneKeyPressed();
      break;
    case 'gameOver':
      gameOverKeyPressed();
      break;
    case 'youWin':
      youWin();
      break;
  }

}

function title() {
  background(200);
  textFont('Courier New');
  textAlign(CENTER);
  textSize(60);
  text('piggyJumpJump', w / 2, h / 2);
}

function titleKeyPressed() {
  if (key == ' ') {
    state = 'levelOne';
    piggy = new Piggy();
  }
}

function levelOneKeyPressed() {
  if (key == ' ') {
    piggy.jump();
  }
}

function levelOne() {

  background(255);

  if (random(1) < 0.015) { //number of the cart
    carts.push(new Cart());
  }

  let check = false;

  for (let c of carts) {
    c.move();
    c.show();

    if (piggy.hits(c)) {
      carts = [];
      console.log('game over');
      check = true;
      break;
    }

    if(c.outOfScreen){
      // carts.splice(c, 1);
      piggy.score += 10;
    }

  }

  if(check == true){
      state = 'gameOver';
    }

  piggy.show();
  piggy.move();

}

function gameOver() {
  background(0);
  fill(255);
  textSize(60);
  text('gameOver', w / 2, h / 2);
  textSize(20);
  fill(220, 50, 50);
  text('pressSpaceToRestart', w / 2, h / 2 + 50);
  console.log(state + 'game over');

}

function gameOverKeyPressed() {

  if (key == ' ') {
    background(150);
    console.log('back to levelOne');
    state = 'levelOne';
  }

}

function youWin() {

}
