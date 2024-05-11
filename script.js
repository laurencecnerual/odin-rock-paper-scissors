function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    let choice = getRandomIntInclusive(1, 3);

    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else if (choice == 3) {
        return "Scissors";
    } else {
        return undefined;
    }
}