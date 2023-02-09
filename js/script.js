'use strict';

const elementScore1 = document.querySelector('#score--1');
const elementScore2 = document.querySelector('#score--2');

const elementCurrent1 = document.querySelector('#current--1');
const elementCurrent2 = document.querySelector('#current--2');

const elementDice = document.querySelector('#dice');

const newGameBtn = document.querySelector('#btnNewGame');
const rollBtn = document.querySelector('#btnRoll');
const holdBtn = document.querySelector('#btnHold');

function resetGame() {
	elementScore1.textContent = 0;
	elementScore2.textContent = 0;
	elementCurrent1.textContent = 0;
	elementCurrent2.textContent = 0;
	elementDice.classList.add('hidden');
}

function initializePage() {
	console.log(1);
	resetGame();
	console.log(1);
}

initializePage();

newGameBtn.addEventListener('click', setNewGame);

function setNewGame() {
	initializePage();
}

rollBtn.addEventListener('click');
