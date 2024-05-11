let errorChoice = "Unexpected Choice";
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

let human = "Human";
let computer = "Computer";
let tie = "Tie";
let noContest = "Error";

let humanScore = 0;
let humanSelection = getHumanChoice();
let computerScore = 0;
let computerSelection = getComputerChoice();

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

// Returns the user's Rock-Paper-Scissor choice as a string (based on user input)
function getHumanChoice() {
    return choiceToString(parseInt(prompt("Please choose a number between 1 and 3, where 1 = Rock, 2 = Paper, and 3 = Scissors")));
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

function playRound(humanChoice, computerChoice) {
    let winner = determineWinner(humanChoice, computerChoice);
    displayResult(winner, humanChoice, computerChoice);
    awardPoints(winner);
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

// Prints to the console who won the round
function displayResult(winner, humanChoice, computerChoice) {
    switch (winner) {
        case human:
            console.log(`You win! Your ${humanChoice} beats the computer's ${computerChoice}.`)
            break;
        case computer:
            console.log(`You lose! The computer's ${computerChoice} beats your ${humanChoice}.`)
            break;
        case tie:
            console.log(`Draw! You both picked ${humanChoice}.`)
            break;
        default:
            console.log(`Uh oh! Your ${humanChoice} is not a valid choice.`)
            break;
    }
}

// Increases the score of the winner where appropriate
function awardPoints(winner) {
    if (winner == human) {
        humanScore++;
    } else if (winner == computer) {
        computerScore++;
    }
}

playRound(humanSelection, computerSelection);