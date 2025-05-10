const moves = ["Rock", "Paper", "Scissors"];

function play(userChoice) {
  const cmpChoice = Math.floor(Math.random() * 3);

  const resultDisplay = document.getElementById("result");
  let result = "";

  if (userChoice === cmpChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 0 && cmpChoice === 2) ||
    (userChoice === 1 && cmpChoice === 0) ||
    (userChoice === 2 && cmpChoice === 1)
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  resultDisplay.innerHTML = `
    You chose: <strong>${moves[userChoice]}</strong><br>
    Computer chose: <strong>${moves[cmpChoice]}</strong><br>
    <span>${result}</span>
  `;
}
