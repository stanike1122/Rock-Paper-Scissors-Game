function generateComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  }else if (randomNumber >= 2/3 && randomNumber < 3) {
    computerMove = 'scissors';
  }

  result();
}

function result() {
  const resultBox = document.querySelector('.js-paper');
  resultBox.innerHTML = `<div class="result-box">You win</div>`;
}
