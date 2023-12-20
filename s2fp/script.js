let diameter = 150;
let animationDuration = 1000;
let isOpen = true;
let lastChange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(40, 80, 100);

  let s = second();
  let m = minute();
  let h = hour();

  let margin = 200;
  let d = (width - 2 * margin) / 8;
  let x = margin + d / 2;
  let y = (height - 3 * d) / 2 + d / 2;

  // Title
  push();
  textSize(48);
  fill(255, 255, 0);
  textAlign(CENTER, TOP);
  text('Pac ' + 'O' + "'" + 'Clock', 0, 50, width, height);
  pop();

  // Draw clock circles
  for (let i = 1; i <= 24; i++) {
    let currentH = h;
    push();
    strokeWeight(0);
    fill(map(i, 0, 24, 100, 255), map(i, 0, 24, 100, 255), map(i, 0, 24, 255, 200));
    if (h >= i) {
      fill(50, 85, 105);
    }
    circle(x + (i - 1) % 8 * d, y + floor((i - 1) / 8) * d, d);
    if (currentH === i) {
      fill(
        map(m, 0, 60, map(i, 0, 24, 100, 255), 85),
        map(m, 0, 60, map(i, 0, 24, 100, 255), 100),
        map(m, 0, 60, map(i, 0, 24, 255, 200), 105)
      );
      circle(x + (i - 1) % 8 * d, y + floor((i - 1) / 8) * d, map(m, 0, 60, d, 0));
    }
    pop();
  }

  // Draw Pac-Man
  for (let i = 1; i <= 24; i++) {
    let currentH = (h % 12 === 0) ? 12 : h % 24;
    if (currentH === i) {
      let currentTime = millis();
      if (currentTime - lastChange >= animationDuration) {
        isOpen = !isOpen;
        lastChange = currentTime;
      }
      fill(255, 255, 0);
      noStroke();
      if (isOpen) {
        arc(x + (i - 1) % 8 * d - d, y + floor((i - 1) / 8) * d, diameter, diameter, Math.PI / 4, -Math.PI / 4, PIE);
      } else {
        arc(x + (i - 1) % 8 * d, y + floor((i - 1) / 8) * d, diameter, diameter, Math.PI / 10, -Math.PI / 10, PIE);
      }
    }
  }
}

