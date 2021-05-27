#! /usr/bin/env node
/*
 * Mission Control
 *
 * This file starts the server.
 * Everything is setup in here.
 * Modules that start with @ can be required by any other module as they're
 * self-contained without side-effects.
 */

require('module-alias/register');
const config = require('@config');
const argv = require('@helpers/argv');
const logging = require('@helpers/logger');

module.exports = async function start() {
	logging.logConfig(config);
	logging.progress(startMissionControl);
};

async function startMissionControl(progress) {
	const logger = logging.createLogger('Main', 'cyan');
	const eventLogger = logging.createLogger('Event', 'green');

	logger.info(`Starting Mission Control...`);
	progress('Boot Database', 0.01);

	const database = require('@database'); // eslint-disable-line no-unused-vars

	let sessionSecret = database.get('session-secret', null);
	if (!sessionSecret) {
		sessionSecret = uuid();
		database.set('session-secret', sessionSecret);
	}

	progress('load auth', 0.1);

	const initAuth = require('./auth');
	const auth = initAuth(config, database, sessionSecret);

	// Start the state machine
	progress('load sync', 0.2);
	
	const Sync = require('@sync/Sync');
	const sync = new Sync({ permissions: auth.permissions });

	
	progress('load http & socket', 0.3);

	const HTTP = require('./http/HTTP');
	const socket = require('./socket');

	
	progress('start http', 0.4);

	// Initialize the main mission control http server
	const http = new HTTP(sessionSecret, { config, sync, database, auth, logging });
	
	progress('start socket', 0.5);

	// Initialize the socket server
	const io = socket({ sync, database, http, auth }); // eslint-disable-line no-unused-vars

	
	progress('load plugins', 0.75);

	const Plugins = require('./plugins/Plugins');
	const plugins = new Plugins({
		auth,
		http,
		sync,
		database,
		config
	});
	plugins.on('progress', progress);
	
	await plugins.load();

	
	progress('http listen', 0.95);
	
	http.listen();

	// if (config.debug) {
	// 	state.subscribe('*', (event, data) =>
	// 		eventLogger.debug(event, data.actionData || data)
	// 	);
	// }
};


// setTimeout(
// 	() =>
// 		state.invokeAction('VIDEO-QUEUE:PUSH', {
// 			video: {
// 				url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
// 				format: 'm4a'
// 			}
// 		}),
// 	2000
// );
