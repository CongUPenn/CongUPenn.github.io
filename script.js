// function toggleVisibility() {
//     var hiddenBox = document.getElementById("intro");
//     if (hiddenBox.style.display === "none") {
//       hiddenBox.style.display = "block";
//     } else {
//       hiddenBox.style.display = "none";
//     }
//   }

  function toggleVisibility(objectId) {
    var subObject = document.getElementById(objectId + '1'); // Assuming the sub-objects are named as '1', '2', '3'
    if (subObject.style.display === 'none') {
      subObject.style.display = 'block';
    } else {
      subObject.style.display = 'none';
    }
  }
  
 // Function to create rectangles
 function createRectangles() {
  const container = document.getElementById('rectangleContainer');
  container.innerHTML = ''; // Clear existing content

  const totalRectangles = 120;

  for (let i = 0; i < totalRectangles; i++) {
    const rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');
    container.appendChild(rectangle);
  }
}

// Initial setup
createRectangles();

// Resize event listener to update rectangles on window resize
window.addEventListener('resize', createRectangles);










// // dots is an array of Dot objects,
// // mouse is an object used to track the X and Y position
//    // of the mouse, set with a mousemove event listener below
//    var dots = [],
//    mouse = {
//      x: 0,
//      y: 0
//    };

// // The Dot object used to scaffold the dots
// var Dot = function() {
//  this.x = 0;
//  this.y = 0;
//  this.node = (function(){
//    var n = document.createElement("div");
//    n.className = "trail";
//    document.body.appendChild(n);
//    return n;
//  }());
// };
// // The Dot.prototype.draw() method sets the position of 
//  // the object's <div> node
// Dot.prototype.draw = function() {
//  this.node.style.left = this.x + "px";
//  this.node.style.top = this.y + "px";
// };

// // Creates the Dot objects, populates the dots array; change the number of the dots!
// for (var i = 0; i < 10; i++) {
//  var d = new Dot();
//  dots.push(d);
// }

// // This is the screen redraw function
// function draw() {
//  // Make sure the mouse position is set everytime
//    // draw() is called.
//  var x = mouse.x,
//      y = mouse.y;
 
//  // This loop is where all the 90s magic happens
//  dots.forEach(function(dot, index, dots) {
//    var nextDot = dots[index + 1] || dots[0];
   
//    dot.x = x;
//    dot.y = y;
//    dot.draw();
//    x += (nextDot.x - dot.x) * .6;
//    y += (nextDot.y - dot.y) * .6;

//  });
// }

// addEventListener("mousemove", function(event) {
//  //event.preventDefault();
//  mouse.x = event.pageX;
//  mouse.y = event.pageY;
// });

// // animate() calls draw() then recursively calls itself
//  // everytime the screen repaints via requestAnimationFrame().
// function animate() {
//  draw();
//  requestAnimationFrame(animate);
// }

// // And get it started by calling animate().
// animate();
