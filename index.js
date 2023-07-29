// these are used to determine the overall scores of both the player and the machine
// whenever someone reaches 5 points, they win, and the scores are reset to allow the player to play again
// whoever wins gains 1 max score point
let playerPoints = 0;
let machinePoints = 0;
let playerVictories = 0;
let machineVictories = 0;
let secretReward = false;

// we define the list of possible choices the machine can make
let machineChoices = ['ROCK', 'PAPER', 'SCISSOR'];

function announcerMessages(message) {
    document.getElementById("announcer").innerHTML = message;
}

// these functions will only be called whenever someone reaches 5 points
// they will declare whoever won and whoever lost the game
function playerVictory() {
    if (secretReward === true) {
        announcerMessages("JACKPOT!! Now, claim your reward!");
        const container = document.querySelector('#player-options');
        const rewardButton = document.createElement('button');
        rewardButton.classList.add('reward-button');
        rewardButton.textContent = "JACKPOT!";
        container.appendChild(rewardButton);

        rewardButton.addEventListener('click', () => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        });
    } else {
    announcerMessages("You won the game! &#127881");
    playerPoints = 0;
    machinePoints = 0;
    }
}

function playerDefeat() {
    announcerMessages("You lost the game! &#128169");
    playerPoints = 0;
    machinePoints = 0;
}

// these functions are used to display the winning points variables into the html
function displayScores() {
    document.getElementById("playerScore").innerHTML = playerPoints;
    document.getElementById("machineScore").innerHTML = machinePoints;
    document.getElementById("playerMaxScore").innerHTML = playerVictories;
    document.getElementById("machineMaxScore").innerHTML = machineVictories;
}

function displayGreeting() {
    let messages = [1, 2, 3, 4, 5, 6];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];

    if (randomMessage === 1) {
        announcerMessages("LUCKY TIME! Win a match, and claim a special reward...")
        secretReward = true;
    } else {
        announcerMessages("Hint: If you're feeling unlucky, try refreshing this website a little...")
    }
}

displayGreeting();
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
        machinePoints = machinePoints + 1;
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