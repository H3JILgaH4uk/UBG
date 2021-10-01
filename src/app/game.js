import el, { states } from '../config';
import { decreaseTime, getInputValue } from './time';
import { createRndCircle } from './circle';

// Sets the params when starting the game. (Buttons)
const gameStart = () => {
	el.timer.innerHTML = '00:00';
	el.timer.parentElement.classList.remove('hide');
	el.board.innerHTML = '';
	states.isOver = false;
	states.interval = setInterval(decreaseTime, 1000);
	createRndCircle();
};

// Sets the params when ending the game.
const gameEnd = () => {
	el.timer.parentElement.classList.add('hide');
	el.board.innerHTML = `<h1>Your score <span class='primary'>${states.score}</span></h1>`;
};

// Sets the params if the game over
const gameOver = () => {
	el.timer.parentElement.classList.add('hide');
	el.board.innerHTML = `<h3 class='game-over__message'><span>Fail (ノಠ益ಠ)ノ彡┻━┻</span><p>You lose :(<p><p>Your score: <span>${states.score}</span></p></h3>`;
	states.score = 0;
	clearInterval(states.interval);
};

const startButtonListener = el.btn.start.addEventListener('click', () => el.screen[0].classList.add('up'));

const restartButtonListener = el.btn.restart.addEventListener('click', () => {
	el.screen[1].classList.remove('up');
	el.restart.classList.add('hide');
});

// Start game when button clicked
const timeListListener = el.timeList.addEventListener('click', (e) => {
	if (e.target.classList.contains('time__btn')) {
		states.time = parseInt(e.target.getAttribute('data-time'));
		el.screen[1].classList.add('up');
		gameStart();
	}
});

// Start game when receiving value from input
const btnTimeListener = el.btn.time.addEventListener('click', () => {
	getInputValue();
	gameStart();
});

export { gameStart };
export { gameEnd };
export { gameOver };
export { startButtonListener };
export { restartButtonListener };
export { timeListListener };
export { btnTimeListener };
