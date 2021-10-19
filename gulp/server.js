import sync from 'browser-sync';
import { path, srv } from '../config.js';

const server = (callback) => {
	sync.create().init({
		server: {
			baseDir: srv.path,
		},
		files: [
			path.app.dest,
			path.views.dest,
			path.styles.dest,
			{
				match: `${path.images.dest}/**/*`,
				fn() {
					this.reload();
				},
			},
		],
		port: srv.port,
		open: srv.open,
		notify: srv.notify,
	});

	callback();
};

export default server;
