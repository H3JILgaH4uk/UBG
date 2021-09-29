import dom, { vars } from './config';

// Set time
export const setTime = (value) => {
	dom.timer.innerHTML = value;
};

// Get random number
export const getRndNum = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

// Get random HEX color
export const getRndColor = () => {
	const rndColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return rndColor;
};

// Get value from input
export const getInputValue = () => {
	const value = document.querySelector('.time__field').value;

	if (value !== 0 && value.length > 0) {
		vars.inputValue = value;
		screen[1].classList.add('up');
	}
};

// Decrease time (Buttons)
export const decTime = () => {
	if (vars.time === 0) {
		gameEnd();
	} else if (vars.isOver === true) {
		dom.board.innerHTML = '';
		dom.restart.classList.remove('hide');
		gameOver();
	} else {
		let current = --vars.time;
		if (current < 10) {
			current = `0${current}`;
		}
		setTime(`00:${current}`);
	}
};

// Decrease time (Input)
export const decTimeInput = () => {
	if (vars.inputValue === 0) {
		gameEnd();
	} else if (vars.isOver === true) {
		dom.board.innerHTML = '';
		dom.restart.classList.remove('hide');
		gameOver();
	} else {
		let value = --inputValue;

		const seconds = value % 60;
		const secondsInMinutes = (value - seconds) / 60;
		const minutes = secondsInMinutes % 60;
		const hours = (secondsInMinutes - minutes) / 60;

		let current = `${hours}:${minutes}:${seconds}`;

		if (hours < 10 && hours !== 0) {
			current = `0${hours}:${minutes}:${seconds}`;
		} else if (hours === 0 && minutes > 10) {
			current = `${minutes}:${seconds}`;
		} else if (minutes < 10 && seconds > 10) {
			current = `0${minutes}:${seconds}`;
		} else if (seconds < 10) {
			current = `0${minutes}:0${seconds}`;
		}

		setTime(current);
	}
};

// Create circle on a board
export const createRndCircle = () => {
	const circle = document.createElement('div');
	circle.classList.add('circle');

	// Sets dynamic random size and background color
	setInterval(() => {
		const { width, height } = dom.board.getBoundingClientRect();
		const s = getRndNum(10, 60);
		const x = getRndNum(0, width - s);
		const y = getRndNum(0, height - s);

		circle.style.width = `${s}px`;
		circle.style.height = `${s}px`;
		circle.style.top = `${x}px`;
		circle.style.left = `${y}px`;
		circle.style.background = getRndColor();
	}, 1000);

	dom.board.append(circle);
};

// Sets the params when starting the game. (Buttons)
export const gameStart = () => {
	dom.timer.innerHTML = '00:00';
	dom.timer.parentElement.classList.remove('hide');
	dom.board.innerHTML = '';
	vars.isOver = false;
	vars.inter = setInterval(decTime, 1000);
	createRndCircle();
};

// Sets the params when starting the game. (Input)
export const gameStartInput = () => {
	dom.timer.innerHTML = '00:00';
	dom.timer.parentElement.classList.remove('hide');
	dom.board.innerHTML = '';
	isOver = false;
	interInput = setInterval(decTimeInput, 1000);
	createRndCircle();
};

// Sets the params when ending the game.
export const gameEnd = () => {
	dom.timer.parentElement.classList.add('hide');
	dom.board.innerHTML = `<h1>Cчёт <span class='primary'>${vars.score}</span></h1>`;
};

// Sets the params if the game over
export const gameOver = () => {
	dom.timer.parentElement.classList.add('hide');
	dom.board.innerHTML = `<h3 class='game-over__message'>
							<span>Fail (ノಠ益ಠ)ノ彡┻━┻</span>
							<p>You lose :(p>
							<p>Your count: <span>${vars.score}</span></p>
						</h3>`;
	clearInterval(vars.inter);
	clearInterval(vars.interInput);
};

// Sets dynamic color and box shadow
setInterval(() => {
	dom.btn.start.style.color = getRndColor();
	dom.btn.start.style.boxShadow = `0px 0px 30px -5px ${getRndColor()}`;
	dom.btn.restart.style.color = getRndColor();
	dom.btn.restart.style.boxShadow = `0px 0px 30px -5px ${getRndColor()}`;
	dom.board.style.boxShadow = `0px 0px 20px -5px ${getRndColor()}`;
}, 100);

export default setInterval;
