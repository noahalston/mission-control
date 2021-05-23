/*
 * ### Sync – The heart of mission-control
 *
 * Sync is the main logic of mission control. It hosts the global event loop and
 * is responsible for managing state and synchronising it with connected clients.
 * The state can include like system information, HomeKit devices or anything 
 * plugins wish to make available to all clients.
 *
 * The event loop holds two types of event:
 *  - base-event
 * 	- request
 *
 * A base-event handles like any other event. 
 * It will be called but won't want any response back.
 * Event handlers will be called asynchronously and no error is thrown if an
 * event doesn't have a listener.
 *
 * A request is an event that will expect a response.
 * If no event handler can be found or an error occurs in one of them,
 * the response will be an error object which clients can handle accordingly.
 *
 * **Note**: the sync engine does NOT send request events to other clients.
 * These events get filtered out, so request information leaks.
 * However, all base-events are broadcasted to all connected clients.
 *
 * When the State is changed, a `state:updated` base-event is invokeed,
 * with the changed state inside.
 * **Note**: There currently is no validation in state updates to detect data corruption
 * for example by events arriving out of sync. So far this has not led to any problems,
 * but these could definitely occur if enough users or actions get executed silmutaneously.
 * This should be looked at in the future @todo.
 *
 * To change the state, a `setState` function is exposed which is a bit like React's.
 * It takes one argument, the updated state, and will run `Object.assign` to the current
 * state to only update changed values.
 * **Note**: Bear in mind, that this only works one level deep.
 *
 * So you'll still need to do this:
 * ```js
 * setState({
 * 		myPlugin: {
 * 			...myPlugin,
 * 			change: 'bla'
 * 		}
 * });
 * ```
 */

const autoBind = require('auto-bind');

const Logger = require('@helpers/logger');
const UserError = require('@helpers/UserError');
const Service = require('./Service');



/**
 * Sync is the main thing
 */
class Sync {
	constructor() {
		/**
		 * The services that sync manages
		 * @type {Object.<string, Service>}
		 */
		this.services = {
			'core': new Service('core')
		};

		this.logger = Logger.createLogger('Sync', 'blueBright');

		autoBind(this);
	}

	/**
	 * Create a service and add it to Sync
	 * 
	 * @param  {string} name Service name / identifier
	 * @return {Service}     The service
	 */
	createService(name) {
		if (name in this.services) {
			throw new Error(`Service ${name} already exists`);
		}

		this.services[name] = new Service(name);

		return this.services[name];
	}

	/**
	 * Get a service
	 * @param  {string}  name  Service name / identifier
	 * @return {ServiceAPI}   
	 */
	service(name) {
		if (!(name in this.services)) {
			throw new UserError(`Unknown service ${service}`, 404);
		}

		const service = this.services[name];

		/**
		 * Consume a service – listen to updates and invoke actions
		 * @typedef {ServiceAPI}
		 */
		const serviceAPI = {
			/**
			 * Invoke an action on the service
			 * @type {Service~handleAction} 
			 */
			invoke: service.invokeAction,

			/**
			 * Subscribe to service state changes
			 * @type {Service~subscribe} 
			 */
			subscribe: service.subscribe
		};

		return serviceAPI;
	}

	/**
	 * Invoke an action
	 * @param  {string}               fullActionName        Full action name containing service and action ('service:action')
	 * @param  {object}               data                  Action data
	 * @param  {Permissions.UserRole} [userRole = 'system'] The user role
	 * @returns {object}                                    The data returned by the action
	 */
	async invokeAction(fullActionName, data, userRole = 'system') {
		const parts = fullActionName.split(':');
		const serviceName = parts[0];
		
		const actionNamePart = parts.slice(1, parts.length);
		const name = actionName.join(':');

		if (!serviceName || actionNamePart.length === 0) {
			throw new UserError(`Invalid action ${fullActionName}`, 400);
		}

		logger.debug(`service: ${serviceName} action: ${name}`, data);

		const service = this.service(serviceName);
		return await service.invoke(name, data, userRole);
	}

	/**
	 * Get the state of all services
	 * 
	 * @example const notificationsState = sync.getState().notifications || sync.getState('notifications');
	 * 
	 * @param  {string}  [serviceName]  Optional service name. If passed, only that service's state gets retured
	 * @return {object}                 State object with service names as keys or state for service with service name.
	 */
	getState() {
		if (serviceName) {
			const service = this.service(serviceName);
		} else {

		}
	}
}

module.exports = Sync;