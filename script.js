document.getElementById("rock").onclick = rockPlayed;
document.getElementById("paper").onclick = paperPlayed;
document.getElementById("scissors").onclick = scissorsPlayed;

let userScore = 0;
let botScore = 0;

function rockPlayed() {
  play("rock");
}
function paperPlayed() {
  play("paper");
}
function scissorsPlayed() {
  play("scissors");
}

function play(userPlay) {
  botPlay = getbotPlay();

  document.getElementById("message").innerHTML =
    "<p>You played <strong>" +
    userPlay +
    "</strong>. The bot played <strong>" +
    botPlay +
    "</strong>.</p>";

  if (userPlay == "rock") {
    if (botPlay == "rock") {
      document.getElementById("message").innerHTML += "<p>You tied. :|</p>";
    } else if (botPlay == "paper") {
      document.getElementById("message").innerHTML += "<p>You lose. :(</p>";
      botScore++;
    } else if (botPlay == "scissors") {
      document.getElementById("message").innerHTML += "<p>You win! :)</p>";
      userScore++;
    }
  } else if (userPlay == "paper") {
    if (botPlay == "rock") {
      document.getElementById("message").innerHTML += "<p>You win! :)</p>";
      userScore++;
    } else if (botPlay == "paper") {
      document.getElementById("message").innerHTML += "<p>You tied. :|</p>";
    } else if (botPlay == "scissors") {
      document.getElementById("message").innerHTML += "<p>You lose. :(</p>";
      botScore++;
    }
  } else if (userPlay == "scissors") {
    if (botPlay == "rock") {
      document.getElementById("message").innerHTML += "<p>You lose. :(</p>";
      botScore++;
    } else if (botPlay == "paper") {
      document.getElementById("message").innerHTML += "<p>You win! :)</p>";
      userScore++;
    } else if (botPlay == "scissors") {
      document.getElementById("message").innerHTML += "<p>You tied. :|</p>";
    }
  }

  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("botScore").innerHTML = botScore;
}

function getbotPlay() {
  var plays = ["rock", "paper", "scissors"];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

function getUserGuess() {
  var userGuess = document.getElementById("userGuess").value;
  return userGuess;
}

function getWinner() {
  if (userScore == 10) {
    document.getElementById("guessMessage").innerHTML =
      "<p>You guess right!</p>";
  } else if (botScore == 10) {
    document.getElementById("guessMessage").innerHTML =
      "<p>You guess right!</p>";
  }
}
