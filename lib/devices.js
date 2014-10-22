"use strict";


function devices(){};
devices.prototype = (function(){
	return {
		findById: function findById(id, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id, username, password, callback);
		},
		tokenState: function tokenState(id, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id +"/token-state", username, password, callback);
		},
		messages: function messages(id, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id +"/messages", username, password, callback);
		},
		replace: function replace(json, callback) {
			tool.sigfoxHttpsPost("/api/devices/bulk/replace", username, password, json, callback);
		},
		edit: function edit(json, callback) {
			tool.sigfoxHttpsPost("/api/devices/bulk/edit", username, password, json, callback);
		},
		status: function status(id, callback) {
			tool.sigfoxHttpsGet("/api/devices/"+id+"/status/error", username, password, callback);
		},
		networkstate: function networkstate(id, callback) {
			tool.sigfoxHttpsGet("/api/devices/"+id+"/networkstate", username, password, callback);
		},
		updateTokenState: function updateTokenState(json, callback) {
			tool.sigfoxHttpsPost("/api/devices/token/forbid-renewal", username, password, json, callback);
		},
		metrics: function messages(id, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id +"/messages/metrics", username, password, callback);
		}
	}
})();

var devicesAPI = new devices();
module.exports = devicesAPI;
