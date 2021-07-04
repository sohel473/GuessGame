// UI element
let number = document.querySelector('#number');
let submit = document.querySelector('#guess');
let restart = document.querySelector('#restart');
let chance = document.querySelector('#chance');
let hint = document.querySelector('#hint');
let result = document.querySelector('#result');
let chances = 3;
let rightNum;

// event listeners
submit.addEventListener('click', guessGame);
restart.addEventListener('click', restartGame);
document.addEventListener('DOMContentLoaded', startGame);

// functions
function guessGame(e) {
	let guessNum = number.value;

	if (guessNum >= 1 && guessNum <= 10) {
		if (chances >= 1 && chances <= 3) {
			if (rightNum < guessNum) {
				hint.textContent = 'Correct answer is smaller!';
				chances -= 1;
				chance.textContent = chances;
			} else if (rightNum > guessNum) {
				hint.textContent = 'Correct answer is greater!';
				chances -= 1;
				chance.textContent = chances;
			} else if (rightNum == guessNum) {
				gameOver();
				hint.textContent = 'Got it Right!';
				result.textContent = 'You Win!';
			}
		}
		if (chances == 0) {
			gameOver();
			result.textContent = `You Lose! The correct answer is ${rightNum}`;
		}
	} else {
		alert('Pick a number from 1 to 10!');
	}

	console.log(`Right Num ${rightNum}`);
	console.log(`Guess Num ${guessNum}`);
	console.log(`Chances ${chances}`);
	e.preventDefault();
}

function startGame() {
	rightNum = getRandomInt(10);
}

function restartGame() {
	startGame();
	number.value = '';
	chances = 3;
	chance.textContent = chances;
	hint.textContent = '';
	result.textContent = '';
	submit.removeAttribute('disabled');
	number.removeAttribute('readOnly');
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max + 1);
}

function gameOver() {
	submit.setAttribute('disabled', true);
	number.setAttribute('readOnly', true);
}
