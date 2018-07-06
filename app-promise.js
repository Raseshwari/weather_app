const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var enAdd = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${enAdd}&key=AIzaSyBmbzm3gv3qx5Y-hgBgwsKhYl8CQkcVauY`;

axios.get(geocodeUrl).then((response) => {
	
	if(response.data.status === 'ZERO_RESULTS'){
			throw new Error("Unable to find that address");
	}

	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/186a3555fdf8565f64e8e3efc2b5ae5c/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);

}).then((response) =>{
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	var time = response.data.currently.time;
	var humidity = response.data.currently.humidity;
	var windspeed = response.data.currently.windSpeed;
	var precipitation = response.data.currently.precipProbability;
	
	console.log(`It's currently ${temperature}, it feels like ${apparentTemperature}!`);
	console.log(`Time: ${time}`);
	console.log(`Precipitation Probability: ${precipitation}`);
	console.log(`Wind Speed: ${windspeed}`);

}).catch((e)=>{
	if(e.code){
		console.log("Unable to connect to API Server");
	}else{
		console.log(e.message);
	}
	
});



