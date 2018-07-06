// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) =>{
// 	if(errorMessage){
// 		console.log(errorMessage);
// 	}else{
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

//186a3555fdf8565f64e8e3efc2b5ae5c

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/186a3555fdf8565f64e8e3efc2b5ae5c/43.0811041,-77.68308859999999',
	json: true

}, (error, response, body) => {
	if(!error && response.statusCode === 200){
	console.log(`Temperature: ${body.currently.temperature}`);
	}else{
		console.log("Unable to fetch weather");
	}
});