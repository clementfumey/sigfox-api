"use strict";


function devices(){};
devices.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id, credentials.username, credentials.password, credentials, callback);
		},
		tokenState: function tokenState(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id +"/token-state", credentials.username, credentials.password, credentials, callback);
		},
		messages: function messages(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id +"/messages", credentials.username, credentials.password, credentials, callback);
		},
		replace: function replace(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devices/bulk/replace", credentials.username, credentials.password, json, credentials, callback);
		},
		edit: function edit(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devices/bulk/edit", credentials.username, credentials.password, json, credentials, callback);
		},
		status: function status(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devices/"+id+"/status/error", credentials.username, credentials.password, credentials, callback);
		},
		networkstate: function networkstate(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devices/"+id+"/networkstate", credentials.username, credentials.password, credentials, callback);
		},
		updateTokenState: function updateTokenState(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/devices/token/forbid-renewal", credentials.username, credentials.password, json, credentials, callback);
		},
		metrics: function messages(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/devices/" + id +"/messages/metrics", credentials.username, credentials.password, credentials, callback);
		}
	}
})();

var devicesAPI = new devices();
module.exports = devicesAPI;
