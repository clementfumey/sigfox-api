"use strict";
var tools = require('./httpsFunctions');

function callbacks(){};
callbacks.prototype = (function(){
	return {
		enable: function findById(devicetypeId, id, enable, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/" + id + "/enable?enabled=" + enable , credentials.username, credentials.password, null, callback);
		},
		find: function find(devicetypeId, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devicetypes/" + devicetypeId + "/callbacks", credentials.username, credentials.password, callback);
		},
		insert: function insert(devicetypeId, json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/new", credentials.username, credentials.password, json, callback);
		},
		delete: function (devicetypeId, id, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/" + id + "/delete", req.session.credentials.username, req.session.credentials.password, null, callback);
		}
	}
})();

var callbacksAPI = new callbacks();
module.exports = callbacksAPI;
