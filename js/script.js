const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.innerHTML === '') {
      cell.innerHTML = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Byter spelare
    }
  });
});
