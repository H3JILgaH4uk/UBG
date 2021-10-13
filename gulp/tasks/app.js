import gulp from 'gulp';
import browserify from 'browserify';
import plumber from 'gulp-plumber';
import vinylStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import { path } from '../../config.js';

export const appBuild = () =>
	browserify(path.app.src, { debug: true })
		.transform('babelify', { presets: ['@babel/preset-env'] })
		.bundle()
		.pipe(plumber())
		.pipe(gulpif(path.isProd, vinylStream('app.js')))
		.pipe(gulpif(path.isProd, vinylBuffer()))
		.pipe(gulpif(path.isProd, gulp.dest(path.app.dest)))
		.pipe(gulpif(path.isProd, uglify()))

		.pipe(gulpif(path.isDev, vinylStream('app.js')))
		.pipe(gulpif(path.isDev, vinylBuffer()))
		.pipe(gulpif(path.isDev, sourcemaps.init({ loadMaps: true })))
		.pipe(gulpif(path.isDev, sourcemaps.write()))

		.pipe(gulp.dest(path.app.dest));

export const appWatch = () => gulp.watch(path.app.watch, appBuild);
