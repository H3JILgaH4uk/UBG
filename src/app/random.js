// Get random HEX color
const getRndNum = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

// Get random HEX color
const getRndColor = () => {
	const rndColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return rndColor;
};

export { getRndNum, getRndColor };
