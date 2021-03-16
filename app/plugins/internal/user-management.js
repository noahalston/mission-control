module.exports = async function layoutInit(APP) {
	const { state, database } = APP;

	/**
	 * @ACTION
	 * Update user object
	 *
	 * @constant USERS:UPDATE-USER
	 * @property {object} user The updated user
	 * @example
	 * state.invoke('USERS:UPDATE-USER', { user: [] })
	 */
	state.addAction(
		'USERS:UPDATE-USER', 
		(state, data) => {

			// TODO: DONT DO THIS, FIGURE OUT HOW TO DO THIS CLEANLY!
			// Events? Private user state?
			database.api.updateUser(data.user);

			return state;
		},
		(data) => (data.user) ? data : false
	);

	/**
	 * @ACTION
	 * Reset the dashboard layout to defaults
	 *
	 * @constant LAYOUT:RESET
	 * @example
	 * state.invoke('LAYOUT:RESET')
	 */
	state.addAction(
		'LAYOUT:RESET', 
		(state, data) => ({
			...state,
			layout: []
		}),
		(data) => true
	);


	const initialLayout = [
		{ x: 0, y: 0, w: 12, h: 2, i: '0', component: 'basic-header', moved: false },
		{ x: 0, y: 8, w: 4, h: 3, i: '1', component: 'links', moved: false },
		{ x: 8, y: 8, w: 4, h: 10, i: '2', component: 'bahn', moved: false },
		{ x: 0, y: 2, w: 12, h: 4, i: '3', component: 'homekitSwitches', moved: false },
		{ x: 0, y: 8, w: 2, h: 7, i: '4', component: 'covid', moved: false }
	];

	const layout = database.get('layout', initialLayout);
	state.invoke('LAYOUT:UPDATE', {
		layout
	});

	state.subscribe('action:LAYOUT:UPDATE', (data) => {
		database.set('layout', data.actionData.layout);
	});

	state.subscribe('action:LAYOUT:RESET', () => {
		database.set('layout', initialLayout);
		state.invoke('LAYOUT:UPDATE', {
			layout: initialLayout
		});
	});

	return {
		internal: true,
		version: '0.0.1',
		description: 'Dashboard Layout Engine'
	};
};