// wifi-test.js
const artik = require('./artik-sdk');

var wifi = artik.wifi();

var ssid = '<enter a SSID here>';
var pwd = '<passphrase of the SSID>';
var auth = 'WPA2 Personal';

wifi.scan(function(results) {
	console.log("Scan results: " + results);
	
	wifi.connect(ssid, auth, pwd, true, function(error) {
		console.log("Connection result: " + error);
	}, 5000);
});
