const request = require('request');

var geocodeAddress = (address) => {
	const enAdd = encodeURIComponent(address);

	request({
		//url: 'https://maps.google.com/maps/api/geocode/json?address=416%20Kimball%20Drive%20Rochester&key=AIzaSyBmbzm3gv3qx5Y-hgBgwsKhYl8CQkcVauY',
		url: `https://maps.google.com/maps/api/geocode/json?address=${enAdd}&key=AIzaSyBmbzm3gv3qx5Y-hgBgwsKhYl8CQkcVauY`,
		json: true
	}, (error, response, body) =>{
		if(error){
			console.log("Unable to connect to Google Servers!");
		}else if(body.status === 'ZERO_RESULTS'){
			console.log("Unable to find that address");
		}else if(body.status === 'OK'){
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
		console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;