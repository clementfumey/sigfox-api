"use strict";
var tools = require('./httpsFunctions');
var callbacks = require('./callbacks');

function deviceTypes(){};
deviceTypes.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tools.sigfoxHttpsGet('/api/devicetypes/' + id, credentials.username, credentials.password, callback);
		},
		find: function find( credentials, callback) {
			tools.sigfoxHttpsGet('/api/devicetypes', credentials.username, credentials.password, callback);
		},
		insert: function insert(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devicetypes/create", credentials.username, credentials.password, json, callback);
		},
		update: function update(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devicetypes/edit", credentials.username, credentials.password, json, callback);
		},
		delete: function (id, credentials, callback) {
			var json = {id:id};
			tools.sigfoxHttpsPost("/api/devicetypes/delete", credentials.username, credentials.password, json, callback);
		},
		callbacks: callbacks,
		register: function register(id, json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devicetypes/" + id + "/devices/bulk/create", credentials.username, credentials.password, json, callback);
		},
		listIdPac: function listIdPac (id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/" + id + "/id-pac", credentials.username, credentials.password, callback);
		},
		status: function status (id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/" + id + "/status/error", credentials.username, credentials.password, callback);
		},
		geolocConfig: function  geolocConfig (credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/geolocs-config", credentials.username, credentials.password, callback);
		},
		messages: function  messages (id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/" + id + "/messages", credentials.username, credentials.password, callback);
		},
		devices: function  devices (id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/" + id + "/devices", credentials.username, credentials.password, callback);
		}
	}
})();

var deviceTypesAPI = new deviceTypes();
module.exports = deviceTypesAPI;
