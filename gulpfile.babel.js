import gulp from 'gulp';
import { path } from './config.js';
import clean from './gulp/tasks/clean.js';
import server from './gulp/tasks/server.js';
import { builds, watchers } from './gulp/tasks/tasks.js'

path.setEnv();

export const build = gulp.series(
	clean,
	gulp.parallel(builds)
);

export const watch = gulp.series(
	build,
	server,
	gulp.parallel(watchers)
);