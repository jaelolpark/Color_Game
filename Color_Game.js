var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)", 
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]


var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var goalColor = document.querySelector('#goalColor');
var messageDisplay = document.getElementById('message')


goalColor.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
// initial colors to square
  squares[i].style.backgroundColor = colors[i];
// add click listeners to squares
  squares[i].addEventListener('click', function() {
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor
    // compare color topicked Color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!!'
      changeColors(clickedColor);
    }
    else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = "Try Again"
    }
  })
}

function changeColors(color) {
  // loop through all squares
  for(var i=0; i<squares.length; i++) {
  // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
  
}

