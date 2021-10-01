import el from '../config';

el.hasFocus.addEventListener('focusin', () => {
	el.field.style.border = '2px solid #ff9994';
	el.btn.time.style.background = '#ff9994';
});

el.hasFocus.addEventListener('focusout', () => {
	el.field.style.border = '2px solid #CFD8DC';
	el.btn.time.style.background = '#CFD8DC';
});
