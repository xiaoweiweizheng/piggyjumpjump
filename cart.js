class Cart {
  constructor() {
    this.r = 35;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 18; //speed of the cart
  }

  show() {
    image(cImg, this.x, this.y, this.r, this.r);
  }
}8
