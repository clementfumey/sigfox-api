"use strict";


function contracts(){};
contracts.prototype = (function(){
	return {
		findById: function findById(id, credentials, callback) {
			tool.sigfoxHttpsGet("/api/contracts/" + id, credentials.username, credentials.password, credentials, callback);
		},
		find: function find(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/contracts", credentials.username, credentials.password, json, credentials, callback);
		},
		rating: function rating(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/contracts/" + id + "/rating", credentials.username, credentials.password, json, credentials, callback);
		},
		ratingDetailed: function ratingDetailed(json, credentials, callback) {
			tool.sigfoxHttpsPost("/api/contracts/" + id + "/rating/detailed", credentials.username, credentials.password, json, credentials, callback);
		}
	}
})();

var contractsAPI = new contracts();
module.exports = contractsAPI;
