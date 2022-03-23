
/* 
- Create a  function (computerPlay()) that randomly returns a string from an array

- This is gonna be the computers "input" for the game. The user is going to play again the computer.

 - Create a function (playRound()" that accepts two arguments: the player's input and the returned value from the computerPlay() function 

- Compare the input the user entered to the computerPlay() returned value

- Check what input the player entered and make it case insensitive

-The function should declare the player as winner or loser depending on this comparisson (e.g. "Rock beats Scissors! You lose.")

-Create another function (game()) that allows to play a 5 rounds game. The function should be able to save the score and declare a winner when the score reaches 5.

-The function should know who is the winner of each round and accumulate a score for that player.

-The loop should not end until one of the two player's score reaches 5.

*/

let items = ["Rock", "Paper", "Scissors"];

function computerPlay() {

    let item = items[Math.floor(Math.random()*items.length)];

    console.log("Computer's choice = " + item);

    return item;

}


function answer() {

    let answer = prompt("Let's play Rock Paper Scissors! Input one of the three!");
    console.log("Player's choice = " + answer);
    return answer;
    
}


/* let answer = prompt("Let's play Rock Paper Scissors! Input one of the three!"); */

let win = "Win!";
let lose = "Lose!";
let tie = "Tie!"

function playRound(playerSelection, computerSelection) {

let computer = computerPlay();
playerSelection = answer();
computerSelection = computer;

let input1 = "Rock";
let input2 = "Paper";
let input3 = "Scissors";

if(playerSelection.toLowerCase() === input1.toLowerCase()) {

    if (computerSelection.toLowerCase() === input2.toLowerCase()) {

        /* return alert("Paper beats Rock! You lose!"); */
        return lose;

    } else if (computerSelection.toLowerCase() === input3.toLowerCase()) {

        /* return alert("Rock beats Scissors! You win!"); */
        return win;

    } else return tie;


}else if (playerSelection.toLowerCase() === input2.toLowerCase()) {

    if (computerSelection.toLowerCase() === input1.toLowerCase()) {

        /* return alert("Paper beats Rock! You win!"); */
         return win;

    } else if (computerSelection.toLowerCase() === input3.toLowerCase()) {

       /*  return alert("Scissors beat Paper! You Lose!"); */
       return lose;

    } else return tie;


} else if (playerSelection.toLowerCase() === input3.toLowerCase()) {

    if (computerSelection.toLowerCase() === input1.toLowerCase()) {

        /* return alert("Rock beats Scissors! You lose!"); */
        return lose;

    } else if (computerSelection.toLowerCase() === input2.toLowerCase()) {

        /* return alert("Scissors beat Paper! You win!"); */
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
        /* playRound(); */
        console.log("Player = " + scorePlayer, "Computer = " + scoreComputer);
    } else if (roundResult === lose) {
        scoreComputer++;
        alert("You lost! :( Try again!");
        console.log("Player = " + scorePlayer, "Computer = " + scoreComputer);
        /* playRound(); */
    } else if (roundResult === tie) {
         alert("It's a tie! Try again!")
         console.log("Player = " + scorePlayer, "Computer = " + scoreComputer);
         /* playRound(); */
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




