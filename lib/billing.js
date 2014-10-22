"use strict";
var tools = require('./httpsFunctions');

function contracts(){};
contracts.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tools.sigfoxHttpsGet("/api/contracts/" + id, credentials.username, credentials.password, callback);
		},
		find: function find(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/contracts", credentials.username, credentials.password, json, callback);
		},
		rating: function rating(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/contracts/" + id + "/rating", credentials.username, credentials.password, json, callback);
		},
		ratingDetailed: function ratingDetailed(json, credentials, callback) {
			tools.sigfoxHttpsPost("/api/contracts/" + id + "/rating/detailed", credentials.username, credentials.password, json, callback);
		}
	}
})();

var contractsAPI = new contracts();
module.exports = contractsAPI;
