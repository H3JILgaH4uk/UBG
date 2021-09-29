import dom, { vars } from './config';
import { gameStart, createRndCircle } from './functions';

dom.btn.time.addEventListener('click', () => {
	getInputValue();
	gameStartInput();
});

dom.btn.start.addEventListener('click', () => dom.screen[0].classList.add('up'));

dom.btn.restart.addEventListener('click', () => {
	dom.screen[1].classList.remove('up');
	dom.restart.classList.add('hide');
});

dom.board.addEventListener('click', (e) => {
	if (e.target.classList.contains('circle')) {
		vars.score++;
		e.target.remove();
		createRndCircle();
	} else {
		vars.isOver = true;
	}
});

dom.timeList.addEventListener('click', (e) => {
	if (e.target.classList.contains('time__btn')) {
		vars.time = parseInt(e.target.getAttribute('data-time'));
		dom.screen[1].classList.add('up');
		gameStart();
	}
});

dom.hasFocus.addEventListener('focusin', () => {
	dom.field.style.border = '2px solid #9142e0';
	dom.btn.time.style.background = '#9142e0';
});

dom.hasFocus.addEventListener('focusout', () => {
	dom.field.style.border = '2px solid #CFD8DC';
	dom.btn.time.style.background = '#CFD8DC';
});
