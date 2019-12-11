class Piggy {
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1;
    // this.scores = 0;
  }

  show() {
    image(pImg, this.x, this.y, this.r, this.r);
    // textSize(15);
    // text('scores: ' + this.scores, width/1.2, height/10);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -22;

    }
  }

  hits(cart) {
    // return collideRectRect(this.x, this.y, this.r, this.r, cart.x, cart.y, cart.r, cart.r);
    if(dist(this.x, this.y, cart.x, cart.y) < this.r){
      return true;
    }

  }

}
