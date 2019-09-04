const config = require('@config');
const state = require('@state');
const log = require('@helpers/log').logger('Spotify');

const express = require('express');
const queryString = require('querystring');

module.exports = function spotifyAuthRoutes(app, requireAuth) {
	app.get('/spotify/auth', requireAuth(), (req, res) => {
		res.redirect(
			`https://accounts.spotify.com/authorize?${queryString.stringify({
				response_type: 'code',
				client_id: config.spotify.clientId,
				scope: 'user-read-private user-read-email user-read-birthdate user-read-playback-state user-modify-playback-state user-library-read playlist-read-private streaming playlist-modify-public playlist-modify-private user-library-modify ugc-image-upload user-follow-modify user-follow-read',
				redirect_uri: `${config.http.url}/spotify/auth/callback`,
				state: 'whatthefuckisthis'
			})}`
		);
	});

	// Create the callback route for spotify to call.
	// This is called in response to an auth request.
	// The response will contain the auth code used to request access tokens.
	app.get('/spotify/auth/callback', requireAuth(), async (req, res) => {
		const code = req.query.code || null;
		const stateId = req.query.state || null;

		if (stateId === null) {
			log('Authentication failed. State mismatch:', stateId);
			res.status(500).json({
				message: 'State mismatch.'
			});
		} else {
			// Emit event containing auth code so the Spotify service can request access tokens.
			state.emitEvent('spotify:callback', {
				code
			});

			res.json('Logging in');
		}
	});

	// // Create the callback route for spotify to call.
	// // This is called in response to an auth request.
	// // The response will contain the auth code used to request access tokens.
	// app.get('/spotify/auth/access_token', async (req, res) => {
	// 	const code = req.query.code || null;
	// 	const stateId = req.query.state || null;

	// 	if (stateId === null) {
	// 		log('Authentication failed. State mismatch:', stateId);
	// 		res.status(500).json({
	// 			message: 'State mismatch.'
	// 		});
	// 	} else {
	// 		// Emit event containing auth code so the Spotify service can request access tokens.
	// 		state.emitEvent('spotify:callback', {
	// 			code
	// 		});

	// 		res.json('Logging in');
	// 	}
	// });

	app.use(
		'/spotify/player',
		requireAuth(),
		express.static(config.spotify.path)
	);
};