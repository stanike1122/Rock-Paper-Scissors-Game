function pickComputer() {
  const randomNumber = Math.random();
  let computerPicks = ''

  if (randomNumber >=0 && randomNumber < 1/3) {
    computerPicks = 'Rock'
  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerPicks = 'Paper'
  }else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerPicks = 'Scissors'
  }

  return computerPicks
}

function playGame(buttonClicked) {
  const computerPicks = pickComputer()
  let result = ''
  
  if (buttonClicked === 'Rock') {
    if (computerPicks === buttonClicked) {
      result = 'tie'
    }else if (computerPicks === 'Paper') {
      result = 'You lose'
    }else if (computerPicks === 'Scissors') {
      result = 'You win'
    }
  }else if (buttonClicked === 'Paper') {
    if (computerPicks === buttonClicked) {
      result = 'tie'
    }else if (computerPicks === 'Rock') {
      result = 'You win'
    }else if (computerPicks === 'Scissors') {
      result = 'You lose'
    }
  }else if (buttonClicked === 'Scissors') {
    if (computerPicks === buttonClicked){
      result = 'tie'
    }else if (computerPicks === 'Rock') {
      result = 'You lose'
    }else if (computerPicks === 'Paper') {
      result = 'You win'
    }
  }
  const gameResult = document.querySelector('.game-result')

  gameResult.innerHTML = `You picked ${buttonClicked}, computer picked ${computerPicks}... ${result}!`

}



