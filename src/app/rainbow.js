import el from '../config';
import { getRndColor } from './random';

// Sets dynamic color and box shadow
const rainbow = setInterval(() => {
	el.btn.start.style.color = getRndColor();
	el.btn.start.style.boxShadow = `0px 0px 30px -5px ${getRndColor()}`;
	el.btn.restart.style.color = getRndColor();
	el.btn.restart.style.boxShadow = `0px 0px 30px -5px ${getRndColor()}`;
	el.board.style.boxShadow = `0px 0px 20px -5px ${getRndColor()}`;
}, 100);

export { rainbow };
