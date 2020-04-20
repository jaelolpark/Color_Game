var colors = makingRandomNums(6);


var squares = document.querySelectorAll(".square");
var pickedColor = goalColor();
var matchingColor = document.querySelector('#goalColor');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1')
var resetBtn = document.querySelector('#reset'); 

resetBtn.addEventListener('click', function() {
  // generate all new colors
  colors = makingRandomNums(6);
  // pick a new random color from array
  pickedColor = goalColor();
  // change matchingColor to match picked color
  matchingColor.textContent = pickedColor;
  // change colors of squares  
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = '#232323';
})

matchingColor.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {
// initial colors to square
  squares[i].style.backgroundColor = colors[i];
// add click listeners to squares
  squares[i].addEventListener('click', function() {
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor
    // compare color topicked Color
    console.log(clickedColor, pickedColor)
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!!'
      resetBtn.textContent = 'Play Again?'
      changeColors(clickedColor);
      h1.style.background = clickedColor
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

function goalColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function makingRandomNums(num) {
// make an array
  var arr = [];
// repeat num times
  for(var i=0; i<num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
// return that array
  return arr;
}



function randomColor(color) {
  // pick a 'red' from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a 'green' from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick a 'blue' from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}