var express = require('express');
var app = express();

var monk = require('monk');
var db = monk('localhost:27017/workshop');

var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});

// GET method route
app.get('/heading', function (req, res) {
	console.log("Get request heading");
	var collection = db.get('test');
	collection.find("", "", function (e, data) {
		res.send(data[0].heading);
	})
});

// GET method route
app.get('/subheading', function (req, res) {
	console.log("Get request subheading");
	var collection = db.get('test');
	collection.find("", "", function (e, data) {
		res.send(data[0].subheading);
	})
});
// POST method route
app.post('/', function (req, res) {
	res.send('POST request to the homepage');
});
