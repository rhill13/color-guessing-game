var listColors = ["","","","","",""];

var resetButton = document.querySelector("#rButton");

for (var i = 0; i < 6; i++){
    listColors[i] = GenerateRandomColor();
}

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

// Check reset button
resetButton.addEventListener("click", function(){
    window.location.reload(false);
});

// Game Logic Function
function Logic() {
    if (this.style.backgroundColor === generatedColor) {
        generatedColorDisplay.textContent = "CORRECT!!!";
        // Change all "squares" and headers to generated color
        document.querySelector("h2").style.backgroundColor = generatedColor;        
        document.querySelector("h1").style.backgroundColor = generatedColor;
        for(var i = 0; i < grid.length; i++){
            grid[i].style.backgroundColor = generatedColor;
        }
    } else {
        // Remove the cleared square
        this.remove();
        generatedColorDisplay.textContent = generatedColor + " - Try Again...";
    }
}

// Generate random color
function GenerateRandomColor() {
    var threeNums = [0,0,0];
    for(var i = 0; i < 3; i++){
        threeNums[i] = Math.floor(Math.random() * 255);
    }
    var color = "rgb("+threeNums[0]+", "+threeNums[1]+", "+threeNums[2]+")";
    return color; 
}