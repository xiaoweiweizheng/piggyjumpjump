class Cart {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = height - this.r;
    this.speed = 8; //speed of the cart
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(cImg, this.x, this.y, this.r, this.r);
  }

  outOfScreen(){
    if (this.x < 0 ){
      return true;
    }
}
}
