const getComputerChoice = function () {
  const choiceNumber = +Math.floor(Math.random() * 3) + 1;
  switch (choiceNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
};

const playGame = function () {
  const playRound = function (computerChoice, humanChoice) {
    if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      log.textContent = `Compuer won! Computer ${computerChoice} beats Your ${humanChoice}`;
      computerScore++;
    } else if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      log.textContent =`You won! Your ${humanChoice} beats computers ${computerChoice}`;
      humanScore++;
    } else {
      log.textContent = "DRAW";
    }
    updateScore();
  };

  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll(".buttons");
  const log = document.querySelector(".log");
  const scoreHuman = document.querySelector(".humanScore .score");
  const scoreComputer = document.querySelector(".computerScore .score");
  const reset = document.querySelector("#reset");

  const updateScore = function(){
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;

    const winner = function(){
      const hideBtn = function(){
        for(let btn of buttons){
          btn.style.display = "none";
        }
      }

      if(humanScore === 5){
        log.textContent = "YOU WON!";
        hideBtn();
      } else if(computerScore === 5){
        log.textContent = "COMPUTER WON!";
        hideBtn();
      }
    }
    winner();
  }

  for(let btn of buttons){
    btn.addEventListener("click",(e)=>{
      playRound(getComputerChoice(), e.target.id);
    })
  }
  
};

playGame();