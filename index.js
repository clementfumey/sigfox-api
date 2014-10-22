"use strict";
var groups = require('./lib/groups');
var deviceTypes = require('./lib/deviceTypes');
var devices = require('./lib/devices');
var billing = require('./lib/billing');


function sigfox(){};
sigfox.prototype = (function(){
	return {
		groups: groups,
		deviceTypes: deviceTypes,
		devices: devices,
		billing: billing
	}
})();

var sigfoxAPI = new sigfox();
module.exports = sigfoxAPI;
