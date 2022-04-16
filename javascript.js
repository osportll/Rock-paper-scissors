let items = ["Rock", "Paper", "Scissors"];

function computerPlay() {

    let item = items[Math.floor(Math.random()*items.length)];

    console.log("Computer's choice = " + item);

    return item;

}


const btns = document.querySelectorAll('.button');

console.log(btns);

function clickSelection(e) {
    console.log(this.classList.value)


}

btns.forEach(btn => btn.addEventListener('click', clickSelection));



/* function answer() {

    let answer = prompt("Let's play Rock Paper Scissors! Input one of the three!");
    console.log("Player's choice = " + btn);
} */


// let answer = prompt("Let's play Rock Paper Scissors! Input one of the three!");

let win = "Win!";
let lose = "Lose!";
let tie = "Tie!"

function playRound(playerSelection, computerSelection) {

let computer = computerPlay();
playerSelection = clickSelection;
computerSelection = computer;

let input1 = "rock";
let input2 = "paper";
let input3 = "scissors";

if(playerSelection.toLowerCase() === input1.toLowerCase()) {

    if (computerSelection.toLowerCase() === input2.toLowerCase()) {

        // return alert("Paper beats Rock! You lose!"); 
        return lose;

    } else if (computerSelection.toLowerCase() === input3.toLowerCase()) {

        // return alert("Rock beats Scissors! You win!");
        return win;

    } else return tie;


}else if (playerSelection.toLowerCase() === input2.toLowerCase()) {

    if (computerSelection.toLowerCase() === input1.toLowerCase()) {

        // return alert("Paper beats Rock! You win!");
         return win;

    } else if (computerSelection.toLowerCase() === input3.toLowerCase()) {

    //  return alert("Scissors beat Paper! You Lose!");
       return lose;

    } else return tie;


} else if (playerSelection.toLowerCase() === input3.toLowerCase()) {

    if (computerSelection.toLowerCase() === input1.toLowerCase()) {

        // return alert("Rock beats Scissors! You lose!");
        return lose;

    } else if (computerSelection.toLowerCase() === input2.toLowerCase()) {

        // return alert("Scissors beat Paper! You win!");
         return win;

    } else return tie;
}}


function game() {

    let scorePlayer = 0;
    let scoreComputer = 0;


    while (scoreComputer <= 5 || scorePlayer <= 5) {

    let round = playRound();
    let roundResult = round;

    console.log("Round result = " + roundResult);

    if (roundResult === win) {
        scorePlayer++;
        alert("You scored 1 point! Go again...");
        // playRound();
        console.log("Player = " + scorePlayer, "Computer = " + scoreComputer);
    } else if (roundResult === lose) {
        scoreComputer++;
        alert("You lost! :( Try again!");
        console.log("Player = " + scorePlayer, "Computer = " + scoreComputer);
        // playRound();
    } else if (roundResult === tie) {
         alert("It's a tie! Try again!")
         console.log("Player = " + scorePlayer, "Computer = " + scoreComputer);
        //  playRound();
    }

    if (scorePlayer === 5) {
        alert("You won the game!");
    } else if (scoreComputer === 5) {
        alert("Game over! You lost :(");
    }

    if (scorePlayer === 5 || scoreComputer === 5) {
        break;
    }

}

console.log("Player = " + scorePlayer);
console.log("Computer = " + scoreComputer);

}

game();




