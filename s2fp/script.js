// let diameter = 150;
// let animationDuration = 1000;
// let isOpen = true;
// let lastChange = 0;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   // background(40, 80, 100);

//   let s = second();
//   let m = minute();
//   let h = hour();

//   // s=30;
//   // m=20;
//   // h=12;

//   let margin = 200;
//   let d = (width - 2 * margin) / 8;
//   let x = margin + d / 2;
//   let y = (height - 3 * d) / 2 + d / 2;

//   // Title
//   // push();
//   // textSize(48);
//   // textFont('monospace');
//   // fill(255, 255, 255);
//   // textAlign(CENTER, TOP);
//   // text('Pac ' + 'O' + "'" + 'Clock', 0, 50, width, height);
//   // pop();

//   // Draw clock circles
//   for (let i = 1; i <= 24; i++) {
//     let currentH = h;
//     push();
//     strokeWeight(0);
//     fill(map(i, 0, 24, 100, 255), map(i, 0, 24, 100, 255), map(i, 0, 24, 255, 200));
   
//     if (h >= i) {
//       //gone time color
//      // fill(50, 85, 105);
//       fill(255,255,150);
//     }
//     circle(x + (i - 1) % 8 * d, y + floor((i - 1) / 8) * d, d);
//     if (currentH === i) {
//       fill(
//         map(m, 0, 60, map(i, 0, 24, 100, 255), 85),
//         map(m, 0, 60, map(i, 0, 24, 100, 255), 100),
//         map(m, 0, 60, map(i, 0, 24, 255, 200), 105)
//       );
//       circle(x + (i - 1) % 8 * d, y + floor((i - 1) / 8) * d, map(m, 0, 60, d, 0));
//     }
//     pop();
//   }

//   // Draw Pac-Man
//   for (let i = 1; i <= 24; i++) {
//     let currentH = (h % 12 === 0) ? 12 : h % 24;
//     if (currentH === i) {
//       let currentTime = millis();
//       if (currentTime - lastChange >= animationDuration) {
//         isOpen = !isOpen;
//         lastChange = currentTime;
//       }
//       fill(255, 230, 0);
     
//       noStroke();
//       if (isOpen) {
//         arc(x + (i - 1) % 8 * d - d, y + floor((i - 1) / 8) * d, diameter, diameter, Math.PI / 4, -Math.PI / 4, PIE);
//       } else {
//         arc(x + (i - 1) % 8 * d, y + floor((i - 1) / 8) * d, diameter, diameter, Math.PI / 10, -Math.PI / 10, PIE);
//       }
//     }
//   }
// }

//initial reference: https://openprocessing.org/sketch/2022721
//second reference:https://www.museumofplay.org/games/pac-man/

let diameter = 150;    // Diameter of Pac-Man
let animationDuration = 1000; // Total duration of one animation cycle (2 seconds)
let isOpen = true;     // Variable to track if Pac-Man's mouth is open
let lastChange = 0;   // Variable to store the last time the animation state changed

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
background(255,234,44);

s = second();
m = minute();
h = hour();

//code for test 
// s = 15;
// m = 35;
// h = 23;

//layout
margin = 200;
d= (width-2*margin)/8;
x = margin + d/2;
y = (height-3*d)/2+d/2;

//title
// push()
// textSize(48);
// fill(255,255,0);
// textAlign(CENTER, TOP);
// text('Pac '+'O'+"'"+ 'Clock', 0, 50, width, height);
// pop();



//1:00-24:00 clock cirlce
for (let i = 1; i <=24; i++) {

  //create a place holder to sign current hour to the right circle
  let currentH = h;
  print(currentH)

  push();
  strokeWeight(0);
  //future time color
  fill(map(i,0,24,100,255), map(i,0,24,100,255), map(i,0,24,255,200));
  
  
  
  if (h >= i) { 
    //gone time color
    fill(255,255,150);
  }
  circle(x + (i-1)%8*d, y + floor((i-1)/8)*d, d);

  if (currentH === i) {
    //current time color fading
    fill(map(m,0,60,map(i,0,24,100,255),85),map(m,0,60,map(i,0,24,100,255),100),map(m,0,60,map(i,0,24,255,200),105));
    
    //current time circle size scale down
     circle(x + (i-1)%8*d, y + floor((i-1)/8)*d, map(m,0,60,d,0));
  }
pop();
  
}

push();
    // Draw second circle for pac-man

for (let i = 1; i <=24; i++){

let currentH = (h % 12 === 0) ? 12 : h % 24;

  if (currentH === i) {
    // Get the current time in milliseconds
    let currentTime = millis();

    // Check if it's time to change animation state
    if (currentTime - lastChange >= animationDuration) {
      isOpen = !isOpen; // Toggle isOpen
      lastChange = currentTime; // Update lastChange
    }

    // Draw Pac-Man
    fill(255, 255, ); // Yellow color
    noStroke();

    if (isOpen) {
      // Draw Pac-Man with open mouth
      arc(x + (i-1)%8*d - d, y + floor((i-1)/8)*d, diameter, diameter, Math.PI / 4, -Math.PI / 4, PIE);
    } else {
      // Draw Pac-Man with closed mouth
      arc(x + (i-1)%8*d, y + floor((i-1)/8)*d, diameter, diameter, Math.PI / 10, -Math.PI / 10, PIE);
    }
  }
}
pop();

}