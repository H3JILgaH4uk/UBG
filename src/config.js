const el = {
	screen: document.querySelectorAll('.screen'),
	btn: {
		start: document.querySelector('.screen__start'),
		restart: document.querySelector('.game-over__restart'),
		time: document.querySelector('.time__field-btn'),
	},
	restart: document.querySelector('.game-over'),
	timeList: document.querySelector('.time__list'),
	field: document.querySelector('.field'),
	timer: document.querySelector('.screen__timer'),
	hasFocus: document.querySelector('.time__field'),
	board: document.querySelector('.screen__board'),
	circle: document.querySelector('.circle'),
};

export let states = {
	time: 0,
	score: 0,

	inputValue: '',
	isOver: false,
	interval: '',
};

export default el;
