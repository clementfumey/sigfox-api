"use strict";


function contracts(){};
contracts.prototype = (function(){
	return {
		findById: function findById(id, callback) {
			tool.sigfoxHttpsGet("/api/contracts/" + id, username, password, callback);
		},
		find: function find(json, callback) {
			tool.sigfoxHttpsPost("/api/contracts", username, password, json, callback);
		},
		rating: function rating(json, callback) {
			tool.sigfoxHttpsPost("/api/contracts/" + id + "/rating", username, password, json, callback);
		},
		ratingDetailed: function ratingDetailed(json, callback) {
			tool.sigfoxHttpsPost("/api/contracts/" + id + "/rating/detailed", username, password, json, callback);
		}
	}
})();

var contractsAPI = new contracts();
module.exports = contractsAPI;
