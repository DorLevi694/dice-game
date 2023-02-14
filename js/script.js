'use strict';
const elementMain = document.querySelector('#main');

const elementScore1 = document.querySelector('#score--1');
const elementScore2 = document.querySelector('#score--2');

const elementCurrent1 = document.querySelector('#current--1');
const elementCurrent2 = document.querySelector('#current--2');

const elementDice = document.querySelector('#dice');

const newGameBtn = document.querySelector('#btnNewGame');
const rollBtn = document.querySelector('#btnRoll');
const holdBtn = document.querySelector('#btnHold');

let currentScore1 = 0;
let currentScore2 = 0;

let currentPlayer = 1;
let currentResult = 0;
let currentElementScore;
let currentElementCurrent;

function setCurrentPlayer(playerNumber) {
	currentPlayer = playerNumber;
	currentResult = 0;
	elementMain.classList.replace(
		`player-${playerNumber}-active`,
		`player-${3 - playerNumber}-active`
	);
	// player - 1 - active;

	if (playerNumber == 1) {
		currentElementScore = elementScore1;
		currentElementCurrent = elementCurrent1;
	} else {
		currentElementScore = elementScore2;
		currentElementCurrent = elementCurrent2;
	}
}

function resetGame() {
	setCurrentPlayer(1);
	elementScore1.textContent = 0;
	elementScore2.textContent = 0;
	elementCurrent1.textContent = 0;
	elementCurrent2.textContent = 0;

	elementDice.classList.add('hidden');
}

function initializePage() {
	console.log('initializePage');
	resetGame();
}

function setNewGame() {
	console.log('setNewGame');
	initializePage();
}

function rollDice() {
	elementDice.classList.remove('hidden');
	let newDiceNumber = Math.floor(Math.random() * 6) + 1;
	elementDice.src = `./images/dice-${newDiceNumber}.png`;
	elementDice.classList.remove('hidden');
	console.log('newDiceNumber', newDiceNumber);

	if (newDiceNumber == 1) {
		currentElementCurrent.innerText = 0;
		setCurrentPlayer(3 - currentPlayer); // 3 - playerNumber will give the other player
	} else {
		currentResult += newDiceNumber;
		currentElementCurrent.innerText = currentResult;
		if (thereIsWinner()) {
			currentElementScore.innerText =
				currentResult + Number(currentElementScore.innerText);
			alert(`Player ${currentPlayer} is the winner!!!! :):):)`);
		}
	}
}

function holdCurrentResult() {
	if (currentPlayer == 1) {
		currentScore1 += currentResult;
		currentElementScore.innerText = currentScore1;
	} else {
		currentScore2 += currentResult;
		currentElementScore.innerText = currentScore2;
	}
	currentResult = 0;
	if (thereIsWinner()) {
		currentElementScore.innerText =
			currentResult + Number(currentElementScore.innerText);
		alert(`Player ${currentPlayer} is the winner!!!! :):):)`);
	} else {
		currentElementCurrent.innerText = 0;
	}
	setCurrentPlayer(3 - currentPlayer);
}

function thereIsWinner() {
	return currentResult + Number(currentElementScore.innerText) > 100;
}
newGameBtn.addEventListener('click', setNewGame);

rollBtn.addEventListener('click', rollDice);

holdBtn.addEventListener('click', holdCurrentResult);

setNewGame();
