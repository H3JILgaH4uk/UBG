//##############################
// Tasks
//##############################
const task = {
	views: true,
	styles: true,
	fonts: true,
	images: false,
	sprites: false,
	favicon: true,
}

//##############################
// Paths
//##############################
const source = 'src';
const compiled = 'build';

const path = {
	src: source,
	dest: compiled,

	app: {
		src: `${source}/app.js`,
		dest: compiled,
		watch: `${source}/**/*.js`,
	},

	views: {
		src: `${source}/views/*.pug`,
		dest: compiled,
		watch: `${source}/views/**/*.pug`,
		emitty: `${source}/views`,
	},

	styles: {
		src: `${source}/styles/main.scss`,
		dest: `${compiled}/styles`,
		watch: `${source}/styles/**/*.scss`,
	},

	fonts: {
		src: `${source}/assets/fonts/**/*.ttf`,
		dest: `${compiled}/assets/fonts`,
		watch: `${source}/assets/fonts/**/*.ttf`,
	},

	images: {
		src: `${source}/assets/images/**/*.{jpg,png,svg,gif,ico,webp}`,
		dest: `${compiled}/assets/images`,
		watch: `${source}/assets/images/**/*.{jpg,png,svg,gif,ico,webp}`,
		webp: `${source}/assets/images/**/*.{jpg,png}`,
	},

	icons: {
		src: {
			mono: `${source}/assets/icons/mono/*.svg`,
			multi: `${source}/assets/icons/multi/*.svg`,
		},
		dest: `${compiled}/assets/images`,
		watch: {
			mono: `${source}/assets/icons/mono/*.svg`,
			multi: `${source}/assets/icons/multi/*.svg`,
		},
	},

	favicon: {
		src: `${source}/assets/favicon/favicon.{jpg,png,svg,gif,ico,webp}`,
		dest: `${compiled}/assets/images/common/`,
		watch: `${source}/assets/favicon/favicon.{jpg,png,svg,gif,ico,webp}`,
	},

	setEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

//##############################
// Server
//##############################
const srv = {
	port: 5500,
	path: path.dest,
	open: false,
	notify: false,
};

//##############################
// Pretty
//##############################
const pretty = {
	indent_size: 4,
	indent_char: ' ',
	unformatted: ['code', 'pre', 'em', 'strong', 'i', 'b', 'br', 'span'],
};

//##############################
// Image quality
//##############################
const quality = {
	jpeg: 80,
	png: [0.8, 0.9],
	webp: 80,
};

//##############################
// Exports
//##############################
export { task };
export { path };
export { srv };
export { pretty };
export { quality };