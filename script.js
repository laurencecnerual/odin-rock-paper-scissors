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
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else if (choice == 3) {
        return "Scissors";
    } else {
        return "Unexpected Choice";
    }
}