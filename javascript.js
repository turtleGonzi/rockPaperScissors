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

const getHumanChoice = function () {
  return prompt("rock, paper or scissors?").toLowerCase();
};

const playGame = function () {
  const playRound = function (computerChoice, humanChoice) {
    if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      console.log(`Computer ${computerChoice} beats Your ${humanChoice}`);
      console.log("Compuer won!");
      computerScore++;
    } else if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      console.log(`Your ${humanChoice} beats computers ${computerChoice}`);
      console.log("Human won!");
      humanScore++;
    } else {
      console.log("DRAW");
    }
  };

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  console.log(`Result is Human: ${humanScore} - Computer: ${computerScore}`)
};

playGame();