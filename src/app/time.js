import el, { states } from '../config';
import { gameEnd, gameOver } from './game';

// Set time
const setTime = (value) => {
	el.timer.innerHTML = value;
};

// Get value from input
const getInputValue = () => {
	const value = document.querySelector('.time__field').value;

	if (value !== 0 && value.length > 0) {
		states.time = value;
		el.screen[1].classList.add('up');
	}
};

// Decrease time
const decreaseTime = () => {
	if (states.time === 0) {
		gameEnd();
	} else if (states.isOver === true) {
		el.board.innerHTML = '';
		el.restart.classList.remove('hide');
		gameOver();
	} else {
		let value = --states.time;

		const s = value % 60;
		const sInM = (value - s) / 60;
		const m = sInM % 60;
		const h = (sInM - m) / 60;

		let current = `${h}:${m}:${s}`;

		if (h < 10 && h !== 0) {
			current = `0${h}:${m}:${s}`;
		} else if (h === 0 && m > 10) {
			current = `${m}:${s}`;
		} else if (m < 10 && s > 10) {
			current = `0${m}:${s}`;
		} else if (s < 10) {
			current = `0${m}:0${s}`;
		}

		setTime(current);
	}
};

export { setTime };
export { getInputValue };
export { decreaseTime };
