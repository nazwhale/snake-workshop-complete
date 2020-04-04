class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(w / 2, h / 2);
    this.xdir = 0;
    this.ydir = 0;
  }

  setDir(x, y) {
    snake.xdir = x;
    snake.ydir = y;
  }

  update() {
    var lastElement = this.body.length - 1;
    var head = this.body[lastElement].copy();

    this.body.shift();
    this.body.push(head);

    head.x = head.x + this.xdir;
    head.y = head.y + this.ydir;
  }

  grow() {
    var lastElement = this.body.length - 1;
    var head = this.body[lastElement].copy();

    this.body.push(head);
  }

  isEating(apple) {
    var lastElement = this.body.length - 1;
    var head = this.body[lastElement];

    if (head.x === apple.x && head.y === apple.y) {
      this.grow();
      return true;
    }

    return false;
  }

  isDead() {
    var lastElement = this.body.length - 1;
    var head = this.body[lastElement];

    // Hit walls
    if (head.x > w - 1 || head.x < 0 || head.y > h - 1 || head.y < 0) {
      return true;
    }

    // Hit self
    for (var i = 0; i < this.body.length - 1; i++) {
      var part = this.body[i];
      if (part.x === head.x && part.y === head.y) {
        return true;
      }
    }

    return false;
  }

  show() {
    for (var i = 0; i < this.body.length; i++) {
      fill("yellow");
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}
