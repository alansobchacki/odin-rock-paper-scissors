// these are used to determine the overall scores of both the player and the machine
// whenever someone reaches 5 points, they win, and the scores are reset to allow the player to play again
// whoever wins gains 1 max score point
let playerPoints = 0;
let machinePoints = 0;
let playerVictories = 0;
let machineVictories = 0;

// these functions will only be called whenever someone reaches 5 points
// they will declare whoever won and whoever lost the game
function playerVictory() {
    alert("You won the game!");
    playerPoints = 0;
    machinePoints = 0;
}

function playerDefeat() {
    alert("You lost the game!");
    playerPoints = 0;
    machinePoints = 0;
}

// these functions are used to display the winning points variables into the html
function displayPlayerScore() {
    document.getElementById("playerScore").innerHTML = playerPoints;
}

function displayMachineScore() {
    document.getElementById("machineScore").innerHTML = machinePoints;
}

function displayPlayerMaxScore() {
    document.getElementById("playerMaxScore").innerHTML = playerVictories;
}

function displayMachineMaxScore() {
    document.getElementById("machineMaxScore").innerHTML = machineVictories;
}

function displayScores() {
    displayPlayerScore();
    displayMachineScore();
    displayPlayerMaxScore();
    displayMachineMaxScore();
}

displayScores();

// these functions are used whenever the player picks 'ROCK,'PAPER', or 'SCISSOR'
// this function will be called whenver the player picks 'ROCK'
function playerPicksRock() {

    let computerChoices = ['ROCK', 'PAPER', 'SCISSOR'];
    let computerRandomAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (computerRandomAnswer === 'ROCK') {
        alert("It's a tie!");
    } else if (computerRandomAnswer === 'PAPER') {
        machinePoints = machinePoints + 1;
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    } else if (computerRandomAnswer === 'SCISSOR') {
        playerPoints = playerPoints + 1;
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    }

    displayScores();
}

// this function will be called whenver the player picks 'PAPER'
function playerPicksPaper() {

    let computerChoices = ['ROCK', 'PAPER', 'SCISSOR'];
    let computerRandomAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (computerRandomAnswer === 'ROCK') {
        playerPoints = playerPoints + 1;
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    } else if (computerRandomAnswer === 'PAPER') {
        alert("It's a tie!");
    } else if (computerRandomAnswer === 'SCISSOR') {
        machinePoints = machinePoints + 1;;
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    }

    displayScores();
}

// this function will be called whenver the player picks 'SCISSOR'
function playerPicksScissor() {

    let computerChoices = ['ROCK', 'PAPER', 'SCISSOR'];
    let computerRandomAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (computerRandomAnswer === 'ROCK') {
        machinePoints = machinePoints + 1;
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    } else if (computerRandomAnswer === 'PAPER') {
        playerPoints = playerPoints + 1;
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    } else if (computerRandomAnswer === 'SCISSOR') {
        alert("It's a tie!");
    }

    displayScores();
}