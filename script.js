const stats = document.querySelector(".stats")
const buttons = document.querySelectorAll("button");

// Possible choices
const errorChoice = "Unexpected Choice";
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

// Possible winners
const human = "Human";
const computer = "Computer";
const tie = "Tie";
const noContest = "Error";

let humanScore = 0;
let computerScore = 0;
let roundCount = 1;
let gameOver = false;

// Borrowed from mdn web docs - Returns a random integer between min and max, inclusive
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Returns the computer's Rock-Paper-Scissor choice as a string (based on random number generation)
function getComputerChoice() {
    return choiceToString(getRandomIntInclusive(1, 3)); 
}

// Returns the user's Rock-Paper-Scissor choice as a string (based on the ID of the button the user clicked)
function getHumanChoice(buttonID) {
    return choiceToString(parseInt(buttonID));
}

// Takes a numerical respresentation of choice and returns its Rock-Paper-Scissor equivalent
function choiceToString(choice) {
    if (choice == 1) {
        return rock;
    } else if (choice == 2) {
        return paper;
    } else if (choice == 3) {
        return scissors;
    } else {
        return errorChoice;
    }
}

// Executes one round of Rock-Paper-Scissors based on input provided
function playRound(humanChoice, computerChoice) {
    if (!gameOver) {
        let winner = determineWinner(humanChoice, computerChoice);
        awardPoints(winner);
        displayResult(winner, humanChoice, computerChoice);

        if (humanScore >= 5 || computerScore >= 5) {
            displayFinalResult();
            gameOver = true;
        } else {
            roundCount++;
        }
    } else {
        displayGameOver();
    }
}

// Compares humanChoice and computerChoice and returns the winner
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice == errorChoice || computerChoice == errorChoice) {
        return noContest;
    } else if  (humanChoice == computerChoice) {
        return tie;
    } else if (humanChoice == rock && computerChoice == scissors || humanChoice == paper && computerChoice == rock ||humanChoice == scissors && computerChoice == paper) {
        return human;
    } else {
        return computer;
    }
}

// Prints to the webpage who won the round and some accompanying stats
function displayResult(winner, humanChoice, computerChoice) {
    let p = document.createElement("p");

    switch (winner) {
        case human:
            p.textContent = `You win! Your ${humanChoice} beats the computer's ${computerChoice}.`
            p.style.color = "green";
            break;
        case computer:
            p.textContent = `You lose! The computer's ${computerChoice} beats your ${humanChoice}.`
            p.style.color = "red";
            break;
        case tie:
            p.textContent = `Draw! You both picked ${humanChoice}.`
            p.style.color = "gray";
            break;
        default:
            p.textContent = `Uh oh! Your ${humanChoice} is not a valid choice.`
            break;
    }

    p.textContent += ` [Round ${roundCount} Score: ${humanScore} (you) - ${computerScore} (the computer)]`;
    stats.appendChild(p);
}

// Increases the score of the winner where appropriate
function awardPoints(winner) {
    if (winner == human) {
        humanScore++;
    } else if (winner == computer) {
        computerScore++;
    }
}

//Displays on screen the final result and scores
function displayFinalResult() {
    let displayMessage = document.createElement("h1");
    let finalStats = document.createElement("h2");
    
    if (humanScore > computerScore) {
        displayMessage.textContent = "Congratulations! You are the Rock-Paper-Scissors champion!";
    } else if (humanScore == computerScore) {
        displayMessage.textContent = "What a heated battle! It's a tie!";
    } else {
        displayMessage.textContent = "Better luck next time! The computer has won!";
    }

    displayMessage.style.color = "white";
    displayMessage.style.backgroundColor = "black";

    finalStats.textContent = `[Final score after ${roundCount} rounds: ${humanScore} (you) vs. ${computerScore} (the computer)]`;
    finalStats.style.color = "white";
    finalStats.style.backgroundColor = "black";


    stats.appendChild(finalStats);
    stats.appendChild(displayMessage);
}

function displayGameOver() {
    let endOfGameMessage = document.createElement("h3");
    endOfGameMessage.textContent = `Sorry, the game has finished. To play again, please refresh the page.`
    endOfGameMessage.style.color = "orange";
    endOfGameMessage.style.fontStyle = "italic";
    stats.appendChild(endOfGameMessage);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(getHumanChoice(button.id), getComputerChoice());
    });
  });