const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

let winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];

function checkWinner(board) {
    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
}

function isBoardFull(board) {
    return board.every(i => i);
}

function resetGame() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
    document.getElementById('status').textContent = 'Player X\'s turn';
}

function handleCellClick(event) {
    let cell = event.target;
    // let currentPlayer = document.querySelector('.current-player').textContent;

    if (cell.textContent || document.getElementById('status').textContent.includes('wins')) {
        return; // Ignore if cell is already filled or game is over
    }

    cell.textContent = currentPlayer;
    // cell.classList.add(currentPlayer.toLowerCase());

    let board = Array.from(document.querySelectorAll('.cell')).map(cell => cell.textContent);
    let winner = checkWinner(board);

    if (winner) {
        document.getElementById('status').textContent = `Player ${winner} wins!`;
        return;
    }

    if (isBoardFull(board)) {
        document.getElementById('status').textContent = 'It\'s a draw!';
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.querySelector('.current-player').textContent = currentPlayer;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
}

document.addEventListener('DOMContentLoaded', () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    document.getElementById('reset').addEventListener('click', resetGame);

    // Initialize the game
    // document.querySelector('.current-player').textContent = 'X';
    document.getElementById('status').textContent = 'Player X\'s turn';
});
// This code is for a simple Tic Tac Toe game. It initializes the game board, handles


