'use strict';
let cnv;
let w = 800;
let h = 400;
let state = 'title';
let piggy;
let carts = [];
let bottles = [];
let scores = 0;
let pImg, cImg, bImg, hImg;
let hX1 = 0;
let hX2;
let houseSpeed = 5;

function preload() {
  pImg = loadImage('asset/piggy.png');
  cImg = loadImage('asset/cart.png');
  bImg = loadImage('asset/bottle.png')
  hImg = loadImage('asset/house.png');
}

function setup() {
  cnv = createCanvas(w, h);
  cnv.parent('#p5Canvas');
  hX2 = w;

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
    case 'levelTwo':
      levelTwo();
      cnv.mouseClicked(function() {
        state = 'levelTwoStatement';
      });
      break;
    case 'levelTwoStatement':
      levelTwoStatement();
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
      // case 'levelTwo':
      //   break;
  }

}

function title() {
  background(255);
  houseBG();
  textFont('Courier New');
  textAlign(CENTER);
  textSize(60);
  text('Piggy Jump Jump', w / 2, h / 1.2 + random(15));
  textSize(20);
  text('press space key to star', w/2, h/1.05);
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
  houseBG();

  if (random(1) < 0.015) { //number of the cart
    carts.push(new Cart());
  }

  if (random(1) < 0.02) {
    bottles.push(new Bottle());
  }

  for (var i = 0; i < bottles.length; i++) {
    bottles[i].move();
    bottles[i].show();
  }

  for (var i = bottles.length - 1; i >= 0; i--) {
    if (dist(piggy.x, piggy.y, bottles[i].x, bottles[i].y) <= (piggy.r + bottles[i].r) / 2) {
      scores++;
      console.log(scores);
      bottles.splice(i, 1);
    }
  }

  if (scores >= 5) {
    state = 'levelTwo';
  }


  let check = false;

  for (let c of carts) {
    if (piggy.hits(c)) {
      carts = [];
      console.log('game over');
      check = true;
      // break;
    }
    c.move();
    c.show();

  }

  if (check == true) {
    state = 'gameOver';
  }

  piggy.show();
  piggy.move();

  fill(0);
  textSize(15);
  text('scores: ' + scores, width / 1.2, height / 10);
  fill(100);
  text('jump to bottles to get points', width / 3.5, height / 10);

}

function gameOver() {
  background(0);
  fill(255);
  textSize(60);
  text('gameOver', w / 2, h / 2);
  textSize(20);
  fill(220, 50, 50);
  text('pressSpaceToRestart', w / 2, h / 2 + 50);
  scores = 0;
  console.log(state + 'game over');

}

function gameOverKeyPressed() {

  if (key == ' ') {
    background(150);
    console.log('back to levelOne');
    state = 'levelOne';
  }

}

function levelTwo() {
  background(255);
  fill(0);
  textSize(15);
  text('Congratulation! Now, you can enter level two.', width / 2, height / 2);
  text('Please click mouse to choose your gender & characters', width / 2, height / 2 + 20);
}

function levelTwoStatement() {
  background(255);
  fill(0);
  textSize(12);
  text('Unfortunately, this level has not been fully developed.Please be patient and wait for update. Thanks your support', width / 2, height / 2);
}

function houseBG() {
  image(hImg, hX1, 0, w, h);
  image(hImg, hX2, 0, w, h);

  hX1 -= houseSpeed;
  hX2 -= houseSpeed;

  if (hX1 < -w){
    hX1 = w;
  };
  if (hX2 < -w){
    hX2 = w;
  }

}
