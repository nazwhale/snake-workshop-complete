var snake;
var apple;
var resolution = 20;
var h;
var w;

function setup() {
  createCanvas(400, 400);
  w = floor(width / resolution);
  h = floor(height / resolution);

  frameRate(20);

  snake = new Snake();
  apple = new Apple(w, h);
  apple.setLocation(w, h);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }
}

function draw() {
  scale(resolution);
  background(220);

  snake.update();

  if (snake.isEating(apple)) {
    apple.setLocation();
  }

  if (snake.isDead()) {
    background(255, 0, 0);
    noLoop();
  }

  snake.show();
  apple.show();
}
