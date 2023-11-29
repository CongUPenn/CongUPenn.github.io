const a = 3; // Number of rows
const b = 3; // Number of columns
const totalGrids = a * b;
const gridContainer = document.getElementById('gridContainer');

// Create grid items dynamically based on axb
for (let i = 0; i < totalGrids; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}

let currentIndex = 0;

function startAnimation() {
  const gridItems = document.querySelectorAll('.grid-item');
  const activeItem = document.createElement('div');
  activeItem.classList.add('grid-item', 'active');
  gridItems[currentIndex].appendChild(activeItem);

  setTimeout(() => {
    activeItem.remove();
    currentIndex++;

    if (currentIndex < totalGrids) {
      startAnimation();
    } else {
      currentIndex = 0; // Reset for future animations
    }
  }, 500);

  setTimeout(() => {
    const animatedBox = document.getElementById('jokebox');
    animatedBox.style.opacity = 1;
  }, 4500);

  setTimeout(() => {
    const animatedBox = document.getElementById('jokebox');
    animatedBox.style.opacity = 0;
  }, 9000);
}


