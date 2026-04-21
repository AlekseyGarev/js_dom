import './style.css';

console.log('Игра запущена!');

import './style.css';

const BOARD_SIZE = 16;
const board = document.getElementById('board');

for (let i = 0; i < BOARD_SIZE; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.id = i;
    board.appendChild(cell);
}


const goblin = document.createElement('img');
goblin.src = 'https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png';
goblin.classList.add('character-img');


let currentIndex = -1;

function moveGoblin() {
    let nextIndex;
    
    do {
        nextIndex = Math.floor(Math.random() * BOARD_SIZE);
    } while (nextIndex === currentIndex);

    currentIndex = nextIndex;

    const targetCell = board.children[nextIndex];
    targetCell.appendChild(goblin);
}

moveGoblin();

setInterval(moveGoblin, 1000);