const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const wapp = require('./test-promise');
var bodyParser = require('body-parser');


//setting heroku and default port
const port = process.env.PORT || 3000;

var app = express();

//using handlebars i.e., set handlebars
app.set('view engine','hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Route handlers
app.get('/', (req, res) => {
	res.render('home.hbs');
});

//POST method route
app.post('/', function (req, res) {
  console.log(req.body.city);
  wapp.getTemp(req.body.city);
  var info = wapp.readTemp();
  res.render('results.hbs', {
  	temp: info.temp,
  	atemp: info.atemp,
  	time: info.time,
  	hum: info.hum,
  	windspeed: info.windspeed,
  	precipitation: info.precipitation
  });
});

app.get('/results', (req,res) => {
	res.send('Search page');
});

//binding app to machine
app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});

