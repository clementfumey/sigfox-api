"use strict";


function callbacks(){};
callbacks.prototype = (function(){
	return {
		enable: function findById(devicetypeId, id, enable, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/" + id + "/enable?enabled=" + enable , username, password, null,callback);
		},
		find: function find(devicetypeId, callback) {
			tool.sigfoxHttpsGet("/api/devicetypes/" + devicetypeId + "/callbacks", username, password, callback);
		},
		insert: function insert(devicetypeId, json, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/new", username, password, json, callback);
		},
		delete: function (devicetypeId, id, callback) {
			tool.sigfoxHttpsPost("/api/devicetypes/" + devicetypeId + "/callbacks/" + id + "/delete", req.session.username, req.session.password, null,callback);
		}
	}
})();

var callbacksAPI = new callbacks();
module.exports = callbacksAPI;
