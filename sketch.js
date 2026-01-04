// Generative spatial sketch inspired by multidimensional structures
let angle = 0;

function setup() {
  createCanvas(1080, 1920, WEBGL);
}

function draw() {
  background(0);
  rotateX(angle * 0.5);
  rotateY(angle * 0.5);

  noFill();
  stroke(255);

  drawWave(1.8, 120);
  rotateZ(HALF_PI);
  rotateY(HALF_PI);
  rotateX(HALF_PI);
  drawWave(1.8, 120);
  rotateY(HALF_PI);
  rotateX(HALF_PI);
  drawWave(1.8, 120);

  angle += 0.01;
}

function drawWave(scaleFactor, waveDepth) {
  beginShape();
  for (let x = -400; x <= 400; x += 8) {
    for (let y = -400; y <= 400; y += 50) {
      let z = -sin(x * 0.008 + angle) * cos(y * 0.008 + angle) * waveDepth;
      let vx = x * scaleFactor * sin(angle);
      let vy = 2 * cos(angle) + y;
      let vz = scaleFactor * sin(angle) ** z;
      vertex(vx, vy, vz);
    }
  }
  endShape(CLOSE);
}
