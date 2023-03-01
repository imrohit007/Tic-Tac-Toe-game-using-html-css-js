// Define variables
let currentPlayer = "X";
let gameStatus = "";
let moves = 0;

// Define constants
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

// Define game board cells
const cells = document.querySelectorAll("button");

// Define winner section and play again button
const winnerSection = document.getElementById("winner-section");
const winner = document.getElementById("winner");
const playAgainButton = document.getElementById("play-again");

// Add click event listeners to each cell
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    // If the cell is already clicked or the game is over, do nothing
    if (cell.textContent !== "" || gameStatus === "Game Over") {
      return;
    }
    
    // Update the cell's text content with the current player's symbol
    cell.textContent = currentPlayer;
    moves++;
    
    // Check if the current player wins
    if (checkWin()) {
      gameStatus = "Game Over";
      winner.textContent = currentPlayer + " Wins!";
      winnerSection.style.display = "block";
      return;
    }
    
    // Check if it's a tie game
    if (moves === 9) {
      gameStatus = "Game Over";
      winner.textContent = "Tie Game!";
      winnerSection.style.display = "block";
      return;
    }
    
    // Switch to the next player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

// Add click event listener to the play again button
playAgainButton.addEventListener("click", () => {
  // Reset the game board
  cells.forEach(cell => {
    cell.textContent = "";
  });
  // Hide the winner section
  winnerSection.style.display = "none";
  // Reset variables
  currentPlayer = "X";
  gameStatus = "";
  moves = 0;
});

// Function to check if the current player wins
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (cells[a-1].textContent === currentPlayer &&
        cells[b-1].textContent === currentPlayer &&
        cells[c-1].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}
