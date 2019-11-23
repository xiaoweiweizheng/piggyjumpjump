class Piggy {
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1;
  }

  show(){
    image(pImg, this.x, this.y, this.r, this.r);
  }

  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  jump(){
    if (this.y == height - this.r){
      this.vy = -20;

    }
  }
}
