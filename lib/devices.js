"use strict";
var tools = require('./httpsFunctions');

function devices(){};
devices.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devices/" + id, credentials.username, credentials.password, callback);
		},
		tokenState: function tokenState(id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devices/" + id +"/token-state", credentials.username, credentials.password, callback);
		},
		messages: function messages(id, parameters, credentials, callback) {
			var path = "/api/devices/" + id + "/messages";
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
		replace: function replace(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devices/bulk/replace", credentials.username, credentials.password, json, callback);
		},
		edit: function edit(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devices/bulk/edit", credentials.username, credentials.password, json, callback);
		},
		status: function status(id, parameters, credentials, callback) {
			var path = "/api/devices/" + id + "/status/error";
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
		networkstate: function networkstate(id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devices/"+id+"/networkstate", credentials.username, credentials.password, callback);
		},
		updateTokenState: function updateTokenState(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/devices/token/forbid-renewal", credentials.username, credentials.password, json, callback);
		},
		metrics: function messages(id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/devices/" + id +"/messages/metrics", credentials.username, credentials.password, callback);
		}
	}
})();

var devicesAPI = new devices();
module.exports = devicesAPI;
