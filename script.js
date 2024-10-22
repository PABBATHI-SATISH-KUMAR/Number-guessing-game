const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultParagraph = document.getElementById('result');
const scoreParagraph = document.getElementById('score');
const timerParagraph = document.getElementById('timer');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 0;
let timer = 60;
let timerInterval;

guessInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		submitButton.click();
	}
});

timerInterval = setInterval(() => {
	timer--;
	timerParagraph.textContent = `Time remaining: ${timer} seconds`;
	if (timer === 0) {
		resultParagraph.textContent = `Time's up! The secret number was ${secretNumber}. Try again!`;
		clearInterval(timerInterval);
	}
}, 1000);

submitButton.addEventListener('click', () => {
	const guess = parseInt(guessInput.value);
	attempts++;

	if (guess === secretNumber) {
		resultParagraph.textContent = `Congratulations, you guessed the number! It took you ${attempts} attempts.`;
		score += 10 - attempts;
		scoreParagraph.textContent = `Score: ${score}`;
		timerParagraph.textContent = `Time remaining: 0 seconds`;
		clearInterval(timerInterval); // stop the timer when the number is found
	} else if (guess < secretNumber) {
		resultParagraph.textContent = `Your guessed number ${guess} is lesser than the secret number, try again!`;
		if (attempts === 1) {
			resultParagraph.textContent += ` Hint: The secret number is a two-digit number.`;
		} else if (attempts === 2) {
			resultParagraph.textContent += ` Hint: The first digit of the secret number is greater than 5.`;
		} else if (attempts === 3) {
			resultParagraph.textContent += ` Hint: The second digit of the secret number is an even number.`;
		} else if (attempts === 4) {
			resultParagraph.textContent += ` Hint: The sum of the digits of the secret number is greater than 10.`;
		} else if (attempts === 5) {
			resultParagraph.textContent += ` Hint: The secret number is a multiple of 3.`;
		}
	} else {
		resultParagraph.textContent = `Your guessed number ${guess} is greater than the secret number, try again!`;
		if (attempts === 1) {
			resultParagraph.textContent += ` Hint: The secret number is a two-digit number.`;
		} else if (attempts === 2) {
			resultParagraph.textContent += ` Hint: The first digit of the secret number is less than 5.`;
		} else if (attempts === 3) {
			resultParagraph.textContent += ` Hint: The second digit of the secret number is an odd number.`;
		} else if (attempts === 4) {
			resultParagraph.textContent += ` Hint: The sum of the digits of the secret number is less than 10.`;
		} else if (attempts === 5) {
			resultParagraph.textContent += ` Hint: The secret number is not a multiple of 3.`;
		}
	}

	guessInput.value = '';
});