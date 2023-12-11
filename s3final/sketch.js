let initialBranchLength = 100;

function setup() {
  createCanvas(800, 600).parent('canvas-container');
}

function draw() {
  background(255);
  translate(width / 2, height);

  // 根据鼠标位置随机生成递归树
  let angle = map(mouseX, 0, width, PI / 6, PI / 2);
  let length = map(mouseY, 0, height, 50, 200);

  // 调用递归绘制树
  branch(length, angle);
}

function branch(len, angle) {
  // 递归结束条件
  if (len < 2) return;

  // 绘制当前分支
  stroke(0);
  strokeWeight(len / 10);
  line(0, 0, 0, -len);

  // 移动到分支末端
  translate(0, -len);

  // 创建两个新的分支，并递归绘制它们
  push();
  rotate(angle);
  branch(len * 0.67, angle);
  pop();

  push();
  rotate(-angle);
  branch(len * 0.67, angle);
  pop();
}
