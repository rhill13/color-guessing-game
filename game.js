var listColors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
]

// Set up squares
var grid = document.querySelectorAll(".square");
var generatedColor = listColors[Math.floor(Math.random() * 6)];
var generatedColorDisplay = document.querySelector("#colorToGuess");
generatedColorDisplay.textContent = generatedColor;
for(var i = 0; i < grid.length; i++){
    grid[i].style.backgroundColor = listColors[i];
}

// Check clicked square
for(var i = 0; i < grid.length; i++){
    grid[i].addEventListener("click", Logic);
}

// Game Logic Function
function Logic() {
    if (this.style.backgroundColor === generatedColor) {
        alert("Correct!");
    } else {
        alert("Incorrect...");
    }
}

// Generate random colors
