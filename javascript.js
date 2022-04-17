let items = ["rock", "paper", "scissors"];

function computerPlay() {

    let item = items[Math.floor(Math.random()*items.length)];

    console.log("Computer's choice = " + item);

    return item;
}


const btns = document.querySelectorAll('#button');


let win = "Win!";
let lose = "Lose!";
let tie = "Tie!";

function playRound(e, playerSelection, computerSelection) {

    let select = this.classList.value;

    console.log(" Player's selection = " + select);

//let computer = computerPlay();
playerSelection = select;
console.log(playerSelection);

computerSelection = computerPlay();
console.log(computerSelection);

let input1 = "rock";
let input2 = "paper";
let input3 = "scissors";

if(playerSelection === input1) {

    if (computerSelection === input2) {

        // return alert("Paper beats Rock! You lose!"); 
        return lose;

    } else if (computerSelection === input3) {

        // return alert("Rock beats Scissors! You win!");
        return win;

    } else return tie;


}else if (playerSelection === input2) {

    if (computerSelection === input1) {

        // return alert("Paper beats Rock! You win!");
         return win;

    } else if (computerSelection === input3) {

    //  return alert("Scissors beat Paper! You Lose!");
       return lose;

    } else return tie;


} else if (playerSelection === input3) {

    if (computerSelection === input1) {

        // return alert("Rock beats Scissors! You lose!");
        return lose;

    } else if (computerSelection === input2) {

        // return alert("Scissors beat Paper! You win!");
         return win;

    } else return tie;
}}


btns.forEach(btn => btn.addEventListener('click', playRound));


/* function game() {

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

game(); */




