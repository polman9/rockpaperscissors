
// Get human choice
function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors:").toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    
    if (validChoices.includes(choice)) {
        return choice;
    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

// Get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine the winner of the round
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";  // It's a tie if both choose the same
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        return "human"; // Human wins
    } else {
        return "computer"; // Computer wins
    }
}

// Play the game until someone wins 5 times
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);

    while (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

        const winner = determineWinner(humanChoice, computerChoice);
        if (winner === "human") {
            humanScore++;
            console.log("You win this round!");
        } else if (winner === "computer") {
            computerScore++;
            console.log("Computer wins this round!");
        } else {
            console.log("It's a tie!");
        }

        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    }

    // Announce the final winner
    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Game over! The computer won the game.");
    }
}

// Start the game
playGame();
