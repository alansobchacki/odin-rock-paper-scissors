// these are used to determine the overall scores of both the player and the machine
// whenever someone reaches 5 points, they win, and the scores are reset to allow the player to play again
// whoever wins gains 1 max score point
let playerPoints = 0;
let machinePoints = 0;
let playerVictories = 0;
let machineVictories = 0;
// we define the list of possible choices the machine can make
let machineChoices = ['ROCK', 'PAPER', 'SCISSOR'];

function announcerMessages(message) {
    document.getElementById("announcer").innerHTML = message;
}

// these functions will only be called whenever someone reaches 5 points
// they will declare whoever won and whoever lost the game
function playerVictory() {
    announcerMessages("You won the game! &#127881");
    playerPoints = 0;
    machinePoints = 0;
}

function playerDefeat() {
    announcerMessages("You lost the game! &#128169");
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

function randomizeGreeting() {
    let messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];

    if (randomMessage === 5) {
        announcerMessages("OH DAMN SECRET MESSAGE, YOU'RE LUCKY! NOW HIT THAT BUTTON!!");
    } else {
        announcerMessages("How about a game of rock, paper, and scissors? Good luck!")
    }
}

function displayScores() {
    displayPlayerScore();
    displayMachineScore();
    displayPlayerMaxScore();
    displayMachineMaxScore();
}

randomizeGreeting();
displayScores();

// these functions are used whenever the player picks 'ROCK,'PAPER', or 'SCISSOR'
// this function will be called whenver the player picks 'ROCK'
function playerPicksRock() {
    // we make it so that the machine will randomly pick one of the three options from the array
    let machineRandomAnswer = machineChoices[Math.floor(Math.random() * machineChoices.length)];
    
    if (machineRandomAnswer === 'ROCK') {
        announcerMessages("You both picked rock. &#9994");
    } else if (machineRandomAnswer === 'PAPER') {
        announcerMessages("The machine picks paper. &#9995 You lost this round. &#9940");
        machinePoints = machinePoints + 1;
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    } else if (machineRandomAnswer === 'SCISSOR') {
        playerPoints = playerPoints + 1;
        announcerMessages("The machine picks scissors. &#9996 You won this round! &#9989");
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
        announcerMessages("The machine picks rock. &#9994 You won this round! &#9989");
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    } else if (machineRandomAnswer === 'PAPER') {
        announcerMessages("You both picked paper. &#9995");
    } else if (machineRandomAnswer === 'SCISSOR') {
        machinePoints = machinePoints + 1;;
        announcerMessages("The machine picks scissor. &#9996 You lost this round. &#9940");
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
        announcerMessages("The machine picks rock. &#9994 You lost this round. &#9940");
        if (machinePoints >= 5) {
            machineVictories = machineVictories + 1;
            displayScores();
            playerDefeat();
        }
    } else if (machineRandomAnswer === 'PAPER') {
        playerPoints = playerPoints + 1;
        announcerMessages("The machine picks paper. &#9995 You won this round! &#9989");
        if (playerPoints >= 5) {
            playerVictories = playerVictories + 1;
            displayScores();
            playerVictory();
        }
    } else if (machineRandomAnswer === 'SCISSOR') {
        announcerMessages("You both picked scissor. &#9996");
    }

    displayScores();
}

const rockButton =  document.querySelector('#rock-button');
rockButton.addEventListener('click', () => {
    playerPicksRock();
});

const paperButton = document.querySelector('#paper-button');
paperButton.addEventListener('click', () => {
    playerPicksPaper();
});

const scissorButton = document.querySelector('#scissor-button');
scissorButton.addEventListener('click', () => {
    playerPicksScissor();
});