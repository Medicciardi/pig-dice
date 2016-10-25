// Business logic

function pigDice (playerOne, playerTwo) {
this.roll = Math.floor(Math.random() * 10014) +1;
this.currentPlayer = playerOne;
this.currentScore = 0;
};

var roll = Math.floor(Math.random() * 10014) +1;
var score = 0;
var pig = "";
var image;
var score;
var pig;

function rollDice() {
  roll = Math.floor(Math.random() * 10014) +1;

  if (1 <= roll && roll <= 4225) {
    score = 0;
    pig = "Pig Out (Your turn is over. It is now the next person's roll.)";
    image = "BB";
    //end turn;
  } else if (4226 <= roll && roll <= 4710) {
    score = score + 20;
    pig = "Double Razorback";
    image = "RR";
  } else if (4711 <= roll && roll <= 4792) {
    score = score + 20;
    pig = "Double Trotter";
    image = "TT";
  } else if (4793 <= roll && roll <= 4802) {
    score = score + 40;
    pig = "Double Snouter";
    image = "SS";
  } else if (roll === 4803) {
    score = score + 60;
    pig = "Double Leaning Jowler";
    image = "JJ";
  } else if (4804 <= roll && roll <= 7664) {
    score = score + 5;
    pig = "Razorback (plus a useless side pig)";
    image = "BR";
  } else if (7665 <= roll && roll <= 8835) {
    score = score + 5;
    pig = "Trotter (plus a useless side pig)";
    image = "BT";
  } else if (8836 <= roll && roll <= 9226) {
    score = score + 10;
    pig = "Snouter (plus a useless side pig)";
    image = "BS";
  } else if (9227 <= roll && roll <= 9357) {
    score = score + 15;
    pig = "Jowler (plus a useless side pig)";
    image = "BJ";
  } else if (9358 <= roll && roll <= 9753) {
    score = score + 10;
    pig = "Razorback plus Trotter";
    image = "RT";
  } else if (9754 <= roll && roll <= 9886) {
    score = score + 15;
    pig = "Razorback plus Snouter";
    image = "RS";
  } else if (9887 <= roll && roll <= 9931) {
    score = score + 20;
    pig = "Razorback plus Jowler";
    image = "RJ";
  } else if (9932 <= roll && roll <= 9986) {
    score = score + 15;
    pig = "Trotter plus Snouter";
    image = "TS";
  } else if (9987 <= roll && roll <= 10005) {
    score = score + 20;
    pig = "Trotter plus Jowler";
    image = "TJ";
  }  else if (10006 <= roll && roll <= 10012) {
    score = score + 25;
    pig = "Snouter plus Jowler";
    image = "SJ";
  } else if (roll === 10013) {
    //currentPlayer.score = 0;
    pig = "Oinker (You have gone bankrupt! It is now the next player's turn.)";
    image = "OK";
    //End turn
  } else if (roll === 10014) {
    pig = "Piggy Back (Pigs don't do that! You Lose and the game is over.)";
    image = "PB";
    //End game. Display winner
  };
};






// User interface logic
$().ready(function() {
  $("button#roll-dice").click(function(event) {
    event.preventDefault();
    rollDice();
    console.log(score);
    console.log(pig);
    console.log(image);
    console.log(roll);
    // run rollDice
    // Jquery display pig variable and image variables

  });
});
