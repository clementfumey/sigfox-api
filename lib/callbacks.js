"use strict";


function callbacks(){};
callbacks.prototype = (function(){
	return {
		enable: function findById(devicetypeId, id, enable, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/" + id + "/enable?enabled=" + enable , credentials.username, credentials.password, null,credentials, callback);
		},
		find: function find(devicetypeId, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devicetypes/" + devicetypeId + "/callbacks", credentials.username, credentials.password, credentials, callback);
		},
		insert: function insert(devicetypeId, json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/new", credentials.username, credentials.password, json, credentials, callback);
		},
		delete: function (devicetypeId, id, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/" + id + "/delete", req.session.credentials.username, req.session.credentials.password, null,credentials, callback);
		}
	}
})();

var callbacksAPI = new callbacks();
module.exports = callbacksAPI;
