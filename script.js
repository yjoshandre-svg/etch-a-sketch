const container = document.querySelector("#container");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    container.appendChild(square);
  }
}

createGrid(16);