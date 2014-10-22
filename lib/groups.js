"use strict";
var tools = require('httpsFunctions');

function groups(){};
groups.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tool.sigfoxHttpsGet('/api/groups/' + id, credentials.username, credentials.password, credentials, callback);
		},
		find: function find(credentials, callback) {
			tool.sigfoxHttpsGet('/api/groups', credentials.username, credentials.password, credentials, callback);
		},
		insert: function insert(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/groups/create", credentials.username, credentials.password, json, credentials, callback);
		},
		update: function update(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/groups/edit", credentials.username, credentials.password, json, credentials, callback);
		},
		delete: function (id, credentials, callback) {
			var json = {id:id};
			tool.sigfoxHttpsPost("/api/groups/delete", req.session.credentials.username, req.session.credentials.password, json,credentials, callback);
		}
	}
})();

var groupsAPI = new groups();
module.exports = groupsAPI;
