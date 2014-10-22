"use strict";
var tools = require('httpsFunctions');

function groups(){};
groups.prototype = (function(){
	return {
		findById: function findById(id, callback) {
			tool.sigfoxHttpsGet('/api/groups/' + id, username, password, callback);
		},
		find: function find(callback) {
			tool.sigfoxHttpsGet('/api/groups', username, password, callback);
		},
		insert: function insert(json, callback) {
			tool.sigfoxHttpsPost("/api/groups/create", username, password, json, callback);
		},
		update: function update(json, callback) {
			tool.sigfoxHttpsPost("/api/groups/edit", username, password, json, callback);
		},
		delete: function (id, callback) {
			var json = {id:id};
			tool.sigfoxHttpsPost("/api/groups/delete", req.session.username, req.session.password, json,callback);
		}
	}
})();

var groupsAPI = new groups();
module.exports = groupsAPI;
