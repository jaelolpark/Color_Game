var numOfSq = 6;
var colors = makingRandomColors(numOfSq);
var squares = document.querySelectorAll(".square");
var pickedColor = goalColor();
var matchingColor = document.querySelector('#goalColor');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1')
var resetBtn = document.querySelector('#reset'); 
var easy = document.querySelector('#easyBtn');
var hard = document.querySelector('#hardBtn');
var modeBtn = document.querySelectorAll('.mode');

for(var i=0; i<modeBtn.length; i++) {
  modeBtn[i].addEventListener('click', function() {
    modeBtn[0].classList.remove('selected');
    modeBtn[1].classList.remove('selected');
    this.classList.add('selected');
    this.textContent === 'Easy'? numOfSq = 3 : numOfSq = 6;
    reset();
  })
}

function reset() {
  colors = makingRandomColors(numOfSq);
  // pick a new random color from array
  pickedColor = goalColor();
  // change matchingColor to match picked color
  matchingColor.textContent = pickedColor;
  resetBtn.textContent = 'New Colors'
  messageDisplay.textContent = '';
  // change colors of squares  
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = 'none'
    }
  }
  h1.style.backgroundColor = 'steelblue';
}

// ================================== Easy mode & Hard mode
// easy.addEventListener('click', function() {
//   easy.classList.add('selected');
//   hard.classList.remove('selected')
//   numOfSq = 3;
//   colors = makingRandomColors(numOfSq);
//   pickedColor = goalColor();
//   matchingColor.textContent = pickedColor;
//   for(var i=0; i < squares.length; i++) {
//     if(colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else {
//       squares[i].style.display = 'none'; 
//     }
//   }
// })

// hard.addEventListener('click', function() {
//   hard.classList.add('selected');
//   easy.classList.remove('selected')
//   numOfSq = 6;
//   colors = makingRandomColors(numOfSq);
//   pickedColor = goalColor();
//   matchingColor.textContent = pickedColor;
//   for(var i=0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = 'block';
//   }
// })


// ================================== Reset Button work
resetBtn.addEventListener('click', function() {
  // generate all new colors
  colors = makingRandomColors(numOfSq);
  // pick a new random color from array
  pickedColor = goalColor();
  // change matchingColor to match picked color
  matchingColor.textContent = pickedColor;
  this.textContent = 'New Colors'
  messageDisplay.textContent = '';
  // change colors of squares  
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
})

// =================================== Color quiz display

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
// =========================================function

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
function makingRandomColors(num) {
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