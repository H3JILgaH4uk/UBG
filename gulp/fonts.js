import gulp from 'gulp';
import plumber from 'gulp-plumber';
import woff from 'gulp-ttf2woff2';
import { path } from '../config.js';

const fontBuild = () => gulp.src(path.fonts.src).pipe(plumber()).pipe(woff()).pipe(gulp.dest(path.fonts.dest));

export const fontsBuild = gulp.parallel(fontBuild);
export const fontsWatch = () => {
	gulp.watch(path.fonts.watch, fontBuild);
};
