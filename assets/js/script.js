const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

let resultMessage = document.getElementById("result-message");

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

var userChoice = "";
var computerChoice = "";

var userWin = false;

var beatContext = "";

// --------------------------------------------  Event listeners
rock_div.addEventListener("click", function () {
    getUserChoice("rock");
    getComputerChoice();
    gameLogic();
})

paper_div.addEventListener("click", function () {
    getUserChoice("paper");
    getComputerChoice();
    gameLogic();
})

scissors_div.addEventListener("click", function () {
    getUserChoice("scissors");
    getComputerChoice();
    gameLogic();
})

lizard_div.addEventListener("click", function () {
    getUserChoice("lizard");
    getComputerChoice();
    gameLogic();
})

spock_div.addEventListener("click", function () {
    getUserChoice("spock");
    getComputerChoice();
    gameLogic();
})


// -------------------------------------------- Choices
function getUserChoice(userClicked) {
    userChoice = userClicked;
    console.log("the user chose " + userChoice);
    document.getElementById("user-choice").innerText = `You chose ${userChoice}`;
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 5);
    computerChoice = choices[randomNumber];
    console.log("the computer chose " + computerChoice);
    document.getElementById("computer-choice").innerText = `Computer chose ${computerChoice}`;
    return computerChoice;
}


// --------------------------------------------  Game State
function iWin() {
    userWin = true;
    console.log("I won! ^-^");

    // Nicked this bit off Love Maths to increase score
    addUserScore();

    beatText();
}

function iLose() {
    userWin = false;
    console.log("I lost! >,<");

    addComputerScore();

    beatText();
}

function iDraw() {
    console.log("No winners...");
}

function gameLogic() {
    switch (userChoice + computerChoice) {
        // User wins
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockrock":
        case "spockscissors":
            iWin();
            break;
        // Draw state
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            iDraw();
            break;
        // If not matching either that means PC wins
        default:
            iLose();
    }
}

// --------------------------------------------  Change text based off context
function beatText(userChoice, computerChoice) {
    // User wins
    if (userWin) {
        console.log("userWin = " + userWin);
        
        if (userChoice === "rock") {
            beatContext = `Rock crushes ${computerChoice}`;
        }
    }
    // Computer wins
    else if (!userWin) {
        console.log("userWin = " + userWin);
    }

    resultMessage.innerText = beatContext;
}



// --------------------------------------------  Score increase

/**
 * Gets current player score from DOM and adds 1,
 * storing back into DOM
 */
function addUserScore() {
    let oldScore = parseInt(document.getElementById("player-win").innerText);
    document.getElementById("player-win").innerText = ++oldScore;
}

/**
 * Gets current computer score from DOM and adds 1,
 * storing back into DOM
 */
function addComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-win").innerText);
    document.getElementById("computer-win").innerText = ++oldScore;
}







// this is actually a pretty neat way to do it and I might make this the main way instead.
// ---------- CHAT GPT OFFERED THIS RESPONSE TO "HOW TO WRITE RPSLSp LOGIC IN THE LEAST VERBOSE MANNER":

// function getWinner(playerChoice, computerChoice) {
//     const outcomes = {
//         rock: { beats: ['scissors', 'lizard'] },
//         paper: { beats: ['rock', 'spock'] },
//         scissors: { beats: ['paper', 'lizard'] },
//         lizard: { beats: ['paper', 'spock'] },
//         spock: { beats: ['rock', 'scissors'] }
//     };

//     if (playerChoice === computerChoice) {
//         return "It's a tie!";
//     } else if (outcomes[playerChoice].beats.includes(computerChoice)) {
//         return "Player wins!";
//     } else {
//         return "Computer wins!";
//     }
// }

// // Example usage:
// const playerChoice = "rock";
// const computerChoice = "scissors";
// console.log(getWinner(playerChoice, computerChoice));

// -------- END OF GPT RESPONSE