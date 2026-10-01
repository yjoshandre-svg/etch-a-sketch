const container = document.querySelector("#container");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "black";
});
    container.appendChild(square);
  }
}

createGrid(16);

const button = document.querySelector("#new-grid");

button.addEventListener("click", () => {
  const input = prompt("Squares per side? (max 100)");
  const size = parseInt(input);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  createGrid(size);
});