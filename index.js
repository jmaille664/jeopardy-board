//Player 1 and Player 2 objects
let player1 = {
  name: "Player 1",
  score: 0,
  finalAnswer: false,
};

let player2 = {
name: "Player 2",
score: 0,
finalAnswer: false,
};


/***********Query Selectors Round 1 *************/

//disable Pass button Round 1
let passRound1Btn = document.getElementById("passRound1Btn")
//Disabling setting does not seem to be working
//passRound1Btn.disabled = true;

//disable Next Round button on Round 1
let nextRoundBtn1 = document.getElementById("next-round-btn-1")
//Disabling setting does not seem to be working
//nextRoundBtn1.disabled = true;

//Get user input form id on Round 1
let roundOneUserGuessForm = document.getElementById("Round1-user-guess-form");

//Get User input from the form on round 1
let roundOneForm = document.getElementById("userGuessInput-round1");

//Guess button Round 1
let guessRound1Btn = document.getElementById("guessRound1Btn");

//get Player Turn Round 1
let playerTurnRoundOne = document.getElementById("playerTurnRoundOne");

//get player 1 score
 let roundOnePlayer1Score = document.getElementById("roundOnePlayer1Score")

/***********Query Selectors Round 2 *************/

//Disable Pass button Round 2
let guessRound2Btn = document.getElementById("guessRound2Btn")

//Disable Guess button Round 2
let passRound2Btn = document.getElementById("passRound2Btn");

//Disable Next Round button Round 2
let nextRoundBtn2 = document.getElementById("next-round-btn-2")

//Get user input form id from Round 2
let roundTwoUserGuessForm  = document.getElementById("Round2-user-guess-form");

//Get User input from the form on round 2
let roundTwoForm = document.getElementById("userGuessInput-round2");


//Notification that it is Player 1 turn
playerTurnRoundOne.textContent = `${player1.name}'s turn`

//Add player one and two score to gameboard
roundOnePlayer1Score.textContent = `Player 1 Score: ${player1.score}`
roundOnePlayer2Score.textContent = `Player 2 Score: ${player2.score}`

//Event listener for Round 1 Guess Form. 
roundOneUserGuessForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userGuessForm = roundOneForm.value;
    console.log(userGuessForm);
  });

// //Event listener for Round Guess Form 2 Not Working  
// roundTwoUserGuessForm.addEventListener("submit", function(event) {   
//    event.preventDefault();
 
// let userGuessFormRoundTwo = roundTwoForm.value;
// console.log(userGuessFormRoundTwo);
// });

// const userGuessForm = document.getElementsByClassName("userGuessForm");
// const userguessInput = document.getElementsByClassName("userGuess");

// userGuessForm.addEventListener("submit", function(event){
//   event.preventDefault();

//   let userGuess= userguessInput.value;
//   console.log(userGuess);
// });

//Play 1 selects a card and is replaced by a question. Submit Answer/Pass Button is enabled
async function getQuestions(){
    
    //fetch data from JSON folder 
    const response = await fetch("\placeholder-questions.json");
    //console.log(response);

    //proces data as JSON
    let json = await response.json();
    console.log(json);
    categoryGrid.textContent = JSON.stringify(json); 
    

//event listener for the divs on the gameboard and replace with questions
let gameCell = document.querySelectorAll('div.griditem');
for (let i = 0; i < gameCell.length; i++) {
  gameCell[i].addEventListener("click", () => {
  gameCell[i].textContent = json.placeholderQuestions[i].question;
})
}

}
getQuestions()

//After Play 1 selects a card, save the number on the card as a variable 

//When a user clicks on Pass Question, Next Player can answer the question and notification are changes to player 2s turn

// When a player submits an answer - While Loop

//If the answer is correct do not advance the player to the next person
//Player gets awarded points that were on the card
//Card is blanked out = empty string 

//If the answer is wrong, subrtact points from the players score
//advance to the next person and let them answer the question 
//If they get the answer right, add points and stay on that persons turn? 

//If no one gets the questions right, the original player gets to choose a new question 

