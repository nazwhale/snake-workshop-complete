class Apple {
  constructor() {
    var width = floor(random(w));
    var height = floor(random(h));
    apple = createVector(width, height);

    this.x = apple.x;
    this.y = apple.y;
  }

  setLocation() {
    this.x = floor(random(w));
    this.y = floor(random(h));
  }

  show() {
    fill("green");
    noStroke();
    rect(this.x, this.y, 1, 1, 0.3);
  }
}
