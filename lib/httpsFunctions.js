exports.sigfoxHttpsGet = function (apipath, username, password, callback) {
	var https = require('https');
	
	var options = {
		hostname: "backend.sigfox.com",
		auth: username + ":" + password,
		port: 443,
		path: apipath,
		method: 'GET'
	};

	var req = https.request(options, function(res) {
		var body='';
		res.on('data', function(d) {
			body+=d;
		});
		res.on('end', function() {
			var json = {};
			if (res.statusCode === 200){
				var headers = res.headers;
				if (headers['content-type'] !== undefined){
					if (headers['content-type'].indexOf("application/json") >= 0){
						try {
							json.message = JSON.parse(body);
						} catch (e) {
							console.error("Parsing error:", e);
						}
					}
				}
			}
			if (callback && typeof(callback) === "function") {
				json.statusCode = res.statusCode;
				callback(json);  
			}		
		});
	});
	req.end();

	req.on('error', function(e) {
	  console.error(e);
	});
	
	
};

exports.sigfoxHttpsPost = function (apipath,  username, password, data, callback) {
	var https = require('https');
	
	
	var dataString;
	if (data == null){
		dataString = "";
	}else{
		dataString = JSON.stringify(data);
	}

	var options = {
		hostname: 'backend.sigfox.com',
		auth: username + ":" + password,
		port: 443,
		path: apipath,
		method: 'POST',
		headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': dataString.length
		}
	
	};

	var req = https.request(options, function(res) {
		var body='';
		res.on('data', function(d) {
			body+=d;
		});
		res.on('end', function() {
			var json = {};
			if (res.statusCode === 200){
				var headers = res.headers;
				if (headers['content-type'] !== undefined){
					if (headers['content-type'].indexOf("application/json") >= 0){
						try {
							json.message = JSON.parse(body);
						} catch (e) {
							console.error("Parsing error:", e);
						}
					}
				}
			}
			json.statusCode = res.statusCode;
			if (callback && typeof(callback) === "function") {  
				callback(json);  
			}			

		});
	});
	//req.write(dataString);
	req.end(dataString);
	req.on('error', function(e) {
	  console.error(e);
	});
	
	
};	
