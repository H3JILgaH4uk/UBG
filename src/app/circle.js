import el, { states } from '../config';
import { getRndNum, getRndColor } from './random';

// Create circle on a board
const createRndCircle = () => {
	const circle = document.createElement('div');
	circle.classList.add('circle');

	// Sets dynamic random size and background color
	setInterval(() => {
		const { width, height } = el.board.getBoundingClientRect();
		const size = getRndNum(10, 60);
		const x = getRndNum(0, width - size);
		const y = getRndNum(0, height - size);

		circle.style.width = `${size}px`;
		circle.style.height = `${size}px`;
		circle.style.top = `${x}px`;
		circle.style.left = `${y}px`;
		circle.style.background = getRndColor();
	}, 1000);

	el.board.append(circle);
};

const boardCircle = el.board.addEventListener('click', (e) => {
	if (e.target.classList.contains('circle')) {
		states.score++;
		e.target.remove();
		createRndCircle();
	} else {
		states.isOver = true;
	}
});

export { createRndCircle };
export { boardCircle };
