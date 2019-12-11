class Bottle {
  constructor() {
    this.r = 50;
    this.x = width;
    this.y = random(this.r, this.r*2);
    this.speed = 5;
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(bImg, this.x, this.y, this.r, this.r);
  }

}
