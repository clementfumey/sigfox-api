"use strict";
var tools = require('./httpsFunctions');

function groups(){};
groups.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback){
			tools.sigfoxHttpsGet("/api/groups/" + id, credentials.username, credentials.password, callback);
		},
		find: function find(credentials, callback){
			tools.sigfoxHttpsGet("/api/groups", credentials.username, credentials.password, callback);
		},
		insert: function insert(json, credentials, callback){
			tools.sigfoxHttpsPost("/api/groups/create", credentials.username, credentials.password, json, callback);
		},
		update: function update(json, credentials, callback){
			tools.sigfoxHttpsPost("/api/groups/edit", credentials.username, credentials.password, json, callback);
		},
		delete: function (id, credentials, callback){
			var json = {id:id};
			tools.sigfoxHttpsPost("/api/groups/delete", credentials.username, credentials.password, json, callback);
		}
	}
})();

var groupsAPI = new groups();
module.exports = groupsAPI;
