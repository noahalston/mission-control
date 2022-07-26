const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const addTrailingSlashMiddleware = require('@helpers/add-trailing-slash-middleware');

module.exports = function dashboardRoutes(app, { config, auth }) {
	const dashboardHtmlPath = path.resolve(__dirname, '../../views/dashboard.html');

	function renderDashboard(mobile = false, generateAPIToken) {
		return async (req, res) => {
			const dashboardHtml = String(await fs.readFile(dashboardHtmlPath))
				.replace(/{{SERVER_REPLACE_URL}}/gm, config.http.url);

			// HTML for the mobile dashboard (uses JS optimized for old iOS Safari)
			const dashboardHtmlMobile = dashboardHtml
				.replace(/index\.js/gm, 'mobile.js')
				.replace('<!--DELETE-MOBILE', '')
				.replace('DELETE-MOBILE-->', '');

			const html = (mobile ? dashboardHtmlMobile : dashboardHtml)
				.replace(/{{SERVER_REPLACE_API_KEY}}/gm, generateAPIToken(req.user))
				.replace(/{{SERVER_REPLACE_USER_JSON}}/, JSON.stringify({ ...req.user, password: undefined }))
				.replace(/{{SERVER_REPLACE_DASHBOARD_DATA}}/, await req.getComponentsHtml())
				.replace(/{{SERVER_REPLACE_PAGES_JSON}}/, req.getPagesJson())
				.replace(/{{SERVER_REPLACE_COMPONENTS_DICT}}/, req.getComponents())
				.replace(/{{SERVER_REPLACE_THEME}}/, req.dashboard.theme)
				.replace(/{{SERVER_REPLACE_THEME_BACKGROUND}}/, req.dashboard.themeBackground);

			res.set('Content-Type', 'text/html').send(html);
		};
	}

	// Dashboard HTML routes
	app.get('/', auth.middleware.requireAuthentication, renderDashboard(false, auth.tokens.generate));
	app.get('/mobile', addTrailingSlashMiddleware, auth.middleware.requireAuthentication, renderDashboard(true, auth.tokens.generate));

	// Redirect old dashboard routes
	app.get('/dashboard', auth.middleware.requireAuthentication, (req, res) => res.redirect('/'));
	app.get('/dashboard/mobile', auth.middleware.requireAuthentication, (req, res) => res.redirect('/mobile'));

	// JS & CSS Assets
	app.use('/assets', express.static(config.dashboard.path));
	app.use('/resources', express.static(path.resolve(__dirname, '../../../resources')));

	app.use('/apple-splash', express.static(path.resolve(__dirname, '../../../resources/apple-splash')));

	app.get('/apple-touch-icon.png', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../../../resources/apple-touch-icon.png'));
	});

	app.get('/favicon.png', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../../../resources/favicon.png'));
	});

	return app;
};
