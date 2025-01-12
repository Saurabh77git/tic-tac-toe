// Get the elements
let cells = document.querySelectorAll('.cell');
let resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameOver = false;

// Function to handle cell click
function handleCellClick(event) {
    if (gameOver) return;
    let cell = event.target;
    if (cell.innerText !== '') return;

    cell.innerText = currentPlayer;
    checkForWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check for win
function checkForWin() {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        let cell1 = cells[combination[0]];
        let cell2 = cells[combination[1]];
        let cell3 = cells[combination[2]];

        if (cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText && cell1.innerText !== '') {
            alert(`Player ${cell1.innerText} wins!`);
            gameOver = true;
            return;
        }
    }

    // Check for tie
    let tie = true;
    for (let cell of cells) {
        if (cell.innerText === '') {
            tie = false;
            break;
        }
    }

    if (tie) {
        alert('It\'s a tie!');
        gameOver = true;
    }
}

// Function to reset game
function resetGame() {
    currentPlayer = 'X';
    gameOver = false;
    for (let cell of cells) {
        cell.innerText = '';
    }
}

// Add event listeners to cells
for (let cell of cells) {
    cell.addEventListener('click', handleCellClick);
}

// Add event listener to reset button
resetButton.addEventListener('click', resetGame);


