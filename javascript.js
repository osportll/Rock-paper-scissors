/* 1. Make the function randomly return "rock", "paper" or "scissors":

- Make the user input a value

- Make that value be a string and be just three options: "rock", "paper" or "scissors"

-These three options should be 3 separate variables

-The input should be case insensitive. Any input that the user enters should be converted to lowercase.

- Check if the user's input was either of the three options

- If the user's input was any of the options (answer = true), return a string as a reply to the user's input.

- That reply should randomly be one of the three strings "rock", "paper" or "scissors".

*/


let answer = prompt("Let's play Rock Paper Scissors! Input one of the three!");

let input1 = "Rock";
let input2 = "Paper";
let input3 = "Scissors";


function computerPlay() {

    let items = ["Rock", "Paper", "Scissors"];

    let item = items[Math.floor(Math.random()*items.length)]

    console.log(item)



    if (answer.toLowerCase() === input1.toLowerCase() || answer.toLowerCase() === input2.toLowerCase() || answer.toLowerCase() === input3.toLowerCase()) {
        return alert(item);
        
    }


}

computerPlay();
