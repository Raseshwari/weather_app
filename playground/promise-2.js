const request = require('request');
var geocodeAddress = (address) => {

	return new Promise((resolve, reject) => {
		const enAdd = encodeURIComponent(address);

		request({
			//url: 'https://maps.google.com/maps/api/geocode/json?address=416%20Kimball%20Drive%20Rochester&key=AIzaSyBmbzm3gv3qx5Y-hgBgwsKhYl8CQkcVauY',
			url: `https://maps.google.com/maps/api/geocode/json?address=${enAdd}&key=AIzaSyBmbzm3gv3qx5Y-hgBgwsKhYl8CQkcVauY`,
			json: true
		}, (error, response, body) =>{
			if(error){
				reject("Unable to connect to Google Servers!");
			}else if(body.status === 'ZERO_RESULTS'){
				reject("Unable to find that address");
			}else if(body.status === 'OK'){
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				});
			}
		});
	});
};

geocodeAddress("000000").then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});