import './style.css';
import img from "./img/goblin.png";

const BOARD_SIZE = 16;
const board = document.getElementById('board');

for (let i = 0; i < BOARD_SIZE; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.id = i;
    board.append(cell);
}


const goblin = document.createElement('img');
goblin.src = img;
goblin.classList.add('character-img');


let currentIndex = -1;

function moveGoblin() {
    let nextIndex;
    
    do {
        nextIndex = Math.floor(Math.random() * BOARD_SIZE);
    } while (nextIndex === currentIndex);

    currentIndex = nextIndex;

    const targetCell = board.children[nextIndex];
    targetCell.append(goblin);
}


let gameIntervalId = null;

function startGame() {
    gameIntervalId = setInterval(moveGoblin, 1000);
}

function stopGame() {
    if (gameIntervalId) {
        clearInterval(gameIntervalId);
        gameIntervalId = null;
        console.log("Игра остановлена, память не утекает!");
    }
}

startGame();