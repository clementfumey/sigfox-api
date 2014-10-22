"use strict";
var callbacks = require('./callbacks');

function deviceTypes(){};
deviceTypes.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tool.sigfoxHttpsGet('/api/devicetypes/' + id, credentials.username, credentials.password, credentials, callback);
		},
		find: function find(credentials, callback) {
			tool.sigfoxHttpsGet('/api/devicetypes', credentials.username, credentials.password, credentials, callback);
		},
		insert: function insert(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/create", credentials.username, credentials.password, json, credentials, callback);
		},
		update: function update(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/edit", credentials.username, credentials.password, json, credentials, callback);
		},
		delete: function (id, credentials, callback) {
			var json = {id:id};
			tool.sigfoxHttpsPost("/api/devicetypes/delete", credentials.username, credentials.password, json,credentials, callback);
		},
		callbacks: callbacks,
		register: function register(id, json, credentials, callback){
			tool.sigfoxHttpsPost("/api/devicetypes/" + id + "/devices/bulk/create", credentials.username, credentials.password, json, credentials, callback);
		},
		listIdPac: function listIdPac (id, credentials, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/id-pac", credentials.username, credentials.password, credentials, callback);
		},
		status: function status (id, credentials, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/status/error", credentials.username, credentials.password, credentials, callback);
		},
		geolocConfig: function  geolocConfig (credentials, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/geolocs-config", credentials.username, credentials.password, credentials, callback);
		},
		messages: function  messages (id, credentials, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/messages", credentials.username, credentials.password, credentials, callback);
		},
		devices: function  devices (id, credentials, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/devices", credentials.username, credentials.password, credentials, callback);
		}
	}
})();

var deviceTypesAPI = new deviceTypes();
module.exports = deviceTypesAPI;
