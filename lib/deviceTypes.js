"use strict";
var tools = require('./httpsFunctions');
var callbacks = require('./callbacks');

function deviceTypes(){};
deviceTypes.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tools.sigfoxHttpsGet('/api/devicetypes/' + id, credentials.username, credentials.password, callback);
		},
		find: function find(parameters, credentials, callback) {
			var path = "/api/devicetypes";
			if (parameters.includeSubGroups !== undefined)
				path = path + "?includeSubGroups=true";
			tools.sigfoxHttpsGet(path, credentials.username, credentials.password, callback);
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
		status: function status (id, parameters, credentials, callback) {
			var path = "/api/devicetypes/" + id + "/status/error";
			var first = true;
			if (parameters.limit !== undefined){
				path = (first == true)? path + "?limit=" + parameters.limit:path + "&limit=" + parameters.limit;
				first = false
			}
			if (parameters.before !== undefined){
				path = (first == true)? path + "?before=" + parameters.before:path + "&before=" + parameters.before;
				first = false
			}
			if (parameters.since !== undefined){
				path = (first == true)? path + "?since=" + parameters.since:path + "&since=" + parameters.since;
				first = false
			}
			tools.sigfoxHttpsGet(path, credentials.username, credentials.password, callback);
		},
		geolocConfig: function  geolocConfig (credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/geolocs-config", credentials.username, credentials.password, callback);
		},
		messages: function  messages (id, parameters, credentials, callback) {
			var path = "/api/devicetypes/" + id + "/messages";
			var first = true;
			if (parameters.limit !== undefined){
				path = (first == true)? path + "?limit=" + parameters.limit:path + "&limit=" + parameters.limit;
				first = false
			}
			if (parameters.before !== undefined){
				path = (first == true)? path + "?before=" + parameters.before:path + "&before=" + parameters.before;
				first = false
			}
			if (parameters.since !== undefined){
				path = (first == true)? path + "?since=" + parameters.since:path + "&since=" + parameters.since;
				first = false
			}
			tools.sigfoxHttpsGet(path, credentials.username, credentials.password, callback);
		},
		devices: function  devices (id, parameters, credentials, callback) {
			var path = "/api/devicetypes/" + id + "/devices";
			var first = true;
			if (parameters.limit !== undefined){
				path = (first == true)? path + "?limit=" + parameters.limit:path + "&limit=" + parameters.limit;
				first = false
			}
			if (parameters.snr !== undefined){
				path = (first == true)? path + "?snr=" + parameters.snr:path + "&before=" + parameters.snr;
				first = false
			}

			tools.sigfoxHttpsGet(path, credentials.username, credentials.password, callback);
		}
	}
})();

var deviceTypesAPI = new deviceTypes();
module.exports = deviceTypesAPI;
