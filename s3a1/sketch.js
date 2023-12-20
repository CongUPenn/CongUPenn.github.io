function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    for(let x = 0; x <= width; x = x + 10) {
      for(let y = 0; y <= height; y = y + 10) {
        fill(random(0, 255));
        rect(x, y, 10, 10);
      }
    }
    noLoop();
  }