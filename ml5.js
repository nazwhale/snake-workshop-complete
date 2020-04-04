// Load the model!
function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/0_EoAL118/" + "model.json"
  );
}

// Classify the video!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

// Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error("err", error);
    return;
  }

  label = results[0].label;
  controlSnake();
  classifyVideo();
}
