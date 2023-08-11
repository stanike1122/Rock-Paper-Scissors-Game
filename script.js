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

  return computerMove;
}

function playGame(playerMove) {
  let playerMoveDiv = document.querySelector('.js-rock');
  const computerMoveDiv = document.querySelector('.js-scissors');
  const resultBox = document.querySelector('.js-paper');
  let result = '';
  const computerMove = generateComputerMove();
  
  function playerComputerMoves() {
    playerMoveDiv.innerHTML = `<img src="images/${playerMove}.png" 
      class="move-icon" >`
      resultBox.innerHTML = `<div class="result-box">${result}</div>`;
      computerMoveDiv.innerHTML = `<img src="images/${computerMove}.png" 
      class="move-icon" >`
  }

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Game is tie';
      playerComputerMoves();
    }else if (computerMove === 'paper') {
      result = 'Computer win';
      playerComputerMoves();
    }else if (computerMove === 'scissors') {
      result = 'You win';
      playerComputerMoves();
    }
  }
}


