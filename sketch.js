var video;

var label = "waiting...";
var classifier;

var resolution = 20;
var snake;
var apple;
var h;
var w;

function setup() {
  createCanvas(640, 480);

  // Create video
  video = createCapture(VIDEO);
  video.hide();

  // Classify video
  classifyVideo();

  w = floor(width / resolution);
  h = floor(height / resolution);

  frameRate(5);

  snake = new Snake();
  apple = new Apple(w, h);
  apple.setLocation(w, h);
}

function controlSnake() {
  if (label === "left") {
    snake.setDir(-1, 0);
  } else if (label === "right") {
    snake.setDir(1, 0);
  } else if (label === "down") {
    snake.setDir(0, 1);
  } else if (label === "up") {
    snake.setDir(0, -1);
  }
}

function draw() {
  background(220);
  image(video, 0, 0);

  textSize(32);
  fill(255);
  text(label, 10, 50);

  scale(resolution);

  if (snake.isEating(apple)) {
    apple.setLocation();
  }

  snake.update();
  if (snake.isDead()) {
    background(255, 0, 0);
    noLoop();
  }

  snake.show();
  apple.show();
}
