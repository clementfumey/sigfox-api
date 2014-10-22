"use strict";
var callbacks = require('./callbacks');

function deviceTypes(){};
deviceTypes.prototype = (function(){
	return {
		findById: function findById(id, callback) {
			tool.sigfoxHttpsGet('/api/devicetypes/' + id, username, password, callback);
		},
		find: function find(callback) {
			tool.sigfoxHttpsGet('/api/devicetypes', username, password, callback);
		},
		insert: function insert(json, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/create", username, password, json, callback);
		},
		update: function update(json, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/edit", username, password, json, callback);
		},
		delete: function (id, callback) {
			var json = {id:id};
			tool.sigfoxHttpsPost("/api/devicetypes/delete", username, password, json,callback);
		},
		callbacks: callbacks,
		register: function register(id, json, callback){
			tool.sigfoxHttpsPost("/api/devicetypes/" + id + "/devices/bulk/create", username, password, json, callback);
		},
		listIdPac: function listIdPac (id, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/id-pac", username, password, callback);
		},
		status: function status (id, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/status/error", username, password, callback);
		},
		geolocConfig: function  geolocConfig (callback){
			tool.sigfoxHttpsGet("/api/devicetypes/geolocs-config", username, password, callback);
		},
		messages: function  messages (id, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/messages", username, password, callback);
		},
		devices: function  devices (id, callback){
			tool.sigfoxHttpsGet("/api/devicetypes/" + id + "/devices", username, password, callback);
		}
	}
})();

var deviceTypesAPI = new deviceTypes();
module.exports = deviceTypesAPI;
