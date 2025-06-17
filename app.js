let secretNumber;
let max;

function startGame() {
  const maxInput = document.getElementById("maxNum").value;
  max = parseInt(maxInput);

  if (isNaN(max) || max < 1) {
    alert("Please enter a valid max number greater than 0.");
    return;
  }

  secretNumber = Math.floor(Math.random() * max) + 1;

  document.getElementById("displayMax").textContent = max;
  document.getElementById("setup").style.display = "none";
  document.getElementById("guessSection").style.display = "block";
  document.getElementById("message").textContent = "";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess)) {
    message.textContent = "Please enter a number!";
    return;
  }

  if (guess < 1 || guess > max) {
    message.textContent = `Guess must be between 1 and ${max}.`;
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Try again.";
 } else {
  message.textContent = "🎉 Congratulations! You guessed the number!";
  message.style.color = "green";

  // Optional: Add a popup after winning
  setTimeout(() => {
    alert("🎊 Well done! You guessed it right. Starting a new game...");
    // Reset game UI
    document.getElementById("guessSection").style.display = "none";
    document.getElementById("setup").style.display = "block";
    document.getElementById("maxNum").value = "";
    message.style.color = "black";
  }, 500);
}


  document.getElementById("guessInput").value = "";
}
