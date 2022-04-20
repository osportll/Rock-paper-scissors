let items = ["rock", "paper", "scissors"];

function computerPlay() {

    let item = items[Math.floor(Math.random()*items.length)];

    /* console.log("Computer's choice = " + item); */

    return item;
};


const btns = document.querySelectorAll('#button');
btns.forEach(btn => btn.addEventListener('click', playRound));

const computer_points = document.querySelector('.computer');
const player_points = document.querySelector('.player');
const selection_text = document.querySelector('.selection-text');
const label_player = document.querySelector('.player-point');
const label_computer = document.querySelector('.computer-point');
const scissors_card = document.querySelector('.scissors');
const rock_card = document.querySelector('.rock');
const paper_card = document.querySelector('.paper');
const current_left = document.querySelector('#current-left');
const current_right = document.querySelector('#current-right');
const current_selection = document.querySelector('.current-selection');

console.log(rock_card, paper_card, scissors_card);



let scorePlayer = 0;
let scoreComputer = 0;



function playRound(e, playerSelection) {

// playerSelection = this.classList.value;

playerSelection = e.target.className;

let computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);


let win = "win";
let lose = "lose";
let tie = "tie";

let input1 = "rock";
let input2 = "paper";
let input3 = "scissors";
let result;


if(playerSelection === input1) {

    if (computerSelection === input2) {
        // return alert("Paper beats Rock! You lose!"); 
        result = lose; 
        selection_text.textContent = "Paper beats Rock! You lose. Try again!";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9994 );
        current_right.textContent = String.fromCodePoint( 9995 );

    } else if (computerSelection === input3) {
        // return alert("Rock beats Scissors! You win!");
        result = win; 
        selection_text.textContent = "Rock beats Scissors! You win!"
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9994 );
        current_right.textContent = String.fromCodePoint( 9996 );

    } else {
        result = tie
        selection_text.textContent = "It's a tie! Keep trying...";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9994 );
        current_right.textContent = String.fromCodePoint( 9994 );
        
    }


}else if (playerSelection === input2) {

    if (computerSelection === input1) {
        // return alert("Paper beats Rock! You win!");
        result = win;
        selection_text.textContent = "Paper beats Rock! You win!";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9995 );
        current_right.textContent = String.fromCodePoint( 9994 );
        
    } else if (computerSelection === input3) {
    //  return alert("Scissors beat Paper! You Lose!");
        result = lose;
        selection_text.textContent = "Scissors beat Paper! You Lose. Try again!";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9995 );
        current_right.textContent = String.fromCodePoint( 9996 );
        
    } else {
        result = tie;
        selection_text.textContent = "It's a tie! Keep trying...";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9995 );
        current_right.textContent = String.fromCodePoint( 9995 );
        
    }


} else if (playerSelection === input3) {

    if (computerSelection === input1) {
        // return alert("Rock beats Scissors! You lose!");
        result = lose;
        selection_text.textContent = "Rock beats Scissors! You lose. Try again!";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9996 );
        current_right.textContent = String.fromCodePoint( 9994 );
        
    } else if (computerSelection === input2) {
        // return alert("Scissors beat Paper! You win!");
        result = win;
        selection_text.textContent = "Scissors beat Paper! You win!";
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9996 );
        current_right.textContent = String.fromCodePoint( 9995 );
        
    } else {
        result = tie; 
        selection_text.textContent = "It's a tie! Keep trying..."
        current_left.style.display = "block";
        current_right.style.display = "block";
        current_left.textContent = String.fromCodePoint( 9996 );
        current_right.textContent = String.fromCodePoint( 9996 );
    }}

    console.log(result);


if (result === win) {
    scorePlayer++;
    player_points.textContent = scorePlayer;

} else if (result === lose) {
    scoreComputer++;
    computer_points.textContent = scoreComputer;
    }


console.log("player = " + scorePlayer);
console.log("Computer = " + scoreComputer);


if (scorePlayer === 5 || scoreComputer === 5) {
    
    if(scorePlayer === 5) {

        selection_text.textContent = "You win!!!";
        selection_text.style.color = 'green';
        player_points.style.color = 'green';
        label_player.style.color = 'green';

    } else if(scoreComputer === 5) {
        
        selection_text.textContent = "You lose :(";
        selection_text.style.color = 'red';
        computer_points.style.color = 'red';
        label_computer.style.color = 'red';
    }
}

showModal();

};

/* btns.forEach(btn => btn.addEventListener('click', showCurrent));

function showCurrent(e, selection) {

    selection = e.target.className;
    
    if (selection === "rock") {
        current_left.textContent = ""
    }
} */


/* ----------------------MODAL-------------------- */

const modal = document.querySelector('.modal');
/* const span = document.querySelector('.close'); */
const modal_text = document.querySelector('.modal-text');
const play_again = document.querySelector('.play-again');

function showModal() {

if (scoreComputer === 5) {
    modal_text.textContent = "You lost. Click the button to play again!";
    modal.style.display = "block";

} else if (scorePlayer === 5) {
    modal_text.textContent = "You won!! Click the button to play again!";
    modal.style.display = "block";
}

play_again.addEventListener('click', () => {
    modal.style.display = "none";
    scoreComputer = 0;
    scorePlayer = 0;

    selection_text.textContent = "Click on a card to start playing";
    selection_text.style.color = '#33332d';
    computer_points.style.color = '#33332d';
    player_points.style.color = '#33332d';
    label_computer.style.color = '#33332d';
    label_player.style.color = '#33332d';
    current_left.style.display = "none";
    current_right.style.display = "none";

    computer_points.textContent = scoreComputer;
    player_points.textContent = scorePlayer;

})

};









