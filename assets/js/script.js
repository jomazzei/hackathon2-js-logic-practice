let userScore = 0;
let computerScore = 0;

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

const choices = ["rock" , "paper" , "scissors" , "lizard" , "spock"];

var userChoice = "";
var computerChoice = "";

rock_div.addEventListener("click", function() {
    getUserChoice("rock");
    getComputerChoice();
})

paper_div.addEventListener("click", function() {
    getUserChoice("paper");
    getComputerChoice();
})

scissors_div.addEventListener("click", function() {
    getUserChoice("scissors");
    getComputerChoice();
})

lizard_div.addEventListener("click", function() {
    getUserChoice("lizard");
    getComputerChoice();
})

spock_div.addEventListener("click", function() {
    getUserChoice("spock");
    getComputerChoice();
})


// Choices

function getUserChoice(userClicked) {
    userChoice = userClicked;
    console.log("the user chose " + userChoice);
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 5);
    computerChoice = choices[randomNumber];
    console.log("the computer chose " + computerChoice);
    return computerChoice;
}
















// /**
//  * Gets current player score from DOM and adds 1,
//  * storing back into DOM
//  */
// function addUserScore() {
//     let oldScore = parseInt(document.getElementById("player-win").innerText);
//     document.getElementById("player-win").innerText = ++oldScore;
// }

// /**
//  * Gets current computer score from DOM and adds 1,
//  * storing back into DOM
//  */
// function addComputerScore() {
//     let oldScore = parseInt(document.getElementById("computer-win").innerText);
//     document.getElementById("computer-win").innerText = ++oldScore;
// }