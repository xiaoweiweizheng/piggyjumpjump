class Cart {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 8; //speed of the cart
  }

  show() {
    image(cImg, this.x, this.y, this.r, this.r);
  }

  // clear(){
  //
  // }
}
