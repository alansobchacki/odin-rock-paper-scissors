function playerPicksRock() {

    let computerChoices = ['ROCK', 'PAPER', 'SCISSOR'];
    let computerRandomAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (computerRandomAnswer === 'ROCK') {
        alert("It's a tie!");
    } else if (computerRandomAnswer === 'PAPER') {
        alert("You lost!");
    } else if (computerRandomAnswer === 'SCISSOR') {
        alert("You win!");
    }
}

function playerPicksPaper() {

    let computerChoices = ['ROCK', 'PAPER', 'SCISSOR'];
    let computerRandomAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (computerRandomAnswer === 'ROCK') {
        alert("You win!");
    } else if (computerRandomAnswer === 'PAPER') {
        alert("It's a tie!");
    } else if (computerRandomAnswer === 'SCISSOR') {
        alert("You lost!");
    }
}

function playerPicksScissor() {

    let computerChoices = ['ROCK', 'PAPER', 'SCISSOR'];
    let computerRandomAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (computerRandomAnswer === 'ROCK') {
        alert("You lost!");
    } else if (computerRandomAnswer === 'PAPER') {
        alert("You win!");
    } else if (computerRandomAnswer === 'SCISSOR') {
        alert("It's a tie!");
    }
}


