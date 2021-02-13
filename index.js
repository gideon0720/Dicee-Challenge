var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

// for image 1
var image1 = document.querySelector('img.img1');
image1.setAttribute('src', './images/dice' + randomNumber1 + '.png');
//  for image 2
var image2 = document.querySelector('img.img2');
image2.setAttribute('src', './images/dice' + randomNumber2 + '.png');

function determineWinner() {
  var output;
  if (randomNumber1 === randomNumber2) {
    output = '🤛Draw!🤜';
  } else if (randomNumber1 > randomNumber2) {
    output = '👈Player 1 wins!';
  } else if (randomNumber1 < randomNumber2) {
    output = 'Player 2 wins👉';
  }
  return output;
}

var winner = determineWinner();

var title = document.querySelector('h1');
title.innerHTML = winner;
