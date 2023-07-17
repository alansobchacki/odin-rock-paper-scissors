// these are used to determine the overall scores of both the player and the machine
// whenever someone reaches 5 points, they win, and the scores are reset to allow the player to play again
// whoever wins gains 1 max score point
let playerPoints = 0;
let machinePoints = 0;
let playerVictories = 0;
let machineVictories = 0;
// we define the list of possible choices the machine can make
let machineChoices = ['ROCK', 'PAPER', 'SCISSOR'];

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
    // we make it so that the machine will randomly pick one of the three options from the array
    let machineRandomAnswer = machineChoices[Math.floor(Math.random() * machineChoices.length)];
    
    // the player picked ROCK, therefore:
    // if the machine picks ROCK, it's a tie. Nothing changes
    // if the machine picks PAPER, the machine gains one point. If the machine scored its 5th point, the machine wins
    // if the machine picks SCISSOR, the player gains one point. If the player scored its 5th point, the player wins
    if (machineRandomAnswer === 'ROCK') {
        alert("It's a tie!");
    } else if (machineRandomAnswer === 'PAPER') {
        machinePoints = machinePoints + 1;
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    } else if (machineRandomAnswer === 'SCISSOR') {
        playerPoints = playerPoints + 1;
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    }

    // this function is called again to visually update the scores in the webpage
    displayScores();
}

// this function will be called whenver the player picks 'PAPER'
function playerPicksPaper() {
    let machineRandomAnswer = machineChoices[Math.floor(Math.random() * machineChoices.length)];
    
    if (machineRandomAnswer === 'ROCK') {
        playerPoints = playerPoints + 1;
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    } else if (machineRandomAnswer === 'PAPER') {
        alert("It's a tie!");
    } else if (machineRandomAnswer === 'SCISSOR') {
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
    let machineRandomAnswer = machineChoices[Math.floor(Math.random() * machineChoices.length)];
    
    if (machineRandomAnswer === 'ROCK') {
        machinePoints = machinePoints + 1;
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    } else if (machineRandomAnswer === 'PAPER') {
        playerPoints = playerPoints + 1;
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    } else if (machineRandomAnswer === 'SCISSOR') {
        alert("It's a tie!");
    }

    displayScores();
}